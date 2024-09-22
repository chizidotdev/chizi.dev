<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { type VariantProps } from "class-variance-authority";
  import { buttonStyles } from "./button";

  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof buttonStyles> {}

  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
</script>

<button {...$$props} class={buttonStyles({ variant, size, class: $$props.class })} on:click>
  {#if variant === "primary"}
    <div
      class="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent shadow-2xl"
    />
  {/if}
  <slot />
</button>
