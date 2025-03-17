"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteByKey = exports.getByKey = exports.updateByKey = exports.setByKey = void 0;
function setByKey(obj, key, data) {
    return { ...obj, [key]: data };
}
exports.setByKey = setByKey;
function updateByKey(obj, key, data) {
    if (!obj[key])
        return obj;
    return { ...obj, [key]: { ...obj[key], ...data } };
}
exports.updateByKey = updateByKey;
function getByKey(obj, key) {
    if (!obj || !key)
        return undefined;
    return obj[key];
}
exports.getByKey = getByKey;
function deleteByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}
exports.deleteByKey = deleteByKey;
