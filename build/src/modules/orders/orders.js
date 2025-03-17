"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const tokens_1 = require("../../configs/tokens");
const orders_1 = require("../../types/orders");
const objects_1 = require("../../utils/objects");
const orders_2 = require("../../utils/orders");
const createDecreaseOrderTxn_1 = require("./transactions/createDecreaseOrderTxn");
const createIncreaseOrderTxn_1 = require("./transactions/createIncreaseOrderTxn");
const utils_1 = require("./utils");
const base_1 = require("../base");
const createSwapOrderTxn_1 = require("./transactions/createSwapOrderTxn");
const createWrapOrUnwrapTxn_1 = require("./transactions/createWrapOrUnwrapTxn");
const cancelOrdersTxn_1 = require("./transactions/cancelOrdersTxn");
class Orders extends base_1.Module {
    async getOrders({ account: _account, marketsInfoData, tokensData, orderTypesFilter = [], marketsDirectionsFilter = [], }) {
        const account = _account || this.account;
        if (!account) {
            return {
                count: 0,
                ordersInfoData: {},
            };
        }
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
            .map((filter) => filter.direction);
        const hasPureDirectionFilters = pureDirectionFilters.length > 0;
        const swapRelevantDefinedMarketsLowercased = marketsDirectionsFilter
            .filter((filter) => (filter.direction === "any" || filter.direction === "swap") && filter.marketAddress !== "any")
            .map((filter) => filter.marketAddress.toLowerCase());
        const hasSwapRelevantDefinedMarkets = swapRelevantDefinedMarketsLowercased.length > 0;
        const orders = await this.sdk
            .executeMulticall((0, utils_1.buildGetOrdersMulticall)(this.chainId, account))
            .then(utils_1.parseGetOrdersResponse);
        const filteredOrders = orders.orders.filter((order) => {
            if (!(0, orders_2.isVisibleOrder)(order.orderType)) {
                return false;
            }
            const matchByMarketResult = (0, utils_1.matchByMarket)({
                order,
                nonSwapRelevantDefinedFiltersLowercased,
                hasNonSwapRelevantDefinedMarkets,
                pureDirectionFilters,
                hasPureDirectionFilters,
                swapRelevantDefinedMarketsLowercased,
                hasSwapRelevantDefinedMarkets,
                chainId: this.chainId,
                marketsInfoData,
            });
            let matchByOrderType = true;
            if (orderTypesFilter.length > 0) {
                matchByOrderType = orderTypesFilter.includes(order.orderType);
            }
            return matchByMarketResult && matchByOrderType;
        });
        const ordersData = filteredOrders?.reduce((acc, order) => {
            acc[order.key] = order;
            return acc;
        }, {});
        const wrappedToken = (0, tokens_1.getWrappedToken)(this.chainId);
        const ordersInfoData = Object.keys(ordersData).reduce((acc, orderKey) => {
            const order = (0, objects_1.getByKey)(ordersData, orderKey);
            const orderInfo = (0, orders_2.getOrderInfo)({
                marketsInfoData,
                tokensData,
                wrappedNativeToken: wrappedToken,
                order,
            });
            if (!orderInfo) {
                // eslint-disable-next-line no-console
                console.warn(`OrderInfo parsing error`, order);
                return acc;
            }
            acc[orderKey] = orderInfo;
            return acc;
        }, {});
        return {
            count: orders.count,
            ordersInfoData,
        };
    }
    async createIncreaseOrder({ isLimit, marketAddress, allowedSlippage, collateralTokenAddress, receiveTokenAddress, fromToken, triggerPrice, referralCodeForTxn, increaseAmounts, collateralToken, createSltpEntries, cancelSltpEntries, updateSltpEntries, marketInfo, isLong, indexToken, marketsInfoData, tokensData, skipSimulation, }) {
        const account = this.account;
        if (!account) {
            throw new Error("Account is not defined");
        }
        const gasLimits = await this.sdk.utils.getGasLimits();
        const gasPrice = await this.sdk.utils.getGasPrice();
        const executionFee = await this.sdk.utils.getExecutionFee("increase", tokensData, {
            increaseAmounts,
        });
        if (!executionFee) {
            throw new Error("Execution fee is not available");
        }
        const { ordersInfoData } = await this.sdk.orders.getOrders({
            marketsInfoData,
            tokensData,
        });
        const orders = Object.values(ordersInfoData || {});
        const positionOrders = orders.filter((order) => (0, orders_2.isOrderForPositionByData)(order, {
            isLong,
            marketAddress,
            account,
            collateralAddress: collateralToken.address,
        }));
        const { autoCancelOrdersLimit } = await this.sdk.positions.getMaxAutoCancelOrders({
            positionOrders,
        });
        const commonSecondaryOrderParams = {
            account,
            marketAddress,
            swapPath: [],
            allowedSlippage,
            initialCollateralAddress: collateralTokenAddress,
            receiveTokenAddress,
            isLong,
            indexToken,
        };
        return (0, createIncreaseOrderTxn_1.createIncreaseOrderTxn)({
            sdk: this.sdk,
            createIncreaseOrderParams: {
                account,
                marketAddress: marketInfo.marketTokenAddress,
                initialCollateralAddress: fromToken?.address,
                initialCollateralAmount: increaseAmounts.initialCollateralAmount,
                targetCollateralAddress: collateralToken.address,
                collateralDeltaAmount: increaseAmounts.collateralDeltaAmount,
                swapPath: increaseAmounts.swapPathStats?.swapPath || [],
                sizeDeltaUsd: increaseAmounts.sizeDeltaUsd,
                sizeDeltaInTokens: increaseAmounts.sizeDeltaInTokens,
                triggerPrice: isLimit ? triggerPrice : undefined,
                acceptablePrice: increaseAmounts.acceptablePrice,
                isLong,
                orderType: isLimit ? orders_1.OrderType.LimitIncrease : orders_1.OrderType.MarketIncrease,
                executionFee: executionFee.feeTokenAmount,
                allowedSlippage,
                referralCode: referralCodeForTxn,
                indexToken: marketInfo.indexToken,
                tokensData,
                skipSimulation: skipSimulation || isLimit,
            },
            createDecreaseOrderParams: createSltpEntries?.map((entry, i) => {
                return {
                    ...commonSecondaryOrderParams,
                    initialCollateralDeltaAmount: entry.decreaseAmounts.collateralDeltaAmount ?? 0n,
                    sizeDeltaUsd: entry.decreaseAmounts.sizeDeltaUsd,
                    sizeDeltaInTokens: entry.decreaseAmounts.sizeDeltaInTokens,
                    acceptablePrice: entry.decreaseAmounts.acceptablePrice,
                    triggerPrice: entry.decreaseAmounts.triggerPrice,
                    minOutputUsd: 0n,
                    decreasePositionSwapType: entry.decreaseAmounts.decreaseSwapType,
                    orderType: entry.decreaseAmounts.triggerOrderType,
                    referralCode: referralCodeForTxn,
                    executionFee: (0, utils_1.getExecutionFeeAmountForEntry)(this.sdk, entry, gasLimits, tokensData, gasPrice) ?? 0n,
                    tokensData,
                    txnType: entry.txnType,
                    skipSimulation: isLimit,
                    autoCancel: i < autoCancelOrdersLimit,
                };
            }),
            cancelOrderParams: cancelSltpEntries?.map((entry) => ({
                ...commonSecondaryOrderParams,
                orderKey: entry.order.key,
                orderType: entry.order.orderType,
                minOutputAmount: 0n,
                sizeDeltaUsd: entry.order.sizeDeltaUsd,
                txnType: entry.txnType,
                initialCollateralDeltaAmount: entry.order?.initialCollateralDeltaAmount ?? 0n,
            })),
            updateOrderParams: updateSltpEntries?.map((entry) => ({
                ...commonSecondaryOrderParams,
                orderKey: entry.order.key,
                orderType: entry.order.orderType,
                sizeDeltaUsd: (entry.increaseAmounts?.sizeDeltaUsd || entry.decreaseAmounts?.sizeDeltaUsd),
                acceptablePrice: (entry.increaseAmounts?.acceptablePrice || entry.decreaseAmounts?.acceptablePrice),
                triggerPrice: (entry.increaseAmounts?.triggerPrice || entry.decreaseAmounts?.triggerPrice),
                executionFee: (0, utils_1.getExecutionFeeAmountForEntry)(this.sdk, entry, gasLimits, tokensData, gasPrice) ?? 0n,
                minOutputAmount: 0n,
                txnType: entry.txnType,
                initialCollateralDeltaAmount: entry.order?.initialCollateralDeltaAmount ?? 0n,
                autoCancel: entry.order.autoCancel,
            })),
        });
    }
    async createDecreaseOrder({ marketsInfoData, tokensData, marketInfo, decreaseAmounts, collateralToken, allowedSlippage, isLong, referralCode, }) {
        const account = this.account;
        if (!account) {
            throw new Error("Account is not defined");
        }
        const executionFee = await this.sdk.utils.getExecutionFee("decrease", tokensData, {
            decreaseAmounts,
        });
        if (!executionFee) {
            throw new Error("Execution fee is not available");
        }
        if (decreaseAmounts?.triggerOrderType === undefined) {
            throw new Error("Trigger order type is not defined");
        }
        const { ordersInfoData } = await this.sdk.orders.getOrders({
            marketsInfoData,
            tokensData,
        });
        const orders = Object.values(ordersInfoData || {});
        const positionOrders = orders.filter((order) => (0, orders_2.isOrderForPositionByData)(order, {
            isLong,
            marketAddress: marketInfo.marketTokenAddress,
            account,
            collateralAddress: collateralToken.address,
        }));
        const { autoCancelOrdersLimit } = await this.sdk.positions.getMaxAutoCancelOrders({
            positionOrders,
        });
        return (0, createDecreaseOrderTxn_1.createDecreaseOrderTxn)(this.sdk, {
            account,
            marketAddress: marketInfo.marketTokenAddress,
            swapPath: [],
            initialCollateralDeltaAmount: decreaseAmounts.collateralDeltaAmount,
            initialCollateralAddress: collateralToken.address,
            receiveTokenAddress: collateralToken.address,
            triggerPrice: decreaseAmounts.triggerPrice,
            acceptablePrice: decreaseAmounts.acceptablePrice,
            sizeDeltaUsd: decreaseAmounts.sizeDeltaUsd,
            sizeDeltaInTokens: decreaseAmounts.sizeDeltaInTokens,
            minOutputUsd: BigInt(0),
            isLong,
            decreasePositionSwapType: decreaseAmounts.decreaseSwapType,
            orderType: decreaseAmounts?.triggerOrderType,
            executionFee: executionFee.feeTokenAmount,
            allowedSlippage,
            referralCode,
            skipSimulation: true,
            indexToken: marketInfo.indexToken,
            tokensData,
            autoCancel: autoCancelOrdersLimit > 0,
        });
    }
    async createSwapOrder({ isLimit, swapAmounts, allowedSlippage, fromToken, toToken, referralCodeForTxn, tokensData, }) {
        const orderType = isLimit ? orders_1.OrderType.LimitSwap : orders_1.OrderType.MarketSwap;
        const executionFee = await this.sdk.utils.getExecutionFee("swap", tokensData, {
            swapAmounts,
        });
        if (!swapAmounts?.swapPathStats || !executionFee) {
            throw new Error("Swap data is not defined");
        }
        return (0, createSwapOrderTxn_1.createSwapOrderTxn)(this.sdk, {
            fromTokenAddress: fromToken.address,
            fromTokenAmount: swapAmounts.amountIn,
            swapPath: swapAmounts.swapPathStats?.swapPath,
            toTokenAddress: toToken.address,
            orderType,
            minOutputAmount: swapAmounts.minOutputAmount,
            referralCode: referralCodeForTxn,
            executionFee: executionFee.feeTokenAmount,
            allowedSlippage,
            tokensData,
        });
    }
    async cancelOrders(orderKeys) {
        return (0, cancelOrdersTxn_1.cancelOrdersTxn)(this.sdk, {
            orderKeys: orderKeys,
        });
    }
    async createWrapOrUnwrapOrder(p) {
        return (0, createWrapOrUnwrapTxn_1.createWrapOrUnwrapTxn)(this.sdk, p);
    }
}
exports.Orders = Orders;
