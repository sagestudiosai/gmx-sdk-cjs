"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const objects_1 = require("../objects");
(0, vitest_1.describe)("setByKey", () => {
    (0, vitest_1.it)("should set a key in an object", () => {
        const obj = { a: 1, b: 2 };
        const key = "c";
        const data = 3;
        (0, vitest_1.expect)((0, objects_1.setByKey)(obj, key, data)).toEqual({ a: 1, b: 2, c: 3 });
    });
    (0, vitest_1.it)("should set a key in an empty object", () => {
        const obj = {};
        const key = "c";
        const data = 3;
        (0, vitest_1.expect)((0, objects_1.setByKey)(obj, key, data)).toEqual({ c: 3 });
    });
    (0, vitest_1.it)("should set a key in an object with existing key", () => {
        const obj = { a: 1, b: 2 };
        const key = "b";
        const data = 3;
        (0, vitest_1.expect)((0, objects_1.setByKey)(obj, key, data)).toEqual({ a: 1, b: 3 });
    });
});
(0, vitest_1.describe)("updateByKey", () => {
    (0, vitest_1.it)("should update a key in an object", () => {
        const obj = { a: { x: 1, y: 2 }, b: { x: 3, y: 4 } };
        const key = "b";
        const data = { y: 5 };
        (0, vitest_1.expect)((0, objects_1.updateByKey)(obj, key, data)).toEqual({ a: { x: 1, y: 2 }, b: { x: 3, y: 5 } });
    });
    (0, vitest_1.it)("should update a key in an empty object", () => {
        const obj = {};
        const key = "b";
        const data = { y: 5 };
        (0, vitest_1.expect)((0, objects_1.updateByKey)(obj, key, data)).toEqual({});
    });
    (0, vitest_1.it)("should update a key in an object with non-existing key", () => {
        const obj = { a: { x: 1, y: 2 }, b: { x: 3, y: 4 } };
        const key = "c";
        const data = { y: 5 };
        (0, vitest_1.expect)((0, objects_1.updateByKey)(obj, key, data)).toEqual({ a: { x: 1, y: 2 }, b: { x: 3, y: 4 } });
    });
});
(0, vitest_1.describe)("getByKey", () => {
    (0, vitest_1.it)("should get a key in an object", () => {
        const obj = { a: 1, b: 2 };
        const key = "b";
        (0, vitest_1.expect)((0, objects_1.getByKey)(obj, key)).toEqual(2);
    });
    (0, vitest_1.it)("should get a key in an empty object", () => {
        const obj = {};
        const key = "b";
        (0, vitest_1.expect)((0, objects_1.getByKey)(obj, key)).toEqual(undefined);
    });
    (0, vitest_1.it)("should get a non-existing key in an object", () => {
        const obj = { a: 1, b: 2 };
        const key = "c";
        (0, vitest_1.expect)((0, objects_1.getByKey)(obj, key)).toEqual(undefined);
    });
});
