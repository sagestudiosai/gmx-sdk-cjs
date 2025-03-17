"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmxSdk = void 0;
const viem_1 = require("viem");
const accounts_1 = require("./modules/accounts/accounts");
const markets_1 = require("./modules/markets");
const oracle_1 = require("./modules/oracle");
const orders_1 = require("./modules/orders/orders");
const positions_1 = require("./modules/positions/positions");
const tokens_1 = require("./modules/tokens/tokens");
const trades_1 = require("./modules/trades/trades");
const utils_1 = require("./modules/utils/utils");
const batch_1 = require("./configs/batch");
const chains_1 = require("./configs/chains");
const callContract_1 = require("./utils/callContract");
const multicall_1 = require("./utils/multicall");
class GmxSdk {
    constructor(config, tgWallet) {
        this.config = config;
        this.markets = new markets_1.Markets(this);
        this.tokens = new tokens_1.Tokens(this);
        this.positions = new positions_1.Positions(this);
        this.orders = new orders_1.Orders(this);
        this.trades = new trades_1.Trades(this);
        this.accounts = new accounts_1.Accounts(this);
        this.utils = new utils_1.Utils(this);
        this.oracle = new oracle_1.Oracle(this);
        this.tgWallet = tgWallet;
        this.publicClient =
            config.publicClient ??
                (0, viem_1.createPublicClient)({
                    transport: (0, viem_1.http)(this.config.rpcUrl, {
                        // retries works strangely in viem, so we disable them
                        retryCount: 0,
                        retryDelay: 10000000,
                        batch: batch_1.BATCH_CONFIGS[this.config.chainId].http,
                        timeout: multicall_1.MAX_TIMEOUT,
                    }),
                    pollingInterval: undefined,
                    batch: batch_1.BATCH_CONFIGS[this.config.chainId].client,
                    chain: (0, chains_1.getChain)(this.config.chainId),
                });
        this.walletClient =
            config.walletClient ??
                (0, viem_1.createWalletClient)({
                    account: config.account,
                    chain: (0, chains_1.getChain)(config.chainId),
                    transport: (0, viem_1.http)(config.rpcUrl, {
                        retryCount: 0,
                        retryDelay: 10000000,
                        batch: batch_1.BATCH_CONFIGS[config.chainId].http,
                        timeout: multicall_1.MAX_TIMEOUT,
                    }),
                });
    }
    setAccount(account) {
        this.config.account = account;
    }
    async executeMulticall(request) {
        const multicall = await multicall_1.Multicall.getInstance(this);
        return multicall?.call(request, multicall_1.MAX_TIMEOUT);
    }
    async callContract(address, abi, method, params, opts) {
        return (0, callContract_1.callContract)(this, address, abi, method, params, opts);
    }
    get chainId() {
        return this.config.chainId;
    }
    get chain() {
        return (0, chains_1.getChain)(this.chainId);
    }
    get account() {
        return this.config.account;
    }
}
exports.GmxSdk = GmxSdk;
