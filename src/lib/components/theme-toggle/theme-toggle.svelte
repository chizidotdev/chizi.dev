<script lang="ts">
  import Moon from "lucide-svelte/icons/moon";
  import Sun from "lucide-svelte/icons/sun";

  import { toggleMode } from "mode-watcher";
  import { Button } from "../button";
</script>

<Button onclick={toggleMode} variant="ghost" size="icon">
  <Sun class="dark:hidden" />
  <Moon class="hidden dark:inline" />
  <span class="sr-only">Toggle theme</span>
</Button>
