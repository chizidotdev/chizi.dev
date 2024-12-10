<script lang="ts">
  let { children } = $props();
</script>

<div class="space-y-3" id="markdown">{@render children()}</div>
