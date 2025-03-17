import { GmxSdk } from "../index";
export declare const arbitrumSdkConfig: {
    chainId: number;
    account: string;
    oracleUrl: string;
    rpcUrl: string;
    walletClient: import("viem").Client<import("viem").HttpTransport<undefined, false>, import("viem").Chain, undefined, import("viem").TestRpcSchema<"hardhat">, {
        addChain: (args: import("viem").AddChainParameters) => Promise<void>;
        deployContract: <const abi extends readonly unknown[] | import("viem").Abi, chainOverride extends import("viem").Chain | undefined>(args: import("viem").DeployContractParameters<abi, import("viem").Chain, undefined, chainOverride>) => Promise<`0x${string}`>;
        getAddresses: () => Promise<import("viem").GetAddressesReturnType>;
        getChainId: () => Promise<number>;
        getPermissions: () => Promise<import("viem").GetPermissionsReturnType>;
        prepareTransactionRequest: <const request extends import("viem").PrepareTransactionRequestRequest<import("viem").Chain, chainOverride_1>, chainOverride_1 extends import("viem").Chain | undefined = undefined, accountOverride extends `0x${string}` | import("viem").Account | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<import("viem").Chain, undefined, chainOverride_1, accountOverride, request>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride_1>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride_1> extends infer T_14 ? T_14 extends import("viem").DeriveChain<import("viem").Chain, chainOverride_1> ? T_14 extends import("viem").Chain ? {
            chain: T_14;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<undefined, accountOverride> extends infer T_15 ? T_15 extends import("viem").DeriveAccount<undefined, accountOverride> ? T_15 extends import("viem").Account ? {
            account: T_15;
            from: `0x${string}`;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_16 ? T_16 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_16 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_17 ? T_17 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_17 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_18 ? T_18 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_18 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_19 ? T_19 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_19 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_20 ? T_20 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_20 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_21 ? T_21 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_21 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_22 ? T_22 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_22 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_23 ? T_23 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_23 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_24 ? T_24 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_24 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_25 ? T_25 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_25 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") extends infer T_26 ? T_26 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") ? T_26 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_26 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">) extends infer T ? { [K in keyof T]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride_1>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride_1> extends infer T_1 ? T_1 extends import("viem").DeriveChain<import("viem").Chain, chainOverride_1> ? T_1 extends import("viem").Chain ? {
            chain: T_1;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<undefined, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<undefined, accountOverride> ? T_2 extends import("viem").Account ? {
            account: T_2;
            from: `0x${string}`;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_8 ? T_8 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_8 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_9 ? T_9 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_9 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_10 ? T_10 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_10 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_11 ? T_11 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_11 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_12 ? T_12 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_12 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") extends infer T_13 ? T_13 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") ? T_13 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_13 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">))[K]; } : never>;
        requestAddresses: () => Promise<import("viem").RequestAddressesReturnType>;
        requestPermissions: (args: {
            [x: string]: Record<string, any>;
            eth_accounts: Record<string, any>;
        }) => Promise<import("viem").RequestPermissionsReturnType>;
        sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<`0x${string}`>;
        sendTransaction: <const request_1 extends import("viem").SendTransactionRequest<import("viem").Chain, chainOverride_2>, chainOverride_2 extends import("viem").Chain | undefined = undefined>(args: import("viem").SendTransactionParameters<import("viem").Chain, undefined, chainOverride_2, request_1>) => Promise<`0x${string}`>;
        signMessage: (args: import("viem").SignMessageParameters<undefined>) => Promise<`0x${string}`>;
        signTransaction: <chainOverride_3 extends import("viem").Chain | undefined, const request_2 extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride_3>, "transactionRequest", import("viem").TransactionRequest>, "from"> = import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride_3>, "transactionRequest", import("viem").TransactionRequest>, "from">>(args: import("viem").SignTransactionParameters<import("viem").Chain, undefined, chainOverride_3, request_2>) => Promise<import("viem").TransactionSerialized<import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)>, (import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> extends infer T_27 ? T_27 extends import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> ? T_27 extends "eip1559" ? `0x02${string}` : never : never : never) | (import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> extends infer T_28 ? T_28 extends import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> ? T_28 extends "eip2930" ? `0x01${string}` : never : never : never) | (import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> extends infer T_29 ? T_29 extends import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> ? T_29 extends "eip4844" ? `0x03${string}` : never : never : never) | (import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> extends infer T_30 ? T_30 extends import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> ? T_30 extends "eip7702" ? `0x04${string}` : never : never : never) | (import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> extends infer T_31 ? T_31 extends import("viem").GetTransactionType<request_2, (request_2 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_2 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_2 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_2["type"] extends string | undefined ? Extract<request_2["type"], string> : never)> ? T_31 extends "legacy" ? import("viem").TransactionSerializedLegacy : never : never : never)>>;
        signTypedData: <const typedData extends {
            [x: string]: readonly import("viem").TypedDataParameter[];
            [x: `string[${string}]`]: undefined;
            [x: `function[${string}]`]: undefined;
            [x: `address[${string}]`]: undefined;
            [x: `bool[${string}]`]: undefined;
            [x: `bytes[${string}]`]: undefined;
            [x: `bytes1[${string}]`]: undefined;
            [x: `bytes5[${string}]`]: undefined;
            [x: `bytes10[${string}]`]: undefined;
            [x: `bytes32[${string}]`]: undefined;
            [x: `bytes31[${string}]`]: undefined;
            [x: `bytes30[${string}]`]: undefined;
            [x: `bytes29[${string}]`]: undefined;
            [x: `bytes28[${string}]`]: undefined;
            [x: `bytes27[${string}]`]: undefined;
            [x: `bytes26[${string}]`]: undefined;
            [x: `bytes25[${string}]`]: undefined;
            [x: `bytes24[${string}]`]: undefined;
            [x: `bytes23[${string}]`]: undefined;
            [x: `bytes22[${string}]`]: undefined;
            [x: `bytes21[${string}]`]: undefined;
            [x: `bytes20[${string}]`]: undefined;
            [x: `bytes2[${string}]`]: undefined;
            [x: `bytes19[${string}]`]: undefined;
            [x: `bytes18[${string}]`]: undefined;
            [x: `bytes17[${string}]`]: undefined;
            [x: `bytes16[${string}]`]: undefined;
            [x: `bytes15[${string}]`]: undefined;
            [x: `bytes14[${string}]`]: undefined;
            [x: `bytes13[${string}]`]: undefined;
            [x: `bytes12[${string}]`]: undefined;
            [x: `bytes11[${string}]`]: undefined;
            [x: `bytes9[${string}]`]: undefined;
            [x: `bytes8[${string}]`]: undefined;
            [x: `bytes7[${string}]`]: undefined;
            [x: `bytes6[${string}]`]: undefined;
            [x: `bytes4[${string}]`]: undefined;
            [x: `bytes3[${string}]`]: undefined;
            [x: `int[${string}]`]: undefined;
            [x: `int56[${string}]`]: undefined;
            [x: `int40[${string}]`]: undefined;
            [x: `int32[${string}]`]: undefined;
            [x: `int24[${string}]`]: undefined;
            [x: `int16[${string}]`]: undefined;
            [x: `int8[${string}]`]: undefined;
            [x: `int48[${string}]`]: undefined;
            [x: `int64[${string}]`]: undefined;
            [x: `int72[${string}]`]: undefined;
            [x: `int80[${string}]`]: undefined;
            [x: `int88[${string}]`]: undefined;
            [x: `int96[${string}]`]: undefined;
            [x: `int104[${string}]`]: undefined;
            [x: `int112[${string}]`]: undefined;
            [x: `int120[${string}]`]: undefined;
            [x: `int128[${string}]`]: undefined;
            [x: `int136[${string}]`]: undefined;
            [x: `int144[${string}]`]: undefined;
            [x: `int152[${string}]`]: undefined;
            [x: `int160[${string}]`]: undefined;
            [x: `int168[${string}]`]: undefined;
            [x: `int176[${string}]`]: undefined;
            [x: `int184[${string}]`]: undefined;
            [x: `int192[${string}]`]: undefined;
            [x: `int200[${string}]`]: undefined;
            [x: `int208[${string}]`]: undefined;
            [x: `int216[${string}]`]: undefined;
            [x: `int224[${string}]`]: undefined;
            [x: `int232[${string}]`]: undefined;
            [x: `int240[${string}]`]: undefined;
            [x: `int248[${string}]`]: undefined;
            [x: `int256[${string}]`]: undefined;
            [x: `uint[${string}]`]: undefined;
            [x: `uint56[${string}]`]: undefined;
            [x: `uint40[${string}]`]: undefined;
            [x: `uint32[${string}]`]: undefined;
            [x: `uint24[${string}]`]: undefined;
            [x: `uint16[${string}]`]: undefined;
            [x: `uint8[${string}]`]: undefined;
            [x: `uint48[${string}]`]: undefined;
            [x: `uint64[${string}]`]: undefined;
            [x: `uint72[${string}]`]: undefined;
            [x: `uint80[${string}]`]: undefined;
            [x: `uint88[${string}]`]: undefined;
            [x: `uint96[${string}]`]: undefined;
            [x: `uint104[${string}]`]: undefined;
            [x: `uint112[${string}]`]: undefined;
            [x: `uint120[${string}]`]: undefined;
            [x: `uint128[${string}]`]: undefined;
            [x: `uint136[${string}]`]: undefined;
            [x: `uint144[${string}]`]: undefined;
            [x: `uint152[${string}]`]: undefined;
            [x: `uint160[${string}]`]: undefined;
            [x: `uint168[${string}]`]: undefined;
            [x: `uint176[${string}]`]: undefined;
            [x: `uint184[${string}]`]: undefined;
            [x: `uint192[${string}]`]: undefined;
            [x: `uint200[${string}]`]: undefined;
            [x: `uint208[${string}]`]: undefined;
            [x: `uint216[${string}]`]: undefined;
            [x: `uint224[${string}]`]: undefined;
            [x: `uint232[${string}]`]: undefined;
            [x: `uint240[${string}]`]: undefined;
            [x: `uint248[${string}]`]: undefined;
            [x: `uint256[${string}]`]: undefined;
            string?: undefined;
            address?: undefined;
            bool?: undefined;
            bytes?: undefined;
            bytes1?: undefined;
            bytes5?: undefined;
            bytes10?: undefined;
            bytes32?: undefined;
            bytes31?: undefined;
            bytes30?: undefined;
            bytes29?: undefined;
            bytes28?: undefined;
            bytes27?: undefined;
            bytes26?: undefined;
            bytes25?: undefined;
            bytes24?: undefined;
            bytes23?: undefined;
            bytes22?: undefined;
            bytes21?: undefined;
            bytes20?: undefined;
            bytes2?: undefined;
            bytes19?: undefined;
            bytes18?: undefined;
            bytes17?: undefined;
            bytes16?: undefined;
            bytes15?: undefined;
            bytes14?: undefined;
            bytes13?: undefined;
            bytes12?: undefined;
            bytes11?: undefined;
            bytes9?: undefined;
            bytes8?: undefined;
            bytes7?: undefined;
            bytes6?: undefined;
            bytes4?: undefined;
            bytes3?: undefined;
            int56?: undefined;
            int40?: undefined;
            int32?: undefined;
            int24?: undefined;
            int16?: undefined;
            int8?: undefined;
            int48?: undefined;
            int64?: undefined;
            int72?: undefined;
            int80?: undefined;
            int88?: undefined;
            int96?: undefined;
            int104?: undefined;
            int112?: undefined;
            int120?: undefined;
            int128?: undefined;
            int136?: undefined;
            int144?: undefined;
            int152?: undefined;
            int160?: undefined;
            int168?: undefined;
            int176?: undefined;
            int184?: undefined;
            int192?: undefined;
            int200?: undefined;
            int208?: undefined;
            int216?: undefined;
            int224?: undefined;
            int232?: undefined;
            int240?: undefined;
            int248?: undefined;
            int256?: undefined;
            uint56?: undefined;
            uint40?: undefined;
            uint32?: undefined;
            uint24?: undefined;
            uint16?: undefined;
            uint8?: undefined;
            uint48?: undefined;
            uint64?: undefined;
            uint72?: undefined;
            uint80?: undefined;
            uint88?: undefined;
            uint96?: undefined;
            uint104?: undefined;
            uint112?: undefined;
            uint120?: undefined;
            uint128?: undefined;
            uint136?: undefined;
            uint144?: undefined;
            uint152?: undefined;
            uint160?: undefined;
            uint168?: undefined;
            uint176?: undefined;
            uint184?: undefined;
            uint192?: undefined;
            uint200?: undefined;
            uint208?: undefined;
            uint216?: undefined;
            uint224?: undefined;
            uint232?: undefined;
            uint240?: undefined;
            uint248?: undefined;
            uint256?: undefined;
        } | {
            [key: string]: unknown;
        }, primaryType extends string>(args: import("viem").SignTypedDataParameters<typedData, primaryType, undefined>) => Promise<`0x${string}`>;
        switchChain: (args: import("viem").SwitchChainParameters) => Promise<void>;
        watchAsset: (args: import("viem").WatchAssetParams) => Promise<boolean>;
        writeContract: <const abi_1 extends readonly unknown[] | import("viem").Abi, functionName extends import("viem").ContractFunctionName<abi_1, "nonpayable" | "payable">, args extends import("viem").ContractFunctionArgs<abi_1, "nonpayable" | "payable", functionName>, chainOverride_4 extends import("viem").Chain | undefined = undefined>(args: import("viem").WriteContractParameters<abi_1, functionName, args, import("viem").Chain, undefined, chainOverride_4>) => Promise<`0x${string}`>;
    } & {
        call: (parameters: import("viem").CallParameters<import("viem").Chain>) => Promise<import("viem").CallReturnType>;
        createAccessList: (parameters: import("viem/_types/actions/public/createAccessList").CreateAccessListParameters<import("viem").Chain>) => Promise<{
            accessList: import("viem").AccessList;
            gasUsed: bigint;
        }>;
        createBlockFilter: () => Promise<{
            id: `0x${string}`;
            request: import("viem").EIP1193RequestFn<readonly [{
                Method: "eth_getFilterChanges";
                Parameters: [filterId: `0x${string}`];
                ReturnType: `0x${string}`[] | import("viem").RpcLog[];
            }, {
                Method: "eth_getFilterLogs";
                Parameters: [filterId: `0x${string}`];
                ReturnType: import("viem").RpcLog[];
            }, {
                Method: "eth_uninstallFilter";
                Parameters: [filterId: `0x${string}`];
                ReturnType: boolean;
            }]>;
            type: "block";
        }>;
        createContractEventFilter: <const abi_2 extends readonly unknown[] | import("viem").Abi, eventName extends import("viem").ContractEventName<abi_2> | undefined, args_1 extends import("viem").MaybeExtractEventArgsFromAbi<abi_2, eventName> | undefined, strict extends boolean | undefined = undefined, fromBlock extends bigint | import("viem").BlockTag | undefined = undefined, toBlock extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem").CreateContractEventFilterParameters<abi_2, eventName, args_1, strict, fromBlock, toBlock>) => Promise<import("viem").CreateContractEventFilterReturnType<abi_2, eventName, args_1, strict, fromBlock, toBlock>>;
        createEventFilter: <const abiEvent extends import("viem").AbiEvent | undefined = undefined, const abiEvents extends readonly unknown[] | readonly import("viem").AbiEvent[] | undefined = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict_1 extends boolean | undefined = undefined, fromBlock_1 extends bigint | import("viem").BlockTag | undefined = undefined, toBlock_1 extends bigint | import("viem").BlockTag | undefined = undefined, _EventName extends string | undefined = import("viem").MaybeAbiEventName<abiEvent>, _Args extends import("viem").MaybeExtractEventArgsFromAbi<abiEvents, _EventName> | undefined = undefined>(args?: import("viem").CreateEventFilterParameters<abiEvent, abiEvents, strict_1, fromBlock_1, toBlock_1, _EventName, _Args> | undefined) => Promise<import("viem").Filter<"event", abiEvents, _EventName, _Args, strict_1, fromBlock_1, toBlock_1> extends infer T_32 ? { [K_1 in keyof T_32]: import("viem").Filter<"event", abiEvents, _EventName, _Args, strict_1, fromBlock_1, toBlock_1>[K_1]; } : never>;
        createPendingTransactionFilter: () => Promise<{
            id: `0x${string}`;
            request: import("viem").EIP1193RequestFn<readonly [{
                Method: "eth_getFilterChanges";
                Parameters: [filterId: `0x${string}`];
                ReturnType: `0x${string}`[] | import("viem").RpcLog[];
            }, {
                Method: "eth_getFilterLogs";
                Parameters: [filterId: `0x${string}`];
                ReturnType: import("viem").RpcLog[];
            }, {
                Method: "eth_uninstallFilter";
                Parameters: [filterId: `0x${string}`];
                ReturnType: boolean;
            }]>;
            type: "transaction";
        }>;
        estimateContractGas: <chain extends import("viem").Chain | undefined, const abi_3 extends readonly unknown[] | import("viem").Abi, functionName_1 extends import("viem").ContractFunctionName<abi_3, "nonpayable" | "payable">, args_2 extends import("viem").ContractFunctionArgs<abi_3, "nonpayable" | "payable", functionName_1>>(args: import("viem").EstimateContractGasParameters<abi_3, functionName_1, args_2, chain>) => Promise<bigint>;
        estimateGas: (args: import("viem").EstimateGasParameters<import("viem").Chain>) => Promise<bigint>;
        getBalance: (args: import("viem").GetBalanceParameters) => Promise<bigint>;
        getBlobBaseFee: () => Promise<bigint>;
        getBlock: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args?: import("viem").GetBlockParameters<includeTransactions, blockTag> | undefined) => Promise<{
            number: blockTag extends "pending" ? null : bigint;
            nonce: blockTag extends "pending" ? null : `0x${string}`;
            hash: blockTag extends "pending" ? null : `0x${string}`;
            timestamp: bigint;
            difficulty: bigint;
            size: bigint;
            gasLimit: bigint;
            logsBloom: blockTag extends "pending" ? null : `0x${string}`;
            baseFeePerGas: bigint | null;
            blobGasUsed: bigint;
            excessBlobGas: bigint;
            extraData: `0x${string}`;
            gasUsed: bigint;
            miner: `0x${string}`;
            mixHash: `0x${string}`;
            parentBeaconBlockRoot?: `0x${string}` | undefined;
            parentHash: `0x${string}`;
            receiptsRoot: `0x${string}`;
            sealFields: `0x${string}`[];
            sha3Uncles: `0x${string}`;
            stateRoot: `0x${string}`;
            totalDifficulty: bigint | null;
            transactionsRoot: `0x${string}`;
            uncles: `0x${string}`[];
            withdrawals?: import("viem").Withdrawal[] | undefined;
            withdrawalsRoot?: `0x${string}` | undefined;
            transactions: includeTransactions extends true ? ({
                chainId?: number | undefined;
                type: "legacy";
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                maxFeePerBlobGas?: undefined;
                gasPrice: bigint;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                authorizationList?: undefined;
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                yParity?: undefined;
                input: `0x${string}`;
                typeHex: `0x${string}` | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_33 ? T_33 extends (blockTag extends "pending" ? true : false) ? T_33 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_34 ? T_34 extends (blockTag extends "pending" ? true : false) ? T_34 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_35 ? T_35 extends (blockTag extends "pending" ? true : false) ? T_35 extends true ? null : number : never : never;
            } | {
                chainId: number;
                type: "eip2930";
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                maxFeePerBlobGas?: undefined;
                gasPrice: bigint;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                authorizationList?: undefined;
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                yParity: number;
                input: `0x${string}`;
                typeHex: `0x${string}` | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_36 ? T_36 extends (blockTag extends "pending" ? true : false) ? T_36 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_37 ? T_37 extends (blockTag extends "pending" ? true : false) ? T_37 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_38 ? T_38 extends (blockTag extends "pending" ? true : false) ? T_38 extends true ? null : number : never : never;
            } | {
                chainId: number;
                type: "eip1559";
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                maxFeePerBlobGas?: undefined;
                gasPrice?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                authorizationList?: undefined;
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                yParity: number;
                input: `0x${string}`;
                typeHex: `0x${string}` | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_39 ? T_39 extends (blockTag extends "pending" ? true : false) ? T_39 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_40 ? T_40 extends (blockTag extends "pending" ? true : false) ? T_40 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_41 ? T_41 extends (blockTag extends "pending" ? true : false) ? T_41 extends true ? null : number : never : never;
            } | {
                chainId: number;
                type: "eip4844";
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                maxFeePerBlobGas: bigint;
                gasPrice?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: readonly `0x${string}`[];
                authorizationList?: undefined;
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                yParity: number;
                input: `0x${string}`;
                typeHex: `0x${string}` | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_42 ? T_42 extends (blockTag extends "pending" ? true : false) ? T_42 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_43 ? T_43 extends (blockTag extends "pending" ? true : false) ? T_43 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_44 ? T_44 extends (blockTag extends "pending" ? true : false) ? T_44 extends true ? null : number : never : never;
            } | {
                chainId: number;
                type: "eip7702";
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                maxFeePerBlobGas?: undefined;
                gasPrice?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                authorizationList: import("viem/experimental").SignedAuthorizationList;
                hash: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                yParity: number;
                input: `0x${string}`;
                typeHex: `0x${string}` | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_45 ? T_45 extends (blockTag extends "pending" ? true : false) ? T_45 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_46 ? T_46 extends (blockTag extends "pending" ? true : false) ? T_46 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_47 ? T_47 extends (blockTag extends "pending" ? true : false) ? T_47 extends true ? null : number : never : never;
            })[] : `0x${string}`[];
        }>;
        getBlockNumber: (args?: import("viem").GetBlockNumberParameters | undefined) => Promise<bigint>;
        getBlockTransactionCount: (args?: import("viem").GetBlockTransactionCountParameters | undefined) => Promise<number>;
        getBytecode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
        getChainId: () => Promise<number>;
        getCode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
        getContractEvents: <const abi_4 extends readonly unknown[] | import("viem").Abi, eventName_1 extends import("viem").ContractEventName<abi_4> | undefined = undefined, strict_2 extends boolean | undefined = undefined, fromBlock_2 extends bigint | import("viem").BlockTag | undefined = undefined, toBlock_2 extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetContractEventsParameters<abi_4, eventName_1, strict_2, fromBlock_2, toBlock_2>) => Promise<import("viem").GetContractEventsReturnType<abi_4, eventName_1, strict_2, fromBlock_2, toBlock_2>>;
        getEip712Domain: (args: import("viem").GetEip712DomainParameters) => Promise<import("viem").GetEip712DomainReturnType>;
        getEnsAddress: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            coinType?: number | undefined;
            gatewayUrls?: string[] | undefined;
            name: string;
            strict?: boolean | undefined;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<import("viem").GetEnsAddressReturnType>;
        getEnsAvatar: (args: {
            name: string;
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            gatewayUrls?: string[] | undefined;
            strict?: boolean | undefined;
            universalResolverAddress?: `0x${string}` | undefined;
            assetGatewayUrls?: import("viem").AssetGatewayUrls | undefined;
        }) => Promise<import("viem").GetEnsAvatarReturnType>;
        getEnsName: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            address: `0x${string}`;
            gatewayUrls?: string[] | undefined;
            strict?: boolean | undefined;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<import("viem").GetEnsNameReturnType>;
        getEnsResolver: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            name: string;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<`0x${string}`>;
        getEnsText: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            name: string;
            gatewayUrls?: string[] | undefined;
            key: string;
            strict?: boolean | undefined;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<import("viem").GetEnsTextReturnType>;
        getFeeHistory: (args: import("viem").GetFeeHistoryParameters) => Promise<import("viem").GetFeeHistoryReturnType>;
        estimateFeesPerGas: <chainOverride_5 extends import("viem").Chain | undefined = undefined, type extends import("viem").FeeValuesType = "eip1559">(args?: import("viem").EstimateFeesPerGasParameters<import("viem").Chain, chainOverride_5, type> | undefined) => Promise<import("viem").EstimateFeesPerGasReturnType<type>>;
        getFilterChanges: <filterType extends import("viem").FilterType, const abi_5 extends readonly unknown[] | import("viem").Abi | undefined, eventName_2 extends string | undefined, strict_3 extends boolean | undefined = undefined, fromBlock_3 extends bigint | import("viem").BlockTag | undefined = undefined, toBlock_3 extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterChangesParameters<filterType, abi_5, eventName_2, strict_3, fromBlock_3, toBlock_3>) => Promise<import("viem").GetFilterChangesReturnType<filterType, abi_5, eventName_2, strict_3, fromBlock_3, toBlock_3>>;
        getFilterLogs: <const abi_6 extends readonly unknown[] | import("viem").Abi | undefined, eventName_3 extends string | undefined, strict_4 extends boolean | undefined = undefined, fromBlock_4 extends bigint | import("viem").BlockTag | undefined = undefined, toBlock_4 extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterLogsParameters<abi_6, eventName_3, strict_4, fromBlock_4, toBlock_4>) => Promise<import("viem").GetFilterLogsReturnType<abi_6, eventName_3, strict_4, fromBlock_4, toBlock_4>>;
        getGasPrice: () => Promise<bigint>;
        getLogs: <const abiEvent_1 extends import("viem").AbiEvent | undefined = undefined, const abiEvents_1 extends readonly unknown[] | readonly import("viem").AbiEvent[] | undefined = abiEvent_1 extends import("viem").AbiEvent ? [abiEvent_1] : undefined, strict_5 extends boolean | undefined = undefined, fromBlock_5 extends bigint | import("viem").BlockTag | undefined = undefined, toBlock_5 extends bigint | import("viem").BlockTag | undefined = undefined>(args?: import("viem").GetLogsParameters<abiEvent_1, abiEvents_1, strict_5, fromBlock_5, toBlock_5> | undefined) => Promise<import("viem").GetLogsReturnType<abiEvent_1, abiEvents_1, strict_5, fromBlock_5, toBlock_5>>;
        getProof: (args: import("viem").GetProofParameters) => Promise<import("viem").GetProofReturnType>;
        estimateMaxPriorityFeePerGas: <chainOverride_6 extends import("viem").Chain | undefined = undefined>(args?: {
            chain?: chainOverride_6 | null | undefined;
        } | undefined) => Promise<bigint>;
        getStorageAt: (args: import("viem").GetStorageAtParameters) => Promise<import("viem").GetStorageAtReturnType>;
        getTransaction: <blockTag_1 extends import("viem").BlockTag = "latest">(args: import("viem").GetTransactionParameters<blockTag_1>) => Promise<{
            chainId?: number | undefined;
            type: "legacy";
            to: `0x${string}` | null;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice: bigint;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: undefined;
            blobVersionedHashes?: undefined;
            authorizationList?: undefined;
            hash: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            v: bigint;
            yParity?: undefined;
            input: `0x${string}`;
            typeHex: `0x${string}` | null;
            blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_48 ? T_48 extends (blockTag_1 extends "pending" ? true : false) ? T_48 extends true ? null : bigint : never : never;
            blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_49 ? T_49 extends (blockTag_1 extends "pending" ? true : false) ? T_49 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_50 ? T_50 extends (blockTag_1 extends "pending" ? true : false) ? T_50 extends true ? null : number : never : never;
        } | {
            chainId: number;
            type: "eip2930";
            to: `0x${string}` | null;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice: bigint;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList: import("viem").AccessList;
            blobVersionedHashes?: undefined;
            authorizationList?: undefined;
            hash: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            v: bigint;
            yParity: number;
            input: `0x${string}`;
            typeHex: `0x${string}` | null;
            blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_51 ? T_51 extends (blockTag_1 extends "pending" ? true : false) ? T_51 extends true ? null : bigint : never : never;
            blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_52 ? T_52 extends (blockTag_1 extends "pending" ? true : false) ? T_52 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_53 ? T_53 extends (blockTag_1 extends "pending" ? true : false) ? T_53 extends true ? null : number : never : never;
        } | {
            chainId: number;
            type: "eip1559";
            to: `0x${string}` | null;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("viem").AccessList;
            blobVersionedHashes?: undefined;
            authorizationList?: undefined;
            hash: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            v: bigint;
            yParity: number;
            input: `0x${string}`;
            typeHex: `0x${string}` | null;
            blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_54 ? T_54 extends (blockTag_1 extends "pending" ? true : false) ? T_54 extends true ? null : bigint : never : never;
            blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_55 ? T_55 extends (blockTag_1 extends "pending" ? true : false) ? T_55 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_56 ? T_56 extends (blockTag_1 extends "pending" ? true : false) ? T_56 extends true ? null : number : never : never;
        } | {
            chainId: number;
            type: "eip4844";
            to: `0x${string}` | null;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            value: bigint;
            maxFeePerBlobGas: bigint;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("viem").AccessList;
            blobVersionedHashes: readonly `0x${string}`[];
            authorizationList?: undefined;
            hash: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            v: bigint;
            yParity: number;
            input: `0x${string}`;
            typeHex: `0x${string}` | null;
            blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_57 ? T_57 extends (blockTag_1 extends "pending" ? true : false) ? T_57 extends true ? null : bigint : never : never;
            blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_58 ? T_58 extends (blockTag_1 extends "pending" ? true : false) ? T_58 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_59 ? T_59 extends (blockTag_1 extends "pending" ? true : false) ? T_59 extends true ? null : number : never : never;
        } | {
            chainId: number;
            type: "eip7702";
            to: `0x${string}` | null;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("viem").AccessList;
            blobVersionedHashes?: undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList;
            hash: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            v: bigint;
            yParity: number;
            input: `0x${string}`;
            typeHex: `0x${string}` | null;
            blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_60 ? T_60 extends (blockTag_1 extends "pending" ? true : false) ? T_60 extends true ? null : bigint : never : never;
            blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_61 ? T_61 extends (blockTag_1 extends "pending" ? true : false) ? T_61 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_62 ? T_62 extends (blockTag_1 extends "pending" ? true : false) ? T_62 extends true ? null : number : never : never;
        }>;
        getTransactionConfirmations: (args: import("viem").GetTransactionConfirmationsParameters<import("viem").Chain>) => Promise<bigint>;
        getTransactionCount: (args: import("viem").GetTransactionCountParameters) => Promise<number>;
        getTransactionReceipt: (args: import("viem").GetTransactionReceiptParameters) => Promise<import("viem").TransactionReceipt>;
        multicall: <const contracts extends readonly unknown[], allowFailure extends boolean = true>(args: import("viem").MulticallParameters<contracts, allowFailure>) => Promise<import("viem").MulticallReturnType<contracts, allowFailure>>;
        prepareTransactionRequest: <const request_3 extends import("viem").PrepareTransactionRequestRequest<import("viem").Chain, chainOverride_7>, chainOverride_7 extends import("viem").Chain | undefined = undefined, accountOverride_1 extends `0x${string}` | import("viem").Account | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<import("viem").Chain, undefined, chainOverride_7, accountOverride_1, request_3>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride_7>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride_7> extends infer T_77 ? T_77 extends import("viem").DeriveChain<import("viem").Chain, chainOverride_7> ? T_77 extends import("viem").Chain ? {
            chain: T_77;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<undefined, accountOverride_1> extends infer T_78 ? T_78 extends import("viem").DeriveAccount<undefined, accountOverride_1> ? T_78 extends import("viem").Account ? {
            account: T_78;
            from: `0x${string}`;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_79 ? T_79 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_79 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_80 ? T_80 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_80 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_81 ? T_81 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_81 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_82 ? T_82 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_82 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_83 ? T_83 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_83 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_84 ? T_84 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_84 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_85 ? T_85 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_85 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_86 ? T_86 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_86 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_87 ? T_87 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_87 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_88 ? T_88 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_88 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request_3["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request_3["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") extends infer T_89 ? T_89 extends (request_3["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request_3["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") ? T_89 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_89 : never : never> & (unknown extends request_3["kzg"] ? {} : Pick<request_3, "kzg">) extends infer T_63 ? { [K_2 in keyof T_63]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride_7>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride_7> extends infer T_64 ? T_64 extends import("viem").DeriveChain<import("viem").Chain, chainOverride_7> ? T_64 extends import("viem").Chain ? {
            chain: T_64;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<undefined, accountOverride_1> extends infer T_65 ? T_65 extends import("viem").DeriveAccount<undefined, accountOverride_1> ? T_65 extends import("viem").Account ? {
            account: T_65;
            from: `0x${string}`;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_66 ? T_66 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_66 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_67 ? T_67 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_67 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_68 ? T_68 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_68 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_69 ? T_69 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_69 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_70 ? T_70 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_70 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_71 ? T_71 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_71 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_72 ? T_72 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_72 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_73 ? T_73 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_73 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_74 ? T_74 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_74 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) extends infer T_75 ? T_75 extends (request_3["type"] extends string | undefined ? request_3["type"] : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request_3, (request_3 extends {
            accessList?: undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        }) ? "eip1559" : never) | (request_3 extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
        } & {
            accessList: import("viem").AccessList | undefined;
        } ? "eip2930" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request_3 extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        }) & {
            authorizationList: import("viem/experimental").SignedAuthorizationList;
        } ? "eip7702" : never) | (request_3["type"] extends string | undefined ? Extract<request_3["type"], string> : never)>) ? T_75 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request_3["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request_3["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") extends infer T_76 ? T_76 extends (request_3["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request_3["parameters"][number] : "chainId" | "type" | "gas" | "nonce" | "blobVersionedHashes" | "fees") ? T_76 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_76 : never : never> & (unknown extends request_3["kzg"] ? {} : Pick<request_3, "kzg">))[K_2]; } : never>;
        readContract: <const abi_7 extends readonly unknown[] | import("viem").Abi, functionName_2 extends import("viem").ContractFunctionName<abi_7, "pure" | "view">, const args_3 extends import("viem").ContractFunctionArgs<abi_7, "pure" | "view", functionName_2>>(args: import("viem").ReadContractParameters<abi_7, functionName_2, args_3>) => Promise<import("viem").ReadContractReturnType<abi_7, functionName_2, args_3>>;
        sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<`0x${string}`>;
        simulate: <const calls extends readonly unknown[]>(args: import("viem/_types/actions/public/simulateBlocks").SimulateBlocksParameters<calls>) => Promise<import("viem/_types/actions/public/simulateBlocks").SimulateBlocksReturnType<calls>>;
        simulateBlocks: <const calls_1 extends readonly unknown[]>(args: import("viem/_types/actions/public/simulateBlocks").SimulateBlocksParameters<calls_1>) => Promise<import("viem/_types/actions/public/simulateBlocks").SimulateBlocksReturnType<calls_1>>;
        simulateCalls: <const calls_2 extends readonly unknown[]>(args: import("viem/_types/actions/public/simulateCalls").SimulateCallsParameters<calls_2>) => Promise<import("viem/_types/actions/public/simulateCalls").SimulateCallsReturnType<calls_2>>;
        simulateContract: <const abi_8 extends readonly unknown[] | import("viem").Abi, functionName_3 extends import("viem").ContractFunctionName<abi_8, "nonpayable" | "payable">, const args_4 extends import("viem").ContractFunctionArgs<abi_8, "nonpayable" | "payable", functionName_3>, chainOverride_8 extends import("viem").Chain | undefined, accountOverride_2 extends `0x${string}` | import("viem").Account | undefined = undefined>(args: import("viem").SimulateContractParameters<abi_8, functionName_3, args_4, import("viem").Chain, chainOverride_8, accountOverride_2>) => Promise<import("viem").SimulateContractReturnType<abi_8, functionName_3, args_4, import("viem").Chain, undefined, chainOverride_8, accountOverride_2>>;
        verifyMessage: (args: {
            address: `0x${string}`;
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            factory?: `0x${string}` | undefined;
            factoryData?: `0x${string}` | undefined;
            signature: `0x${string}` | Uint8Array | import("viem").Signature;
            universalSignatureVerifierAddress?: `0x${string}` | undefined;
            message: import("viem").SignableMessage;
        }) => Promise<boolean>;
        verifySiweMessage: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            address?: `0x${string}` | undefined;
            nonce?: string | undefined;
            domain?: string | undefined;
            scheme?: string | undefined;
            time?: Date | undefined;
            message: string;
            signature: `0x${string}`;
        }) => Promise<boolean>;
        verifyTypedData: (args: import("viem").VerifyTypedDataActionParameters) => Promise<boolean>;
        uninstallFilter: (args: import("viem").UninstallFilterParameters) => Promise<boolean>;
        waitForTransactionReceipt: (args: import("viem").WaitForTransactionReceiptParameters<import("viem").Chain>) => Promise<import("viem").TransactionReceipt>;
        watchBlockNumber: (args: import("viem").WatchBlockNumberParameters) => import("viem").WatchBlockNumberReturnType;
        watchBlocks: <includeTransactions_1 extends boolean = false, blockTag_2 extends import("viem").BlockTag = "latest">(args: import("viem").WatchBlocksParameters<import("viem").HttpTransport<undefined, false>, import("viem").Chain, includeTransactions_1, blockTag_2>) => import("viem").WatchBlocksReturnType;
        watchContractEvent: <const abi_9 extends readonly unknown[] | import("viem").Abi, eventName_4 extends import("viem").ContractEventName<abi_9>, strict_6 extends boolean | undefined = undefined>(args: import("viem").WatchContractEventParameters<abi_9, eventName_4, strict_6, import("viem").HttpTransport<undefined, false>>) => import("viem").WatchContractEventReturnType;
        watchEvent: <const abiEvent_2 extends import("viem").AbiEvent | undefined = undefined, const abiEvents_2 extends readonly unknown[] | readonly import("viem").AbiEvent[] | undefined = abiEvent_2 extends import("viem").AbiEvent ? [abiEvent_2] : undefined, strict_7 extends boolean | undefined = undefined>(args: import("viem").WatchEventParameters<abiEvent_2, abiEvents_2, strict_7, import("viem").HttpTransport<undefined, false>>) => import("viem").WatchEventReturnType;
        watchPendingTransactions: (args: import("viem").WatchPendingTransactionsParameters<import("viem").HttpTransport<undefined, false>>) => import("viem").WatchPendingTransactionsReturnType;
    } & {
        mode: "hardhat";
    } & import("viem").TestActions>;
    subsquidUrl: string;
    subgraphUrl: string;
};
export declare const arbitrumSdk: GmxSdk;
