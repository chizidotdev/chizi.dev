<script lang="ts">
  import { cn } from "$lib/utils";
  import { cva, type VariantProps } from "class-variance-authority";
  import type { HTMLAttributes } from "svelte/elements";

  type HeadingProps = HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof headingVariants>;
  const { children, variant, class: className, ...props }: HeadingProps = $props();

  const headingVariants = cva("scroll-m-20 font-display", {
    variants: {
      variant: {
        h1: "text-xl font-medium first:mt-0",
        h2: "text-lg font-medium",
        h3: "font-serif text-sm text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "h1",
    },
  });

  const element = variant || "h1";
</script>

<svelte:element this={element} class={cn(headingVariants({ variant }), className)} {...props}>
  {@render children?.()}
</svelte:element>
