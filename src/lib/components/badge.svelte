<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLAttributes } from 'svelte/elements';

	const badgeVariants = cva(
		'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
		{
			variants: {
				variant: {
					default: 'border-transparent bg-primary text-primary-foreground shadow',
					secondary: 'border-transparent bg-secondary text-muted-foreground',
					destructive: 'border-transparent bg-destructive text-destructive-foreground shadow',
					outline: 'text-foreground'
				}
			}
		}
	);

	interface $$Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

	export let variant: $$Props['variant'] = 'default';
</script>

<div class={badgeVariants({ variant, class: $$props.class })}>
	<slot />
</div>
