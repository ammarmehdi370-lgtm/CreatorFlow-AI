import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      primary: "bg-ink text-canvas hover:bg-ink/85",
      secondary: "border border-line bg-panel text-ink hover:bg-tint",
      ghost: "text-muted hover:bg-tint hover:text-ink",
      destructive: "bg-danger text-white hover:bg-danger/90",
    },
    size: { default: "h-10 px-4", sm: "h-9 px-3 text-xs", icon: "size-9 p-0" },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}