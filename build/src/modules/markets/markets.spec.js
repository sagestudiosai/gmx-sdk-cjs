"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const testUtil_1 = require("../../utils/testUtil");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("Markets", () => {
    (0, vitest_1.describe)("getMarkets", () => {
        (0, vitest_1.it)("should be able to get markets data", async () => {
            const marketsData = await testUtil_1.arbitrumSdk.markets.getMarkets();
            (0, vitest_1.expect)(marketsData.marketsAddresses).toBeDefined();
            (0, vitest_1.expect)(marketsData.marketsData).toBeDefined();
        });
        (0, vitest_1.it)("should respect config filters", async () => {
            const sdk = new index_1.GmxSdk({
                ...testUtil_1.arbitrumSdkConfig,
                markets: {
                    "0x47c031236e19d024b42f8AE6780E44A573170703": {
                        isListed: false,
                    },
                },
            });
            const baseSdkResponse = await testUtil_1.arbitrumSdk.markets.getMarkets();
            const sdkResponse = await sdk.markets.getMarkets();
            (0, vitest_1.expect)(baseSdkResponse.marketsData?.["0x47c031236e19d024b42f8AE6780E44A573170703"]).toBeDefined();
            (0, vitest_1.expect)(sdkResponse.marketsData?.["0x47c031236e19d024b42f8AE6780E44A573170703"]).not.toBeDefined();
        });
    });
    (0, vitest_1.describe)("getMarketsInfo", () => {
        (0, vitest_1.it)("should be able to get markets info", async () => {
            const response = await testUtil_1.arbitrumSdk.markets.getMarketsInfo();
            (0, vitest_1.expect)(response).toBeDefined();
        });
    });
    (0, vitest_1.describe)("getDailyVolumes", () => {
        (0, vitest_1.it)("should be able to get daily volumes", async () => {
            const response = await testUtil_1.arbitrumSdk.markets.getDailyVolumes();
            (0, vitest_1.expect)(response).toBeDefined();
        }, 30000);
    });
});
