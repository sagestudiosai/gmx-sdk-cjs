import { MarketsInfoData } from "../../types/markets";
import { OrderType } from "../../types/orders";
import { TokensData } from "../../types/tokens";
import { TradeAction, TradeActionType } from "../../types/tradeHistory";
import { Address } from "viem";
import { Module } from "../base";
import { GmxSdk } from "index";
export type MarketFilterLongShortDirection = "long" | "short" | "swap" | "any";
export type MarketFilterLongShortItemData = {
    marketAddress: Address | "any";
    direction: MarketFilterLongShortDirection;
    collateralAddress?: Address;
};
export declare class Trades extends Module {
    getTradeHistory(p: {
        forAllAccounts?: boolean;
        pageSize: number;
        fromTxTimestamp?: number;
        toTxTimestamp?: number;
        marketsInfoData: MarketsInfoData | undefined;
        tokensData: TokensData | undefined;
        pageIndex: number;
        marketsDirectionsFilter?: MarketFilterLongShortItemData[];
        orderEventCombinations?: {
            eventName?: TradeActionType;
            orderType?: OrderType;
            isDepositOrWithdraw?: boolean;
        }[];
    }): Promise<TradeAction[]>;
}
export declare function fetchTradeActions({ sdk, pageIndex, pageSize, marketsDirectionsFilter, forAllAccounts, account, fromTxTimestamp, toTxTimestamp, orderEventCombinations, marketsInfoData, tokensData, }: {
    sdk: GmxSdk;
    pageIndex: number;
    pageSize: number;
    marketsDirectionsFilter: MarketFilterLongShortItemData[] | undefined;
    forAllAccounts: boolean | undefined;
    account: string | null | undefined;
    fromTxTimestamp: number | undefined;
    toTxTimestamp: number | undefined;
    orderEventCombinations: {
        eventName?: TradeActionType | undefined;
        orderType?: OrderType | undefined;
        isDepositOrWithdraw?: boolean | undefined;
    }[] | undefined;
    marketsInfoData: MarketsInfoData | undefined;
    tokensData: TokensData | undefined;
}): Promise<TradeAction[]>;
export declare function bigNumberify(n?: bigint | string | null | undefined): bigint | undefined;
