<script lang="ts">
  import { Text } from "$lib/components";
  import { cn, formatCurrency } from "$lib/utils";
  import DesignIcon from "lucide-svelte/icons/component";
  import CodeIcon from "lucide-svelte/icons/code-xml";
  import SupportIcon from "lucide-svelte/icons/message-square-more";
  import IntegrationIcon from "lucide-svelte/icons/workflow";
  import { type Item } from "./data";

  export let item: Item;
</script>

<section class="space-y-3">
  <div
    class={cn(
      "grid items-stretch gap-3 sm:grid-cols-[auto,1fr,auto,auto]",
      "rounded-lg px-4 py-4 transition-colors",
      "border bg-gradient-to-br from-muted"
    )}
  >
    <div class="flex min-w-14 items-center sm:justify-center">
      {#if item.type === "design"}
        <DesignIcon />
      {:else if item.type === "code"}
        <CodeIcon />
      {:else if item.type === "support"}
        <SupportIcon />
      {:else}
        <IntegrationIcon />
      {/if}
    </div>

    <div class="flex-1 space-y-1">
      <Text>{item.title}</Text>
      <Text label>
        {item.description}
      </Text>
    </div>

    <div class="hidden w-[1px] bg-border sm:block" />

    <div class="flex w-24 items-center sm:justify-center">
      {#if !!item.price}
        <Text>{formatCurrency(item.price)}</Text>
      {:else}
        <Text label>Included</Text>
      {/if}
    </div>
  </div>
</section>
