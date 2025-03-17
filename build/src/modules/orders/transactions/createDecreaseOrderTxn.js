"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDecreaseEncodedPayload = exports.createDecreaseOrderTxn = void 0;
const contracts_1 = require("../../../configs/contracts");
const abis_1 = require("abis");
const tokens_1 = require("../../../configs/tokens");
const orders_1 = require("../../../utils/orders");
const simulateExecuteOrder_1 = require("../../../utils/simulateExecuteOrder");
const tokens_2 = require("../../../utils/tokens");
const trade_1 = require("../../../utils/trade");
const viem_1 = require("viem");
async function createDecreaseOrderTxn(sdk, params) {
    const chainId = sdk.chainId;
    const ps = Array.isArray(params) ? params : [params];
    const orderVaultAddress = (0, contracts_1.getContract)(chainId, "OrderVault");
    const totalWntAmount = ps.reduce((acc, p) => acc + p.executionFee, 0n);
    const encodedPayload = createDecreaseEncodedPayload({
        sdk,
        orderVaultAddress,
        ps,
    });
    const simulationEncodedPayload = createDecreaseEncodedPayload({
        sdk,
        orderVaultAddress,
        ps,
    });
    await Promise.all(ps.map(async (p) => {
        if (!p.skipSimulation) {
            const primaryPriceOverrides = {};
            if (p.triggerPrice != undefined) {
                primaryPriceOverrides[p.indexToken.address] = {
                    minPrice: p.triggerPrice,
                    maxPrice: p.triggerPrice,
                };
            }
            await (0, simulateExecuteOrder_1.simulateExecuteOrder)(sdk, {
                primaryPriceOverrides,
                createMulticallPayload: simulationEncodedPayload,
                value: totalWntAmount,
                tokensData: p.tokensData,
            });
        }
    }));
    const routerAddress = (0, contracts_1.getContract)(chainId, "ExchangeRouter");
    await sdk.callContract(routerAddress, abis_1.abis.ExchangeRouter, "multicall", [encodedPayload], {
        value: totalWntAmount,
    });
}
exports.createDecreaseOrderTxn = createDecreaseOrderTxn;
function createDecreaseEncodedPayload({ sdk, orderVaultAddress, ps, }) {
    const multicall = [
        ...ps.flatMap((p) => {
            const isNativeReceive = p.receiveTokenAddress === tokens_1.NATIVE_TOKEN_ADDRESS;
            const initialCollateralTokenAddress = (0, tokens_1.convertTokenAddress)(sdk.chainId, p.initialCollateralAddress, "wrapped");
            const shouldApplySlippage = (0, orders_1.isMarketOrderType)(p.orderType);
            const acceptablePrice = shouldApplySlippage
                ? (0, trade_1.applySlippageToPrice)(p.allowedSlippage, p.acceptablePrice, false, p.isLong)
                : p.acceptablePrice;
            const minOutputAmount = shouldApplySlippage
                ? (0, trade_1.applySlippageToMinOut)(p.allowedSlippage, p.minOutputUsd)
                : p.minOutputUsd;
            const orderParams = {
                addresses: {
                    cancellationReceiver: viem_1.zeroAddress,
                    receiver: p.account,
                    initialCollateralToken: initialCollateralTokenAddress,
                    callbackContract: viem_1.zeroAddress,
                    market: p.marketAddress,
                    swapPath: p.swapPath,
                    uiFeeReceiver: viem_1.zeroAddress,
                },
                numbers: {
                    sizeDeltaUsd: p.sizeDeltaUsd,
                    initialCollateralDeltaAmount: p.initialCollateralDeltaAmount,
                    triggerPrice: (0, tokens_2.convertToContractPrice)(p.triggerPrice ?? 0n, p.indexToken.decimals),
                    acceptablePrice: (0, tokens_2.convertToContractPrice)(acceptablePrice, p.indexToken.decimals),
                    executionFee: p.executionFee,
                    callbackGasLimit: 0n,
                    minOutputAmount,
                    validFromTime: 0n,
                },
                orderType: p.orderType,
                decreasePositionSwapType: p.decreasePositionSwapType,
                isLong: p.isLong,
                shouldUnwrapNativeToken: isNativeReceive,
                autoCancel: p.autoCancel,
                referralCode: p.referralCode || viem_1.zeroHash,
            };
            return [
                { method: "sendWnt", params: [orderVaultAddress, p.executionFee] },
                {
                    method: "createOrder",
                    params: [orderParams],
                },
            ];
        }),
    ];
    return multicall.filter(Boolean).map((call) => (0, viem_1.encodeFunctionData)({
        abi: abis_1.abis.ExchangeRouter,
        functionName: call.method,
        args: call.params,
    }));
}
exports.createDecreaseEncodedPayload = createDecreaseEncodedPayload;
