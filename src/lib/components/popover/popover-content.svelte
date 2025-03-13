<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Popover as PopoverPrimitive } from "bits-ui";

  type PopoverContentProps = PopoverPrimitive.ContentProps;
  const { class: className, ...props }: PopoverContentProps = $props();
</script>

<PopoverPrimitive.Content
  class={cn(
    "z-50 w-80 rounded-md bg-popover p-4 text-popover-foreground shadow-lg outline-none",
    className
  )}
  {...props}
/>
