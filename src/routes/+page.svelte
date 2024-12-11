<script>
  import { Avatar } from "$lib/components/avatar";
  import { Heading, Paragraph } from "$lib/components/text";
  import { personalData } from "$lib/config";
</script>

<section class="flex flex-col gap-4">
  <div class="fade flex items-center gap-2">
    <Avatar class="rounded" />
    <Paragraph class="text-muted-foreground">Chizi Victor</Paragraph>
  </div>

  <div class="fade">
    <Paragraph class="inline">
      {personalData.headline}
    </Paragraph>
    <Paragraph class="inline text-muted-foreground">{personalData.bio}</Paragraph>
  </div>
</section>

<!-- <section>
  <Heading variant="h4" class="fade">Projects</Heading>

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
</section> -->

<section>
  <Heading variant="h4" class="fade">Now</Heading>

  <div class="mt-4 space-y-6">
    <Paragraph class="fade">
      Currently copying and pasting code at
      <a class="link" target="_blank" href="https://turing.com">Turing.</a>
      Not really though, I'm a software developer I swear.
    </Paragraph>

    <Paragraph class="fade">Spending way too much time tinkering with this site.</Paragraph>

    <Paragraph class="fade">
      Running <a class="link" href="https://aidmedium.com" target="_blank">Aidmedium</a>
      where I use my <s class="font-serif italic">addiction</s> passion for software to assist businesses
      and startups.
    </Paragraph>

    <Paragraph class="fade">
      Journaling and writing are my new hobbies. I'm trying to document my journey and learnings as
      often as possible.
    </Paragraph>

    <Heading variant="h4" class="fade fade border-l pl-3">
      If you need more than two tabs to find the solution, write the answer down somewhere.
    </Heading>

    <Paragraph class="fade">
      Last updated on December 05, 2024. This
      <a class="link" target="_blank" href="https://nownownow.com/about">now section</a>
      is inspired by <a class="link" target="_blank" href="https://thu-le.com">Thu Le.</a>
    </Paragraph>
  </div>
</section>
