"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prebuildMarketConfigKeys = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const entries_1 = __importDefault(require("lodash/entries"));
const markets_1 = require("../../src/configs/markets");
const marketKeysAndConfigs_1 = require("../../src/utils/marketKeysAndConfigs");
function prebuildMarketConfigKeys(outputDir) {
    const chainMarketKeys = (0, entries_1.default)(markets_1.MARKETS).reduce((chainsAcc, [chainId, markets]) => {
        const chainMarkets = (0, entries_1.default)(markets).reduce((marketsAcc, [marketAddress, market]) => {
            const marketKeys = (0, marketKeysAndConfigs_1.hashMarketConfigKeys)(market);
            marketsAcc[marketAddress] = marketKeys;
            return marketsAcc;
        }, {});
        chainsAcc[chainId] = chainMarkets;
        return chainsAcc;
    }, {});
    fs_1.default.writeFileSync((0, path_1.resolve)(outputDir, "hashedMarketConfigKeys.json"), JSON.stringify(chainMarketKeys, null, 2));
    return chainMarketKeys;
}
exports.prebuildMarketConfigKeys = prebuildMarketConfigKeys;
