"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderForPositionByData = exports.isOrderForPosition = exports.isVisibleOrder = exports.getOrderInfo = exports.isStopIncreaseOrderType = exports.isLimitIncreaseOrderType = exports.isLimitDecreaseOrderType = exports.isStopLossOrderType = exports.isLiquidationOrderType = exports.isLimitSwapOrderType = exports.isSwapOrderType = exports.isIncreaseOrderType = exports.isDecreaseOrderType = exports.isTriggerDecreaseOrderType = exports.isLimitOrderType = exports.isMarketOrderType = void 0;
const factors_1 = require("../configs/factors");
const orders_1 = require("../types/orders");
const bigmath_1 = require("./bigmath");
const objects_1 = require("./objects");
const positions_1 = require("./positions");
const prices_1 = require("./prices");
const swapStats_1 = require("./swapStats");
const tokens_1 = require("./tokens");
function isMarketOrderType(orderType) {
    return [orders_1.OrderType.MarketDecrease, orders_1.OrderType.MarketIncrease, orders_1.OrderType.MarketSwap].includes(orderType);
}
exports.isMarketOrderType = isMarketOrderType;
function isLimitOrderType(orderType) {
    return [orders_1.OrderType.LimitIncrease, orders_1.OrderType.LimitSwap, orders_1.OrderType.StopIncrease].includes(orderType);
}
exports.isLimitOrderType = isLimitOrderType;
function isTriggerDecreaseOrderType(orderType) {
    return [orders_1.OrderType.LimitDecrease, orders_1.OrderType.StopLossDecrease].includes(orderType);
}
exports.isTriggerDecreaseOrderType = isTriggerDecreaseOrderType;
function isDecreaseOrderType(orderType) {
    return [orders_1.OrderType.MarketDecrease, orders_1.OrderType.LimitDecrease, orders_1.OrderType.StopLossDecrease].includes(orderType);
}
exports.isDecreaseOrderType = isDecreaseOrderType;
function isIncreaseOrderType(orderType) {
    return [orders_1.OrderType.MarketIncrease, orders_1.OrderType.LimitIncrease, orders_1.OrderType.StopIncrease].includes(orderType);
}
exports.isIncreaseOrderType = isIncreaseOrderType;
function isSwapOrderType(orderType) {
    return [orders_1.OrderType.MarketSwap, orders_1.OrderType.LimitSwap].includes(orderType);
}
exports.isSwapOrderType = isSwapOrderType;
function isLimitSwapOrderType(orderType) {
    return orderType === orders_1.OrderType.LimitSwap;
}
exports.isLimitSwapOrderType = isLimitSwapOrderType;
function isLiquidationOrderType(orderType) {
    return orderType === orders_1.OrderType.Liquidation;
}
exports.isLiquidationOrderType = isLiquidationOrderType;
function isStopLossOrderType(orderType) {
    return orderType === orders_1.OrderType.StopLossDecrease;
}
exports.isStopLossOrderType = isStopLossOrderType;
function isLimitDecreaseOrderType(orderType) {
    return orderType === orders_1.OrderType.LimitDecrease;
}
exports.isLimitDecreaseOrderType = isLimitDecreaseOrderType;
function isLimitIncreaseOrderType(orderType) {
    return orderType === orders_1.OrderType.LimitIncrease;
}
exports.isLimitIncreaseOrderType = isLimitIncreaseOrderType;
function isStopIncreaseOrderType(orderType) {
    return orderType === orders_1.OrderType.StopIncrease;
}
exports.isStopIncreaseOrderType = isStopIncreaseOrderType;
function getOrderInfo(p) {
    const { marketsInfoData, tokensData, wrappedNativeToken, order } = p;
    if (isSwapOrderType(order.orderType)) {
        const initialCollateralToken = (0, objects_1.getByKey)(tokensData, order.initialCollateralTokenAddress);
        const { outTokenAddress } = (0, swapStats_1.getSwapPathOutputAddresses)({
            marketsInfoData,
            swapPath: order.swapPath,
            initialCollateralAddress: order.initialCollateralTokenAddress,
            wrappedNativeTokenAddress: wrappedNativeToken.address,
            shouldUnwrapNativeToken: order.shouldUnwrapNativeToken,
            isIncrease: false,
        });
        const targetCollateralToken = (0, objects_1.getByKey)(tokensData, outTokenAddress);
        if (!initialCollateralToken || !targetCollateralToken) {
            return undefined;
        }
        const swapPathStats = (0, swapStats_1.getSwapPathStats)({
            marketsInfoData,
            swapPath: order.swapPath,
            initialCollateralAddress: order.initialCollateralTokenAddress,
            wrappedNativeTokenAddress: wrappedNativeToken.address,
            usdIn: (0, tokens_1.convertToUsd)(order.initialCollateralDeltaAmount, initialCollateralToken.decimals, initialCollateralToken.prices.minPrice),
            shouldUnwrapNativeToken: order.shouldUnwrapNativeToken,
            shouldApplyPriceImpact: true,
        });
        const priceImpactAmount = (0, tokens_1.convertToTokenAmount)(swapPathStats?.totalSwapPriceImpactDeltaUsd, targetCollateralToken.decimals, targetCollateralToken.prices.minPrice);
        const swapFeeAmount = (0, tokens_1.convertToTokenAmount)(swapPathStats?.totalSwapFeeUsd, targetCollateralToken.decimals, targetCollateralToken.prices.minPrice);
        let toAmount;
        let triggerRatio;
        const isLimitSwapOrder = isLimitSwapOrderType(order.orderType);
        if (isLimitSwapOrder) {
            if (order.contractTriggerPrice === 0n) {
                /**
                 * If not stored trigger price in contract, we use the min output amount with default slippage
                 * @see https://app.asana.com/0/1207525044994982/1209109731071143
                 */
                toAmount =
                    order.minOutputAmount -
                        bigmath_1.bigMath.mulDiv(order.minOutputAmount, factors_1.DEFAULT_ALLOWED_SWAP_SLIPPAGE_BPS, factors_1.BASIS_POINTS_DIVISOR_BIGINT);
            }
            triggerRatio = (0, tokens_1.getTokensRatioByMinOutputAmountAndTriggerPrice)({
                fromToken: initialCollateralToken,
                toToken: targetCollateralToken,
                fromTokenAmount: order.initialCollateralDeltaAmount,
                toTokenAmount: toAmount,
                triggerPrice: order.contractTriggerPrice,
                minOutputAmount: order.minOutputAmount,
            });
        }
        else {
            toAmount = order.minOutputAmount - (priceImpactAmount ?? 0n) + (swapFeeAmount ?? 0n);
            triggerRatio = (0, tokens_1.getTokensRatioByAmounts)({
                fromToken: initialCollateralToken,
                toToken: targetCollateralToken,
                fromTokenAmount: order.initialCollateralDeltaAmount,
                toTokenAmount: toAmount,
            });
        }
        const orderInfo = {
            ...order,
            swapPathStats,
            triggerRatio,
            initialCollateralToken,
            targetCollateralToken,
        };
        return orderInfo;
    }
    else {
        const marketInfo = (0, objects_1.getByKey)(marketsInfoData, order.marketAddress);
        const indexToken = marketInfo?.indexToken;
        const initialCollateralToken = (0, objects_1.getByKey)(tokensData, order.initialCollateralTokenAddress);
        const { outTokenAddress } = (0, swapStats_1.getSwapPathOutputAddresses)({
            marketsInfoData,
            swapPath: order.swapPath,
            initialCollateralAddress: order.initialCollateralTokenAddress,
            wrappedNativeTokenAddress: wrappedNativeToken.address,
            shouldUnwrapNativeToken: order.shouldUnwrapNativeToken,
            isIncrease: isIncreaseOrderType(order.orderType),
        });
        const targetCollateralToken = (0, objects_1.getByKey)(tokensData, outTokenAddress);
        if (!marketInfo || !indexToken || !initialCollateralToken || !targetCollateralToken) {
            return undefined;
        }
        const acceptablePrice = (0, tokens_1.parseContractPrice)(order.contractAcceptablePrice, indexToken.decimals);
        const triggerPrice = (0, tokens_1.parseContractPrice)(order.contractTriggerPrice, indexToken.decimals);
        const swapPathStats = (0, swapStats_1.getSwapPathStats)({
            marketsInfoData,
            swapPath: order.swapPath,
            initialCollateralAddress: order.initialCollateralTokenAddress,
            wrappedNativeTokenAddress: wrappedNativeToken.address,
            usdIn: (0, tokens_1.convertToUsd)(order.initialCollateralDeltaAmount, initialCollateralToken.decimals, initialCollateralToken.prices.minPrice),
            shouldUnwrapNativeToken: order.shouldUnwrapNativeToken,
            shouldApplyPriceImpact: true,
        });
        const triggerThresholdType = (0, prices_1.getOrderThresholdType)(order.orderType, order.isLong);
        const orderInfo = {
            ...order,
            swapPathStats,
            marketInfo,
            indexToken,
            initialCollateralToken,
            targetCollateralToken,
            acceptablePrice,
            triggerPrice,
            triggerThresholdType,
        };
        return orderInfo;
    }
}
exports.getOrderInfo = getOrderInfo;
function isVisibleOrder(orderType) {
    return isLimitOrderType(orderType) || isTriggerDecreaseOrderType(orderType) || isLimitSwapOrderType(orderType);
}
exports.isVisibleOrder = isVisibleOrder;
function isOrderForPosition(order, positionKey) {
    const { account, marketAddress, collateralAddress, isLong } = (0, positions_1.parsePositionKey)(positionKey);
    let isMatch = !isSwapOrderType(order.orderType) &&
        order.account === account &&
        order.marketAddress === marketAddress &&
        order.isLong === isLong;
    // For limit orders, we need to check the target collateral token
    if (isLimitOrderType(order.orderType)) {
        const targetCollateralTokenAddress = order.targetCollateralToken.isNative
            ? order.targetCollateralToken.wrappedAddress
            : order.targetCollateralToken.address;
        isMatch = isMatch && targetCollateralTokenAddress === collateralAddress;
    }
    else if (isTriggerDecreaseOrderType(order.orderType)) {
        isMatch = isMatch && order.initialCollateralTokenAddress === collateralAddress;
    }
    return isMatch;
}
exports.isOrderForPosition = isOrderForPosition;
function isOrderForPositionByData(order, { account, marketAddress, collateralAddress, isLong, }) {
    let isMatch = !isSwapOrderType(order.orderType) &&
        order.account === account &&
        order.marketAddress === marketAddress &&
        order.isLong === isLong;
    // For limit orders, we need to check the target collateral token
    if (isLimitOrderType(order.orderType)) {
        const targetCollateralTokenAddress = order.targetCollateralToken.isNative
            ? order.targetCollateralToken.wrappedAddress
            : order.targetCollateralToken.address;
        isMatch = isMatch && targetCollateralTokenAddress === collateralAddress;
    }
    else if (isTriggerDecreaseOrderType(order.orderType)) {
        isMatch = isMatch && order.initialCollateralTokenAddress === collateralAddress;
    }
    return isMatch;
}
exports.isOrderForPositionByData = isOrderForPositionByData;
