<script lang="ts">
  import { Heading, Paragraph } from "$lib/components/text";
  import { formatDate } from "$lib/utils";
  import MoveUpRight from "lucide-svelte/icons/arrow-up-right";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: snippets = data.snippets ?? [];
  let description = "Bunch of stuff I keep forgetting no matter how much I use them.";
</script>

<svelte:head>
  <title>Snippets - Chizi Victor</title>
  <meta name="title" content="Snippets - Chizi Victor" />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:title" content="Snippets - Chizi Victor" />
  <meta property="og:type" content="article" />
</svelte:head>

<section>
  <div class="space-y-2">
    <Heading variant="h3">{description}</Heading>
  </div>

  <div class="mt-10 space-y-8">
    {#each snippets as snippet}
      <a href={`/snippets/${snippet.slug}`} class="group block">
        <Paragraph>
          {snippet.description}
          <MoveUpRight
            class="mb-1.5 inline transition group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
            size={12}
          />
        </Paragraph>
        <Paragraph class="text-sm text-muted-foreground">
          {formatDate(snippet.date, "MMM YYYY")}
        </Paragraph>
      </a>
    {/each}
  </div>
</section>
