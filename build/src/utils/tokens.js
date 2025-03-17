"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAmountByRatio = exports.getTokensRatioByMinOutputAmountAndTriggerPrice = exports.getTokensRatioByAmounts = exports.getTokenData = exports.getIsEquivalentTokens = exports.getMidPrice = exports.convertToUsd = exports.convertToTokenAmount = exports.convertToContractTokenPrices = exports.convertToContractPrice = exports.parseContractPrice = void 0;
const numbers_1 = require("./numbers");
const tokens_1 = require("../configs/tokens");
const factors_1 = require("../configs/factors");
const bigmath_1 = require("./bigmath");
function parseContractPrice(price, tokenDecimals) {
    return price * (0, numbers_1.expandDecimals)(1, tokenDecimals);
}
exports.parseContractPrice = parseContractPrice;
function convertToContractPrice(price, tokenDecimals) {
    return price / (0, numbers_1.expandDecimals)(1, tokenDecimals);
}
exports.convertToContractPrice = convertToContractPrice;
function convertToContractTokenPrices(prices, tokenDecimals) {
    return {
        min: convertToContractPrice(prices.minPrice, tokenDecimals),
        max: convertToContractPrice(prices.maxPrice, tokenDecimals),
    };
}
exports.convertToContractTokenPrices = convertToContractTokenPrices;
function convertToTokenAmount(usd, tokenDecimals, price) {
    if (usd === undefined || typeof tokenDecimals !== "number" || price === undefined || price <= 0) {
        return undefined;
    }
    return (usd * (0, numbers_1.expandDecimals)(1, tokenDecimals)) / price;
}
exports.convertToTokenAmount = convertToTokenAmount;
function convertToUsd(tokenAmount, tokenDecimals, price) {
    if (tokenAmount == undefined || typeof tokenDecimals !== "number" || price === undefined) {
        return undefined;
    }
    return (tokenAmount * price) / (0, numbers_1.expandDecimals)(1, tokenDecimals);
}
exports.convertToUsd = convertToUsd;
function getMidPrice(prices) {
    return (prices.minPrice + prices.maxPrice) / 2n;
}
exports.getMidPrice = getMidPrice;
function getIsEquivalentTokens(token1, token2) {
    if (token1.address === token2.address) {
        return true;
    }
    if (token1.wrappedAddress === token2.address || token2.wrappedAddress === token1.address) {
        return true;
    }
    if ((token1.isSynthetic || token2.isSynthetic) && token1.symbol === token2.symbol) {
        return true;
    }
    return false;
}
exports.getIsEquivalentTokens = getIsEquivalentTokens;
function getTokenData(tokensData, address, convertTo) {
    if (!address || !tokensData?.[address]) {
        return undefined;
    }
    const token = tokensData[address];
    if (convertTo === "wrapped" && token.isNative && token.wrappedAddress) {
        return tokensData[token.wrappedAddress];
    }
    if (convertTo === "native" && token.isWrapped) {
        return tokensData[tokens_1.NATIVE_TOKEN_ADDRESS];
    }
    return token;
}
exports.getTokenData = getTokenData;
/**
 * Even though its not a generic function, it return the same type as the input.
 * If `TokenData` is passed, it returns `TokenData`, if `Token` is passed, it returns `Token`.
 */
