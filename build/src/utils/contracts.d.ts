export declare enum TxErrorType {
    NotEnoughFunds = "NOT_ENOUGH_FUNDS",
    UserDenied = "USER_DENIED",
    Slippage = "SLIPPAGE",
    RpcError = "RPC_ERROR",
    NetworkChanged = "NETWORK_CHANGED",
    Expired = "EXPIRED"
}
export type ErrorPattern = {
    msg?: string;
    code?: number;
};
export type TxError = {
    message?: string;
    code?: number;
    data?: any;
    error?: any;
};
export declare function extractError(ex: TxError): [string, TxErrorType | null, any] | [];
