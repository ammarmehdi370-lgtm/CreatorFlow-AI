import { describe, expect, it } from "vitest";
import { formatDuration, getContentBudget, isValidDuration, secondsToMilliseconds } from "@/config/video-duration";

describe("video duration utilities", () => {
  it("accepts supported integer durations and rejects values outside the range", () => {
    expect(isValidDuration(15)).toBe(true);
    expect(isValidDuration(600)).toBe(true);
    expect(isValidDuration(14)).toBe(false);
    expect(isValidDuration(15.5)).toBe(false);
  });

  it("formats seconds and minute values consistently", () => {
    expect(formatDuration(59)).toBe("59s");
    expect(formatDuration(120)).toBe("2m");
    expect(formatDuration(125)).toBe("2m 5s");
  });

  it("converts to milliseconds and derives a practical content budget", () => {
    expect(secondsToMilliseconds(1.25)).toBe(1250);
    expect(getContentBudget(60)).toEqual({
      words: { min: 111, max: 136 },
      scenes: { min: 7, max: 15 },
      narrationSeconds: 51,
    });
  });

  it("rejects invalid durations when calculating budgets", () => {
    expect(() => getContentBudget(0)).toThrow(RangeError);
  });
});