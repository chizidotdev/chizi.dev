<script lang="ts">
	import { Text } from '$lib/components';
	import { cn, formatCurrency } from '$lib/utils';
	import DesignIcon from 'lucide-svelte/icons/component';
	import CodeIcon from 'lucide-svelte/icons/code-xml';
	import SupportIcon from 'lucide-svelte/icons/message-square-more';
	import IntegrationIcon from 'lucide-svelte/icons/workflow';
	import { type Item } from './data';

	export let item: Item;
</script>

<section class="space-y-3">
	<div
		class={cn(
			'grid sm:grid-cols-[auto,1fr,auto,auto] items-stretch gap-3',
			'px-4 py-4 rounded-lg transition-colors',
			'bg-gradient-to-br from-muted border'
		)}
	>
		<div class="min-w-14 flex sm:justify-center items-center">
			{#if item.type === 'design'}
				<DesignIcon />
			{:else if item.type === 'code'}
				<CodeIcon />
			{:else if item.type === 'support'}
				<SupportIcon />
			{:else}
				<IntegrationIcon />
			{/if}
		</div>

		<div class="flex-1 space-y-1">
			<Text>{item.title}</Text>
			<Text asLabel>
				{item.description}
			</Text>
		</div>

		<div class="w-[1px] bg-border sm:block hidden" />

		<div class="w-24 flex items-center sm:justify-center">
			{#if !!item.price}
				<Text>{formatCurrency(item.price)}</Text>
			{:else}
				<Text asLabel>Included</Text>
			{/if}
		</div>
	</div>
</section>
