"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INCREASE_ORDER_GAS_LIMIT_KEY = exports.WITHDRAWAL_GAS_LIMIT_KEY = exports.DEPOSIT_GAS_LIMIT_KEY = exports.MAX_LEVERAGE_KEY = exports.MIN_POSITION_SIZE_USD_KEY = exports.MIN_COLLATERAL_FACTOR_FOR_OPEN_INTEREST_MULTIPLIER_KEY = exports.MIN_COLLATERAL_FACTOR_KEY = exports.MIN_COLLATERAL_USD_KEY = exports.SWAP_IMPACT_POOL_AMOUNT_KEY = exports.POSITION_IMPACT_POOL_DISTRIBUTION_RATE_KEY = exports.MIN_POSITION_IMPACT_POOL_AMOUNT_KEY = exports.POSITION_IMPACT_POOL_AMOUNT_KEY = exports.MAX_POSITION_IMPACT_FACTOR_FOR_LIQUIDATIONS_KEY = exports.MAX_PNL_FACTOR_FOR_TRADERS_KEY = exports.MAX_PNL_FACTOR_FOR_DEPOSITS_KEY = exports.MAX_PNL_FACTOR_FOR_WITHDRAWALS_KEY = exports.MAX_PNL_FACTOR_KEY = exports.THRESHOLD_FOR_DECREASE_FUNDING = exports.THRESHOLD_FOR_STABLE_FUNDING = exports.MAX_FUNDING_FACTOR_PER_SECOND = exports.MIN_FUNDING_FACTOR_PER_SECOND = exports.FUNDING_DECREASE_FACTOR_PER_SECOND = exports.FUNDING_INCREASE_FACTOR_PER_SECOND = exports.FUNDING_EXPONENT_FACTOR_KEY = exports.FUNDING_FACTOR_KEY = exports.TOTAL_BORROWING_KEY = exports.CUMULATIVE_BORROWING_FACTOR_KEY = exports.BORROWING_EXPONENT_FACTOR_KEY = exports.BORROWING_FACTOR_KEY = exports.NONCE_KEY = exports.MAX_OPEN_INTEREST_KEY = exports.OPEN_INTEREST_RESERVE_FACTOR_KEY = exports.RESERVE_FACTOR_KEY = exports.MAX_POOL_AMOUNT_KEY = exports.MAX_POOL_USD_FOR_DEPOSIT_KEY = exports.POOL_AMOUNT_KEY = exports.OPEN_INTEREST_IN_TOKENS_KEY = exports.OPEN_INTEREST_KEY = exports.FEE_RECEIVER_POSITION_FACTOR_KEY = exports.FEE_RECEIVER_SWAP_FACTOR_KEY = exports.FEE_RECEIVER_WITHDRAWAL_FACTOR_KEY = exports.BORROWING_FEE_RECEIVER_FACTOR_KEY = exports.FEE_RECEIVER_DEPOSIT_FACTOR_KEY = exports.SWAP_FEE_FACTOR_KEY = exports.SWAP_IMPACT_EXPONENT_FACTOR_KEY = exports.SWAP_IMPACT_FACTOR_KEY = exports.POSITION_FEE_FACTOR_KEY = exports.POSITION_IMPACT_EXPONENT_FACTOR_KEY = exports.MAX_POSITION_IMPACT_FACTOR_KEY = exports.POSITION_IMPACT_FACTOR_KEY = void 0;
exports.swapImpactExponentFactorKey = exports.swapImpactFactorKey = exports.positionFeeFactorKey = exports.maxPositionImpactFactorKey = exports.positionImpactExponentFactorKey = exports.positionImpactFactorKey = exports.isGlvDisabledKey = exports.glvMaxMarketTokenBalanceAmountKey = exports.glvMaxMarketTokenBalanceUsdKey = exports.glvShiftMinIntervalKey = exports.glvShiftLastExecutedAtKey = exports.ABOVE_OPTIMAL_USAGE_BORROWING_FACTOR = exports.BASE_BORROWING_FACTOR = exports.OPTIMAL_USAGE_FACTOR = exports.MAX_AUTO_CANCEL_ORDERS_KEY = exports.GLV_PER_MARKET_GAS_LIMIT = exports.GLV_WITHDRAWAL_GAS_LIMIT = exports.GLV_DEPOSIT_GAS_LIMIT = exports.GLV_SHIFT_MIN_INTERVAL = exports.GLV_SHIFT_LAST_EXECUTED_AT = exports.IS_GLV_MARKET_DISABLED = exports.GLV_MAX_MARKET_TOKEN_BALANCE_AMOUNT = exports.GLV_MAX_MARKET_TOKEN_BALANCE_USD = exports.SUBACCOUNT_AUTO_TOP_UP_AMOUNT = exports.SUBACCOUNT_ORDER_ACTION = exports.SUBACCOUNT_ACTION_COUNT = exports.MAX_ALLOWED_SUBACCOUNT_ACTION_COUNT = exports.SUBACCOUNT_LIST_KEY = exports.UI_FEE_FACTOR = exports.IS_MARKET_DISABLED_KEY = exports.AFFILIATE_REWARD_KEY = exports.POOL_AMOUNT_ADJUSTMENT_KEY = exports.VIRTUAL_INVENTORY_FOR_SWAPS_KEY = exports.VIRTUAL_INVENTORY_FOR_POSITIONS_KEY = exports.VIRTUAL_MARKET_ID_KEY = exports.VIRTUAL_TOKEN_ID_KEY = exports.CLAIMABLE_FUNDING_AMOUNT = exports.ACCOUNT_ORDER_LIST_KEY = exports.ORDER_LIST_KEY = exports.POSITION_LIST_KEY = exports.MARKET_LIST_KEY = exports.ESTIMATED_GAS_FEE_MULTIPLIER_FACTOR = exports.ESTIMATED_GAS_FEE_PER_ORACLE_PRICE = exports.ESTIMATED_GAS_FEE_BASE_AMOUNT_V2_1 = exports.NATIVE_TOKEN_TRANSFER_GAS_LIMIT_KEY = exports.TOKEN_TRANSFER_GAS_LIMIT_KEY = exports.SINGLE_SWAP_GAS_LIMIT_KEY = exports.SHIFT_GAS_LIMIT_KEY = exports.SWAP_ORDER_GAS_LIMIT_KEY = exports.DECREASE_ORDER_GAS_LIMIT_KEY = void 0;
exports.maxAllowedSubaccountActionCountKey = exports.subaccountListKey = exports.uiFeeFactorKey = exports.maxPoolAmountKey = exports.maxPoolUsdForDepositKey = exports.isMarketDisabledKey = exports.affiliateRewardKey = exports.poolAmountAdjustmentKey = exports.virtualInventoryForPositionsKey = exports.virtualInventoryForSwapsKey = exports.virtualMarketIdKey = exports.virtualTokenIdKey = exports.claimableFundingAmountKey = exports.hashedPositionKey = exports.minCollateralFactorForOpenInterest = exports.minCollateralFactorKey = exports.accountOrderListKey = exports.swapOrderGasLimitKey = exports.decreaseOrderGasLimitKey = exports.increaseOrderGasLimitKey = exports.singleSwapGasLimitKey = exports.shiftGasLimitKey = exports.withdrawalGasLimitKey = exports.depositGasLimitKey = exports.orderKey = exports.swapImpactPoolAmountKey = exports.maxPositionImpactFactorForLiquidationsKey = exports.positionImpactPoolDistributionRateKey = exports.minPositionImpactPoolAmountKey = exports.positionImpactPoolAmountKey = exports.maxPnlFactorKey = exports.thresholdForDecreaseFundingKey = exports.thresholdForStableFundingKey = exports.maxFundingFactorPerSecondKey = exports.minFundingFactorPerSecondKey = exports.fundingDecreaseFactorPerSecondKey = exports.fundingIncreaseFactorPerSecondKey = exports.fundingExponentFactorKey = exports.fundingFactorKey = exports.totalBorrowingKey = exports.cumulativeBorrowingFactorKey = exports.borrowingExponentFactorKey = exports.borrowingFactorKey = exports.maxOpenInterestKey = exports.openInterestReserveFactorKey = exports.reserveFactorKey = exports.poolAmountKey = exports.openInterestInTokensKey = exports.openInterestKey = exports.swapFeeFactorKey = void 0;
exports.subaccountAutoTopUpAmountKey = exports.subaccountActionCountKey = void 0;
const hash_1 = require("../utils/hash");
exports.POSITION_IMPACT_FACTOR_KEY = (0, hash_1.hashString)("POSITION_IMPACT_FACTOR");
exports.MAX_POSITION_IMPACT_FACTOR_KEY = (0, hash_1.hashString)("MAX_POSITION_IMPACT_FACTOR");
exports.POSITION_IMPACT_EXPONENT_FACTOR_KEY = (0, hash_1.hashString)("POSITION_IMPACT_EXPONENT_FACTOR");
exports.POSITION_FEE_FACTOR_KEY = (0, hash_1.hashString)("POSITION_FEE_FACTOR");
exports.SWAP_IMPACT_FACTOR_KEY = (0, hash_1.hashString)("SWAP_IMPACT_FACTOR");
exports.SWAP_IMPACT_EXPONENT_FACTOR_KEY = (0, hash_1.hashString)("SWAP_IMPACT_EXPONENT_FACTOR");
exports.SWAP_FEE_FACTOR_KEY = (0, hash_1.hashString)("SWAP_FEE_FACTOR");
exports.FEE_RECEIVER_DEPOSIT_FACTOR_KEY = (0, hash_1.hashString)("FEE_RECEIVER_DEPOSIT_FACTOR");
exports.BORROWING_FEE_RECEIVER_FACTOR_KEY = (0, hash_1.hashString)("BORROWING_FEE_RECEIVER_FACTOR");
exports.FEE_RECEIVER_WITHDRAWAL_FACTOR_KEY = (0, hash_1.hashString)("FEE_RECEIVER_WITHDRAWAL_FACTOR");
exports.FEE_RECEIVER_SWAP_FACTOR_KEY = (0, hash_1.hashString)("FEE_RECEIVER_SWAP_FACTOR");
exports.FEE_RECEIVER_POSITION_FACTOR_KEY = (0, hash_1.hashString)("FEE_RECEIVER_POSITION_FACTOR");
exports.OPEN_INTEREST_KEY = (0, hash_1.hashString)("OPEN_INTEREST");
exports.OPEN_INTEREST_IN_TOKENS_KEY = (0, hash_1.hashString)("OPEN_INTEREST_IN_TOKENS");
exports.POOL_AMOUNT_KEY = (0, hash_1.hashString)("POOL_AMOUNT");
exports.MAX_POOL_USD_FOR_DEPOSIT_KEY = (0, hash_1.hashString)("MAX_POOL_USD_FOR_DEPOSIT");
exports.MAX_POOL_AMOUNT_KEY = (0, hash_1.hashString)("MAX_POOL_AMOUNT");
exports.RESERVE_FACTOR_KEY = (0, hash_1.hashString)("RESERVE_FACTOR");
exports.OPEN_INTEREST_RESERVE_FACTOR_KEY = (0, hash_1.hashString)("OPEN_INTEREST_RESERVE_FACTOR");
exports.MAX_OPEN_INTEREST_KEY = (0, hash_1.hashString)("MAX_OPEN_INTEREST");
exports.NONCE_KEY = (0, hash_1.hashString)("NONCE");
exports.BORROWING_FACTOR_KEY = (0, hash_1.hashString)("BORROWING_FACTOR");
exports.BORROWING_EXPONENT_FACTOR_KEY = (0, hash_1.hashString)("BORROWING_EXPONENT_FACTOR");
exports.CUMULATIVE_BORROWING_FACTOR_KEY = (0, hash_1.hashString)("CUMULATIVE_BORROWING_FACTOR");
exports.TOTAL_BORROWING_KEY = (0, hash_1.hashString)("TOTAL_BORROWING");
exports.FUNDING_FACTOR_KEY = (0, hash_1.hashString)("FUNDING_FACTOR");
exports.FUNDING_EXPONENT_FACTOR_KEY = (0, hash_1.hashString)("FUNDING_EXPONENT_FACTOR");
exports.FUNDING_INCREASE_FACTOR_PER_SECOND = (0, hash_1.hashString)("FUNDING_INCREASE_FACTOR_PER_SECOND");
exports.FUNDING_DECREASE_FACTOR_PER_SECOND = (0, hash_1.hashString)("FUNDING_DECREASE_FACTOR_PER_SECOND");
exports.MIN_FUNDING_FACTOR_PER_SECOND = (0, hash_1.hashString)("MIN_FUNDING_FACTOR_PER_SECOND");
exports.MAX_FUNDING_FACTOR_PER_SECOND = (0, hash_1.hashString)("MAX_FUNDING_FACTOR_PER_SECOND");
exports.THRESHOLD_FOR_STABLE_FUNDING = (0, hash_1.hashString)("THRESHOLD_FOR_STABLE_FUNDING");
exports.THRESHOLD_FOR_DECREASE_FUNDING = (0, hash_1.hashString)("THRESHOLD_FOR_DECREASE_FUNDING");
exports.MAX_PNL_FACTOR_KEY = (0, hash_1.hashString)("MAX_PNL_FACTOR");
exports.MAX_PNL_FACTOR_FOR_WITHDRAWALS_KEY = (0, hash_1.hashString)("MAX_PNL_FACTOR_FOR_WITHDRAWALS");
exports.MAX_PNL_FACTOR_FOR_DEPOSITS_KEY = (0, hash_1.hashString)("MAX_PNL_FACTOR_FOR_DEPOSITS");
exports.MAX_PNL_FACTOR_FOR_TRADERS_KEY = (0, hash_1.hashString)("MAX_PNL_FACTOR_FOR_TRADERS");
exports.MAX_POSITION_IMPACT_FACTOR_FOR_LIQUIDATIONS_KEY = (0, hash_1.hashString)("MAX_POSITION_IMPACT_FACTOR_FOR_LIQUIDATIONS");
exports.POSITION_IMPACT_POOL_AMOUNT_KEY = (0, hash_1.hashString)("POSITION_IMPACT_POOL_AMOUNT");
exports.MIN_POSITION_IMPACT_POOL_AMOUNT_KEY = (0, hash_1.hashString)("MIN_POSITION_IMPACT_POOL_AMOUNT");
exports.POSITION_IMPACT_POOL_DISTRIBUTION_RATE_KEY = (0, hash_1.hashString)("POSITION_IMPACT_POOL_DISTRIBUTION_RATE");
exports.SWAP_IMPACT_POOL_AMOUNT_KEY = (0, hash_1.hashString)("SWAP_IMPACT_POOL_AMOUNT");
exports.MIN_COLLATERAL_USD_KEY = (0, hash_1.hashString)("MIN_COLLATERAL_USD");
exports.MIN_COLLATERAL_FACTOR_KEY = (0, hash_1.hashString)("MIN_COLLATERAL_FACTOR");
exports.MIN_COLLATERAL_FACTOR_FOR_OPEN_INTEREST_MULTIPLIER_KEY = (0, hash_1.hashString)("MIN_COLLATERAL_FACTOR_FOR_OPEN_INTEREST_MULTIPLIER");
exports.MIN_POSITION_SIZE_USD_KEY = (0, hash_1.hashString)("MIN_POSITION_SIZE_USD");
exports.MAX_LEVERAGE_KEY = (0, hash_1.hashString)("MAX_LEVERAGE");
exports.DEPOSIT_GAS_LIMIT_KEY = (0, hash_1.hashString)("DEPOSIT_GAS_LIMIT");
exports.WITHDRAWAL_GAS_LIMIT_KEY = (0, hash_1.hashString)("WITHDRAWAL_GAS_LIMIT");
exports.INCREASE_ORDER_GAS_LIMIT_KEY = (0, hash_1.hashString)("INCREASE_ORDER_GAS_LIMIT");
exports.DECREASE_ORDER_GAS_LIMIT_KEY = (0, hash_1.hashString)("DECREASE_ORDER_GAS_LIMIT");
exports.SWAP_ORDER_GAS_LIMIT_KEY = (0, hash_1.hashString)("SWAP_ORDER_GAS_LIMIT");
exports.SHIFT_GAS_LIMIT_KEY = (0, hash_1.hashString)("SHIFT_GAS_LIMIT");
exports.SINGLE_SWAP_GAS_LIMIT_KEY = (0, hash_1.hashString)("SINGLE_SWAP_GAS_LIMIT");
exports.TOKEN_TRANSFER_GAS_LIMIT_KEY = (0, hash_1.hashString)("TOKEN_TRANSFER_GAS_LIMIT");
exports.NATIVE_TOKEN_TRANSFER_GAS_LIMIT_KEY = (0, hash_1.hashString)("NATIVE_TOKEN_TRANSFER_GAS_LIMIT");
exports.ESTIMATED_GAS_FEE_BASE_AMOUNT_V2_1 = (0, hash_1.hashString)("ESTIMATED_GAS_FEE_BASE_AMOUNT_V2_1");
exports.ESTIMATED_GAS_FEE_PER_ORACLE_PRICE = (0, hash_1.hashString)("ESTIMATED_GAS_FEE_PER_ORACLE_PRICE");
exports.ESTIMATED_GAS_FEE_MULTIPLIER_FACTOR = (0, hash_1.hashString)("ESTIMATED_GAS_FEE_MULTIPLIER_FACTOR");
exports.MARKET_LIST_KEY = (0, hash_1.hashString)("MARKET_LIST");
exports.POSITION_LIST_KEY = (0, hash_1.hashString)("POSITION_LIST");
exports.ORDER_LIST_KEY = (0, hash_1.hashString)("ORDER_LIST");
exports.ACCOUNT_ORDER_LIST_KEY = (0, hash_1.hashString)("ACCOUNT_ORDER_LIST");
exports.CLAIMABLE_FUNDING_AMOUNT = (0, hash_1.hashString)("CLAIMABLE_FUNDING_AMOUNT");
exports.VIRTUAL_TOKEN_ID_KEY = (0, hash_1.hashString)("VIRTUAL_TOKEN_ID");
exports.VIRTUAL_MARKET_ID_KEY = (0, hash_1.hashString)("VIRTUAL_MARKET_ID");
exports.VIRTUAL_INVENTORY_FOR_POSITIONS_KEY = (0, hash_1.hashString)("VIRTUAL_INVENTORY_FOR_POSITIONS");
exports.VIRTUAL_INVENTORY_FOR_SWAPS_KEY = (0, hash_1.hashString)("VIRTUAL_INVENTORY_FOR_SWAPS");
exports.POOL_AMOUNT_ADJUSTMENT_KEY = (0, hash_1.hashString)("POOL_AMOUNT_ADJUSTMENT");
exports.AFFILIATE_REWARD_KEY = (0, hash_1.hashString)("AFFILIATE_REWARD");
exports.IS_MARKET_DISABLED_KEY = (0, hash_1.hashString)("IS_MARKET_DISABLED");
exports.UI_FEE_FACTOR = (0, hash_1.hashString)("UI_FEE_FACTOR");
exports.SUBACCOUNT_LIST_KEY = (0, hash_1.hashString)("SUBACCOUNT_LIST");
exports.MAX_ALLOWED_SUBACCOUNT_ACTION_COUNT = (0, hash_1.hashString)("MAX_ALLOWED_SUBACCOUNT_ACTION_COUNT");
exports.SUBACCOUNT_ACTION_COUNT = (0, hash_1.hashString)("SUBACCOUNT_ACTION_COUNT");
exports.SUBACCOUNT_ORDER_ACTION = (0, hash_1.hashString)("SUBACCOUNT_ORDER_ACTION");
exports.SUBACCOUNT_AUTO_TOP_UP_AMOUNT = (0, hash_1.hashString)("SUBACCOUNT_AUTO_TOP_UP_AMOUNT");
exports.GLV_MAX_MARKET_TOKEN_BALANCE_USD = (0, hash_1.hashString)("GLV_MAX_MARKET_TOKEN_BALANCE_USD");
exports.GLV_MAX_MARKET_TOKEN_BALANCE_AMOUNT = (0, hash_1.hashString)("GLV_MAX_MARKET_TOKEN_BALANCE_AMOUNT");
exports.IS_GLV_MARKET_DISABLED = (0, hash_1.hashString)("IS_GLV_MARKET_DISABLED");
exports.GLV_SHIFT_LAST_EXECUTED_AT = (0, hash_1.hashString)("GLV_SHIFT_LAST_EXECUTED_AT");
exports.GLV_SHIFT_MIN_INTERVAL = (0, hash_1.hashString)("GLV_SHIFT_MIN_INTERVAL");
exports.GLV_DEPOSIT_GAS_LIMIT = (0, hash_1.hashString)("GLV_DEPOSIT_GAS_LIMIT");
exports.GLV_WITHDRAWAL_GAS_LIMIT = (0, hash_1.hashString)("GLV_WITHDRAWAL_GAS_LIMIT");
exports.GLV_PER_MARKET_GAS_LIMIT = (0, hash_1.hashString)("GLV_PER_MARKET_GAS_LIMIT");
exports.MAX_AUTO_CANCEL_ORDERS_KEY = (0, hash_1.hashString)("MAX_AUTO_CANCEL_ORDERS");
exports.OPTIMAL_USAGE_FACTOR = (0, hash_1.hashString)("OPTIMAL_USAGE_FACTOR");
exports.BASE_BORROWING_FACTOR = (0, hash_1.hashString)("BASE_BORROWING_FACTOR");
exports.ABOVE_OPTIMAL_USAGE_BORROWING_FACTOR = (0, hash_1.hashString)("ABOVE_OPTIMAL_USAGE_BORROWING_FACTOR");
function glvShiftLastExecutedAtKey(glvAddress) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.GLV_SHIFT_LAST_EXECUTED_AT, glvAddress]);
}
exports.glvShiftLastExecutedAtKey = glvShiftLastExecutedAtKey;
function glvShiftMinIntervalKey(glvAddress) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.GLV_SHIFT_MIN_INTERVAL, glvAddress]);
}
exports.glvShiftMinIntervalKey = glvShiftMinIntervalKey;
function glvMaxMarketTokenBalanceUsdKey(glvAddress, market) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.GLV_MAX_MARKET_TOKEN_BALANCE_USD, glvAddress, market]);
}
exports.glvMaxMarketTokenBalanceUsdKey = glvMaxMarketTokenBalanceUsdKey;
function glvMaxMarketTokenBalanceAmountKey(glvAddress, market) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.GLV_MAX_MARKET_TOKEN_BALANCE_AMOUNT, glvAddress, market]);
}
exports.glvMaxMarketTokenBalanceAmountKey = glvMaxMarketTokenBalanceAmountKey;
function isGlvDisabledKey(glvAddress, market) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.IS_GLV_MARKET_DISABLED, glvAddress, market]);
}
exports.isGlvDisabledKey = isGlvDisabledKey;
function positionImpactFactorKey(market, isPositive) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.POSITION_IMPACT_FACTOR_KEY, market, isPositive]);
}
exports.positionImpactFactorKey = positionImpactFactorKey;
function positionImpactExponentFactorKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.POSITION_IMPACT_EXPONENT_FACTOR_KEY, market]);
}
exports.positionImpactExponentFactorKey = positionImpactExponentFactorKey;
function maxPositionImpactFactorKey(market, isPositive) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.MAX_POSITION_IMPACT_FACTOR_KEY, market, isPositive]);
}
exports.maxPositionImpactFactorKey = maxPositionImpactFactorKey;
function positionFeeFactorKey(market, forPositiveImpact) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.POSITION_FEE_FACTOR_KEY, market, forPositiveImpact]);
}
exports.positionFeeFactorKey = positionFeeFactorKey;
function swapImpactFactorKey(market, isPositive) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.SWAP_IMPACT_FACTOR_KEY, market, isPositive]);
}
exports.swapImpactFactorKey = swapImpactFactorKey;
function swapImpactExponentFactorKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.SWAP_IMPACT_EXPONENT_FACTOR_KEY, market]);
}
exports.swapImpactExponentFactorKey = swapImpactExponentFactorKey;
function swapFeeFactorKey(market, forPositiveImpact) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.SWAP_FEE_FACTOR_KEY, market, forPositiveImpact]);
}
exports.swapFeeFactorKey = swapFeeFactorKey;
function openInterestKey(market, collateralToken, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "address", "bool"], [exports.OPEN_INTEREST_KEY, market, collateralToken, isLong]);
}
exports.openInterestKey = openInterestKey;
function openInterestInTokensKey(market, collateralToken, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "address", "bool"], [exports.OPEN_INTEREST_IN_TOKENS_KEY, market, collateralToken, isLong]);
}
exports.openInterestInTokensKey = openInterestInTokensKey;
function poolAmountKey(market, token) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.POOL_AMOUNT_KEY, market, token]);
}
exports.poolAmountKey = poolAmountKey;
function reserveFactorKey(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.RESERVE_FACTOR_KEY, market, isLong]);
}
exports.reserveFactorKey = reserveFactorKey;
function openInterestReserveFactorKey(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.OPEN_INTEREST_RESERVE_FACTOR_KEY, market, isLong]);
}
exports.openInterestReserveFactorKey = openInterestReserveFactorKey;
function maxOpenInterestKey(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.MAX_OPEN_INTEREST_KEY, market, isLong]);
}
exports.maxOpenInterestKey = maxOpenInterestKey;
function borrowingFactorKey(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.BORROWING_FACTOR_KEY, market, isLong]);
}
exports.borrowingFactorKey = borrowingFactorKey;
function borrowingExponentFactorKey(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.BORROWING_EXPONENT_FACTOR_KEY, market, isLong]);
}
exports.borrowingExponentFactorKey = borrowingExponentFactorKey;
function cumulativeBorrowingFactorKey(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.CUMULATIVE_BORROWING_FACTOR_KEY, market, isLong]);
}
exports.cumulativeBorrowingFactorKey = cumulativeBorrowingFactorKey;
function totalBorrowingKey(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.TOTAL_BORROWING_KEY, market, isLong]);
}
exports.totalBorrowingKey = totalBorrowingKey;
function fundingFactorKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.FUNDING_FACTOR_KEY, market]);
}
exports.fundingFactorKey = fundingFactorKey;
function fundingExponentFactorKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.FUNDING_EXPONENT_FACTOR_KEY, market]);
}
exports.fundingExponentFactorKey = fundingExponentFactorKey;
function fundingIncreaseFactorPerSecondKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.FUNDING_INCREASE_FACTOR_PER_SECOND, market]);
}
exports.fundingIncreaseFactorPerSecondKey = fundingIncreaseFactorPerSecondKey;
function fundingDecreaseFactorPerSecondKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.FUNDING_DECREASE_FACTOR_PER_SECOND, market]);
}
exports.fundingDecreaseFactorPerSecondKey = fundingDecreaseFactorPerSecondKey;
function minFundingFactorPerSecondKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.MIN_FUNDING_FACTOR_PER_SECOND, market]);
}
exports.minFundingFactorPerSecondKey = minFundingFactorPerSecondKey;
function maxFundingFactorPerSecondKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.MAX_FUNDING_FACTOR_PER_SECOND, market]);
}
exports.maxFundingFactorPerSecondKey = maxFundingFactorPerSecondKey;
function thresholdForStableFundingKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.THRESHOLD_FOR_STABLE_FUNDING, market]);
}
exports.thresholdForStableFundingKey = thresholdForStableFundingKey;
function thresholdForDecreaseFundingKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.THRESHOLD_FOR_DECREASE_FUNDING, market]);
}
exports.thresholdForDecreaseFundingKey = thresholdForDecreaseFundingKey;
function maxPnlFactorKey(pnlFactorType, market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "bytes32", "address", "bool"], [exports.MAX_PNL_FACTOR_KEY, pnlFactorType, market, isLong]);
}
exports.maxPnlFactorKey = maxPnlFactorKey;
function positionImpactPoolAmountKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.POSITION_IMPACT_POOL_AMOUNT_KEY, market]);
}
exports.positionImpactPoolAmountKey = positionImpactPoolAmountKey;
function minPositionImpactPoolAmountKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.MIN_POSITION_IMPACT_POOL_AMOUNT_KEY, market]);
}
exports.minPositionImpactPoolAmountKey = minPositionImpactPoolAmountKey;
function positionImpactPoolDistributionRateKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.POSITION_IMPACT_POOL_DISTRIBUTION_RATE_KEY, market]);
}
exports.positionImpactPoolDistributionRateKey = positionImpactPoolDistributionRateKey;
function maxPositionImpactFactorForLiquidationsKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.MAX_POSITION_IMPACT_FACTOR_FOR_LIQUIDATIONS_KEY, market]);
}
exports.maxPositionImpactFactorForLiquidationsKey = maxPositionImpactFactorForLiquidationsKey;
function swapImpactPoolAmountKey(market, token) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.SWAP_IMPACT_POOL_AMOUNT_KEY, market, token]);
}
exports.swapImpactPoolAmountKey = swapImpactPoolAmountKey;
function orderKey(dataStoreAddress, nonce) {
    return (0, hash_1.hashData)(["address", "uint256"], [dataStoreAddress, nonce]);
}
exports.orderKey = orderKey;
function depositGasLimitKey() {
    return exports.DEPOSIT_GAS_LIMIT_KEY;
}
exports.depositGasLimitKey = depositGasLimitKey;
function withdrawalGasLimitKey() {
    return (0, hash_1.hashData)(["bytes32"], [exports.WITHDRAWAL_GAS_LIMIT_KEY]);
}
exports.withdrawalGasLimitKey = withdrawalGasLimitKey;
function shiftGasLimitKey() {
    return exports.SHIFT_GAS_LIMIT_KEY;
}
exports.shiftGasLimitKey = shiftGasLimitKey;
function singleSwapGasLimitKey() {
    return exports.SINGLE_SWAP_GAS_LIMIT_KEY;
}
exports.singleSwapGasLimitKey = singleSwapGasLimitKey;
function increaseOrderGasLimitKey() {
    return exports.INCREASE_ORDER_GAS_LIMIT_KEY;
}
exports.increaseOrderGasLimitKey = increaseOrderGasLimitKey;
function decreaseOrderGasLimitKey() {
    return exports.DECREASE_ORDER_GAS_LIMIT_KEY;
}
exports.decreaseOrderGasLimitKey = decreaseOrderGasLimitKey;
function swapOrderGasLimitKey() {
    return exports.SWAP_ORDER_GAS_LIMIT_KEY;
}
exports.swapOrderGasLimitKey = swapOrderGasLimitKey;
function accountOrderListKey(account) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.ACCOUNT_ORDER_LIST_KEY, account]);
}
exports.accountOrderListKey = accountOrderListKey;
function minCollateralFactorKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.MIN_COLLATERAL_FACTOR_KEY, market]);
}
exports.minCollateralFactorKey = minCollateralFactorKey;
function minCollateralFactorForOpenInterest(market, isLong) {
    return (0, hash_1.hashData)(["bytes32", "address", "bool"], [exports.MIN_COLLATERAL_FACTOR_FOR_OPEN_INTEREST_MULTIPLIER_KEY, market, isLong]);
}
exports.minCollateralFactorForOpenInterest = minCollateralFactorForOpenInterest;
function hashedPositionKey(account, market, collateralToken, isLong) {
    return (0, hash_1.hashData)(["address", "address", "address", "bool"], [account, market, collateralToken, isLong]);
}
exports.hashedPositionKey = hashedPositionKey;
function claimableFundingAmountKey(market, token, account) {
    return (0, hash_1.hashData)(["bytes32", "address", "address", "address"], [exports.CLAIMABLE_FUNDING_AMOUNT, market, token, account]);
}
exports.claimableFundingAmountKey = claimableFundingAmountKey;
function virtualTokenIdKey(token) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.VIRTUAL_TOKEN_ID_KEY, token]);
}
exports.virtualTokenIdKey = virtualTokenIdKey;
function virtualMarketIdKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.VIRTUAL_MARKET_ID_KEY, market]);
}
exports.virtualMarketIdKey = virtualMarketIdKey;
function virtualInventoryForSwapsKey(virtualMarketId, token) {
    return (0, hash_1.hashData)(["bytes32", "bytes32", "address"], [exports.VIRTUAL_INVENTORY_FOR_SWAPS_KEY, virtualMarketId, token]);
}
exports.virtualInventoryForSwapsKey = virtualInventoryForSwapsKey;
function virtualInventoryForPositionsKey(virtualTokenId) {
    return (0, hash_1.hashData)(["bytes32", "bytes32"], [exports.VIRTUAL_INVENTORY_FOR_POSITIONS_KEY, virtualTokenId]);
}
exports.virtualInventoryForPositionsKey = virtualInventoryForPositionsKey;
function poolAmountAdjustmentKey(market, token) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.POOL_AMOUNT_ADJUSTMENT_KEY, market, token]);
}
exports.poolAmountAdjustmentKey = poolAmountAdjustmentKey;
function affiliateRewardKey(market, token, account) {
    return (0, hash_1.hashData)(["bytes32", "address", "address", "address"], [exports.AFFILIATE_REWARD_KEY, market, token, account]);
}
exports.affiliateRewardKey = affiliateRewardKey;
function isMarketDisabledKey(market) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.IS_MARKET_DISABLED_KEY, market]);
}
exports.isMarketDisabledKey = isMarketDisabledKey;
function maxPoolUsdForDepositKey(market, token) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.MAX_POOL_USD_FOR_DEPOSIT_KEY, market, token]);
}
exports.maxPoolUsdForDepositKey = maxPoolUsdForDepositKey;
function maxPoolAmountKey(market, token) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.MAX_POOL_AMOUNT_KEY, market, token]);
}
exports.maxPoolAmountKey = maxPoolAmountKey;
function uiFeeFactorKey(address) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.UI_FEE_FACTOR, address]);
}
exports.uiFeeFactorKey = uiFeeFactorKey;
function subaccountListKey(account) {
    return (0, hash_1.hashData)(["bytes32", "address"], [exports.SUBACCOUNT_LIST_KEY, account]);
}
exports.subaccountListKey = subaccountListKey;
function maxAllowedSubaccountActionCountKey(account, subaccount, actionType) {
    return (0, hash_1.hashData)(["bytes32", "address", "address", "bytes32"], [exports.MAX_ALLOWED_SUBACCOUNT_ACTION_COUNT, account, subaccount, actionType]);
}
exports.maxAllowedSubaccountActionCountKey = maxAllowedSubaccountActionCountKey;
function subaccountActionCountKey(account, subaccount, actionType) {
    return (0, hash_1.hashData)(["bytes32", "address", "address", "bytes32"], [exports.SUBACCOUNT_ACTION_COUNT, account, subaccount, actionType]);
}
exports.subaccountActionCountKey = subaccountActionCountKey;
function subaccountAutoTopUpAmountKey(account, subaccount) {
    return (0, hash_1.hashData)(["bytes32", "address", "address"], [exports.SUBACCOUNT_AUTO_TOP_UP_AMOUNT, account, subaccount]);
}
exports.subaccountAutoTopUpAmountKey = subaccountAutoTopUpAmountKey;
