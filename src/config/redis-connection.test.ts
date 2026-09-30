import { describe, expect, it } from "vitest";
import { redisConnectionOptions } from "@/config/redis-connection";

describe("Redis connection configuration", () => {
  it("parses host, port, and database from a local Redis URL", () => {
    expect(redisConnectionOptions("redis://localhost:6379/2")).toMatchObject({
      host: "localhost",
      port: 6379,
      db: 2,
      maxRetriesPerRequest: null,
    });
  });

  it("rejects unsupported protocols", () => {
    expect(() => redisConnectionOptions("http://localhost")).toThrow(TypeError);
  });
});