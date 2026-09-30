import { describe, expect, it } from "vitest";
import { readEnvironment } from "@/config/env";

describe("environment configuration", () => {
  it("allows optional integrations to be absent during local boot", () => {
    const environment = readEnvironment({ NODE_ENV: "test" });
    expect(environment.NODE_ENV).toBe("test");
    expect(environment.FFMPEG_PATH).toBe("ffmpeg");
    expect(environment.OPENAI_API_KEY).toBeUndefined();
  });

  it("rejects a malformed optional URL rather than silently accepting it", () => {
    expect(() => readEnvironment({ REDIS_URL: "not-a-url" })).toThrow();
  });
});