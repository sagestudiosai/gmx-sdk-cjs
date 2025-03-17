import { MarketFilterLongShortItemData } from "../trades/trades";
import { MarketInfo, MarketsInfoData } from "../../types/markets";
import { OrdersInfoData, OrderType } from "../../types/orders";
import { SidecarLimitOrderEntryValid, SidecarSlTpOrderEntryValid } from "../../types/sidecarOrders";
import { TokenData, TokensData } from "../../types/tokens";
import { DecreasePositionAmounts, IncreasePositionAmounts, SwapAmounts } from "../../types/trade";
import { Module } from "../base";
import { WrapOrUnwrapParams } from "./transactions/createWrapOrUnwrapTxn";
export declare class Orders extends Module {
    getOrders({ account: _account, marketsInfoData, tokensData, orderTypesFilter, marketsDirectionsFilter, }: {
        account?: string;
        marketsInfoData: MarketsInfoData;
        tokensData: TokensData;
        orderTypesFilter?: OrderType[];
        marketsDirectionsFilter?: MarketFilterLongShortItemData[];
    }): Promise<{
        count: number;
        ordersInfoData: OrdersInfoData;
    }>;
    createIncreaseOrder({ isLimit, marketAddress, allowedSlippage, collateralTokenAddress, receiveTokenAddress, fromToken, triggerPrice, referralCodeForTxn, increaseAmounts, collateralToken, createSltpEntries, cancelSltpEntries, updateSltpEntries, marketInfo, isLong, indexToken, marketsInfoData, tokensData, skipSimulation, }: {
        marketsInfoData: MarketsInfoData;
        tokensData: TokensData;
        isLimit: boolean;
        marketAddress: string;
        fromToken: TokenData;
        allowedSlippage: number;
        collateralToken: TokenData;
        referralCodeForTxn?: string;
        triggerPrice?: bigint;
        collateralTokenAddress: string;
        receiveTokenAddress: string;
        isLong: boolean;
        createSltpEntries?: SidecarSlTpOrderEntryValid[];
        cancelSltpEntries?: (SidecarSlTpOrderEntryValid | SidecarLimitOrderEntryValid)[];
        updateSltpEntries?: (SidecarSlTpOrderEntryValid | SidecarLimitOrderEntryValid)[];
        marketInfo: MarketInfo;
        indexToken: TokenData;
        increaseAmounts: IncreasePositionAmounts;
        skipSimulation?: boolean;
    }): Promise<void>;
    createDecreaseOrder({ marketsInfoData, tokensData, marketInfo, decreaseAmounts, collateralToken, allowedSlippage, isLong, referralCode, }: {
        marketInfo: MarketInfo;
        marketsInfoData: MarketsInfoData;
        tokensData: TokensData;
        isLong: boolean;
        allowedSlippage: number;
        decreaseAmounts: DecreasePositionAmounts;
        collateralToken: TokenData;
        referralCode?: string;
    }): Promise<void>;
    createSwapOrder({ isLimit, swapAmounts, allowedSlippage, fromToken, toToken, referralCodeForTxn, tokensData, }: {
        isLimit: boolean;
        allowedSlippage: number;
        swapAmounts: SwapAmounts;
        fromToken: TokenData;
        referralCodeForTxn?: string;
        toToken: TokenData;
        tokensData: TokensData;
    }): Promise<void>;
    cancelOrders(orderKeys: string[]): Promise<`0x${string}`>;
    createWrapOrUnwrapOrder(p: WrapOrUnwrapParams): Promise<`0x${string}`>;
}
