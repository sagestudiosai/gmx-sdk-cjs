"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateExecuteShiftGasLimit = exports.estimateExecuteWithdrawalGasLimit = exports.estimateExecuteGlvWithdrawalGasLimit = exports.estimateExecuteGlvDepositGasLimit = exports.estimateExecuteDepositGasLimit = exports.estimateExecuteSwapOrderGasLimit = exports.estimateExecuteDecreaseOrderGasLimit = exports.estimateExecuteIncreaseOrderGasLimit = exports.getExecutionFee = void 0;
const chains_1 = require("../../configs/chains");
const factors_1 = require("../../configs/factors");
const tokens_1 = require("../../configs/tokens");
const orders_1 = require("../../types/orders");
const numbers_1 = require("../numbers");
const tokens_2 = require("../tokens");
function getExecutionFee(chainId, gasLimits, tokensData, estimatedGasLimit, gasPrice, oraclePriceCount) {
    const nativeToken = (0, tokens_2.getTokenData)(tokensData, tokens_1.NATIVE_TOKEN_ADDRESS);
    if (!nativeToken)
        return undefined;
    // #region adjustGasLimitForEstimate. Copy from contract.
    let baseGasLimit = gasLimits.estimatedGasFeeBaseAmount;
    baseGasLimit += gasLimits.estimatedGasFeePerOraclePrice * oraclePriceCount;
    const multiplierFactor = gasLimits.estimatedFeeMultiplierFactor;
    const gasLimit = baseGasLimit + (0, numbers_1.applyFactor)(estimatedGasLimit, multiplierFactor);
    // #endregion
    const feeTokenAmount = gasLimit * gasPrice;
    const feeUsd = (0, tokens_2.convertToUsd)(feeTokenAmount, nativeToken.decimals, nativeToken.prices.minPrice);
    const isFeeHigh = feeUsd > (0, numbers_1.expandDecimals)((0, chains_1.getHighExecutionFee)(chainId), factors_1.USD_DECIMALS);
    const isFeeVeryHigh = feeUsd > (0, numbers_1.expandDecimals)((0, chains_1.getExcessiveExecutionFee)(chainId), factors_1.USD_DECIMALS);
    return {
        feeUsd,
        feeTokenAmount,
        feeToken: nativeToken,
        gasLimit,
        isFeeHigh,
        isFeeVeryHigh,
    };
}
exports.getExecutionFee = getExecutionFee;
/**
 * Copy from contract: `estimateExecuteIncreaseOrderGasLimit`
 */
function estimateExecuteIncreaseOrderGasLimit(gasLimits, order) {
    const gasPerSwap = gasLimits.singleSwap;
    const swapsCount = BigInt(order.swapsCount ?? 0);
    return gasLimits.increaseOrder + gasPerSwap * swapsCount + (order.callbackGasLimit ?? 0n);
}
exports.estimateExecuteIncreaseOrderGasLimit = estimateExecuteIncreaseOrderGasLimit;
/**
 * Copy from contract: `estimateExecuteDecreaseOrderGasLimit`
 */
function estimateExecuteDecreaseOrderGasLimit(gasLimits, order) {
    const gasPerSwap = gasLimits.singleSwap;
    let swapsCount = BigInt(order.swapsCount);
    if (order.decreaseSwapType !== orders_1.DecreasePositionSwapType.NoSwap) {
        swapsCount += 1n;
    }
    return gasLimits.decreaseOrder + gasPerSwap * swapsCount + (order.callbackGasLimit ?? 0n);
}
exports.estimateExecuteDecreaseOrderGasLimit = estimateExecuteDecreaseOrderGasLimit;
function estimateExecuteSwapOrderGasLimit(gasLimits, order) {
    const gasPerSwap = gasLimits.singleSwap;
    const swapsCount = BigInt(order.swapsCount);
    return gasLimits.swapOrder + gasPerSwap * swapsCount + (order.callbackGasLimit ?? 0n);
}
exports.estimateExecuteSwapOrderGasLimit = estimateExecuteSwapOrderGasLimit;
/**
 * Only GM deposits. Do not confuse with increase with zero delta size.
 *
 * Copy from contract: `estimateExecuteDepositGasLimit`
 */
function estimateExecuteDepositGasLimit(gasLimits, deposit) {
    const gasPerSwap = gasLimits.singleSwap;
    const swapsCount = BigInt((deposit.longTokenSwapsCount ?? 0) + (deposit.shortTokenSwapsCount ?? 0));
    const gasForSwaps = swapsCount * gasPerSwap;
    return gasLimits.depositToken + (deposit.callbackGasLimit ?? 0n) + gasForSwaps;
}
exports.estimateExecuteDepositGasLimit = estimateExecuteDepositGasLimit;
function estimateExecuteGlvDepositGasLimit(gasLimits, { marketsCount, isMarketTokenDeposit, }) {
    const gasPerGlvPerMarket = gasLimits.glvPerMarketGasLimit;
    const gasForGlvMarkets = gasPerGlvPerMarket * marketsCount;
    const glvDepositGasLimit = gasLimits.glvDepositGasLimit;
    const gasLimit = glvDepositGasLimit + gasForGlvMarkets;
    if (isMarketTokenDeposit) {
        return gasLimit;
    }
    return gasLimit + gasLimits.depositToken;
}
exports.estimateExecuteGlvDepositGasLimit = estimateExecuteGlvDepositGasLimit;
function estimateExecuteGlvWithdrawalGasLimit(gasLimits, { marketsCount, }) {
    const gasPerGlvPerMarket = gasLimits.glvPerMarketGasLimit;
    const gasForGlvMarkets = gasPerGlvPerMarket * marketsCount;
    const glvWithdrawalGasLimit = gasLimits.glvWithdrawalGasLimit;
    const gasLimit = glvWithdrawalGasLimit + gasForGlvMarkets;
    return gasLimit + gasLimits.withdrawalMultiToken;
}
exports.estimateExecuteGlvWithdrawalGasLimit = estimateExecuteGlvWithdrawalGasLimit;
/**
 * Only GM withdrawals. Do not confuse with decrease with zero delta size.
 *
 * Copy from contract: `estimateExecuteWithdrawalGasLimit`
 */
function estimateExecuteWithdrawalGasLimit(gasLimits, withdrawal) {
    // Swap is not used but supported in the contract.
    // const gasPerSwap = gasLimits.singleSwap;
    // const swapsCount = 0n;
    // const gasForSwaps = swapsCount * gasPerSwap;
    return gasLimits.withdrawalMultiToken + (withdrawal.callbackGasLimit ?? 0n);
}
exports.estimateExecuteWithdrawalGasLimit = estimateExecuteWithdrawalGasLimit;
/**
 * Copy from contract: `estimateExecuteShiftGasLimit`
 */
function estimateExecuteShiftGasLimit(gasLimits, shift) {
    return gasLimits.shift + (shift.callbackGasLimit ?? 0n);
}
exports.estimateExecuteShiftGasLimit = estimateExecuteShiftGasLimit;
