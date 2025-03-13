<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  const { children, class: className, ...props }: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p class={cn("leading-6 tracking-[-0.1px]", className)} {...props}>
  {@render children?.()}
</p>
