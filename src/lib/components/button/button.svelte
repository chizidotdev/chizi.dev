<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Button as ButtonPrimitive } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { type Props, buttonVariants } from "./button";

  type ButtonProps = HTMLAttributes<HTMLButtonElement> & Props;

  const { children, variant, size, class: className, ...props }: ButtonProps = $props();
</script>

<ButtonPrimitive.Root class={cn(buttonVariants({ variant, size, className }))} {...props}>
  {@render children?.()}
</ButtonPrimitive.Root>
