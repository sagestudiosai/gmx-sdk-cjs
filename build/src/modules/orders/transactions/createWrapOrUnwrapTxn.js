"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWrapOrUnwrapTxn = void 0;
const tokens_1 = require("../../../configs/tokens");
const abis_1 = require("abis");
function createWrapOrUnwrapTxn(sdk, p) {
    const wrappedToken = (0, tokens_1.getWrappedToken)(sdk.chainId);
    if (p.isWrap) {
        return sdk.callContract(wrappedToken.address, abis_1.abis.WETH, "deposit", [], {
            value: p.amount,
        });
    }
    else {
        return sdk.callContract(wrappedToken.address, abis_1.abis.WETH, "withdraw", [p.amount]);
    }
}
exports.createWrapOrUnwrapTxn = createWrapOrUnwrapTxn;
