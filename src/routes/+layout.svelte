<script lang="ts">
  import { personalData } from "$lib/config";
  import { gsap } from "gsap";
  import "../styles/app.css";

  import { onMount } from "svelte";
  import Footer from "./footer.svelte";

  let { children } = $props();

  async function animate() {
    const timeline = gsap.timeline();

    timeline
      .to(".fade", {
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.03,
      })
      .to(".fade", {
        scale: 1,
        translateY: 0,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.08,
      });
  }

  onMount(() => {
    animate();
  });
</script>

<svelte:head>
  <title>Chizi Victor</title>
  <meta name="description" content={personalData.headline} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://chizi.dev" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Chizi Victor" />
  <meta property="og:description" content={personalData.headline} />
  <meta property="og:image" content="https://ik.imagekit.io/chizidotdev/portfolio/og-image.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="chizi.dev" />
  <meta property="twitter:url" content="https://chizi.dev" />
  <meta name="twitter:title" content="Chizi Victor" />
  <meta name="twitter:description" content={personalData.headline} />
  <meta name="twitter:image" content="https://ik.imagekit.io/chizidotdev/portfolio/og-image.png" />
</svelte:head>

<div class="sticky-blur"></div>
<main class="container mt-16 flex-1 space-y-12 sm:mt-24">
  {@render children()}
</main>

<Footer />
