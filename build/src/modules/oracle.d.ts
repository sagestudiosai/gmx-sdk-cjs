import type { GmxSdk } from "../index";
import { MarketSdkConfig } from "../types/markets";
export type TickersResponse = {
    minPrice: string;
    maxPrice: string;
    oracleDecimals: number;
    tokenSymbol: string;
    tokenAddress: string;
    updatedAt: number;
}[];
export type TokensResponse = {
    symbol: string;
    address: string;
    decimals: number;
    synthetic: boolean;
}[];
export declare class Oracle {
    sdk: GmxSdk;
    private url;
    constructor(sdk: GmxSdk);
    getMarkets(): Promise<MarketSdkConfig[]>;
    getTokens(): Promise<TokensResponse>;
    getTickers(): Promise<TickersResponse>;
}
