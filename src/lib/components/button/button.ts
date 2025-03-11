import type { Button as ButtonPrimitive } from "bits-ui";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
    "[&>svg]:size-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Variant = VariantProps<typeof buttonVariants>["variant"];
export type Size = VariantProps<typeof buttonVariants>["size"];

export type Props = ButtonPrimitive.RootProps & {
  variant?: Variant;
  size?: Size;
};
