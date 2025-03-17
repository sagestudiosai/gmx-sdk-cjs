"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashDataMap = exports.hashString = exports.hashData = void 0;
const viem_1 = require("viem");
const LruCache_1 = require("./LruCache");
const dataCache = new LruCache_1.LRUCache(10000);
function hashData(dataTypes, dataValues) {
    const key = JSON.stringify({ dataTypes, dataValues }, (_, val) => (typeof val === "bigint" ? String(val) : val));
    if (dataCache.has(key)) {
        return dataCache.get(key);
    }
    // Convert dataTypes from array of strings to array of objects with 'type' property
    const abiParameters = dataTypes.map((type) => ({ type }));
    const bytes = (0, viem_1.encodeAbiParameters)(abiParameters, dataValues);
    const hash = (0, viem_1.keccak256)(bytes);
    dataCache.set(key, hash);
    return hash;
}
exports.hashData = hashData;
const stringCache = new LruCache_1.LRUCache(10000);
function hashString(string) {
    if (stringCache.has(string)) {
        return stringCache.get(string);
    }
    const hash = hashData(["string"], [string]);
    stringCache.set(string, hash);
    return hash;
}
exports.hashString = hashString;
function hashDataMap(map) {
    const result = {};
    for (const key of Object.keys(map)) {
        if (!map[key]) {
            continue;
        }
        const [dataTypes, dataValues] = map[key];
        result[key] = hashData(dataTypes, dataValues);
    }
    return result;
}
exports.hashDataMap = hashDataMap;
