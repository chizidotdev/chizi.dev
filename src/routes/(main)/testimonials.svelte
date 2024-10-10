<script>
  import Text from "$lib/components/text.svelte";

  const testimonials = [
    // {
    //   name: "Jake Sacks",
    //   title: "Founder",
    //   company: "TheShopGuy",
    //   message:
    //     "Our business went from drowning in paperwork to operating on autopilot. The software Chizi built for us has transformed our sales processes and freed up valuable time.",
    // },
    {
      name: "Grace Williams",
      title: "Founder",
      company: "QuickRetail",
      message:
        "Thanks to Chizi, our manual tasks are now automated. From tracking inventory to processing orders, it's all seamless. We’ve saved hundreds of hours in labor!",
    },
  ];
</script>

<section class="bg-muted py-20">
  <div class="container">
    <Text label serif>Testimonials</Text>
    <Text variant="h2">
      Don't take it from me.
      <br />
      Hear it from previous partners.
    </Text>
  </div>

  <div class="container relative mt-10 max-w-4xl rounded-md sm:bg-background sm:py-28">
    <nav class="hidden sm:block">
      <div class="absolute left-8 top-1/2 hidden -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg
        >
      </div>

      <div class="absolute right-8 top-1/2 hidden -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
        >
      </div>
    </nav>

    {#each testimonials as client}
      <div class="space-y-3 sm:mx-16">
        <Text>"{client.message}"</Text>
        <div>
          <Text>{client.name}</Text>
          <Text label>{client.title} at {client.company}</Text>
        </div>
      </div>
    {/each}
  </div>
</section>
