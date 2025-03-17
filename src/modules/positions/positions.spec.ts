import { arbitrumSdk } from "utils/testUtil";
import { describe, expect, it } from "vitest";

describe("Positions", () => {
  describe("getPositions", () => {
    it("should be able to get positions data", async () => {
      const { marketsInfoData, tokensData } = (await arbitrumSdk.markets.getMarketsInfo()) ?? {};

      if (!tokensData || !marketsInfoData) {
        throw new Error("Tokens data or markets info is not available");
      }

      const positions = await arbitrumSdk.positions.getPositions({ tokensData, marketsData: marketsInfoData });

      expect(positions).toBeDefined();
    });

    it("should be able to get positions info", async () => {
      const { marketsInfoData, tokensData } = (await arbitrumSdk.markets.getMarketsInfo()) ?? {};

      if (!tokensData || !marketsInfoData) {
        throw new Error("Tokens data or markets info is not available");
      }

      const positions = await arbitrumSdk.positions.getPositionsInfo({
        tokensData,
        marketsInfoData,
        showPnlInLeverage: true,
      });

      expect(positions).toBeDefined();
    });
  });
});
