"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arbitrumSdk = exports.arbitrumSdkConfig = void 0;
const viem_1 = require("viem");
const chains_1 = require("../configs/chains");
const index_1 = require("../index");
const client = (0, viem_1.createTestClient)({
    chain: (0, chains_1.getChain)(chains_1.ARBITRUM),
    mode: "hardhat",
    transport: (0, viem_1.http)(),
})
    .extend(viem_1.publicActions)
    .extend(viem_1.walletActions);
exports.arbitrumSdkConfig = {
    chainId: chains_1.ARBITRUM,
    account: "0x9f7198eb1b9Ccc0Eb7A07eD228d8FbC12963ea33",
    oracleUrl: "https://arbitrum-api.gmxinfra.io",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    walletClient: client,
    subsquidUrl: "https://gmx.squids.live/gmx-synthetics-arbitrum:live/api/graphql",
    subgraphUrl: "https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/synthetics-arbitrum-stats/api",
};
exports.arbitrumSdk = new index_1.GmxSdk(exports.arbitrumSdkConfig);
