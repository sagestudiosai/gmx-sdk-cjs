import { Token, TokenCategory } from "../types/tokens";
export declare const NATIVE_TOKEN_ADDRESS: "0x0000000000000000000000000000000000000000";
export declare const TOKENS: {
    [chainId: number]: Token[];
};
export declare const TOKEN_COLOR_MAP: {
    ETH: string;
    BTC: string;
    WBTC: string;
    USDC: string;
    "USDC.E": string;
    USDT: string;
    MIM: string;
    FRAX: string;
    DAI: string;
    UNI: string;
    AVAX: string;
    LINK: string;
    DOGE: string;
    SOL: string;
    ARB: string;
    NEAR: string;
    BNB: string;
    ATOM: string;
    XRP: string;
    LTC: string;
    OP: string;
    DOT: string;
    tBTC: string;
    TEST: string;
    SHIB: string;
    STX: string;
    ORDI: string;
    MATIC: string;
    EIGEN: string;
    SATS: string;
    default: string;
};
export declare const TOKENS_MAP: {
    [chainId: number]: {
        [address: string]: Token;
    };
};
export declare const V1_TOKENS: {
    [chainId: number]: Token[];
};
export declare const V2_TOKENS: {
    [chainId: number]: Token[];
};
export declare const SYNTHETIC_TOKENS: {
    [chainId: number]: Token[];
};
export declare const TOKENS_BY_SYMBOL_MAP: {
    [chainId: number]: {
        [symbol: string]: Token;
    };
};
export declare const WRAPPED_TOKENS_MAP: {
    [chainId: number]: Token;
};
export declare const NATIVE_TOKENS_MAP: {
    [chainId: number]: Token;
};
export declare function getSyntheticTokens(chainId: number): Token[];
export declare function getWrappedToken(chainId: number): Token;
export declare function getNativeToken(chainId: number): Token;
export declare function getTokens(chainId: number): Token[];
export declare function getV1Tokens(chainId: number): Token[];
export declare function getV2Tokens(chainId: number): Token[];
export declare function getTokensMap(chainId: number): {
    [address: string]: Token;
};
export declare function getWhitelistedV1Tokens(chainId: number): Token[];
export declare function getVisibleV1Tokens(chainId: number): Token[];
export declare function isValidToken(chainId: number, address: string): boolean;
export declare function getToken(chainId: number, address: string): Token;
export declare function getTokenBySymbol(chainId: number, symbol: string, { isSynthetic, version, symbolType, }?: {
    isSynthetic?: boolean;
    version?: "v1" | "v2";
    symbolType?: "symbol" | "baseSymbol";
}): Token;
export declare function convertTokenAddress(chainId: number, address: string, convertTo?: "wrapped" | "native"): string;
export declare function getNormalizedTokenSymbol(tokenSymbol: any): any;
export declare function isChartAvailableForToken(chainId: number, tokenSymbol: string): boolean;
export declare function getPriceDecimals(chainId: number, tokenSymbol?: string): number;
export declare function getTokenBySymbolSafe(chainId: number, symbol: string, params?: Parameters<typeof getTokenBySymbol>[2]): Token | undefined;
export declare function isTokenInList(token: Token, tokenList: Token[]): boolean;
export declare function isSimilarToken(tokenA: Token, tokenB: Token): boolean;
export declare function getTokenVisualMultiplier(token: Token): string;
export declare function getStableTokens(chainId: number): Token[];
export declare function getCategoryTokenAddresses(chainId: number, category: TokenCategory): string[];
export declare const createTokensMap: (tokens: Token[]) => {};
