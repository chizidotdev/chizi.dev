<script lang="ts">
  import { Heading, Paragraph } from "$lib/components/text";
  import { formatDate } from "$lib/utils";
  import MoveUpRight from "lucide-svelte/icons/arrow-up-right";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: snippets = data.snippets;
  let description = "Bunch of stuff I keep forgetting no matter how much I use em."; // A collection of code snippets I've developed/stolen over time and tend to use often. Ranging from random utililty hooks to environment setup instructions.";
</script>

<svelte:head>
  <title>Snippets - Chizi Victor</title>
  <meta name="title" content="Snippets - Chizi Victor" />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:title" content="Snippets - Chizi Victor" />
  <meta property="og:type" content="article" />
</svelte:head>

{#if snippets?.length}
  <section>
    <div class="fade space-y-2">
      <Heading variant="h4">Snippets</Heading>
      <Paragraph>{description}</Paragraph>
    </div>

    <div class="mt-10 space-y-6">
      {#each snippets as snippet}
        <a href={`/snippets/${snippet.slug}`} class="fade block">
          <Paragraph class="text-muted-foreground">
            {snippet.description}<MoveUpRight class="mb-1.5 inline" size={12} />
          </Paragraph>
          <Paragraph class="text-sm">{formatDate(snippet.date, "MMM YYYY")}</Paragraph>
        </a>
      {/each}
    </div>
  </section>
{/if}
