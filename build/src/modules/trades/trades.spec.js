"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const testUtil_1 = require("../../utils/testUtil");
(0, vitest_1.describe)("Trades", () => {
    (0, vitest_1.it)("should be able to get positions", async () => {
        const { marketsInfoData, tokensData } = await testUtil_1.arbitrumSdk.markets.getMarketsInfo();
        const trades = await testUtil_1.arbitrumSdk.trades.getTradeHistory({
            forAllAccounts: false,
            pageSize: 50,
            marketsInfoData,
            tokensData,
            pageIndex: 0,
        });
        (0, vitest_1.expect)(trades).toBeDefined();
    });
});
