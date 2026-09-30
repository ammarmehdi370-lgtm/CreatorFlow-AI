import { PrismaClient } from "@prisma/client";

const prismaGlobal = globalThis as typeof globalThis & { prisma?: PrismaClient };

export const prisma = prismaGlobal.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
});

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = prisma;

export async function checkDatabase(): Promise<boolean> {
  let timeout: NodeJS.Timeout | undefined;
  try {
    return await Promise.race([
      prisma.$queryRaw`SELECT 1`.then(() => true).catch(() => false),
      new Promise<boolean>((resolve) => {
        timeout = setTimeout(() => resolve(false), 3000);
      }),
    ]);
  } catch {
    return false;
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}