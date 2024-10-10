<script>
  import Text from "$lib/components/text.svelte";
  import { projects } from "$lib/config";
</script>

<section class="space-y-10" id="work">
  <div class="container flex max-w-2xl flex-col gap-2">
    <Text label serif>Work Catalogue</Text>
    <Text variant="h2">
      I’ve helped my clients transform their operations and growth trajectories.
    </Text>
    <Text class="mt-4">
      From launching high-impact MVPs for startups to building workflow automation systems for
      established businesses.
    </Text>
  </div>

  <div class="container grid max-w-screen-xl gap-10 px-4 md:grid-cols-2">
    {#each projects as project}
      <div class="space-y-4">
        <div class="aspect-[1.3] w-full rounded-xl border transition-colors hover:bg-muted lg:p-10">
          <img alt={project.title} src={project.thumbnail} class="aspect-[1.3] w-full rounded-md" />
        </div>
        <div class="mx-4">
          <Text label>{project.category}</Text>
          <Text>{project.title}</Text>
        </div>
      </div>
    {/each}
  </div>

  <Text class="mx-auto w-fit">Case studies soon...</Text>
</section>
