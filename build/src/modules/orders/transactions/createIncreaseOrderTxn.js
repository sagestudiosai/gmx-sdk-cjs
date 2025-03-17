"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPendingOrderFromParams = exports.createIncreaseOrderTxn = void 0;
const abis_1 = require("abis");
const contracts_1 = require("../../../configs/contracts");
const tokens_1 = require("../../../configs/tokens");
const concat_1 = __importDefault(require("lodash/concat"));
const orders_1 = require("../../../types/orders");
const orders_2 = require("../../../utils/orders");
const tokens_2 = require("../../../utils/tokens");
const trade_1 = require("../../../utils/trade");
const viem_1 = require("viem");
const cancelOrdersTxn_1 = require("./cancelOrdersTxn");
const createDecreaseOrderTxn_1 = require("./createDecreaseOrderTxn");
const updateOrderTxn_1 = require("./updateOrderTxn");
const simulateExecuteOrder_1 = require("../../../utils/simulateExecuteOrder");
async function createIncreaseOrderTxn({ sdk, createIncreaseOrderParams: p, createDecreaseOrderParams, cancelOrderParams, updateOrderParams, }) {
    const isNativePayment = p.initialCollateralAddress === tokens_1.NATIVE_TOKEN_ADDRESS;
    const chainId = sdk.chainId;
    const exchangeRouter = (0, contracts_1.getContract)(chainId, "ExchangeRouter");
    const orderVaultAddress = (0, contracts_1.getContract)(chainId, "OrderVault");
    const wntCollateralAmount = isNativePayment ? p.initialCollateralAmount : 0n;
    const initialCollateralTokenAddress = (0, tokens_1.convertTokenAddress)(chainId, p.initialCollateralAddress, "wrapped");
    const shouldApplySlippage = (0, orders_2.isMarketOrderType)(p.orderType);
    const acceptablePrice = shouldApplySlippage
        ? (0, trade_1.applySlippageToPrice)(p.allowedSlippage, p.acceptablePrice, true, p.isLong)
        : p.acceptablePrice;
    const wntAmountToIncrease = wntCollateralAmount + p.executionFee;
    const totalWntAmount = (0, concat_1.default)(createDecreaseOrderParams, updateOrderParams).reduce((acc, p) => (p ? acc + p.executionFee : acc), wntAmountToIncrease);
    const encodedPayload = await createEncodedPayload({
        routerAbi: abis_1.abis.ExchangeRouter,
        orderVaultAddress,
        totalWntAmount: wntAmountToIncrease,
        p,
        acceptablePrice,
        isNativePayment,
        initialCollateralTokenAddress,
    });
    const simulationEncodedPayload = await createEncodedPayload({
        routerAbi: abis_1.abis.ExchangeRouter,
        orderVaultAddress,
        totalWntAmount: wntAmountToIncrease,
        p,
        acceptablePrice,
        isNativePayment,
        initialCollateralTokenAddress,
    });
    const decreaseEncodedPayload = (0, createDecreaseOrderTxn_1.createDecreaseEncodedPayload)({
        sdk,
        orderVaultAddress,
        ps: createDecreaseOrderParams || [],
    });
    const cancelEncodedPayload = (0, cancelOrdersTxn_1.createCancelEncodedPayload)(cancelOrderParams?.map(({ orderKey }) => orderKey) || []);
    const updateEncodedPayload = updateOrderParams?.reduce((acc, { orderKey, sizeDeltaUsd, executionFee, indexToken, acceptablePrice, triggerPrice, minOutputAmount, autoCancel }) => {
        return [
            ...acc,
            ...(0, updateOrderTxn_1.createUpdateEncodedPayload)({
                sdk,
                orderKey,
                sizeDeltaUsd,
                executionFee,
                indexToken,
                acceptablePrice,
                triggerPrice,
                minOutputAmount,
                autoCancel,
            }),
        ];
    }, []) ?? [];
    const primaryPriceOverrides = {};
    if (p.triggerPrice != undefined) {
        primaryPriceOverrides[p.indexToken.address] = {
            minPrice: p.triggerPrice,
            maxPrice: p.triggerPrice,
        };
    }
    if (!p.skipSimulation) {
        await (0, simulateExecuteOrder_1.simulateExecuteOrder)(sdk, {
            tokensData: p.tokensData,
            primaryPriceOverrides,
            createMulticallPayload: simulationEncodedPayload,
            value: totalWntAmount,
        });
    }
    const finalPayload = [...encodedPayload, ...decreaseEncodedPayload, ...cancelEncodedPayload, ...updateEncodedPayload];
    await sdk.callContract(exchangeRouter, abis_1.abis.ExchangeRouter, "multicall", [finalPayload], {
        value: totalWntAmount,
    });
}
exports.createIncreaseOrderTxn = createIncreaseOrderTxn;
async function createEncodedPayload({ routerAbi, orderVaultAddress, totalWntAmount, p, acceptablePrice, isNativePayment, initialCollateralTokenAddress, }) {
    const orderParams = createOrderParams({
        p,
        acceptablePrice,
        initialCollateralTokenAddress,
        isNativePayment,
    });
    const multicall = [
        { method: "sendWnt", params: [orderVaultAddress, totalWntAmount] },
        !isNativePayment
            ? { method: "sendTokens", params: [p.initialCollateralAddress, orderVaultAddress, p.initialCollateralAmount] }
            : undefined,
        {
            method: "createOrder",
            params: [orderParams],
        },
    ];
    return multicall.filter(Boolean).map((call) => (0, viem_1.encodeFunctionData)({
        abi: routerAbi,
        functionName: call.method,
        args: call.params,
    }));
}
function createOrderParams({ p, acceptablePrice, initialCollateralTokenAddress, isNativePayment, }) {
    return {
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
            initialCollateralDeltaAmount: 0n,
            triggerPrice: (0, tokens_2.convertToContractPrice)(p.triggerPrice ?? 0n, p.indexToken.decimals),
            acceptablePrice: (0, tokens_2.convertToContractPrice)(acceptablePrice, p.indexToken.decimals),
            executionFee: p.executionFee,
            callbackGasLimit: 0n,
            minOutputAmount: 0n,
            validFromTime: 0n,
        },
        orderType: p.orderType,
        decreasePositionSwapType: orders_1.DecreasePositionSwapType.NoSwap,
        isLong: p.isLong,
        shouldUnwrapNativeToken: isNativePayment,
        autoCancel: false,
        referralCode: p.referralCode || viem_1.zeroHash,
    };
}
function getPendingOrderFromParams(chainId, txnType, p) {
    const isNativeReceive = p.receiveTokenAddress === tokens_1.NATIVE_TOKEN_ADDRESS;
    const shouldApplySlippage = (0, orders_2.isMarketOrderType)(p.orderType);
    let minOutputAmount = 0n;
    if ("minOutputUsd" in p) {
        shouldApplySlippage ? (0, trade_1.applySlippageToMinOut)(p.allowedSlippage, p.minOutputUsd) : p.minOutputUsd;
    }
    if ("minOutputAmount" in p) {
        minOutputAmount = p.minOutputAmount;
    }
    const initialCollateralTokenAddress = (0, tokens_1.convertTokenAddress)(chainId, p.initialCollateralAddress, "wrapped");
    const orderKey = "orderKey" in p && p.orderKey ? p.orderKey : undefined;
    return {
        txnType,
        account: p.account,
        marketAddress: p.marketAddress,
        initialCollateralTokenAddress,
        initialCollateralDeltaAmount: p.initialCollateralDeltaAmount,
        swapPath: p.swapPath,
        sizeDeltaUsd: p.sizeDeltaUsd,
        minOutputAmount: minOutputAmount,
        isLong: p.isLong,
        orderType: p.orderType,
        shouldUnwrapNativeToken: isNativeReceive,
        orderKey,
    };
}
exports.getPendingOrderFromParams = getPendingOrderFromParams;
