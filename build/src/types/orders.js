"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecreasePositionSwapType = exports.SwapPricingType = exports.OrderType = void 0;
var OrderType;
(function (OrderType) {
    // the order will be cancelled if the minOutputAmount cannot be fulfilled
    OrderType[OrderType["MarketSwap"] = 0] = "MarketSwap";
    // @dev LimitSwap: swap token A to token B if the minOutputAmount can be fulfilled
    OrderType[OrderType["LimitSwap"] = 1] = "LimitSwap";
    // @dev MarketIncrease: increase position at the current market price
    // the order will be cancelled if the position cannot be increased at the acceptablePrice
    OrderType[OrderType["MarketIncrease"] = 2] = "MarketIncrease";
    // @dev LimitIncrease: increase position if the triggerPrice is reached and the acceptablePrice can be fulfilled
    OrderType[OrderType["LimitIncrease"] = 3] = "LimitIncrease";
    // @dev MarketDecrease: decrease position at the curent market price
    // the order will be cancelled if the position cannot be decreased at the acceptablePrice
    OrderType[OrderType["MarketDecrease"] = 4] = "MarketDecrease";
    // @dev LimitDecrease: decrease position if the triggerPrice is reached and the acceptablePrice can be fulfilled
    OrderType[OrderType["LimitDecrease"] = 5] = "LimitDecrease";
    // @dev StopLossDecrease: decrease position if the triggerPrice is reached and the acceptablePrice can be fulfilled
    OrderType[OrderType["StopLossDecrease"] = 6] = "StopLossDecrease";
    // @dev Liquidation: allows liquidation of positions if the criteria for liquidation are met
    OrderType[OrderType["Liquidation"] = 7] = "Liquidation";
    // @dev StopIncrease: increase position if the triggerPrice is reached and the acceptablePrice can be fulfilled
    OrderType[OrderType["StopIncrease"] = 8] = "StopIncrease";
})(OrderType || (exports.OrderType = OrderType = {}));
var SwapPricingType;
(function (SwapPricingType) {
    SwapPricingType[SwapPricingType["TwoStep"] = 0] = "TwoStep";
    SwapPricingType[SwapPricingType["Shift"] = 1] = "Shift";
    SwapPricingType[SwapPricingType["Atomic"] = 2] = "Atomic";
})(SwapPricingType || (exports.SwapPricingType = SwapPricingType = {}));
var DecreasePositionSwapType;
(function (DecreasePositionSwapType) {
    DecreasePositionSwapType[DecreasePositionSwapType["NoSwap"] = 0] = "NoSwap";
    DecreasePositionSwapType[DecreasePositionSwapType["SwapPnlTokenToCollateralToken"] = 1] = "SwapPnlTokenToCollateralToken";
    DecreasePositionSwapType[DecreasePositionSwapType["SwapCollateralTokenToPnlToken"] = 2] = "SwapCollateralTokenToPnlToken";
})(DecreasePositionSwapType || (exports.DecreasePositionSwapType = DecreasePositionSwapType = {}));
