import { Chain } from "viem/chains";
export declare const AVALANCHE = 43114;
export declare const AVALANCHE_FUJI = 43113;
export declare const ARBITRUM = 42161;
export declare const BSС_MAINNET = 56;
export declare const BSС_TESTNET = 97;
export declare const ETH_MAINNET = 1;
export declare const SUPPORTED_CHAIN_IDS: number[];
export declare const SUPPORTED_CHAIN_IDS_DEV: number[];
export declare const HIGH_EXECUTION_FEES_MAP: {
    42161: number;
    43114: number;
    43113: number;
};
export declare const MAX_FEE_PER_GAS_MAP: {
    43114: bigint;
};
export declare const GAS_PRICE_PREMIUM_MAP: {
    42161: bigint;
    43114: bigint;
};
export declare const MAX_PRIORITY_FEE_PER_GAS_MAP: Record<number, bigint | undefined>;
export declare const EXCESSIVE_EXECUTION_FEES_MAP: {
    42161: number;
    43114: number;
    43113: number;
};
export declare const GAS_PRICE_BUFFER_MAP: {
    42161: bigint;
};
export declare const getChain: (chainId: number) => Chain;
export declare function getHighExecutionFee(chainId: any): any;
export declare function getExcessiveExecutionFee(chainId: any): any;
export declare function isSupportedChain(chainId: number, dev?: boolean): boolean;
export declare const EXECUTION_FEE_CONFIG_V2: {
    [chainId: number]: {
        shouldUseMaxPriorityFeePerGas: boolean;
        defaultBufferBps?: number;
    };
};
