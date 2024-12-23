<script>
  import { Heading, Paragraph } from "$lib/components/text";
  import { personalData } from "$lib/config";
  import { ArrowUpRight } from "lucide-svelte";
</script>

<svelte:head>
  <title>Chizi Victor</title>
  <meta name="description" content={personalData.headline} />
</svelte:head>

<section class="flex flex-col gap-4">
  <div class="fade">
    <Paragraph class="inline">{personalData.headline}</Paragraph>
    <Paragraph class="inline text-muted-foreground">{personalData.bio}</Paragraph>
  </div>
</section>

<section>
  <Heading variant="h4" class="fade">Browse</Heading>

  <div class="mt-4 flex flex-col gap-3">
    <a class="fade link w-fit" href="/snippets">
      Snippets<ArrowUpRight class="mb-1.5 inline" size={12} />
    </a>
    <a class="fade link w-fit" href="/work">
      Work<ArrowUpRight class="mb-1.5 inline" size={12} />
    </a>
    <a class="fade link w-fit" href="/now">
      Now<ArrowUpRight class="mb-1.5 inline" size={12} />
    </a>
  </div>
</section>

<section>
  <Heading variant="h4" class="fade">Ventures</Heading>

  <div class="mt-4 space-y-6">
    {#each personalData.projects as project}
      <a
        href={project.link}
        target={!project.external ? undefined : "_blank"}
        class="fade flex flex-col"
      >
        <Paragraph>{project.title}<ArrowUpRight class="mb-1.5 inline" size={12} /></Paragraph>
        <Paragraph class="text-muted-foreground">{project.summary}</Paragraph>
      </a>
    {/each}
  </div>
</section>
