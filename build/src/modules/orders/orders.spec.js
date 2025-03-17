"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const testUtil_1 = require("../../utils/testUtil");
(0, vitest_1.describe)("Positions", () => {
    (0, vitest_1.describe)("read", () => {
        (0, vitest_1.it)("should be able to get orders", async () => {
            const { marketsInfoData, tokensData } = (await testUtil_1.arbitrumSdk.markets.getMarketsInfo()) ?? {};
            if (!tokensData || !marketsInfoData) {
                throw new Error("Tokens data or markets info is not available");
            }
            const orders = await testUtil_1.arbitrumSdk.orders.getOrders({
                marketsInfoData,
                tokensData,
            });
            (0, vitest_1.expect)(orders).toBeDefined();
        });
    });
});