function getTokensRatioByAmounts(p) {
    const { fromToken, toToken, fromTokenAmount, toTokenAmount } = p;
    const adjustedFromAmount = (fromTokenAmount * numbers_1.PRECISION) / (0, numbers_1.expandDecimals)(1, fromToken.decimals);
    const adjustedToAmount = (toTokenAmount * numbers_1.PRECISION) / (0, numbers_1.expandDecimals)(1, toToken.decimals);
    const [smallestToken, largestToken, largestAmount, smallestAmount] = adjustedFromAmount > adjustedToAmount
        ? [fromToken, toToken, adjustedFromAmount, adjustedToAmount]
        : [toToken, fromToken, adjustedToAmount, adjustedFromAmount];
    const ratio = smallestAmount > 0 ? (largestAmount * numbers_1.PRECISION) / smallestAmount : 0n;
    return { ratio, largestToken, smallestToken };
}
exports.getTokensRatioByAmounts = getTokensRatioByAmounts;
function getTokensRatioByMinOutputAmountAndTriggerPrice(p) {
    const { fromToken, toToken, fromTokenAmount, toTokenAmount, triggerPrice, minOutputAmount } = p;
    let allowedSwapSlippageBps = factors_1.DEFAULT_ALLOWED_SWAP_SLIPPAGE_BPS;
    let smallestToken = fromToken;
    let largestToken = toToken;
    let largestAmount = fromTokenAmount;
    let smallestAmount = toTokenAmount;
    let acceptablePrice = 0n;
    let ratio = 0n;
    const adjustedFromAmount = (fromTokenAmount * numbers_1.PRECISION) / (0, numbers_1.expandDecimals)(1, fromToken.decimals);
    const adjustedToAmount = (minOutputAmount * numbers_1.PRECISION) / (0, numbers_1.expandDecimals)(1, toToken.decimals);
    const adjustedMinOutputAmount = (minOutputAmount * numbers_1.PRECISION) / (0, numbers_1.expandDecimals)(1, toToken.decimals);
    [smallestToken, largestToken, largestAmount, smallestAmount] =
        adjustedFromAmount > adjustedToAmount
            ? [fromToken, toToken, adjustedFromAmount, adjustedToAmount]
            : [toToken, fromToken, adjustedToAmount, adjustedFromAmount];
    ratio = smallestAmount > 0 ? (largestAmount * numbers_1.PRECISION) / smallestAmount : 0n;
    if (triggerPrice === 0n) {
        allowedSwapSlippageBps = factors_1.DEFAULT_ALLOWED_SWAP_SLIPPAGE_BPS;
        acceptablePrice = ratio;
    }
    else {
        const outputAtTriggerPrice = adjustedFromAmount > adjustedToAmount
            ? (adjustedFromAmount * numbers_1.PRECISION) / triggerPrice
            : (adjustedFromAmount * triggerPrice) / numbers_1.PRECISION;
        allowedSwapSlippageBps =
            ((outputAtTriggerPrice - adjustedMinOutputAmount) * factors_1.BASIS_POINTS_DIVISOR_BIGINT) / outputAtTriggerPrice;
        acceptablePrice = ratio;
        ratio = triggerPrice;
    }
    return { ratio, largestToken, smallestToken, allowedSwapSlippageBps, acceptablePrice };
}
exports.getTokensRatioByMinOutputAmountAndTriggerPrice = getTokensRatioByMinOutputAmountAndTriggerPrice;
function getAmountByRatio(p) {
    const { fromToken, toToken, fromTokenAmount, ratio, shouldInvertRatio, allowedSwapSlippageBps } = p;
    if (getIsEquivalentTokens(fromToken, toToken) || fromTokenAmount === 0n) {
        return p.fromTokenAmount;
    }
    const _ratio = shouldInvertRatio ? (numbers_1.PRECISION * numbers_1.PRECISION) / ratio : ratio;
    const adjustedDecimalsRatio = (0, numbers_1.adjustForDecimals)(_ratio, fromToken.decimals, toToken.decimals);
    const amount = (p.fromTokenAmount * adjustedDecimalsRatio) / numbers_1.PRECISION;
    const swapSlippageAmount = allowedSwapSlippageBps !== undefined
        ? bigmath_1.bigMath.mulDiv(amount, allowedSwapSlippageBps, factors_1.BASIS_POINTS_DIVISOR_BIGINT)
        : 0n;
    return amount - swapSlippageAmount;
}
exports.getAmountByRatio = getAmountByRatio;
