<script>
  import Avatar from "$lib/components/avatar.svelte";
  import { CAL_LINK } from "$lib/config";
  import Button from "$lib/components/button.svelte";
  import Text from "$lib/components/text.svelte";

  const services = [
    "Full-stack Web Development",
    "Landing Pages & Sales Funnel",
    "Mobile App Development",
    "E-commerce Solutions",
    "Backend Architecture & APIs",
    "Automations & Systems Integration",
  ];

  const pricing = [
    { label: "Projects start at", value: "$2,500" },
    { label: "Websites", value: "$2,500" },
    { label: "Mobile / Web Apps", value: "$5,000 to $15,000" },
  ];
</script>

<section id="pricing" class="flex flex-col bg-muted px-4 py-20">
  <div class="container max-w-screen-sm space-y-10 rounded-md bg-background p-6 shadow-sm sm:p-10">
    <div>
      <Text label serif class="text-sm">Services & Pricing</Text>
      <Text variant="h2">Here's what I can help you with:</Text>
    </div>
    <div class="grid gap-3 sm:grid-cols-2">
      {#each services as service}
        <li>{service}</li>
      {/each}
    </div>

    <div class="h-px w-full bg-border" />

    <div class="flex flex-col items-center gap-6 pb-3 sm:grid sm:grid-cols-2">
      <a href={CAL_LINK} class="w-fit">
        <Button variant="primary"><Avatar /> Book a Free Discovery Call</Button>
      </a>

      <div class="flex items-center gap-2">
        <div class="relative size-2 [&>*]:absolute [&>*]:inset-0">
          <div class="animate-ping rounded-full bg-green-500 duration-1500" />
          <div class="rounded-full bg-green-500" />
        </div>
        <Text>Available for October, 2024</Text>
      </div>
    </div>
  </div>

  <div class="container mt-20 flex max-w-screen-sm flex-col items-center gap-6">
    {#each pricing as price}
      <div class="flex w-full flex-col items-center sm:flex-row sm:gap-3">
        <Text label variant="h3">{price.label}</Text>
        <div class="hidden h-px flex-1 bg-border sm:block" />
        <Text variant="h3">{price.value}</Text>
      </div>
    {/each}
  </div>
</section>

<section class="container">
  <Text label serif>The process</Text>
  <Text variant="h2">Here's what's next.</Text>
  <br />
  <Text>
    Discovery Call – We’ll discuss your business or startup goals, project needs, and see how we can
    work together.
    <br />
    <br />
    Proposal – I’ll send you a tailored proposal within 24 hours, breaking down the project scope, goals,
    and cost.
    <br />
    <br />
    Development – Weekly updates, focused sprints, and constant feedback loops to keep everything on
    track.
    <br />
    <br />
    Launch – Whether it’s an MVP or an enterprise-grade platform, we’ll ensure your launch goes smoothly.
    <br />
    <br />
    Support – Ongoing maintenance and support to ensure your software keeps performing, growing, and
    evolving.
  </Text>
</section>
