"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oracle = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const buildUrl_1 = require("../utils/buildUrl");
class Oracle {
    constructor(sdk) {
        this.sdk = sdk;
        this.url = sdk.config.oracleUrl;
    }
    getMarkets() {
        return (0, cross_fetch_1.default)((0, buildUrl_1.buildUrl)(this.url, "/markets"))
            .then((res) => res.json())
            .then((res) => {
            if (!res.markets || !res.markets.length) {
                throw new Error("Invalid markets response");
            }
            return res.markets;
        });
    }
    getTokens() {
        return (0, cross_fetch_1.default)((0, buildUrl_1.buildUrl)(this.url, "/tokens"))
            .then((res) => res.json())
            .then((res) => res.tokens.map(({ synthetic, ...rest }) => {
            return {
                ...rest,
                isSynthetic: synthetic,
            };
        }));
    }
    getTickers() {
        return (0, cross_fetch_1.default)((0, buildUrl_1.buildUrl)(this.url, "/prices/tickers"))
            .then((res) => res.json())
            .then((res) => {
            if (!res.length) {
                throw new Error("Invalid tickers response");
            }
            return res;
        });
    }
}
exports.Oracle = Oracle;
