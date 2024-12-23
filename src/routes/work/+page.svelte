<script lang="ts">
  import { Heading, Paragraph } from "$lib/components/text";
  import CyteCode from "./cyte-code.md";
  import PioneeringProgrammers from "./pioneering-programmers.md";

  let description =
    "Frontend-focused software engineer with extensive experience in developing a wide array of products, ranging from managed service provider (MSP) and e-commerce software to animated portfolio showcases for creative agencies and professionals.";
</script>

<svelte:head>
  <title>Work - Chizi Victor</title>
  <meta name="title" content="Work - Chizi Victor" />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:title" content="Work - Chizi Victor" />
  <meta property="og:type" content="article" />
</svelte:head>

<div>
  <Heading class="fade font-serif" variant="h2">Pioneering Programmers</Heading>
  <Paragraph class="fade mb-4">Senior Frontend Engineer, 2022 - 2024</Paragraph>
  <div class="fade text-muted-foreground">
    <PioneeringProgrammers />
  </div>
</div>

<div class="fade border-b"></div>

<!-- <div class="border-t py-6"> -->
<!--   <Text variant="h3">Aidmedium</Text> -->
<!--   <Text label class="mb-4">Full Stack Developer, 2021 - 2022</Text> -->
<!--   <div class="text-muted-foreground"> -->
<!--     <Aidmedium /> -->
<!--   </div> -->
<!-- </div> -->

<div>
  <Heading class="fade font-serif" variant="h2">Cyte Technologies</Heading>
  <Paragraph class="fade mb-4">Frontend Developer, 2021 - 2022</Paragraph>
  <div class="fade text-muted-foreground">
    <CyteCode />
  </div>
</div>
