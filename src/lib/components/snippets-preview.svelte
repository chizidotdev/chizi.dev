<script lang="ts">
  import { Button, Text, ArticleItem } from "$lib/components";

  export let snippets;
</script>

{#if snippets?.length}
  <section class="">
    <Text variant="h2" class="flex items-center gap-2">Snippets</Text>
    <Text label>Bunch of stuff I keep forgetting no matter how much I use em.</Text>

    <div class="mt-4 flex flex-col gap-2">
      {#each snippets as snippet}
        <a href={`/snippets/${snippet.slug}`}>
          <ArticleItem variant="compact">
            <Text variant="h3">{snippet.title}</Text>
            <Text label>{snippet.description}</Text>
          </ArticleItem>
        </a>
      {/each}
    </div>

    <div class="mt-6 text-center md:text-left">
      <a href="/snippets"> <Button variant="secondary">View more</Button></a>
    </div>
  </section>
{/if}
