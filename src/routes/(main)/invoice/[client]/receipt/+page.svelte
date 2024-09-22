<script lang="ts">
  import { Text, Button } from "$lib/components";
  import DownloadIcon from "lucide-svelte/icons/download";
  import { formatCurrency, formatDate } from "$lib/utils";
  import MailIcon from "lucide-svelte/icons/mail";
  import PhoneIcon from "lucide-svelte/icons/phone-call";

  const date = "2024-03-26T16:07:02.269Z";
</script>

<svelte:head>
  <title>Receipt - Winewave LTD</title>
</svelte:head>

<div class="flex flex-col gap-4">
  <Text variant="h1">Payment Received</Text>

  <Text label>ID: {new Date(date).getTime()}</Text>

  <div>
    <Text variant="h2">Winewave LTD</Text>
    <Text>{formatDate(date, "DD/MM/YYYY")}</Text>
  </div>

  <div class="mt-5 border-b" />

  <!-- <Text variant="h2">Hi Winewave LTD</Text> -->
  <div class="flex flex-col justify-end gap-2">
    <Text class="text-end">Ecommerce Storefront Developement</Text>
    <Text class="text-end" label>Subtotal: {formatCurrency(1000000)}</Text>
  </div>

  <div class="border-b" />

  <Text class="text-end" variant="h2">Paid: {formatCurrency(500000)}</Text>

  <a href="/receipts/winewaveng.pdf" target="_blank" rel="noopener noreferrer">
    <Button>
      Download PDF&nbsp;&nbsp;<DownloadIcon class="w-4 stroke-primary-foreground" />
    </Button>
  </a>

  <div class="mt-20 flex items-center gap-2">
    <MailIcon class="h-5 w-5" />
    <Text class="text-end">chiziwokoma@gmail.com</Text>
  </div>

  <div class="-mt-2 flex items-center gap-2">
    <PhoneIcon class="h-5 w-5" />
    <Text class="text-end">0903-739-0992</Text>
  </div>
</div>
