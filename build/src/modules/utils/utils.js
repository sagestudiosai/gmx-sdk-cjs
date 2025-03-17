"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const viem_1 = require("viem");
const chains_1 = require("../../configs/chains");
const contracts_1 = require("../../configs/contracts");
const dataStore_1 = require("../../configs/dataStore");
const bigmath_1 = require("../../utils/bigmath");
const estimateOraclePriceCount_1 = require("../../utils/fees/estimateOraclePriceCount");
const executionFee_1 = require("../../utils/fees/executionFee");
const trade_1 = require("../../utils/trade");
const base_1 = require("../base");
class Utils extends base_1.Module {
    constructor() {
        super(...arguments);
        this._gasLimits = null;
    }
    async getGasLimits() {
        if (this._gasLimits) {
            return this._gasLimits;
        }
        const gasLimits = await this.sdk
            .executeMulticall({
            dataStore: {
                contractAddress: (0, contracts_1.getContract)(this.chainId, "DataStore"),
                abiId: "DataStore",
                calls: {
                    depositToken: {
                        methodName: "getUint",
                        params: [(0, dataStore_1.depositGasLimitKey)()],
                    },
                    withdrawalMultiToken: {
                        methodName: "getUint",
                        params: [(0, dataStore_1.withdrawalGasLimitKey)()],
                    },
                    shift: {
                        methodName: "getUint",
                        params: [(0, dataStore_1.shiftGasLimitKey)()],
                    },
                    singleSwap: {
                        methodName: "getUint",
                        params: [(0, dataStore_1.singleSwapGasLimitKey)()],
                    },
                    swapOrder: {
                        methodName: "getUint",
                        params: [(0, dataStore_1.swapOrderGasLimitKey)()],
                    },
                    increaseOrder: {
                        methodName: "getUint",
                        params: [(0, dataStore_1.increaseOrderGasLimitKey)()],
                    },
                    decreaseOrder: {
                        methodName: "getUint",
                        params: [(0, dataStore_1.decreaseOrderGasLimitKey)()],
                    },
                    estimatedGasFeeBaseAmount: {
                        methodName: "getUint",
                        params: [dataStore_1.ESTIMATED_GAS_FEE_BASE_AMOUNT_V2_1],
                    },
                    estimatedGasFeePerOraclePrice: {
                        methodName: "getUint",
                        params: [dataStore_1.ESTIMATED_GAS_FEE_PER_ORACLE_PRICE],
                    },
                    estimatedFeeMultiplierFactor: {
                        methodName: "getUint",
                        params: [dataStore_1.ESTIMATED_GAS_FEE_MULTIPLIER_FACTOR],
                    },
                    glvDepositGasLimit: {
                        methodName: "getUint",
                        params: [dataStore_1.GLV_DEPOSIT_GAS_LIMIT],
                    },
                    glvWithdrawalGasLimit: {
                        methodName: "getUint",
                        params: [dataStore_1.GLV_WITHDRAWAL_GAS_LIMIT],
                    },
                    glvPerMarketGasLimit: {
                        methodName: "getUint",
                        params: [dataStore_1.GLV_PER_MARKET_GAS_LIMIT],
                    },
                },
            },
        })
            .then((res) => {
            const results = res.data.dataStore;
            function getBigInt(key) {
                return BigInt(results[key].returnValues[0]);
            }
            return {
                depositToken: getBigInt("depositToken"),
                withdrawalMultiToken: getBigInt("withdrawalMultiToken"),
                shift: getBigInt("shift"),
                singleSwap: getBigInt("singleSwap"),
                swapOrder: getBigInt("swapOrder"),
                increaseOrder: getBigInt("increaseOrder"),
                decreaseOrder: getBigInt("decreaseOrder"),
                estimatedGasFeeBaseAmount: getBigInt("estimatedGasFeeBaseAmount"),
                estimatedGasFeePerOraclePrice: getBigInt("estimatedGasFeePerOraclePrice"),
                estimatedFeeMultiplierFactor: getBigInt("estimatedFeeMultiplierFactor"),
                glvDepositGasLimit: getBigInt("glvDepositGasLimit"),
                glvWithdrawalGasLimit: getBigInt("glvWithdrawalGasLimit"),
                glvPerMarketGasLimit: getBigInt("glvPerMarketGasLimit"),
            };
        });
        this._gasLimits = gasLimits;
        return gasLimits;
    }
    async getEstimatedGasFee(tradeFeesType, { increaseAmounts, decreaseAmounts, swapAmounts, }) {
        const gasLimits = await this.getGasLimits();
        switch (tradeFeesType) {
            case "swap": {
                if (!swapAmounts || !swapAmounts.swapPathStats)
                    return null;
                return (0, executionFee_1.estimateExecuteSwapOrderGasLimit)(gasLimits, {
                    swapsCount: swapAmounts.swapPathStats.swapPath.length,
                    callbackGasLimit: 0n,
                });
            }
            case "increase": {
                if (!increaseAmounts)
                    return null;
                return (0, executionFee_1.estimateExecuteIncreaseOrderGasLimit)(gasLimits, {
                    swapsCount: increaseAmounts.swapPathStats?.swapPath.length,
                });
            }
            case "decrease": {
                if (!decreaseAmounts)
                    return null;
                return (0, executionFee_1.estimateExecuteDecreaseOrderGasLimit)(gasLimits, {
                    callbackGasLimit: 0n,
                    decreaseSwapType: decreaseAmounts.decreaseSwapType,
                    swapsCount: 0,
                });
            }
            case "edit":
                return null;
        }
    }
    async getExecutionFee(tradeFeesType, tokensData, { increaseAmounts, decreaseAmounts, swapAmounts, }) {
        const gasLimits = await this.getGasLimits();
        const gasPrice = await this.getGasPrice();
        const estimatedGas = await this.getEstimatedGasFee(tradeFeesType, {
            increaseAmounts,
            decreaseAmounts,
            swapAmounts,
        });
        if (estimatedGas === null || estimatedGas === undefined)
            return undefined;
        const swapsCount = (0, trade_1.getSwapCount)({
            isSwap: tradeFeesType === "swap",
            isIncrease: tradeFeesType === "increase",
            increaseAmounts,
            decreaseAmounts,
            swapAmounts,
        });
        if (swapsCount === undefined)
            return undefined;
        if (tokensData === undefined)
            return undefined;
        if (gasPrice === undefined)
            return undefined;
        const oraclePriceCount = (0, estimateOraclePriceCount_1.estimateOrderOraclePriceCount)(swapsCount);
        return (0, executionFee_1.getExecutionFee)(this.chainId, gasLimits, tokensData, estimatedGas, gasPrice, oraclePriceCount);
    }
    async getGasPrice() {
        const executionFeeConfig = chains_1.EXECUTION_FEE_CONFIG_V2[this.chainId];
        const feeData = await (0, viem_1.withRetry)(() => this.sdk.publicClient.estimateFeesPerGas({
            chain: (0, chains_1.getChain)(this.chainId),
            type: "legacy",
        }), {
            retryCount: 2,
            shouldRetry: ({ error }) => {
                const isInvalidBlockError = error?.message?.includes("invalid value for value.hash");
                return isInvalidBlockError;
            },
        });
        let gasPrice = feeData.gasPrice ?? 0n;
        if (executionFeeConfig.shouldUseMaxPriorityFeePerGas) {
            const maxPriorityFeePerGas = bigmath_1.bigMath.max(feeData?.maxPriorityFeePerGas ?? 0n, chains_1.MAX_PRIORITY_FEE_PER_GAS_MAP[this.chainId] ?? 0n);
            gasPrice = gasPrice + maxPriorityFeePerGas;
        }
        const premium = chains_1.GAS_PRICE_PREMIUM_MAP[this.chainId] ?? 0n;
        const price = gasPrice + premium;
        return price === undefined ? undefined : BigInt(gasPrice);
    }
}
exports.Utils = Utils;
