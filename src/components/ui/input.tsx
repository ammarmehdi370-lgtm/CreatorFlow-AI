import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, label, error, id, ...props }, ref) => {
  const inputId = id ?? props.name;
  return (
    <div className="grid gap-1.5">
      {label && <label htmlFor={inputId} className="text-sm font-medium">{label}</label>}
      <input ref={ref} id={inputId} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : undefined} className={cn("h-10 w-full rounded-lg border border-line bg-panel px-3 text-sm outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-coral disabled:cursor-not-allowed disabled:opacity-50", error && "border-danger", className)} {...props} />
      {error && <p id={`${inputId}-error`} className="text-xs text-danger">{error}</p>}
    </div>
  );
});
Input.displayName = "Input";