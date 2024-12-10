<script lang="ts">
  import { page } from "$app/stores";

  const GOOGLE_TAG_ID = "G-J22P840PYN";

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
    gtag("config", "G-J22P840PYN");
  </script>

  <!-- Microsoft Clarity -->
  <script type="text/javascript">
    if (!window.location.host.includes("localhost")) {
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "o7yf1f7272");
    }
  </script>
</svelte:head>

<!-- <AnalyticsBanner /> -->
