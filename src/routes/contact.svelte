<script>
  import { Button } from "$lib/components/button";
  import { Popover, PopoverContent, PopoverTrigger } from "$lib/components/popover";
  import { Paragraph } from "$lib/components/text";
  import Focus from "lucide-svelte/icons/focus";
  import { onMount } from "svelte";

  const features = [
    "World Class Product Design",
    "Tailored Software Solutions",
    "Daily & Weekly Updates",
    "Personal Communication Channel",
    "30 day engagement - 30h/week",
  ];

  const price = {
    local: "₦1,200,000", // ₦10,000 / hr = ₦300,000 / week
    foreign: "$9,000", // $75 / hr = $2,250 / week
  };

  let isNigeria = $state(false);
  onMount(() => {
    const COUNTRY_KEY = "_user_region";
    const NIGERIA_KEY = "NG";
    const country = localStorage.getItem(COUNTRY_KEY);

    if (country) {
      // Default to the cache value while we wait for the API to respond
      isNigeria = country === NIGERIA_KEY;
    }

    fetch("https://ipinfo.io/json")
      .then((response) => response.json())
      .then((data) => {
        isNigeria = data.country === NIGERIA_KEY;

        // Cache country result in browser
        localStorage.setItem(COUNTRY_KEY, data.country);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  });
</script>

<Popover>
  <PopoverTrigger class="link focus-visible:outline-none">Hire me.</PopoverTrigger>

  <PopoverContent
    class="w-80 space-y-4 text-sm"
    sideOffset={12}
    collisionPadding={10}
    onOpenAutoFocus={(e) => e.preventDefault()}
  >
    <div class="w-full max-w-xs space-y-2 rounded-sm border bg-muted p-6">
      <div class="flex items-center gap-2">
        <Focus class="size-5" />
        <Paragraph class="font-medium">Deliverables</Paragraph>
      </div>

      <div class="space-y-0.5">
        {#each features as feature}
          <Paragraph class="text-muted-foreground">{feature}</Paragraph>
        {/each}
      </div>

      <Paragraph class="font-medium">
        {isNigeria ? price.local : price.foreign} minimum engagement rate
      </Paragraph>
    </div>

    <div class="grid place-items-center gap-2">
      <div class="flex items-center gap-4">
        <div class="relative h-2 [&>*]:absolute [&>*]:inset-0">
          <span class="size-2 animate-ping rounded-full bg-green-600"></span>
          <span class="size-2 rounded-full bg-green-600"></span>
        </div>
        <Paragraph>Available May 2025</Paragraph>
      </div>

      <a href="https://cal.com/aidmedium/discovery" target="_blank">
        <Button>Book a call with Chizi</Button>
      </a>

      <a href="mailto:chizi@aidmedium.com" class="link">chizi@aidmedium.com</a>
    </div>
  </PopoverContent>
</Popover>
