<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const textVariants = cva("", {
    variants: {
      variant: {
        h1: "scroll-m-20 text-3xl tracking-tight lg:text-4xl",
        h2: "scroll-m-20 text-2xl tracking-tight first:mt-0",
        h3: "scroll-m-20 text-lg tracking-tight",
        p: "leading-7",
        em: "",
      },
      label: {
        true: "text-muted-foreground",
      },
      serif: {
        true: "font-serif italic",
      },
    },
  });

  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof textVariants> {
    label?: boolean;
  }

  export let variant: $$Props["variant"] = "p";
  export let label: $$Props["label"] = false;
</script>

<svelte:element
  this={variant}
  class={textVariants({ variant, label, serif: $$props.serif, class: $$props.class })}
>
  <slot />
</svelte:element>
