import type { GmxSdk } from "index";
import { OrderTxnType, OrderType } from "../../../types/orders";
import { TokenData, TokenPrices, TokensData } from "../../../types/tokens";
import { DecreaseOrderParams } from "./createDecreaseOrderTxn";
export type PriceOverrides = {
    [address: string]: TokenPrices | undefined;
};
type IncreaseOrderParams = {
    account: string;
    marketAddress: string;
    initialCollateralAddress: string;
    targetCollateralAddress: string;
    initialCollateralAmount: bigint;
    collateralDeltaAmount: bigint;
    swapPath: string[];
    sizeDeltaUsd: bigint;
    sizeDeltaInTokens: bigint;
    acceptablePrice: bigint;
    triggerPrice: bigint | undefined;
    isLong: boolean;
    orderType: OrderType.MarketIncrease | OrderType.LimitIncrease;
    executionFee: bigint;
    allowedSlippage: number;
    skipSimulation?: boolean;
    referralCode: string | undefined;
    indexToken: TokenData;
    tokensData: TokensData;
};
type SecondaryOrderCommonParams = {
    account: string;
    marketAddress: string;
    swapPath: string[];
    allowedSlippage: number;
    initialCollateralAddress: string;
    receiveTokenAddress: string;
    isLong: boolean;
    indexToken: TokenData;
    txnType: OrderTxnType;
    orderType: OrderType;
    sizeDeltaUsd: bigint;
    initialCollateralDeltaAmount: bigint;
};
export type SecondaryDecreaseOrderParams = DecreaseOrderParams & SecondaryOrderCommonParams;
export type SecondaryCancelOrderParams = SecondaryOrderCommonParams & {
    orderKey: string | null;
};
export type SecondaryUpdateOrderParams = SecondaryOrderCommonParams & {
    orderKey: string;
    sizeDeltaUsd: bigint;
    acceptablePrice: bigint;
    triggerPrice: bigint;
    executionFee: bigint;
    indexToken: TokenData;
    minOutputAmount: bigint;
    autoCancel: boolean;
};
export declare function createIncreaseOrderTxn({ sdk, createIncreaseOrderParams: p, createDecreaseOrderParams, cancelOrderParams, updateOrderParams, }: {
    sdk: GmxSdk;
    createIncreaseOrderParams: IncreaseOrderParams;
    createDecreaseOrderParams?: SecondaryDecreaseOrderParams[];
    cancelOrderParams?: SecondaryCancelOrderParams[];
    updateOrderParams?: SecondaryUpdateOrderParams[];
}): Promise<void>;
export declare function getPendingOrderFromParams(chainId: number, txnType: OrderTxnType, p: DecreaseOrderParams | SecondaryUpdateOrderParams | SecondaryCancelOrderParams): {
    txnType: OrderTxnType;
    account: string;
    marketAddress: string;
    initialCollateralTokenAddress: string;
    initialCollateralDeltaAmount: bigint;
    swapPath: string[];
    sizeDeltaUsd: bigint;
    minOutputAmount: bigint;
    isLong: boolean;
    orderType: OrderType;
    shouldUnwrapNativeToken: boolean;
    orderKey: string | undefined;
};
export {};
