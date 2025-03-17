"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const factors_1 = require("../../configs/factors");
const numbers_1 = require("../numbers");
(0, vitest_1.describe)("numbers utils", () => {
    (0, vitest_1.it)("constants", () => {
        // Just to confirm they exist and have no unexpected changes
        (0, vitest_1.expect)(numbers_1.PRECISION).toBe((0, numbers_1.expandDecimals)(1, 30));
        (0, vitest_1.expect)(numbers_1.BN_ZERO).toBe(0n);
        (0, vitest_1.expect)(numbers_1.BN_ONE).toBe(1n);
        (0, vitest_1.expect)(numbers_1.BN_NEGATIVE_ONE).toBe(-1n);
    });
    (0, vitest_1.describe)("expandDecimals", () => {
        (0, vitest_1.it)("multiplies by 10^decimals", () => {
            (0, vitest_1.expect)((0, numbers_1.expandDecimals)(1, 0)).toBe(1n);
            (0, vitest_1.expect)((0, numbers_1.expandDecimals)(1, 1)).toBe(10n);
            (0, vitest_1.expect)((0, numbers_1.expandDecimals)(1, 2)).toBe(100n);
            (0, vitest_1.expect)((0, numbers_1.expandDecimals)(5, 3)).toBe(5000n);
        });
        (0, vitest_1.it)("handles zero gracefully", () => {
            (0, vitest_1.expect)((0, numbers_1.expandDecimals)(0, 5)).toBe(0n);
        });
    });
    (0, vitest_1.describe)("basisPointsToFloat", () => {
        (0, vitest_1.it)("converts basis points to scaled big int float using PRECISION", () => {
            const result = (0, numbers_1.basisPointsToFloat)(100n);
            (0, vitest_1.expect)(result).toBe((0, numbers_1.expandDecimals)(1, 28));
        });
    });
    (0, vitest_1.describe)("getBasisPoints", () => {
        (0, vitest_1.it)("calculates basis points as (numerator * 10000) / denominator", () => {
            (0, vitest_1.expect)((0, numbers_1.getBasisPoints)(2n, 1n)).toBe(2n * factors_1.BASIS_POINTS_DIVISOR_BIGINT);
            (0, vitest_1.expect)((0, numbers_1.getBasisPoints)(1n, 2n)).toBe(5000n);
        });
        (0, vitest_1.it)("rounds up if remainder != 0 and shouldRoundUp=true", () => {
            (0, vitest_1.expect)((0, numbers_1.getBasisPoints)(7n, 3n, true)).toBe(23334n);
        });
        (0, vitest_1.it)("returns same result if remainder=0, even if shouldRoundUp=true", () => {
            (0, vitest_1.expect)((0, numbers_1.getBasisPoints)(2n, 1n, true)).toBe(20000n);
        });
    });
    (0, vitest_1.describe)("roundUpMagnitudeDivision", () => {
        (0, vitest_1.it)("rounds positive numbers up", () => {
            (0, vitest_1.expect)((0, numbers_1.roundUpMagnitudeDivision)(10n, 3n)).toBe(4n);
            (0, vitest_1.expect)((0, numbers_1.roundUpMagnitudeDivision)(9n, 3n)).toBe(3n);
        });
        (0, vitest_1.it)("rounds negative numbers up in magnitude", () => {
            (0, vitest_1.expect)((0, numbers_1.roundUpMagnitudeDivision)(-10n, 3n)).toBe(-4n);
        });
    });
    (0, vitest_1.describe)("applyFactor", () => {
        (0, vitest_1.it)("applies factor by (value * factor)/PRECISION", () => {
            const value = (0, numbers_1.expandDecimals)(100, 30);
            const factor = 200n;
            (0, vitest_1.expect)((0, numbers_1.applyFactor)(value, factor)).toBe(20000n);
        });
    });
    (0, vitest_1.it)("bigintToNumber", () => {
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(0n, 30)).toEqual(0);
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(1n, 30)).toEqual(1e-30);
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(numbers_1.PRECISION, 30)).toEqual(1);
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(numbers_1.PRECISION * 100n, 30)).toEqual(100);
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(numbers_1.PRECISION * 2n, 30)).toEqual(2);
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(numbers_1.PRECISION / 2n, 30)).toEqual(0.5);
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(1123456n, 6)).toEqual(1.123456);
        (0, vitest_1.expect)((0, numbers_1.bigintToNumber)(-1123456n, 6)).toEqual(-1.123456);
    });
    (0, vitest_1.it)("numberToBigint", () => {
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(0, 30)).toEqual(0n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(1e-30, 30)).toEqual(1n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(-1e-30, 30)).toEqual(-1n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(1, 30)).toEqual(numbers_1.PRECISION);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(100, 30)).toEqual(numbers_1.PRECISION * 100n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(2, 30)).toEqual(numbers_1.PRECISION * 2n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(0.5, 30)).toEqual(numbers_1.PRECISION / 2n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(-0.5, 30)).toEqual(-numbers_1.PRECISION / 2n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(1.1234567, 6)).toEqual(1123456n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(1.12345678, 6)).toEqual(1123456n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(1.123456789, 6)).toEqual(1123456n);
        (0, vitest_1.expect)((0, numbers_1.numberToBigint)(-1.123456789, 6)).toEqual(-1123456n);
    });
});
