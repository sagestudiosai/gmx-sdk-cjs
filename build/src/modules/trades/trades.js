"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigNumberify = exports.fetchTradeActions = exports.Trades = void 0;
const tokens_1 = require("../../configs/tokens");
const merge_1 = __importDefault(require("lodash/merge"));
const orders_1 = require("../../types/orders");
const tradeHistory_1 = require("../../types/tradeHistory");
const graphqlFetcher_1 = __importDefault(require("../../utils/graphqlFetcher"));
const objects_1 = require("../../utils/objects");
const orders_2 = require("../../utils/orders");
const subgraph_1 = require("../../utils/subgraph");
const swapStats_1 = require("../../utils/swapStats");
const tokens_2 = require("../../utils/tokens");
const viem_1 = require("viem");
const base_1 = require("../base");
class Trades extends base_1.Module {
    async getTradeHistory(p) {
        const account = this.account;
        const { pageSize, forAllAccounts, fromTxTimestamp, toTxTimestamp, marketsDirectionsFilter, orderEventCombinations, marketsInfoData, pageIndex, tokensData, } = p;
        const data = await fetchTradeActions({
            sdk: this.sdk,
            pageIndex,
            pageSize,
            marketsDirectionsFilter,
            forAllAccounts,
            account,
            fromTxTimestamp,
            toTxTimestamp,
            orderEventCombinations,
            marketsInfoData,
            tokensData,
        });
        return data?.flat().filter(Boolean);
    }
}
exports.Trades = Trades;
async function fetchTradeActions({ sdk, pageIndex, pageSize, marketsDirectionsFilter = [], forAllAccounts, account, fromTxTimestamp, toTxTimestamp, orderEventCombinations, marketsInfoData, tokensData, }) {
    const endpoint = sdk.config.subgraphUrl;
    const chainId = sdk.chainId;
    if (!endpoint) {
        return [];
    }
    const skip = pageIndex * pageSize;
    const first = pageSize;
    const nonSwapRelevantDefinedFiltersLowercased = marketsDirectionsFilter
        .filter((filter) => filter.direction !== "swap" && filter.marketAddress !== "any")
        .map((filter) => ({
        marketAddress: filter.marketAddress.toLowerCase(),
        direction: filter.direction,
        collateralAddress: filter.collateralAddress?.toLowerCase(),
    }));
    const hasNonSwapRelevantDefinedMarkets = nonSwapRelevantDefinedFiltersLowercased.length > 0;
    const pureDirectionFilters = marketsDirectionsFilter
        .filter((filter) => filter.direction !== "any" && filter.marketAddress === "any")
        .map((filter) => ({
        marketAddress: filter.marketAddress.toLowerCase(),
        direction: filter.direction,
    }));
    const hasPureDirectionFilters = pureDirectionFilters.length > 0;
    const swapRelevantDefinedMarketsLowercased = marketsDirectionsFilter
        .filter((filter) => (filter.direction === "any" || filter.direction === "swap") && filter.marketAddress !== "any")
        .map((filter) => filter.marketAddress.toLowerCase());
    const hasSwapRelevantDefinedMarkets = swapRelevantDefinedMarketsLowercased.length > 0;
    const filtersStr = (0, subgraph_1.buildFiltersBody)({
        and: [
            {
                account: forAllAccounts ? undefined : account.toLowerCase(),
                transaction: {
                    timestamp_gte: fromTxTimestamp,
                    timestamp_lte: toTxTimestamp,
                },
            },
            {
                or: !hasPureDirectionFilters
                    ? undefined
                    : pureDirectionFilters.map((filter) => filter.direction === "swap"
                        ? {
                            orderType_in: [orders_1.OrderType.LimitSwap, orders_1.OrderType.MarketSwap],
                        }
                        : {
                            isLong: filter.direction === "long",
                            orderType_not_in: [orders_1.OrderType.LimitSwap, orders_1.OrderType.MarketSwap],
                        }),
            },
            {
                or: [
                    // For non-swap orders
                    {
                        and: !hasNonSwapRelevantDefinedMarkets
                            ? undefined
                            : [
                                {
                                    orderType_not_in: [orders_1.OrderType.LimitSwap, orders_1.OrderType.MarketSwap],
                                },
                                {
                                    or: nonSwapRelevantDefinedFiltersLowercased.map((filter) => ({
                                        marketAddress: filter.marketAddress === "any" ? undefined : filter.marketAddress,
                                        isLong: filter.direction === "any" ? undefined : filter.direction === "long",
                                        // Collateral filtering is done outside of graphql on the client
                                    })),
                                },
                            ],
                    },
                    // For defined markets on swap orders
                    {
                        and: !hasSwapRelevantDefinedMarkets
                            ? undefined
                            : [
                                {
                                    orderType_in: [orders_1.OrderType.LimitSwap, orders_1.OrderType.MarketSwap],
                                },
                                {
                                    or: [
                                        // Source token is not in swap path so we add it to the or filter
                                        {
                                            marketAddress_in: swapRelevantDefinedMarketsLowercased,
                                        },
                                    ].concat(swapRelevantDefinedMarketsLowercased.map((marketAddress) => ({
                                        swapPath_contains: [marketAddress],
                                    })) || []),
                                },
                            ],
                    },
                ],
            },
            {
                or: orderEventCombinations?.map((combination) => {
                    let sizeDeltaUsdCondition = {};
                    if (combination.orderType !== undefined &&
                        [orders_1.OrderType.MarketDecrease, orders_1.OrderType.MarketIncrease].includes(combination.orderType)) {
                        if (combination.isDepositOrWithdraw) {
                            sizeDeltaUsdCondition = { sizeDeltaUsd: 0 };
                        }
                        else {
                            sizeDeltaUsdCondition = { sizeDeltaUsd_not: 0 };
                        }
                    }
                    return (0, merge_1.default)({
                        eventName: combination.eventName,
                        orderType: combination.orderType,
                    }, sizeDeltaUsdCondition);
                }),
            },
            {
                // We do not show create liquidation orders in the trade history, thus we filter it out
                // ... && not (liquidation && orderCreated) === ... && (not liquidation || not orderCreated)
                or: [{ orderType_not: orders_1.OrderType.Liquidation }, { eventName_not: tradeHistory_1.TradeActionType.OrderCreated }],
            },
        ],
    });
    const whereClause = `where: ${filtersStr}`;
    const query = `{
        tradeActions(
            skip: ${skip},
            first: ${first},
            orderBy: transaction__timestamp,
            orderDirection: desc,
            ${whereClause}
        ) {
            id
            eventName

            account
            marketAddress
            swapPath
            initialCollateralTokenAddress

            initialCollateralDeltaAmount
            sizeDeltaUsd
            triggerPrice
            acceptablePrice
            executionPrice
            minOutputAmount
            executionAmountOut

            priceImpactUsd
            priceImpactDiffUsd
            positionFeeAmount
            borrowingFeeAmount
            fundingFeeAmount
            pnlUsd
            basePnlUsd

            collateralTokenPriceMax
            collateralTokenPriceMin

            indexTokenPriceMin
            indexTokenPriceMax

            orderType
            orderKey
            isLong
            shouldUnwrapNativeToken

            reason
            reasonBytes

            transaction {
                timestamp
                hash
            }
        }
      }`;
    const result = await (0, graphqlFetcher_1.default)(endpoint, query);
    const rawTradeActions = result?.tradeActions || [];
    if (!marketsInfoData || !tokensData) {
        return [];
    }
    const wrappedToken = (0, tokens_1.getWrappedToken)(chainId);
    const transformer = createRawTradeActionTransformer(marketsInfoData, wrappedToken, tokensData);
    let tradeActions = rawTradeActions.map(transformer).filter(Boolean);
    const collateralFilterTree = {
        long: {},
        short: {},
    };
    let hasCollateralFilter = false;
    marketsDirectionsFilter.forEach((filter) => {
        if (filter.direction === "any" || filter.direction === "swap" || !filter.collateralAddress) {
            return;
        }
        if (!collateralFilterTree[filter.direction]) {
            collateralFilterTree[filter.direction] = {};
        }
        if (!collateralFilterTree[filter.direction][filter.marketAddress]) {
            collateralFilterTree[filter.direction][filter.marketAddress] = {};
        }
        hasCollateralFilter = true;
        collateralFilterTree[filter.direction][filter.marketAddress][filter.collateralAddress] = true;
    });
    // Filter out trade actions that do not match the collateral filter
    // We do this on the client side because the collateral filtering is too complex to be done in the graphql query
    if (hasCollateralFilter) {
        tradeActions = tradeActions.filter((tradeAction) => {
            // All necessary filters for swaps are already applied in the graphql query
            if ((0, orders_2.isSwapOrderType)(tradeAction.orderType)) {
                return true;
            }
            const positionTradeAction = tradeAction;
            let collateralMatch = true;
            const desiredCollateralAddresses = collateralFilterTree[positionTradeAction.isLong ? "long" : "short"]?.[positionTradeAction.marketAddress];
            if ((0, orders_2.isLimitOrderType)(tradeAction.orderType)) {
                const wrappedToken = (0, tokens_1.getWrappedToken)(chainId);
                if (!marketsInfoData) {
                    collateralMatch = true;
                }
                else {
                    const { outTokenAddress } = (0, swapStats_1.getSwapPathOutputAddresses)({
                        marketsInfoData,
                        initialCollateralAddress: positionTradeAction.initialCollateralTokenAddress,
                        isIncrease: (0, orders_2.isIncreaseOrderType)(tradeAction.orderType),
                        shouldUnwrapNativeToken: positionTradeAction.shouldUnwrapNativeToken,
                        swapPath: tradeAction.swapPath,
                        wrappedNativeTokenAddress: wrappedToken.address,
                    });
                    collateralMatch =
                        outTokenAddress !== undefined && Boolean(desiredCollateralAddresses?.[outTokenAddress]);
                }
            }
            else if ((0, orders_2.isTriggerDecreaseOrderType)(tradeAction.orderType)) {
                collateralMatch = Boolean(desiredCollateralAddresses?.[positionTradeAction.initialCollateralTokenAddress]);
            }
            return collateralMatch;
        });
    }
    return tradeActions;
}
exports.fetchTradeActions = fetchTradeActions;
function createRawTradeActionTransformer(marketsInfoData, wrappedToken, tokensData) {
    return (rawAction) => {
        const orderType = Number(rawAction.orderType);
        if ((0, orders_2.isSwapOrderType)(orderType)) {
            const initialCollateralTokenAddress = (0, viem_1.getAddress)(rawAction.initialCollateralTokenAddress);
            const swapPath = rawAction.swapPath.map((address) => (0, viem_1.getAddress)(address));
            const swapPathOutputAddresses = (0, swapStats_1.getSwapPathOutputAddresses)({
                marketsInfoData,
                swapPath,
                initialCollateralAddress: initialCollateralTokenAddress,
                wrappedNativeTokenAddress: wrappedToken.address,
                shouldUnwrapNativeToken: rawAction.shouldUnwrapNativeToken,
                isIncrease: false,
            });
            const initialCollateralToken = (0, objects_1.getByKey)(tokensData, initialCollateralTokenAddress);
            const targetCollateralToken = (0, objects_1.getByKey)(tokensData, swapPathOutputAddresses.outTokenAddress);
            if (!initialCollateralToken || !targetCollateralToken) {
                return undefined;
            }
            const tradeAction = {
                id: rawAction.id,
                eventName: rawAction.eventName,
                account: rawAction.account,
                swapPath,
                orderType,
                orderKey: rawAction.orderKey,
                initialCollateralTokenAddress: rawAction.initialCollateralTokenAddress,
                initialCollateralDeltaAmount: bigNumberify(rawAction.initialCollateralDeltaAmount),
                minOutputAmount: bigNumberify(rawAction.minOutputAmount),
                executionAmountOut: rawAction.executionAmountOut ? bigNumberify(rawAction.executionAmountOut) : undefined,
                shouldUnwrapNativeToken: rawAction.shouldUnwrapNativeToken,
                targetCollateralToken,
                initialCollateralToken,
                transaction: rawAction.transaction,
                reason: rawAction.reason,
                reasonBytes: rawAction.reasonBytes,
            };
            return tradeAction;
        }
        else {
            const marketAddress = (0, viem_1.getAddress)(rawAction.marketAddress);
            const marketInfo = (0, objects_1.getByKey)(marketsInfoData, marketAddress);
            const indexToken = marketInfo?.indexToken;
            const initialCollateralTokenAddress = (0, viem_1.getAddress)(rawAction.initialCollateralTokenAddress);
            const swapPath = rawAction.swapPath.map((address) => (0, viem_1.getAddress)(address));
            const swapPathOutputAddresses = (0, swapStats_1.getSwapPathOutputAddresses)({
                marketsInfoData,
                swapPath,
                initialCollateralAddress: initialCollateralTokenAddress,
                wrappedNativeTokenAddress: wrappedToken.address,
                shouldUnwrapNativeToken: rawAction.shouldUnwrapNativeToken,
                isIncrease: (0, orders_2.isIncreaseOrderType)(rawAction.orderType),
            });
            const initialCollateralToken = (0, objects_1.getByKey)(tokensData, initialCollateralTokenAddress);
            const targetCollateralToken = (0, objects_1.getByKey)(tokensData, swapPathOutputAddresses.outTokenAddress);
            if (!marketInfo || !indexToken || !initialCollateralToken || !targetCollateralToken) {
                return undefined;
            }
            const tradeAction = {
                id: rawAction.id,
                eventName: rawAction.eventName,
                account: rawAction.account,
                marketAddress,
                marketInfo,
                indexToken,
                swapPath,
                initialCollateralTokenAddress,
                initialCollateralToken,
                targetCollateralToken,
                initialCollateralDeltaAmount: bigNumberify(rawAction.initialCollateralDeltaAmount),
                sizeDeltaUsd: bigNumberify(rawAction.sizeDeltaUsd),
                triggerPrice: rawAction.triggerPrice
                    ? (0, tokens_2.parseContractPrice)(bigNumberify(rawAction.triggerPrice), indexToken.decimals)
                    : undefined,
                acceptablePrice: (0, tokens_2.parseContractPrice)(bigNumberify(rawAction.acceptablePrice), indexToken.decimals),
                executionPrice: rawAction.executionPrice
                    ? (0, tokens_2.parseContractPrice)(bigNumberify(rawAction.executionPrice), indexToken.decimals)
                    : undefined,
                minOutputAmount: bigNumberify(rawAction.minOutputAmount),
                collateralTokenPriceMax: rawAction.collateralTokenPriceMax
                    ? (0, tokens_2.parseContractPrice)(bigNumberify(rawAction.collateralTokenPriceMax), initialCollateralToken.decimals)
                    : undefined,
                collateralTokenPriceMin: rawAction.collateralTokenPriceMin
                    ? (0, tokens_2.parseContractPrice)(bigNumberify(rawAction.collateralTokenPriceMin), initialCollateralToken.decimals)
                    : undefined,
                indexTokenPriceMin: rawAction.indexTokenPriceMin
                    ? (0, tokens_2.parseContractPrice)(BigInt(rawAction.indexTokenPriceMin), indexToken.decimals)
                    : undefined,
                indexTokenPriceMax: rawAction.indexTokenPriceMax
                    ? (0, tokens_2.parseContractPrice)(BigInt(rawAction.indexTokenPriceMax), indexToken.decimals)
                    : undefined,
                orderType,
                orderKey: rawAction.orderKey,
                isLong: rawAction.isLong,
                pnlUsd: rawAction.pnlUsd ? BigInt(rawAction.pnlUsd) : undefined,
                basePnlUsd: rawAction.basePnlUsd ? BigInt(rawAction.basePnlUsd) : undefined,
                priceImpactDiffUsd: rawAction.priceImpactDiffUsd ? BigInt(rawAction.priceImpactDiffUsd) : undefined,
                priceImpactUsd: rawAction.priceImpactUsd ? BigInt(rawAction.priceImpactUsd) : undefined,
                positionFeeAmount: rawAction.positionFeeAmount ? BigInt(rawAction.positionFeeAmount) : undefined,
                borrowingFeeAmount: rawAction.borrowingFeeAmount ? BigInt(rawAction.borrowingFeeAmount) : undefined,
                fundingFeeAmount: rawAction.fundingFeeAmount ? BigInt(rawAction.fundingFeeAmount) : undefined,
                reason: rawAction.reason,
                reasonBytes: rawAction.reasonBytes,
                transaction: rawAction.transaction,
                shouldUnwrapNativeToken: rawAction.shouldUnwrapNativeToken,
            };
            return tradeAction;
        }
    };
}
function bigNumberify(n) {
    try {
        if (n === undefined)
            throw new Error("n is undefined");
        if (n === null)
            throw new Error("n is null");
        return BigInt(n);
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.error("bigNumberify error", e);
        return undefined;
    }
}
exports.bigNumberify = bigNumberify;
