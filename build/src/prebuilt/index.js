"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HASHED_KINK_MODEL_MARKET_RATES_KEYS = exports.HASHED_MARKET_CONFIG_KEYS = exports.HASHED_MARKET_VALUES_KEYS = void 0;
/**
 * Json files in this directory are prebuild by scripts from the `scripts/prebuild` directory.
 * No need to edit them manually, use `yarn run prebuild` command instead.
 */
const hashedMarketValuesKeys_json_1 = __importDefault(require("./hashedMarketValuesKeys.json"));
const hashedMarketConfigKeys_json_1 = __importDefault(require("./hashedMarketConfigKeys.json"));
const hashedKinkModelMarketRatesKeys_json_1 = __importDefault(require("./hashedKinkModelMarketRatesKeys.json"));
const HASHED_MARKET_VALUES_KEYS = hashedMarketValuesKeys_json_1.default;
exports.HASHED_MARKET_VALUES_KEYS = HASHED_MARKET_VALUES_KEYS;
const HASHED_MARKET_CONFIG_KEYS = hashedMarketConfigKeys_json_1.default;
exports.HASHED_MARKET_CONFIG_KEYS = HASHED_MARKET_CONFIG_KEYS;
const HASHED_KINK_MODEL_MARKET_RATES_KEYS = hashedKinkModelMarketRatesKeys_json_1.default;
exports.HASHED_KINK_MODEL_MARKET_RATES_KEYS = HASHED_KINK_MODEL_MARKET_RATES_KEYS;
