"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const testUtil_1 = require("../../utils/testUtil");
(0, vitest_1.describe)("Accounts", () => {
    (0, vitest_1.it)("should be able to get delegates", async () => {
        const delegates = await testUtil_1.arbitrumSdk.accounts.getGovTokenDelegates();
        (0, vitest_1.expect)(delegates).toBeDefined();
    });
});
