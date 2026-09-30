import { describe, expect, it } from "vitest";
import { readEnvironment } from "@/config/env";

describe("database configuration", () => {
  it("accepts a PostgreSQL connection URL without requiring a live connection", () => {
    expect(readEnvironment({ DATABASE_URL: "postgresql://creatorflow:local@localhost:5432/creatorflow" }).DATABASE_URL)
      .toBe("postgresql://creatorflow:local@localhost:5432/creatorflow");
  });
});