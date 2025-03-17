"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokens = void 0;
const contracts_1 = require("../../configs/contracts");
const tokens_1 = require("../../configs/tokens");
const base_1 = require("../base");
const tokens_2 = require("../../utils/tokens");
class Tokens extends base_1.Module {
    constructor() {
        super(...arguments);
        this._tokensConfigs = undefined;
    }
    get tokensConfig() {
        if (this._tokensConfigs) {
            return this._tokensConfigs;
        }
        const tokenConfigs = this._tokensConfigs ?? (0, tokens_1.getTokensMap)(this.chainId);
        Object.entries(this.sdk.config.tokens ?? []).forEach(([address, token]) => {
            tokenConfigs[address] = {
                ...tokenConfigs[address],
                ...token,
            };
        });
        this._tokensConfigs = tokenConfigs;
        return tokenConfigs;
    }
    getTokenRecentPrices() {
        return this.oracle.getTickers().then((priceItems) => {
            const result = {};
            priceItems.forEach((priceItem) => {
                let tokenConfig;
                try {
                    tokenConfig = (0, tokens_1.getToken)(this.chainId, priceItem.tokenAddress);
                }
                catch (e) {
                    // ignore unknown token errors
                    return;
                }
                result[tokenConfig.address] = {
                    minPrice: (0, tokens_2.parseContractPrice)(BigInt(priceItem.minPrice), tokenConfig.decimals),
                    maxPrice: (0, tokens_2.parseContractPrice)(BigInt(priceItem.maxPrice), tokenConfig.decimals),
                };
            });
            const wrappedToken = (0, tokens_1.getWrappedToken)(this.chainId);
            if (result[wrappedToken.address] && !result[tokens_1.NATIVE_TOKEN_ADDRESS]) {
                result[tokens_1.NATIVE_TOKEN_ADDRESS] = result[wrappedToken.address];
            }
            return {
                pricesData: result,
                updatedAt: Date.now(),
            };
        });
    }
    getTokensBalances(account, tokensList) {
        account = account || this.sdk.config.account;
        tokensList = tokensList || (0, tokens_1.getV2Tokens)(this.chainId);
        return this.sdk
            .executeMulticall(tokensList.reduce((acc, token) => {
            // Skip synthetic tokens
            if (token.isSynthetic)
                return acc;
            const address = token.address;
            if (address === tokens_1.NATIVE_TOKEN_ADDRESS) {
                acc[address] = {
                    contractAddress: (0, contracts_1.getContract)(this.chainId, "Multicall"),
                    abiId: "Multicall",
                    calls: {
                        balance: {
                            methodName: "getEthBalance",
                            params: [account],
                        },
                    },
                };
            }
            else {
                acc[address] = {
                    contractAddress: address,
                    abiId: "Token",
                    calls: {
                        balance: {
                            methodName: "balanceOf",
                            params: [account],
                        },
                    },
                };
            }
            return acc;
        }, {}))
            .then((res) => {
            return Object.keys(res.data).reduce((tokenBalances, tokenAddress) => {
                tokenBalances[tokenAddress] = res.data[tokenAddress].balance.returnValues[0];
                return tokenBalances;
            }, {});
        });
    }
    getNativeToken() {
        return this.tokensConfig[tokens_1.NATIVE_TOKEN_ADDRESS];
    }
    async getTokensData() {
        const tokenConfigs = this.tokensConfig;
        const [apiTokens, { pricesData, updatedAt: pricesUpdatedAt }] = await Promise.all([
            this.sdk.oracle.getTokens(),
            this.getTokenRecentPrices(),
        ]);
        const nativeToken = this.getNativeToken();
        const tokens = [nativeToken, ...apiTokens];
        const { balancesData } = this.account
            ? await this.getTokensBalances(this.account, tokens)
            : {
                balancesData: {},
            };
        if (!pricesData) {
            return {
                tokensData: undefined,
                pricesUpdatedAt: undefined,
            };
        }
        return {
            tokensData: tokens.reduce((acc, token) => {
                const tokenAddress = token.address;
                const prices = pricesData[tokenAddress];
                const balance = balancesData?.[tokenAddress];
                const tokenConfig = tokenConfigs[tokenAddress];
                if (!prices) {
                    return acc;
                }
                acc[tokenAddress] = {
                    ...token,
                    ...tokenConfig,
                    prices,
                    balance,
                };
                return acc;
            }, {}),
            pricesUpdatedAt,
        };
    }
}
exports.Tokens = Tokens;
