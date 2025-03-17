import type { GmxSdk } from "..";
export declare class Module {
    sdk: GmxSdk;
    constructor(sdk: GmxSdk);
    get oracle(): import("./oracle").Oracle;
    get chainId(): number;
    get account(): `0x${string}`;
}
