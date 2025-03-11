<script lang="ts">
  import { appConfig } from "$lib/config";
  import { ModeWatcher } from "mode-watcher";
  import "../styles/app.css";

  import { onNavigate } from "$app/navigation";
  import Analytics from "./analytics.svelte";
  import Footer from "./footer.svelte";
  import Header from "./header.svelte";

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <title>Chizi Victor</title>
  <meta name="description" content={appConfig.description} />

  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href="/fonts/InterVariable.woff2"
    crossorigin="anonymous"
  />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://chizi.dev" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Chizi Victor" />
  <meta property="og:description" content={appConfig.description} />
  <meta property="og:image" content="https://ik.imagekit.io/chizidotdev/portfolio/og-image.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="chizi.dev" />
  <meta property="twitter:url" content="https://chizi.dev" />
  <meta name="twitter:title" content="Chizi Victor" />
  <meta name="twitter:description" content={appConfig.description} />
  <meta name="twitter:image" content="https://ik.imagekit.io/chizidotdev/portfolio/og-image.png" />
</svelte:head>

<div class="sticky-blur"></div>

<ModeWatcher />
<Analytics />

<Header />
<main class="container mt-12 flex-1 space-y-12">
  {@render children()}
</main>
<Footer />
