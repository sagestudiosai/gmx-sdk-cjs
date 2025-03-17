"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGetOrdersResponse = exports.buildGetOrdersMulticall = exports.DEFAULT_COUNT = exports.matchByMarket = exports.getExecutionFeeAmountForEntry = exports.getOrderExecutionFee = void 0;
const contracts_1 = require("../../configs/contracts");
const dataStore_1 = require("../../configs/dataStore");
const tokens_1 = require("../../configs/tokens");
const estimateOraclePriceCount_1 = require("../../utils/fees/estimateOraclePriceCount");
const executionFee_1 = require("../../utils/fees/executionFee");
const orders_1 = require("../../utils/orders");
const swapStats_1 = require("../../utils/swapStats");
const viem_1 = require("viem");
const getOrderExecutionFee = (sdk, swapsCount, decreasePositionSwapType, gasLimits, tokensData, gasPrice) => {
    if (!gasLimits || !tokensData || gasPrice === undefined)
        return;
    const estimatedGas = (0, executionFee_1.estimateExecuteDecreaseOrderGasLimit)(gasLimits, {
        decreaseSwapType: decreasePositionSwapType,
        swapsCount: swapsCount ?? 0,
    });
    const oraclePriceCount = (0, estimateOraclePriceCount_1.estimateOrderOraclePriceCount)(swapsCount);
    return (0, executionFee_1.getExecutionFee)(sdk.chainId, gasLimits, tokensData, estimatedGas, gasPrice, oraclePriceCount);
};
exports.getOrderExecutionFee = getOrderExecutionFee;
const getExecutionFeeAmountForEntry = (sdk, entry, gasLimits, tokensData, gasPrice) => {
    if (!entry.txnType || entry.txnType === "cancel")
        return undefined;
    const securedExecutionFee = entry.order?.executionFee ?? 0n;
    let swapsCount = 0;
    const executionFee = (0, exports.getOrderExecutionFee)(sdk, swapsCount, entry.decreaseAmounts?.decreaseSwapType, gasLimits, tokensData, gasPrice);
    if (!executionFee || securedExecutionFee >= executionFee.feeTokenAmount)
        return undefined;
    return executionFee.feeTokenAmount - securedExecutionFee;
};
exports.getExecutionFeeAmountForEntry = getExecutionFeeAmountForEntry;
function matchByMarket({ order, nonSwapRelevantDefinedFiltersLowercased, hasNonSwapRelevantDefinedMarkets, pureDirectionFilters, hasPureDirectionFilters, swapRelevantDefinedMarketsLowercased, hasSwapRelevantDefinedMarkets, marketsInfoData, chainId, }) {
    if (!hasNonSwapRelevantDefinedMarkets && !hasSwapRelevantDefinedMarkets && !hasPureDirectionFilters) {
        return true;
    }
    const isSwapOrder = (0, orders_1.isSwapOrderType)(order.orderType);
    const matchesPureDirectionFilter = hasPureDirectionFilters &&
        (isSwapOrder
            ? pureDirectionFilters.includes("swap")
            : pureDirectionFilters.includes(order.isLong ? "long" : "short"));
    if (hasPureDirectionFilters && !matchesPureDirectionFilter) {
        return false;
    }
    if (!hasNonSwapRelevantDefinedMarkets && !hasSwapRelevantDefinedMarkets) {
        return true;
    }
    if (isSwapOrder) {
        const sourceMarketInSwapPath = swapRelevantDefinedMarketsLowercased.includes(order.swapPath.at(0).toLowerCase());
        const destinationMarketInSwapPath = swapRelevantDefinedMarketsLowercased.includes(order.swapPath.at(-1).toLowerCase());
        return sourceMarketInSwapPath || destinationMarketInSwapPath;
    }
    else if (!isSwapOrder) {
        return nonSwapRelevantDefinedFiltersLowercased.some((filter) => {
            const marketMatch = filter.marketAddress === "any" || filter.marketAddress === order.marketAddress.toLowerCase();
            const directionMath = filter.direction === "any" || filter.direction === (order.isLong ? "long" : "short");
            const initialCollateralAddress = order.initialCollateralTokenAddress.toLowerCase();
            let collateralMatch = true;
            if (!filter.collateralAddress) {
                collateralMatch = true;
            }
            else if ((0, orders_1.isLimitOrderType)(order.orderType)) {
                const wrappedToken = (0, tokens_1.getWrappedToken)(chainId);
                if (!marketsInfoData) {
                    collateralMatch = true;
                }
                else {
                    const { outTokenAddress } = (0, swapStats_1.getSwapPathOutputAddresses)({
                        marketsInfoData,
                        initialCollateralAddress,
                        isIncrease: (0, orders_1.isIncreaseOrderType)(order.orderType),
                        shouldUnwrapNativeToken: order.shouldUnwrapNativeToken,
                        swapPath: order.swapPath,
                        wrappedNativeTokenAddress: wrappedToken.address,
                    });
                    collateralMatch =
                        outTokenAddress !== undefined && (0, viem_1.isAddressEqual)(outTokenAddress, filter.collateralAddress);
                }
            }
            else if ((0, orders_1.isTriggerDecreaseOrderType)(order.orderType)) {
                collateralMatch = (0, viem_1.isAddressEqual)(order.initialCollateralTokenAddress, filter.collateralAddress);
            }
            return marketMatch && directionMath && collateralMatch;
        });
    }
    return false;
}
exports.matchByMarket = matchByMarket;
exports.DEFAULT_COUNT = 1000;
function buildGetOrdersMulticall(chainId, account) {
    return {
        dataStore: {
            contractAddress: (0, contracts_1.getContract)(chainId, "DataStore"),
            abiId: "DataStore",
            calls: {
                count: {
                    methodName: "getBytes32Count",
                    params: [(0, dataStore_1.accountOrderListKey)(account)],
                },
                keys: {
                    methodName: "getBytes32ValuesAt",
                    params: [(0, dataStore_1.accountOrderListKey)(account), 0, exports.DEFAULT_COUNT],
                },
            },
        },
        reader: {
            contractAddress: (0, contracts_1.getContract)(chainId, "SyntheticsReader"),
            abiId: "SyntheticsReader",
            calls: {
                orders: {
                    methodName: "getAccountOrders",
                    params: [(0, contracts_1.getContract)(chainId, "DataStore"), account, 0, exports.DEFAULT_COUNT],
                },
            },
        },
    };
}
exports.buildGetOrdersMulticall = buildGetOrdersMulticall;
function parseGetOrdersResponse(res) {
    const count = Number(res.data.dataStore.count.returnValues[0]);
    const orderKeys = res.data.dataStore.keys.returnValues;
    const orders = res.data.reader.orders.returnValues;
    return {
        count,
        orders: orders.map((order, i) => {
            const key = orderKeys[i];
            const { data } = order;
            const orderData = {
                key,
                account: order.addresses.account,
                receiver: order.addresses.receiver,
                callbackContract: order.addresses.callbackContract,
                marketAddress: order.addresses.market,
                initialCollateralTokenAddress: order.addresses.initialCollateralToken,
                swapPath: order.addresses.swapPath,
                sizeDeltaUsd: BigInt(order.numbers.sizeDeltaUsd),
                initialCollateralDeltaAmount: BigInt(order.numbers.initialCollateralDeltaAmount),
                contractTriggerPrice: BigInt(order.numbers.triggerPrice),
                contractAcceptablePrice: BigInt(order.numbers.acceptablePrice),
                executionFee: BigInt(order.numbers.executionFee),
                callbackGasLimit: BigInt(order.numbers.callbackGasLimit),
                minOutputAmount: BigInt(order.numbers.minOutputAmount),
                updatedAtTime: BigInt(order.numbers.updatedAtTime),
                isLong: order.flags.isLong,
                shouldUnwrapNativeToken: order.flags.shouldUnwrapNativeToken,
                isFrozen: order.flags.isFrozen,
                orderType: order.numbers.orderType,
                decreasePositionSwapType: order.numbers.decreasePositionSwapType,
                autoCancel: order.flags.autoCancel,
                data,
            };
            return orderData;
        }),
    };
}
exports.parseGetOrdersResponse = parseGetOrdersResponse;
