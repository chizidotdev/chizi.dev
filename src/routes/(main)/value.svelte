<script lang="ts">
  import { Tabs } from "$lib/components/tabs";
  import { usp } from "$lib/config";
  import { Text } from "$lib/components";
</script>

<section class="flex flex-col bg-muted py-20">
  <div class="container">
    <Text variant="h2">Your Project Needs to Drive Results, Not Just Sit Pretty.</Text>
    <br />
    <Text>
      Whether you’re a startup looking to bring your idea to life or a business owner ready to
      automate operations, you need more than just an MVP or a fancy website.
      <br />
      <br />
      You need a product that works for you—driving growth, boosting sales, and making operations seamless.
    </Text>
  </div>

  <Tabs.Root value="business" class="mt-10 w-full space-y-4">
    <div class="mx-auto w-full max-w-screen-md px-4 sm:px-4">
      <Tabs.List class="w-full sm:max-w-sm">
        <Tabs.Trigger value="business">Businesses</Tabs.Trigger>
        <Tabs.Trigger value="startup">Startups</Tabs.Trigger>
      </Tabs.List>
    </div>

    <Tabs.Content value="business" class="mx-auto max-w-screen-md space-y-4 px-4">
      <div
        class="flex w-full flex-col gap-3 rounded-lg border bg-gradient-to-tl from-muted to-background p-6 transition-colors sm:p-8"
      >
        <Text label serif>Your Problem</Text>
        {#each usp.businesses.problem as problem}
          <li>{problem}</li>
        {/each}
      </div>
      <div
        class="mx-auto flex w-full max-w-screen-md flex-col gap-3 rounded-lg border bg-gradient-to-br from-muted to-background p-6 transition-colors sm:p-8"
      >
        <Text label serif>Your Solution</Text>
        {#each usp.businesses.solution as solution}
          <li>{solution}</li>
        {/each}
      </div>
    </Tabs.Content>

    <Tabs.Content value="startup" class="mx-auto max-w-screen-md space-y-4 px-4">
      <div
        class="flex w-full flex-col gap-3 rounded-lg border bg-gradient-to-tl from-muted to-background p-6 transition-colors sm:p-8"
      >
        <Text label serif>Your Problem</Text>
        {#each usp.startups.problem as problem}
          <li>{problem}</li>
        {/each}
      </div>
      <div
        class="mx-auto flex w-full max-w-screen-md flex-col gap-3 rounded-lg border bg-gradient-to-br from-muted to-background p-6 transition-colors sm:p-8"
      >
        <Text label serif>Your Solution</Text>
        {#each usp.startups.solution as solution}
          <li>{solution}</li>
        {/each}
      </div>
    </Tabs.Content>
  </Tabs.Root>
</section>
