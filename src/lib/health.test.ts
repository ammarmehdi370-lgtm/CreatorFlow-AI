import { beforeEach, describe, expect, it, vi } from "vitest";

const serviceMocks = vi.hoisted(() => ({ database: vi.fn(), redis: vi.fn(), renderer: vi.fn() }));

vi.mock("@/lib/db", () => ({ checkDatabase: serviceMocks.database }));
vi.mock("@/lib/redis", () => ({ checkRedis: serviceMocks.redis }));
vi.mock("@/lib/renderer", () => ({ checkRenderer: serviceMocks.renderer }));

import { GET } from "@/app/api/health/route";

describe("GET /api/health", () => {
  beforeEach(() => {
    serviceMocks.database.mockResolvedValue(true);
    serviceMocks.redis.mockResolvedValue(true);
    serviceMocks.renderer.mockResolvedValue(true);
  });

  it("returns healthy dependency status without configuration secrets", async () => {
    process.env.OPENAI_API_KEY = "must-not-be-returned";
    const response = await GET();
    const payload = await response.json();
    expect(response.status).toBe(200);
    expect(payload).toMatchObject({ status: "ok", services: { application: "ok", database: "ok", redis: "ok", renderer: "ok" } });
    expect(JSON.stringify(payload)).not.toContain("must-not-be-returned");
    delete process.env.OPENAI_API_KEY;
  });

  it("reports degraded status when a required service is unavailable", async () => {
    serviceMocks.redis.mockResolvedValue(false);
    const response = await GET();
    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ status: "degraded", services: { redis: "unavailable" } });
  });
});