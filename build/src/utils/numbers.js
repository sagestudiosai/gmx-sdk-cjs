"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustForDecimals = exports.bigintToNumber = exports.numberToBigint = exports.applyFactor = exports.roundUpMagnitudeDivision = exports.getBasisPoints = exports.basisPointsToFloat = exports.expandDecimals = exports.BN_NEGATIVE_ONE = exports.BN_ONE = exports.BN_ZERO = exports.PRECISION = void 0;
const factors_1 = require("../configs/factors");
exports.PRECISION = expandDecimals(1, 30);
exports.BN_ZERO = 0n;
exports.BN_ONE = 1n;
exports.BN_NEGATIVE_ONE = -1n;
function expandDecimals(n, decimals) {
    return BigInt(n) * 10n ** BigInt(decimals);
}
exports.expandDecimals = expandDecimals;
function basisPointsToFloat(basisPoints) {
    return (basisPoints * exports.PRECISION) / factors_1.BASIS_POINTS_DIVISOR_BIGINT;
}
exports.basisPointsToFloat = basisPointsToFloat;
function getBasisPoints(numerator, denominator, shouldRoundUp = false) {
    const result = (numerator * factors_1.BASIS_POINTS_DIVISOR_BIGINT) / denominator;
    if (shouldRoundUp) {
        const remainder = (numerator * factors_1.BASIS_POINTS_DIVISOR_BIGINT) % denominator;
        if (remainder !== 0n) {
            return result < 0n ? result - 1n : result + 1n;
        }
    }
    return result;
}
exports.getBasisPoints = getBasisPoints;
function roundUpMagnitudeDivision(a, b) {
    if (a < 0n) {
        return (a - b + 1n) / b;
    }
    return (a + b - 1n) / b;
}
exports.roundUpMagnitudeDivision = roundUpMagnitudeDivision;
function applyFactor(value, factor) {
    return (value * factor) / exports.PRECISION;
}
exports.applyFactor = applyFactor;
function numberToBigint(value, decimals) {
    const negative = value < 0;
    if (negative)
        value *= -1;
    const int = Math.trunc(value);
    let frac = value - int;
    let res = BigInt(int);
    for (let i = 0; i < decimals; i++) {
        res *= 10n;
        if (frac !== 0) {
            frac *= 10;
            const fracInt = Math.trunc(frac);
            res += BigInt(fracInt);
            frac -= fracInt;
        }
    }
    return negative ? -res : res;
}
exports.numberToBigint = numberToBigint;
function bigintToNumber(value, decimals) {
    const negative = value < 0;
    if (negative)
        value *= -1n;
    const precision = 10n ** BigInt(decimals);
    const int = value / precision;
    const frac = value % precision;
    const num = parseFloat(`${int}.${frac.toString().padStart(decimals, "0")}`);
    return negative ? -num : num;
}
exports.bigintToNumber = bigintToNumber;
function adjustForDecimals(amount, divDecimals, mulDecimals) {
    return (amount * expandDecimals(1, mulDecimals)) / expandDecimals(1, divDecimals);
}
exports.adjustForDecimals = adjustForDecimals;
