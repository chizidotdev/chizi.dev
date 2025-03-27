<script>
  import { Paragraph } from "$lib/components/text";
  import { appConfig } from "$lib/config";

  const workItems = [
    {
      title: "Slimepay",
      description:
        "Simplifying cross-border payments with a seamless currency conversion platform for Nigerian professionals.",
      preview: "https://ik.imagekit.io/chizidotdev/aidmedium/slimepay/thumbnail.png",
      thumbnail: "https://ik.imagekit.io/chizidotdev/aidmedium/slimepay/preview.png",
    },
    {
      title: "Winewave",
      description:
        "Elevating online liquor retail with a premium e-commerce experience tailored for connoisseurs.",
      preview: "https://ik.imagekit.io/chizidotdev/aidmedium/winewave/thumbnail.png",
      thumbnail: "https://ik.imagekit.io/chizidotdev/aidmedium/winewave/preview.png",
    },
  ];
</script>

<svelte:head>
  <title>Chizi Victor</title>
  <meta name="description" content={appConfig.description} />
</svelte:head>

<section class="space-y-10">
  {#each workItems as item}
    <div>
      <div class="group relative aspect-[4/3] overflow-hidden">
        <img src={item.thumbnail} alt={item.title} class="size-full rounded-md object-cover" />
        <img
          src={item.preview}
          alt={item.title}
          class="absolute inset-0 size-full rounded-md object-cover opacity-0 transition group-hover:opacity-100"
        />
      </div>
      <div class="mt-2 max-w-md text-sm">
        <Paragraph class="font-medium">{item.title}</Paragraph>
        <Paragraph class="leading-5 text-muted-foreground">{item.description}</Paragraph>
      </div>
    </div>
  {/each}
</section>

<Paragraph class="text-center text-sm text-muted-foreground">Case studies soon.</Paragraph>
