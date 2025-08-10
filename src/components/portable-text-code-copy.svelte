<script lang="ts">
  export let code: any;
  let status: "idle" | "success" | "error" = "idle";

  async function copyToClipboard() {
    try {
      // Remove invisible Unicode characters and normalize whitespace
      const cleanCode = code
        .replace(/[\u200B-\u200F\u2028-\u202F\u205F-\u206F\uFEFF]/g, "") // All zero-width and formatting chars
        .replace(/[\u00A0\u1680\u2000-\u200A\u3000]/g, " ") // Non-breaking spaces
        .trim();

      await navigator.clipboard.writeText(cleanCode);
      status = "success";
      setTimeout(() => {
        status = "idle";
      }, 2000);
    } catch (err) {
      status = "error";
      setTimeout(() => {
        status = "idle";
      }, 2000);
    }
  }
</script>

<button
  on:click={copyToClipboard}
  aria-label="Copy code to clipboard"
  class="flex items-center gap-2"
>
  {#if status === "success"}
    <span class="text-xs font-medium">Copied!</span>
  {:else if status === "error"}
    <span class="text-xs font-medium text-red-700">Error!</span>
  {/if}

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide text-muted-foreground hover:text-foreground size-3.5 cursor-pointer transition-colors"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
</button>
