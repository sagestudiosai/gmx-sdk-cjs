export type MarketConfig = {
    marketTokenAddress: string;
    indexTokenAddress: string;
    longTokenAddress: string;
    shortTokenAddress: string;
};
export declare const MARKETS: Record<string, Record<string, MarketConfig>>;
