<script lang="ts">
  import { page } from "$app/stores";

  const GOOGLE_TAG_ID = "G-WGPRFZV0DS";

  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", GOOGLE_TAG_ID, {
        page_title: document.title,
        page_path: $page.url.pathname,
      });
    }
  }
</script>

<svelte:head>
  <!-- Google Analytics -->
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}>
  </script>

  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-WGPRFZV0DS");
  </script>
</svelte:head>
