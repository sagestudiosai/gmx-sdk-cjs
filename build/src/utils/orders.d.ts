import { MarketsInfoData } from "../types/markets";
import { Order, OrderInfo, OrderType, PositionOrderInfo, SwapOrderInfo } from "../types/orders";
import { Token, TokensData } from "../types/tokens";
export declare function isMarketOrderType(orderType: OrderType): boolean;
export declare function isLimitOrderType(orderType: OrderType): boolean;
export declare function isTriggerDecreaseOrderType(orderType: OrderType): boolean;
export declare function isDecreaseOrderType(orderType: OrderType): boolean;
export declare function isIncreaseOrderType(orderType: OrderType): boolean;
export declare function isSwapOrderType(orderType: OrderType): boolean;
export declare function isLimitSwapOrderType(orderType: OrderType): boolean;
export declare function isLiquidationOrderType(orderType: OrderType): boolean;
export declare function isStopLossOrderType(orderType: OrderType): boolean;
export declare function isLimitDecreaseOrderType(orderType: OrderType): boolean;
export declare function isLimitIncreaseOrderType(orderType: OrderType): boolean;
export declare function isStopIncreaseOrderType(orderType: OrderType): boolean;
export declare function getOrderInfo(p: {
    marketsInfoData: MarketsInfoData;
    tokensData: TokensData;
    wrappedNativeToken: Token;
    order: Order;
}): SwapOrderInfo | PositionOrderInfo | undefined;
export declare function isVisibleOrder(orderType: OrderType): boolean;
export declare function isOrderForPosition(order: OrderInfo, positionKey: string): order is PositionOrderInfo;
export declare function isOrderForPositionByData(order: OrderInfo, { account, marketAddress, collateralAddress, isLong, }: {
    account: string;
    marketAddress: string;
    collateralAddress: string;
    isLong: boolean;
}): order is PositionOrderInfo;
