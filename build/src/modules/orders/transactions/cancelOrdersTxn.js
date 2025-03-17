"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCancelEncodedPayload = exports.cancelOrdersTxn = void 0;
const viem_1 = require("viem");
const abis_1 = require("abis");
const contracts_1 = require("../../../configs/contracts");
async function cancelOrdersTxn(sdk, p) {
    const multicall = createCancelEncodedPayload(p.orderKeys);
    const exchangeRouter = (0, contracts_1.getContract)(sdk.chainId, "ExchangeRouter");
    return sdk.callContract(exchangeRouter, abis_1.abis.ExchangeRouter, "multicall", [multicall]);
}
exports.cancelOrdersTxn = cancelOrdersTxn;
function createCancelEncodedPayload(orderKeys = []) {
    return orderKeys.filter(Boolean).map((orderKey) => (0, viem_1.encodeFunctionData)({
        abi: abis_1.abis.ExchangeRouter,
        functionName: "cancelOrder",
        args: [orderKey],
    }));
}
exports.createCancelEncodedPayload = createCancelEncodedPayload;
