"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const Icon = resolvedTheme === "dark" ? Sun : Moon;

  return (
    <div className="flex items-center gap-1 rounded-lg border border-line p-1" aria-label="Theme">
      <Button variant="ghost" size="icon" aria-label={`Switch to ${nextTheme} theme`} onClick={() => setTheme(nextTheme)}>
        <Icon size={17} aria-hidden="true" />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Use system theme" onClick={() => setTheme("system")}>
        <Monitor size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}