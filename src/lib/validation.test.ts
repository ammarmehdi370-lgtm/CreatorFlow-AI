import { describe, expect, it } from "vitest";
import { createProjectSchema } from "@/lib/validation";

describe("create project validation", () => {
  it("trims titles and applies duration defaults", () => {
    expect(createProjectSchema.parse({ title: "  Launch film  " })).toMatchObject({
      title: "Launch film",
      durationSeconds: 60,
      durationPreset: "60s",
    });
  });

  it("rejects empty titles and durations outside product bounds", () => {
    expect(createProjectSchema.safeParse({ title: " " }).success).toBe(false);
    expect(createProjectSchema.safeParse({ title: "Film", durationSeconds: 601 }).success).toBe(false);
  });
});