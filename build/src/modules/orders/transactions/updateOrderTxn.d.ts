import type { GmxSdk } from "../../../index";
import { Token } from "../../../types/tokens";
import { Address } from "viem";
export type UpdateOrderParams = {
    orderKey: string;
    indexToken?: Token;
    sizeDeltaUsd: bigint;
    triggerPrice: bigint;
    acceptablePrice: bigint;
    minOutputAmount: bigint;
    executionFee?: bigint;
    autoCancel: boolean;
};
export declare function updateOrderTxn(sdk: GmxSdk, p: UpdateOrderParams): Promise<Address>;
export declare function createUpdateEncodedPayload({ sdk, orderKey, sizeDeltaUsd, executionFee, indexToken, acceptablePrice, triggerPrice, autoCancel, minOutputAmount, }: {
    sdk: GmxSdk;
    orderKey: string;
    sizeDeltaUsd: bigint;
    executionFee?: bigint;
    indexToken?: Token;
    acceptablePrice: bigint;
    triggerPrice: bigint;
    minOutputAmount: bigint;
    autoCancel: boolean;
}): `0x${string}`[];
