"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwapStats = exports.getSwapPathStats = exports.getSwapPathOutputAddresses = exports.getSwapCapacityUsd = void 0;
const tokens_1 = require("../configs/tokens");
const objects_1 = require("./objects");
const markets_1 = require("./markets");
const tokens_2 = require("./tokens");
const fees_1 = require("./fees");
function getSwapCapacityUsd(marketInfo, isLong) {
    const poolAmount = isLong ? marketInfo.longPoolAmount : marketInfo.shortPoolAmount;
    const maxPoolAmount = isLong ? marketInfo.maxLongPoolAmount : marketInfo.maxShortPoolAmount;
    const capacityAmount = maxPoolAmount - poolAmount;
    const token = isLong ? marketInfo.longToken : marketInfo.shortToken;
    const capacityUsd = (0, tokens_2.convertToUsd)(capacityAmount, token.decimals, (0, tokens_2.getMidPrice)(token.prices));
    return capacityUsd;
}
exports.getSwapCapacityUsd = getSwapCapacityUsd;
function getSwapPathOutputAddresses(p) {
    const { marketsInfoData, initialCollateralAddress, swapPath, wrappedNativeTokenAddress, shouldUnwrapNativeToken, isIncrease, } = p;
    if (swapPath.length === 0) {
        // Increase
        if (isIncrease) {
            // During increase target collateral token is always ERC20 token, it can not be native token.
            // Thus we do not need to check if initial collateral token is wrapped token to unwrap it.
            // So we can safely return initial collateral token address as out token address, when there is no swap path.
            return {
                outTokenAddress: initialCollateralAddress,
                outMarketAddress: undefined,
            };
        }
        // Decrease
        if (shouldUnwrapNativeToken && initialCollateralAddress === wrappedNativeTokenAddress) {
            return {
                outTokenAddress: tokens_1.NATIVE_TOKEN_ADDRESS,
                outMarketAddress: undefined,
            };
        }
        return {
            outTokenAddress: initialCollateralAddress,
            outMarketAddress: undefined,
        };
    }
    const [firstMarketAddress, ...marketAddresses] = swapPath;
    let outMarket = (0, objects_1.getByKey)(marketsInfoData, firstMarketAddress);
    if (!outMarket) {
        return {
            outTokenAddress: undefined,
            outMarketAddress: undefined,
        };
    }
    let outTokenType = (0, markets_1.getTokenPoolType)(outMarket, initialCollateralAddress);
    let outToken = outTokenType === "long" ? outMarket.shortToken : outMarket.longToken;
    for (const marketAddress of marketAddresses) {
        outMarket = (0, objects_1.getByKey)(marketsInfoData, marketAddress);
        if (!outMarket) {
            return {
                outTokenAddress: undefined,
                outMarketAddress: undefined,
            };
        }
        outTokenType = outMarket.longTokenAddress === outToken.address ? "short" : "long";
        outToken = outTokenType === "long" ? outMarket.longToken : outMarket.shortToken;
    }
    let outTokenAddress;
    if (isIncrease) {
        // Here swap path is not empty, this means out token came from swapping tokens,
        // thus it can not be native token by design.
        outTokenAddress = outToken.address;
    }
    else {
        if (shouldUnwrapNativeToken && outToken.address === wrappedNativeTokenAddress) {
            outTokenAddress = tokens_1.NATIVE_TOKEN_ADDRESS;
        }
        else {
            outTokenAddress = outToken.address;
        }
    }
    return {
        outTokenAddress,
        outMarketAddress: outMarket.marketTokenAddress,
    };
}
exports.getSwapPathOutputAddresses = getSwapPathOutputAddresses;
function getSwapPathStats(p) {
    const { marketsInfoData, swapPath, initialCollateralAddress, usdIn, shouldUnwrapNativeToken, shouldApplyPriceImpact, wrappedNativeTokenAddress, } = p;
    if (swapPath.length === 0) {
        return undefined;
    }
    const swapSteps = [];
    let usdOut = usdIn;
    let tokenInAddress = initialCollateralAddress;
    let tokenOutAddress = initialCollateralAddress;
    let totalSwapPriceImpactDeltaUsd = 0n;
    let totalSwapFeeUsd = 0n;
    for (let i = 0; i < swapPath.length; i++) {
        const marketAddress = swapPath[i];
        const marketInfo = marketsInfoData[marketAddress];
        tokenOutAddress = (0, markets_1.getOppositeCollateral)(marketInfo, tokenInAddress).address;
        if (i === swapPath.length - 1 && shouldUnwrapNativeToken && tokenOutAddress === wrappedNativeTokenAddress) {
            tokenOutAddress = tokens_1.NATIVE_TOKEN_ADDRESS;
        }
        const swapStep = getSwapStats({
            marketInfo,
            tokenInAddress,
            tokenOutAddress,
            usdIn: usdOut,
            shouldApplyPriceImpact,
        });
        tokenInAddress = swapStep.tokenOutAddress;
        usdOut = swapStep.usdOut;
        totalSwapPriceImpactDeltaUsd = totalSwapPriceImpactDeltaUsd + swapStep.priceImpactDeltaUsd;
        totalSwapFeeUsd = totalSwapFeeUsd + swapStep.swapFeeUsd;
        swapSteps.push(swapStep);
    }
    const lastStep = swapSteps[swapSteps.length - 1];
    const targetMarketAddress = lastStep.marketAddress;
    const amountOut = lastStep.amountOut;
    const totalFeesDeltaUsd = 0n - totalSwapFeeUsd + totalSwapPriceImpactDeltaUsd;
    return {
        swapPath,
        tokenInAddress,
        tokenOutAddress,
        targetMarketAddress,
        swapSteps,
        usdOut,
        amountOut,
        totalSwapFeeUsd,
        totalSwapPriceImpactDeltaUsd,
        totalFeesDeltaUsd,
    };
}
exports.getSwapPathStats = getSwapPathStats;
function getSwapStats(p) {
    const { marketInfo, tokenInAddress, tokenOutAddress, usdIn, shouldApplyPriceImpact } = p;
    const isWrap = tokenInAddress === tokens_1.NATIVE_TOKEN_ADDRESS;
    const isUnwrap = tokenOutAddress === tokens_1.NATIVE_TOKEN_ADDRESS;
    const tokenIn = (0, markets_1.getTokenPoolType)(marketInfo, tokenInAddress) === "long" ? marketInfo.longToken : marketInfo.shortToken;
    const tokenOut = (0, markets_1.getTokenPoolType)(marketInfo, tokenOutAddress) === "long" ? marketInfo.longToken : marketInfo.shortToken;
    const priceIn = tokenIn.prices.minPrice;
    const priceOut = tokenOut.prices.maxPrice;
    const amountIn = (0, tokens_2.convertToTokenAmount)(usdIn, tokenIn.decimals, priceIn);
    let priceImpactDeltaUsd;
    try {
        priceImpactDeltaUsd = (0, fees_1.getPriceImpactForSwap)(marketInfo, tokenIn, tokenOut, usdIn, usdIn * -1n);
    }
    catch (e) {
        return {
            swapFeeUsd: 0n,
            swapFeeAmount: 0n,
            isWrap,
            isUnwrap,
            marketAddress: marketInfo.marketTokenAddress,
            tokenInAddress,
            tokenOutAddress,
            priceImpactDeltaUsd: 0n,
            amountIn,
            amountInAfterFees: amountIn,
            usdIn,
            amountOut: 0n,
            usdOut: 0n,
            isOutLiquidity: true,
        };
    }
    const swapFeeAmount = (0, fees_1.getSwapFee)(marketInfo, amountIn, priceImpactDeltaUsd > 0);
    const swapFeeUsd = (0, fees_1.getSwapFee)(marketInfo, usdIn, priceImpactDeltaUsd > 0);
    const amountInAfterFees = amountIn - swapFeeAmount;
    const usdInAfterFees = usdIn - swapFeeUsd;
    let usdOut = usdInAfterFees;
    let amountOut = (0, tokens_2.convertToTokenAmount)(usdOut, tokenOut.decimals, priceOut);
    let cappedImpactDeltaUsd;
    if (priceImpactDeltaUsd > 0) {
        const { impactDeltaAmount: positiveImpactAmountTokenOut, cappedDiffUsd } = (0, fees_1.applySwapImpactWithCap)(marketInfo, tokenOut, priceImpactDeltaUsd);
        cappedImpactDeltaUsd = (0, tokens_2.convertToUsd)(positiveImpactAmountTokenOut, tokenOut.decimals, priceOut);
        // https://github.com/gmx-io/gmx-synthetics/blob/3df10f1eab2734cf1b5f0a5dff12b79cbb19907d/contracts/swap/SwapUtils.sol#L290-L291
        if (cappedDiffUsd > 0) {
            const { impactDeltaAmount: positiveImpactAmountTokenIn } = (0, fees_1.applySwapImpactWithCap)(marketInfo, tokenIn, cappedDiffUsd);
            if (positiveImpactAmountTokenIn > 0) {
                cappedImpactDeltaUsd += (0, tokens_2.convertToUsd)(positiveImpactAmountTokenIn, tokenIn.decimals, priceIn);
            }
        }
    }
    else {
        const { impactDeltaAmount: negativeImpactAmount } = (0, fees_1.applySwapImpactWithCap)(marketInfo, tokenIn, priceImpactDeltaUsd);
        cappedImpactDeltaUsd = (0, tokens_2.convertToUsd)(negativeImpactAmount, tokenIn.decimals, priceIn);
    }
    if (shouldApplyPriceImpact) {
        usdOut = usdOut + cappedImpactDeltaUsd;
    }
    if (usdOut < 0) {
        usdOut = 0n;
    }
    amountOut = (0, tokens_2.convertToTokenAmount)(usdOut, tokenOut.decimals, priceOut);
    const capacityUsd = getSwapCapacityUsd(marketInfo, (0, markets_1.getTokenPoolType)(marketInfo, tokenInAddress) === "long");
    const isOutCapacity = capacityUsd < usdInAfterFees;
    const liquidity = (0, markets_1.getAvailableUsdLiquidityForCollateral)(marketInfo, (0, markets_1.getTokenPoolType)(marketInfo, tokenOutAddress) === "long");
    const isOutLiquidity = liquidity < usdOut;
    return {
        swapFeeUsd,
        swapFeeAmount,
        isWrap,
        isUnwrap,
        marketAddress: marketInfo.marketTokenAddress,
        tokenInAddress,
        tokenOutAddress,
        priceImpactDeltaUsd: cappedImpactDeltaUsd,
        amountIn,
        amountInAfterFees,
        usdIn,
        amountOut,
        usdOut,
        isOutLiquidity,
        isOutCapacity,
    };
}
exports.getSwapStats = getSwapStats;
