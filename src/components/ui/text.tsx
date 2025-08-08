import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 font-bold", {
  variants: {
    variant: {
      h1: "text-2xl",
      h2: "text-xl",
      h3: "text-lg",
      h4: "",
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
>(({ ...props }, ref) => {
  return <p {...props} ref={ref} />;
});

Paragraph.displayName = "Paragraph";

export { Heading, Paragraph };
