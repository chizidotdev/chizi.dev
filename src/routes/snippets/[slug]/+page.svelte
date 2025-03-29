<script lang="ts">
  import { Heading, Paragraph } from "$lib/components/text";
  import { formatDate } from "$lib/utils";
  import { CornerUpLeft } from "lucide-svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.meta.title} - Chizi Victor</title>
  <meta name="description" content={data.meta.description} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:type" content="article" />
</svelte:head>

<a href="/snippets" class=" flex items-center gap-2">
  <CornerUpLeft class="size-4" /> Snippets
</a>

<article class="flex flex-col gap-10">
  <hgroup class="space-y-1">
    <Paragraph class=" text-sm text-muted-foreground">
      {formatDate(new Date(data.meta.date), "MMM DD, YYYY")}
    </Paragraph>
    <Heading>
      {data.meta.title}
    </Heading>
    <Paragraph class="">{data.meta.description}</Paragraph>
  </hgroup>

  <div class="">
    <svelte:component this={data.content} />
  </div>
</article>
