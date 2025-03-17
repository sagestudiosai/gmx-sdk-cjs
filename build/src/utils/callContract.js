"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callContract = exports.getGasLimit = exports.getGasPrice = void 0;
const viem_1 = require("viem");
const chains_1 = require("../configs/chains");
const factors_1 = require("../configs/factors");
const bigmath_1 = require("./bigmath");
async function getGasPrice(client, chainId) {
    let maxFeePerGas = chains_1.MAX_FEE_PER_GAS_MAP[chainId];
    const premium = chains_1.GAS_PRICE_PREMIUM_MAP[chainId] || 0n;
    const feeData = await (0, viem_1.withRetry)(() => client.estimateFeesPerGas({
        type: "legacy",
        chain: (0, chains_1.getChain)(chainId),
    }), {
        delay: 200,
        retryCount: 2,
        shouldRetry: ({ error }) => {
            const isInvalidBlockError = error?.message?.includes("invalid value for value.hash");
            return isInvalidBlockError;
        },
    });
    const gasPrice = feeData.gasPrice;
    if (maxFeePerGas) {
        if (gasPrice !== undefined && gasPrice !== null) {
            maxFeePerGas = bigmath_1.bigMath.max(gasPrice, maxFeePerGas);
        }
        // Fetch the latest block to get baseFeePerGas for EIP-1559 fee data
        const block = await client.getBlock({ blockTag: "pending" });
        if (block.baseFeePerGas !== undefined && block.baseFeePerGas !== null) {
            const baseFeePerGas = block.baseFeePerGas;
            const maxPriorityFeePerGas = bigmath_1.bigMath.max(chains_1.MAX_PRIORITY_FEE_PER_GAS_MAP[chainId] ?? 0n, premium);
            // Calculate maxFeePerGas
            const calculatedMaxFeePerGas = baseFeePerGas + maxPriorityFeePerGas + premium;
            return {
                maxFeePerGas: bigmath_1.bigMath.max(maxFeePerGas, calculatedMaxFeePerGas),
                maxPriorityFeePerGas: maxPriorityFeePerGas + premium,
            };
        }
    }
    if (gasPrice === null || gasPrice === undefined) {
        throw new Error("Can't fetch gas price");
    }
    const bufferBps = chains_1.GAS_PRICE_BUFFER_MAP[chainId] || 0n;
    const buffer = bigmath_1.bigMath.mulDiv(gasPrice, bufferBps, factors_1.BASIS_POINTS_DIVISOR_BIGINT);
    return {
        gasPrice: gasPrice + buffer + premium,
    };
}
exports.getGasPrice = getGasPrice;
async function getGasLimit(client, account, contractAddress, abi, method, params = [], value) {
    const defaultValue = 0n;
    if (value === undefined || value === null) {
        value = defaultValue;
    }
    let gasLimit = 0n;
    const data = (0, viem_1.encodeFunctionData)({
        abi,
        functionName: method,
        args: params,
    });
    try {
        const estimateGasParams = {
            to: contractAddress,
            data,
            value: BigInt(value),
            account,
        };
        gasLimit = await client.estimateGas(estimateGasParams);
    }
    catch (error) {
        // This call should throw another error instead of the `error`
        const callParams = {
            to: contractAddress,
            data,
            value: BigInt(value),
        };
        if (client.account) {
            callParams.account = client.account;
        }
        await client.call(callParams);
        // If not, we throw the original estimateGas error
        throw error;
    }
    if (gasLimit < 22000n) {
        gasLimit = 22000n;
    }
    // Add a 10% buffer to the gas limit
    return (gasLimit * 11n) / 10n;
}
exports.getGasLimit = getGasLimit;
async function callContract(sdk, contractAddress, abi, method, params, opts = {}) {
    const txnOpts = {};
    const chain = (0, chains_1.getChain)(sdk.chainId);
    if (opts.value) {
        txnOpts.value = BigInt(opts.value);
    }
    const clients = [sdk.publicClient];
    const data = (0, viem_1.encodeFunctionData)({
        abi,
        functionName: method,
        args: params,
    });
    const txnCalls = clients.map(async (client) => {
        const txnInstance = { ...txnOpts };
        async function retrieveGasLimit() {
            return opts.gasLimit
                ? BigInt(opts.gasLimit)
                : await getGasLimit(client, sdk.config.account, contractAddress, abi, method, params, opts.value !== undefined ? BigInt(opts.value) : undefined);
        }
        const gasLimitPromise = retrieveGasLimit().then((gasLimit) => {
            txnInstance.gas = gasLimit;
        });
        const noncePromise = sdk.publicClient.getTransactionCount({
            address: sdk.config.account
        }).then((nonce) => txnInstance.nonce = nonce);
        const gasPriceDataPromise = getGasPrice(sdk.publicClient, sdk.chainId).then((gasPriceData) => {
            if (gasPriceData.gasPrice !== undefined) {
                txnInstance.gasPrice = gasPriceData.gasPrice;
            }
            else {
                txnInstance.maxFeePerGas = gasPriceData.maxFeePerGas;
                txnInstance.maxPriorityFeePerGas = gasPriceData.maxPriorityFeePerGas;
            }
        });
        await Promise.all([gasLimitPromise, gasPriceDataPromise, noncePromise]);
        if (sdk.tgWallet) {
            const [signature] = await sdk.tgWallet.signEthTransaction(sdk.config.account, [
                {
                    chainId: sdk.chainId,
                    to: contractAddress,
                    value: txnOpts.value,
                    nonce: txnInstance.nonce,
                    data,
                    gas: txnInstance.gas,
                    maxFeePerGas: txnInstance.gasPrice ? undefined : txnInstance.maxFeePerGas,
                    maxPriorityFeePerGas: txnInstance.gasPrice ? undefined : txnInstance.maxPriorityFeePerGas,
                    gasPrice: txnInstance.gasPrice ? txnInstance.gasPrice : undefined,
                }
            ]);
            if (!signature) {
                throw new Error(`Failed to sign transaction with your wallet address ${sdk.config.account}. Please contact support.`);
            }
            return sdk.walletClient.sendRawTransaction({
                serializedTransaction: signature
            });
        }
        else {
            return sdk.walletClient.sendTransaction({
                to: contractAddress,
                data,
                chain,
                ...txnInstance,
            });
        }
    });
    const res = await Promise.any(txnCalls)
        .catch((error) => {
        if (error.errors && error.errors.length > 1) {
            // eslint-disable-next-line no-console
            console.error("All transactions failed", ...error.errors);
        }
        throw error.errors ? error.errors[0] : error;
    })
        .catch((error) => {
        throw error;
    });
    return res;
}
exports.callContract = callContract;
