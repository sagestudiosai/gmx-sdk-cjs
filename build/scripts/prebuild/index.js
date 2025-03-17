"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const prebuildMarketValuesKeys_1 = require("./prebuildMarketValuesKeys");
const prebuildMarketConfigKeys_1 = require("./prebuildMarketConfigKeys");
const prebuildKinkModelMarketRatesKeys_1 = require("./prebuildKinkModelMarketRatesKeys");
/* eslint-disable-next-line no-restricted-globals */
const OUTPUT_DIR = (0, path_1.resolve)(process.cwd(), "src/prebuilt");
(0, prebuildMarketValuesKeys_1.prebuildMarketValuesKeys)(OUTPUT_DIR);
(0, prebuildMarketConfigKeys_1.prebuildMarketConfigKeys)(OUTPUT_DIR);
(0, prebuildKinkModelMarketRatesKeys_1.prebuildKinkModelMarketRatesKeys)(OUTPUT_DIR);
