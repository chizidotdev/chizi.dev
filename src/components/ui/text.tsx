import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 font-bold tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl",
      h2: "text-2xl",
      h3: "text-lg",
      h4: "text-base font-semibold",
    },
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ className, variant = "h1", ...props }, ref) => {
    const Comp = variant!;

    return <Comp className={cn(headingVariants({ variant, className }))} {...props} ref={ref} />;
  }
);

Heading.displayName = "Heading";

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return <p className={cn("tracking-tight", className)} {...props} ref={ref} />;
});

Paragraph.displayName = "Paragraph";

export { Heading, Paragraph };
