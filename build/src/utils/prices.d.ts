import { OrderType } from "../types/orders";
import { TokenPrices } from "../types/tokens";
import { TriggerThresholdType } from "../types/trade";
export declare function getMarkPrice(p: {
    prices: TokenPrices;
    isIncrease: boolean;
    isLong: boolean;
}): bigint;
export declare function getShouldUseMaxPrice(isIncrease: boolean, isLong: boolean): boolean;
export declare function getOrderThresholdType(orderType: OrderType, isLong: boolean): TriggerThresholdType;
