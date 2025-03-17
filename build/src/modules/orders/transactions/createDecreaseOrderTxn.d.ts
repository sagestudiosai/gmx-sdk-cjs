import type { DecreasePositionSwapType, OrderType } from "../../../types/orders";
import type { Token, TokensData } from "../../../types/tokens";
import type { GmxSdk } from "../../../index";
export type DecreaseOrderParams = {
    account: string;
    marketAddress: string;
    initialCollateralAddress: string;
    initialCollateralDeltaAmount: bigint;
    swapPath: string[];
    receiveTokenAddress: string;
    sizeDeltaUsd: bigint;
    sizeDeltaInTokens: bigint;
    acceptablePrice: bigint;
    triggerPrice: bigint | undefined;
    minOutputUsd: bigint;
    isLong: boolean;
    decreasePositionSwapType: DecreasePositionSwapType;
    orderType: OrderType.MarketDecrease | OrderType.LimitDecrease | OrderType.StopLossDecrease;
    executionFee: bigint;
    allowedSlippage: number;
    skipSimulation?: boolean;
    referralCode?: string;
    indexToken: Token;
    tokensData: TokensData;
    autoCancel: boolean;
};
export declare function createDecreaseOrderTxn(sdk: GmxSdk, params: DecreaseOrderParams | DecreaseOrderParams[]): Promise<void>;
export declare function createDecreaseEncodedPayload({ sdk, orderVaultAddress, ps, }: {
    sdk: GmxSdk;
    orderVaultAddress: string;
    ps: DecreaseOrderParams[];
}): `0x${string}`[];
