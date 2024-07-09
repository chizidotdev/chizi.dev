<script lang="ts">
	import { Text, Accordion, Button, buttonStyles } from '$lib/components';
	import DownloadIcon from 'lucide-svelte/icons/download';
	import { formatCurrency, cn } from '$lib/utils';
	import Item from './item.svelte';
	import { PUBLIC_PAYSTACK_PUBLIC_KEY } from '$env/static/public';
	import { info, items } from './data';
	import type { PageData } from './$types';

	export let data: PageData;
	let totalAmount = formatCurrency(1000000);
	let amountDue = formatCurrency(500000);

	let handler: any;
	function initializePaystack() {
		if (!window.PaystackPop) {
			console?.error('Paystack is not available.');
			return;
		}

		handler = window.PaystackPop.setup({
			key: PUBLIC_PAYSTACK_PUBLIC_KEY, // Replace with your public key
			email: 'winewaveng@gmail.com',
			amount: 500000 * 100,
			ref: Date.now(),
			// label: "Optional string that replaces customer email"
			onClose: function () {
				alert('Payment cancelled');
			},
			callback: function (response: any) {
				let message = 'Payment complete! Reference: ' + response.reference;
				alert(message);
			}
		});
	}

	function payWithPaystack() {
		handler.openIframe();
	}
</script>

<svelte:head>
	<script src="https://js.paystack.co/v1/inline.js" on:load={initializePaystack}></script>
	<title>Invoice - Winewave LTD</title>
</svelte:head>

<div class="flex flex-col gap-10">
	<section class="space-y-3">
		<Text variant="h1">Ecommerce StoreFront</Text>
		<Text>
			Winewave LTD is expanding and needs to enhance its online presence to this growth. The company
			has decided to launch an online store to sell its products.
		</Text>
	</section>

	<section class="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
		{#each info as { label, values }}
			<div>
				<Text variant="h2">{label}</Text>
				{#each values as value}
					<Text asLabel>{value}</Text>
				{/each}
			</div>
		{/each}
	</section>

	<section class="space-y-3 border-b">
		{#each items as item}
			<Item {item} />
		{/each}

		<div class="py-6 flex flex-col gap-3">
			<div class="flex justify-between items-center">
				<Text asLabel>Total in NGN:</Text>
				<Text variant="h2">{totalAmount}</Text>
			</div>
			<div class="flex justify-between items-center">
				<Text asLabel>Amount Due:</Text>
				<Text variant="h2">{amountDue}</Text>
			</div>
			<a
				href="{data.client}/receipt"
				class={cn(buttonStyles({ variant: 'link' }), 'w-min self-end mt-4')}
			>
				View Receipts
			</a>
		</div>
	</section>

	<section class="space-y-3">
		<Text variant="h2">Additional Info</Text>

		<Accordion.Root multiple>
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Scope changes</Accordion.Trigger>
				<Accordion.Content>
					Any changes to the scope of the project will impact the timeline and budget. We will
					provide a new quote for any additional work.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Image licenses</Accordion.Trigger>
				<Accordion.Content>
					Image, video and any other media licenses are not included in the quote. At launch, we
					will provide a list of all media used on the website (if any) and their licenses. This
					simply means that you are responsible for the licenses of any media you provide.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>Payments?</Accordion.Trigger>
				<Accordion.Content>
					We require a 50% deposit before we start the project. The remaining 50% is due upon
					completion of the project.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>

	<section>
		<Text class="mb-4" variant="h2">Invoice</Text>
		<a href="/invoices/winewaveng.pdf" target="_blank" rel="noopener noreferrer">
			<Button>
				Download PDF&nbsp;&nbsp;<DownloadIcon class="w-4 stroke-primary-foreground" />
			</Button>
		</a>
	</section>

	<section
		class="flex justify-between items-center gap-3 py-6 sticky bottom-0 bg-background border-t -mx-2 px-2"
	>
		<a
			href="https://wa.me/+2349037390992?text=Hello%2C%20I%20have%20a%20question.%0A"
			target="_blank"
			rel="noopener noreferrer"
			class="w-full"
		>
			<Button size="lg" class="w-full" variant="secondary">Ask a question</Button>
		</a>
		<Button on:click={payWithPaystack} size="lg" class="w-full" variant="primary">
			Pay now - {amountDue}
		</Button>
	</section>
</div>
