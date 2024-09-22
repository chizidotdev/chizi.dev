<script lang="ts">
  import "../../app.css";
  import Footer from "./footer.svelte";
  import { onMount } from "svelte";
  import Navbar from "./navbar.svelte";

  async function detectSWUpdate() {
    const registration = await navigator.serviceWorker.ready;

    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;

      newWorker?.addEventListener("statechange", () => {
        if (newWorker.state === "installed") {
          newWorker.postMessage({ type: "SKIP_WAITING" });
          window.location.reload();
        }
      });
    });
  }

  onMount(() => {
    detectSWUpdate;
  });
</script>

<!-- <Header /> -->
<Navbar />

<div class="flex min-h-dvh w-full flex-col justify-between bg-background py-10">
  <main class="mb-20 mt-14 flex-1">
    <slot />
  </main>

  <Footer />
</div>
