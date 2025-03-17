"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalSwapAggregator = exports.TriggerThresholdType = exports.TradeMode = exports.TradeType = void 0;
var TradeType;
(function (TradeType) {
    TradeType["Long"] = "Long";
    TradeType["Short"] = "Short";
    TradeType["Swap"] = "Swap";
})(TradeType || (exports.TradeType = TradeType = {}));
var TradeMode;
(function (TradeMode) {
    TradeMode["Market"] = "Market";
    TradeMode["Limit"] = "Limit";
    TradeMode["StopMarket"] = "StopMarket";
    TradeMode["Trigger"] = "Trigger";
})(TradeMode || (exports.TradeMode = TradeMode = {}));
var TriggerThresholdType;
(function (TriggerThresholdType) {
    TriggerThresholdType["Above"] = ">";
    TriggerThresholdType["Below"] = "<";
})(TriggerThresholdType || (exports.TriggerThresholdType = TriggerThresholdType = {}));
var ExternalSwapAggregator;
(function (ExternalSwapAggregator) {
    ExternalSwapAggregator["OpenOcean"] = "openOcean";
})(ExternalSwapAggregator || (exports.ExternalSwapAggregator = ExternalSwapAggregator = {}));
