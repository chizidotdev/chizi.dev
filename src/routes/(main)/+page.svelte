<script lang="ts">
  import Avatar from "$lib/components/avatar.svelte";
  import { personalData, CAL_LINK } from "$lib/config";
  import { Button, Text } from "$lib/components";
  import Value from "./value.svelte";
  import Work from "./work.svelte";
  import Services from "./services.svelte";
  import Testimonials from "./testimonials.svelte";
  import Faq from "./faq.svelte";
</script>

<svelte:head>
  <title>Chizi Victor - Software Developer</title>
  <meta name="title" content="Chizi Victor - Software Developer" />
  <meta
    name="description"
    content="Software developer and unabashed nerd. Building (and occasionally designing) accessible and timeless digital experiences."
  />
  <meta property="og:title" content="Chizi Victor - Software Developer" />
  <meta
    property="og:description"
    content="Software developer and unabashed nerd. Building (and occasionally designing) accessible and timeless digital experiences."
  />
  <meta property="og:image" content="/preview.png" />
</svelte:head>

<div class="space-y-20 md:space-y-28">
  <section class="container flex flex-col items-center gap-6 text-center">
    <div class="flex items-center gap-2">
      <Avatar />
      <Text>Chizi Victor</Text>
    </div>

    <!-- <div class="flex flex-col capitalize">
      <Text variant="h1">{personalData.headline.top}</Text>
      <Text label variant="h1">
        {personalData.headline.bottom}
      </Text>
    </div> -->

    <div class="flex flex-col capitalize">
      <Text variant="h1">
        Software solutions partner <br class="hidden sm:block" />for
        <span class="text-muted-foreground">startups</span>
        and
        <span class="text-muted-foreground">businesses.</span>
      </Text>
    </div>

    <Text class="max-w-sm">{personalData.summary}</Text>

    <a href={CAL_LINK} class="mt-2 w-fit">
      <Button variant="primary"><Avatar /> Book a Free Discovery Call</Button>
    </a>

    <div class="mt-10 text-center">
      <Text>We didn’t just hire another faceless dev shop.</Text>
      <Text label>
        Working with Chizi transformed how our business operates, we automated tedious tasks and
        watched our sales grow without lifting a finger!
      </Text>
      <Text label class="mt-3 text-sm">- Samuel Lopez, Co-Founder @ Parable</Text>
    </div>
  </section>

  <Value />
  <Work />
  <Services />
  <Testimonials />
  <Faq />

  <!-- <SnippetsPreview snippets={data.snippets} /> -->
</div>
