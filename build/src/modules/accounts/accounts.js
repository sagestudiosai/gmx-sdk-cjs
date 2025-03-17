"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const contracts_1 = require("../../configs/contracts");
const base_1 = require("../base");
class Accounts extends base_1.Module {
    get govTokenAddress() {
        let govTokenAddress;
        try {
            govTokenAddress = (0, contracts_1.getContract)(this.chainId, "GovToken");
        }
        catch (e) {
            govTokenAddress = null;
        }
        return govTokenAddress;
    }
    getGovTokenDelegates(account) {
        if (!this.govTokenAddress) {
            return Promise.resolve([]);
        }
        return this.sdk
            .executeMulticall({
            govToken: {
                contractAddress: this.govTokenAddress,
                abiId: "GovToken",
                calls: {
                    delegates: {
                        methodName: "delegates",
                        params: [account ?? this.account],
                    },
                },
            },
        })
            .then((res) => {
            return res.data.govToken.delegates.returnValues[0];
        });
    }
}
exports.Accounts = Accounts;
