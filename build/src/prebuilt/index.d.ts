import { MarketConfigMulticallRequestConfig, MarketValuesMulticallRequestConfig, KinkModelMarketRateMulticallRequestConfig } from "../modules/markets/types";
type HashedMarketValuesKeys = Omit<Record<keyof MarketValuesMulticallRequestConfig[`${string}-dataStore`]["calls"], string>, "claimableFundingAmountLong" | "claimableFundingAmountShort">;
declare const HASHED_MARKET_VALUES_KEYS: {
    [chainId: number]: {
        [marketToken: string]: HashedMarketValuesKeys;
    };
};
type HashedMarketConfigKeys = Record<keyof MarketConfigMulticallRequestConfig[`${string}-dataStore`]["calls"], string>;
declare const HASHED_MARKET_CONFIG_KEYS: {
    [chainId: number]: {
        [marketToken: string]: HashedMarketConfigKeys;
    };
};
type HashedKinkModelMarketRatesConfigKeys = Record<keyof KinkModelMarketRateMulticallRequestConfig[`${string}-dataStore`]["calls"], string>;
declare const HASHED_KINK_MODEL_MARKET_RATES_KEYS: {
    [chainId: number]: {
        [marketToken: string]: HashedKinkModelMarketRatesConfigKeys;
    };
};
export { HASHED_MARKET_VALUES_KEYS, HASHED_MARKET_CONFIG_KEYS, HASHED_KINK_MODEL_MARKET_RATES_KEYS };
