<script>
  import Text from "$lib/components/text.svelte";
</script>

<section
  class="container flex max-w-screen-lg grid-cols-[auto,1fr] flex-col-reverse gap-10 md:grid"
>
  <div>
    <img
      src="https://ik.imagekit.io/chizidotdev/portfolio/chizidotdev.png"
      class="w-full rounded-md object-cover md:h-full md:max-w-80"
      alt="Profile avatar"
    />
  </div>
  <div class="space-y-4">
    <Text variant="h2">About me</Text>

    <Text serif>Hello, I'm Chizi.</Text>

    <Text>
      I'm an experienced software developer and unabashed nerd based in Rivers, Nigeria. With a
      strong background in design and sales, I help startups and business owners automate their
      workflows, launch scalable MVPs, and drive growth through custom software.
      <br />
      <br />
      With years of experience working and collaborating with other professionals, I’ve transformed operations
      and built products that have helped businesses thrive and startups get funded.
      <br />
      <br />
      My primary areas of expertise are eCommerce, Conversion Rate Optimizations, and SaaS Companies.
      Fresh ideas are what inspires me the most.
    </Text>
  </div>
</section>
