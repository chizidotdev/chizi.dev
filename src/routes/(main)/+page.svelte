<script lang="ts">
  import Avatar from "$lib/components/avatar.svelte";
  import { personalData, CAL_LINK } from "$lib/config";
  import { Button, Text } from "$lib/components";
  import Value from "./value.svelte";
  import Work from "./work.svelte";
  import Services from "./services.svelte";
  import Testimonials from "./testimonials.svelte";
  import Faq from "./faq.svelte";
  import About from "./about.svelte";
</script>

<svelte:head>
  <title>Chizi Victor - Software Developer</title>
  <meta
    name="description"
    content="Software developer and unabashed nerd. Building (and occasionally designing) accessible and timeless digital experiences."
  />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://chizi.aidmedium.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Chizi Victor - Software Developer" />
  <meta
    property="og:description"
    content="Software developer and unabashed nerd. Building (and occasionally designing) accessible and timeless digital experiences."
  />
  <meta property="og:image" content="https://ik.imagekit.io/chizidotdev/portfolio/og-image.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="chizi.aidmedium.com" />
  <meta property="twitter:url" content="https://chizi.aidmedium.com" />
  <meta name="twitter:title" content="Chizi Victor - Software Developer" />
  <meta
    name="twitter:description"
    content="Software developer and unabashed nerd. Building (and occasionally designing) accessible and timeless digital experiences."
  />
  <meta name="twitter:image" content="https://ik.imagekit.io/chizidotdev/portfolio/og-image.png" />
</svelte:head>

<div class="space-y-20 md:space-y-28">
  <section class="flex flex-col items-center gap-6 text-center">
    <div class="flex items-center gap-2">
      <Avatar />
      <Text>Chizi Victor</Text>
    </div>

    <div class="container flex flex-col capitalize">
      <Text variant="h1">
        Software solutions partner <br class="hidden sm:block" />for
        <span class="text-muted-foreground">startups</span>
        and
        <span class="text-muted-foreground">businesses.</span>
      </Text>
    </div>

    <Text class="container max-w-md">{personalData.summary}</Text>

    <a href={CAL_LINK} class="mt-2 w-fit">
      <Button variant="primary"><Avatar /> Book a Free Discovery Call</Button>
    </a>

    <div class="mx-4 my-10 w-full max-w-screen-lg px-4">
      <video
        src="https://ik.imagekit.io/chizidotdev/portfolio/work-preview.mp4"
        poster="https://ik.imagekit.io/chizidotdev/portfolio/ecommerce/store.png"
        muted
        autoplay
        loop
        class="aspect-[16/11] w-full rounded-md object-cover"
      />
    </div>

    <!-- <div class="mt-10 text-center">
      <Text>We didn’t just hire another faceless dev shop.</Text>
      <Text label>
        Working with Chizi transformed how our business operates, we automated tedious tasks and
        watched our sales grow without lifting a finger!
      </Text>
      <Text label class="mt-3 text-sm">- Michael Gray, CEO @ Gray's Consulting</Text>
    </div> -->
  </section>

  <Value />
  <Work />
  <Services />
  <Testimonials />
  <About />
  <Faq />
</div>
