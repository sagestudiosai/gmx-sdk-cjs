"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderThresholdType = exports.getShouldUseMaxPrice = exports.getMarkPrice = void 0;
const orders_1 = require("../types/orders");
const trade_1 = require("../types/trade");
function getMarkPrice(p) {
    const { prices, isIncrease, isLong } = p;
    const shouldUseMaxPrice = getShouldUseMaxPrice(isIncrease, isLong);
    return shouldUseMaxPrice ? prices.maxPrice : prices.minPrice;
}
exports.getMarkPrice = getMarkPrice;
function getShouldUseMaxPrice(isIncrease, isLong) {
    return isIncrease ? isLong : !isLong;
}
exports.getShouldUseMaxPrice = getShouldUseMaxPrice;
function getOrderThresholdType(orderType, isLong) {
    // limit increase order
    if (orderType === orders_1.OrderType.LimitIncrease) {
        return isLong ? trade_1.TriggerThresholdType.Below : trade_1.TriggerThresholdType.Above;
    }
    // stop market order
    if (orderType === orders_1.OrderType.StopIncrease) {
        return isLong ? trade_1.TriggerThresholdType.Above : trade_1.TriggerThresholdType.Below;
    }
    // take profit order
    if (orderType === orders_1.OrderType.LimitDecrease) {
        return isLong ? trade_1.TriggerThresholdType.Above : trade_1.TriggerThresholdType.Below;
    }
    // stop loss order
    if (orderType === orders_1.OrderType.StopLossDecrease) {
        return isLong ? trade_1.TriggerThresholdType.Below : trade_1.TriggerThresholdType.Above;
    }
    throw new Error("Invalid trigger order type");
}
exports.getOrderThresholdType = getOrderThresholdType;
