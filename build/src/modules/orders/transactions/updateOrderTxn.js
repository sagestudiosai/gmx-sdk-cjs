"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateEncodedPayload = exports.updateOrderTxn = void 0;
const abis_1 = require("abis");
const contracts_1 = require("../../../configs/contracts");
const tokens_1 = require("../../../utils/tokens");
const viem_1 = require("viem");
function updateOrderTxn(sdk, p) {
    const { orderKey, sizeDeltaUsd, triggerPrice, acceptablePrice, minOutputAmount, executionFee, indexToken, autoCancel, } = p;
    const router = (0, contracts_1.getContract)(sdk.chainId, "ExchangeRouter");
    const encodedPayload = createUpdateEncodedPayload({
        sdk,
        orderKey,
        sizeDeltaUsd,
        executionFee,
        indexToken,
        acceptablePrice,
        triggerPrice,
        minOutputAmount,
        autoCancel,
    });
    return sdk.callContract(router, abis_1.abis.ExchangeRouter, "multicall", [encodedPayload], {
        value: executionFee != undefined && executionFee > 0 ? executionFee : undefined,
    });
}
exports.updateOrderTxn = updateOrderTxn;
function createUpdateEncodedPayload({ sdk, orderKey, sizeDeltaUsd, executionFee, indexToken, acceptablePrice, triggerPrice, autoCancel, minOutputAmount, }) {
    const orderVaultAddress = (0, contracts_1.getContract)(sdk.chainId, "OrderVault");
    const multicall = [];
    if (executionFee != undefined && executionFee > 0) {
        multicall.push({ method: "sendWnt", params: [orderVaultAddress, executionFee] });
    }
    multicall.push({
        method: "updateOrder",
        params: [
            orderKey,
            sizeDeltaUsd,
            acceptablePrice !== undefined ? (0, tokens_1.convertToContractPrice)(acceptablePrice, indexToken?.decimals || 0) : 0n,
            triggerPrice !== undefined ? (0, tokens_1.convertToContractPrice)(triggerPrice, indexToken?.decimals || 0) : 0n,
            minOutputAmount,
            0n,
            autoCancel,
        ],
    });
    return multicall.filter(Boolean).map((call) => (0, viem_1.encodeFunctionData)({
        abi: abis_1.abis.ExchangeRouter,
        functionName: call.method,
        args: call.params,
    }));
}
exports.createUpdateEncodedPayload = createUpdateEncodedPayload;
