import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "border bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-muted-foreground underline-offset-4 underline px-0",
        primary: [
          "relative hover:animate-shimmer border transition-colors shadow-md text-background",
          "bg-[linear-gradient(110deg,hsl(var(--foreground)),35%,hsl(var(--muted-foreground)),50%,hsl(var(--foreground)))] bg-[length:200%_100%]",
        ],
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-4",
        icon: "h-9 w-9",
      },
    },
  }
);
