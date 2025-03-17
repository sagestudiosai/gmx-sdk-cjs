import { ExecutionFee, GasLimitsConfig } from "../../types/fees";
import { DecreasePositionSwapType } from "../../types/orders";
import { TokensData } from "../../types/tokens";
export declare function getExecutionFee(chainId: number, gasLimits: GasLimitsConfig, tokensData: TokensData, estimatedGasLimit: bigint, gasPrice: bigint, oraclePriceCount: bigint): ExecutionFee | undefined;
/**
 * Copy from contract: `estimateExecuteIncreaseOrderGasLimit`
 */
export declare function estimateExecuteIncreaseOrderGasLimit(gasLimits: GasLimitsConfig, order: {
    swapsCount?: number;
    callbackGasLimit?: bigint;
}): bigint;
/**
 * Copy from contract: `estimateExecuteDecreaseOrderGasLimit`
 */
export declare function estimateExecuteDecreaseOrderGasLimit(gasLimits: GasLimitsConfig, order: {
    swapsCount: number;
    callbackGasLimit?: bigint;
    decreaseSwapType?: DecreasePositionSwapType;
}): bigint;
export declare function estimateExecuteSwapOrderGasLimit(gasLimits: GasLimitsConfig, order: {
    swapsCount: number;
    callbackGasLimit?: bigint;
}): bigint;
/**
 * Only GM deposits. Do not confuse with increase with zero delta size.
 *
 * Copy from contract: `estimateExecuteDepositGasLimit`
 */
export declare function estimateExecuteDepositGasLimit(gasLimits: GasLimitsConfig, deposit: {
    longTokenSwapsCount?: number;
    shortTokenSwapsCount?: number;
    callbackGasLimit?: bigint;
}): bigint;
export declare function estimateExecuteGlvDepositGasLimit(gasLimits: GasLimitsConfig, { marketsCount, isMarketTokenDeposit, }: {
    isMarketTokenDeposit: any;
    marketsCount: bigint;
    initialLongTokenAmount: bigint;
    initialShortTokenAmount: bigint;
}): bigint;
export declare function estimateExecuteGlvWithdrawalGasLimit(gasLimits: GasLimitsConfig, { marketsCount, }: {
    marketsCount: bigint;
}): bigint;
/**
 * Only GM withdrawals. Do not confuse with decrease with zero delta size.
 *
 * Copy from contract: `estimateExecuteWithdrawalGasLimit`
 */
export declare function estimateExecuteWithdrawalGasLimit(gasLimits: GasLimitsConfig, withdrawal: {
    callbackGasLimit?: bigint;
}): bigint;
/**
 * Copy from contract: `estimateExecuteShiftGasLimit`
 */
export declare function estimateExecuteShiftGasLimit(gasLimits: GasLimitsConfig, shift: {
    callbackGasLimit?: bigint;
}): bigint;
