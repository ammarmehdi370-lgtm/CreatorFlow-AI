import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { env } from "@/config/env";

const execFileAsync = promisify(execFile);

export async function checkRenderer(): Promise<boolean> {
  try {
    await execFileAsync(env.FFMPEG_PATH, ["-version"], { timeout: 3000, windowsHide: true });
    return true;
  } catch {
    return false;
  }
}