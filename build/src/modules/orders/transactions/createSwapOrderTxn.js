"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwapOrderTxn = void 0;
const viem_1 = require("viem");
const abis_1 = require("abis");
const contracts_1 = require("../../../configs/contracts");
const tokens_1 = require("../../../configs/tokens");
const orders_1 = require("../../../types/orders");
const orders_2 = require("../../../utils/orders");
const trade_1 = require("../../../utils/trade");
const simulateExecuteOrder_1 = require("../../../utils/simulateExecuteOrder");
async function createSwapOrderTxn(sdk, p) {
    const { encodedPayload, totalWntAmount } = await getParams(sdk, p);
    const { encodedPayload: simulationEncodedPayload, totalWntAmount: sumaltionTotalWntAmount } = await getParams(sdk, p);
    if (p.orderType !== orders_1.OrderType.LimitSwap) {
        await (0, simulateExecuteOrder_1.simulateExecuteOrder)(sdk, {
            primaryPriceOverrides: {},
            createMulticallPayload: simulationEncodedPayload,
            value: sumaltionTotalWntAmount,
            tokensData: p.tokensData,
        });
    }
    await sdk.callContract((0, contracts_1.getContract)(sdk.chainId, "ExchangeRouter"), abis_1.abis.ExchangeRouter, "multicall", [encodedPayload], {
        value: totalWntAmount,
    });
}
exports.createSwapOrderTxn = createSwapOrderTxn;
async function getParams(sdk, p) {
    const isNativePayment = p.fromTokenAddress === tokens_1.NATIVE_TOKEN_ADDRESS;
    const isNativeReceive = p.toTokenAddress === tokens_1.NATIVE_TOKEN_ADDRESS;
    const orderVaultAddress = (0, contracts_1.getContract)(sdk.chainId, "OrderVault");
    const wntSwapAmount = isNativePayment ? p.fromTokenAmount : 0n;
    const totalWntAmount = wntSwapAmount + p.executionFee;
    const initialCollateralTokenAddress = (0, tokens_1.convertTokenAddress)(sdk.chainId, p.fromTokenAddress, "wrapped");
    const shouldApplySlippage = (0, orders_2.isMarketOrderType)(p.orderType);
    const minOutputAmount = shouldApplySlippage
        ? (0, trade_1.applySlippageToMinOut)(p.allowedSlippage, p.minOutputAmount)
        : p.minOutputAmount;
    const initialCollateralDeltaAmount = p.fromTokenAmount;
    const createOrderParams = {
        addresses: {
            receiver: sdk.config.account,
            cancellationReceiver: viem_1.zeroAddress,
            initialCollateralToken: initialCollateralTokenAddress,
            callbackContract: viem_1.zeroAddress,
            market: viem_1.zeroAddress,
            swapPath: p.swapPath,
            uiFeeReceiver: viem_1.zeroAddress,
        },
        numbers: {
            sizeDeltaUsd: 0n,
            initialCollateralDeltaAmount,
            triggerPrice: 0n,
            acceptablePrice: 0n,
            executionFee: p.executionFee,
            callbackGasLimit: 0n,
            minOutputAmount,
            validFromTime: 0n,
        },
        autoCancel: false,
        orderType: p.orderType,
        decreasePositionSwapType: orders_1.DecreasePositionSwapType.NoSwap,
        isLong: false,
        shouldUnwrapNativeToken: isNativeReceive,
        referralCode: p.referralCode || viem_1.zeroHash,
    };
    const multicall = [
        { method: "sendWnt", params: [orderVaultAddress, totalWntAmount] },
        !isNativePayment
            ? { method: "sendTokens", params: [p.fromTokenAddress, orderVaultAddress, p.fromTokenAmount] }
            : undefined,
        {
            method: "createOrder",
            params: [createOrderParams],
        },
    ];
    return {
        minOutputAmount,
        totalWntAmount,
        encodedPayload: multicall
            .filter(Boolean)
            .map((call) => (0, viem_1.encodeFunctionData)({ abi: abis_1.abis.ExchangeRouter, functionName: call.method, args: call.params })),
    };
}
