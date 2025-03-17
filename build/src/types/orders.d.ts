import { MarketInfo } from "./markets";
import { TokenData, TokensRatio, TokensRatioAndSlippage } from "./tokens";
import { SwapPathStats, TriggerThresholdType } from "./trade";
export declare enum OrderType {
    MarketSwap = 0,
    LimitSwap = 1,
    MarketIncrease = 2,
    LimitIncrease = 3,
    MarketDecrease = 4,
    LimitDecrease = 5,
    StopLossDecrease = 6,
    Liquidation = 7,
    StopIncrease = 8
}
export declare enum SwapPricingType {
    TwoStep = 0,
    Shift = 1,
    Atomic = 2
}
export declare enum DecreasePositionSwapType {
    NoSwap = 0,
    SwapPnlTokenToCollateralToken = 1,
    SwapCollateralTokenToPnlToken = 2
}
export type Order = {
    key: string;
    account: string;
    callbackContract: string;
    initialCollateralTokenAddress: string;
    marketAddress: string;
    decreasePositionSwapType: DecreasePositionSwapType;
    receiver: string;
    swapPath: string[];
    contractAcceptablePrice: bigint;
    contractTriggerPrice: bigint;
    callbackGasLimit: bigint;
    executionFee: bigint;
    initialCollateralDeltaAmount: bigint;
    minOutputAmount: bigint;
    sizeDeltaUsd: bigint;
    updatedAtTime: bigint;
    isFrozen: boolean;
    isLong: boolean;
    orderType: OrderType;
    shouldUnwrapNativeToken: boolean;
    autoCancel: boolean;
    data: string;
    title?: string;
};
export type SwapOrderInfo = Order & {
    swapPathStats?: SwapPathStats;
    triggerRatio?: TokensRatio | TokensRatioAndSlippage;
    initialCollateralToken: TokenData;
    targetCollateralToken: TokenData;
};
export type PositionOrderInfo = Order & {
    marketInfo: MarketInfo;
    swapPathStats?: SwapPathStats;
    indexToken: TokenData;
    initialCollateralToken: TokenData;
    targetCollateralToken: TokenData;
    acceptablePrice: bigint;
    triggerPrice: bigint;
    triggerThresholdType: TriggerThresholdType;
};
export type OrderInfo = SwapOrderInfo | PositionOrderInfo;
export type OrdersData = {
    [orderKey: string]: Order;
};
export type OrdersInfoData = {
    [orderKey: string]: OrderInfo;
};
export type OrderTxnType = "create" | "update" | "cancel";
