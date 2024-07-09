<script lang="ts">
	import { personalData } from '$lib/config';
	import { buttonStyles, Text } from '$lib/components';
	import { TwitterIcon, GithubIcon, LinkedinIcon, MailIcon } from '$lib/icons';
</script>

<footer class="mt-14 flex flex-col items-center justify-between gap-12 sm:items-start">
	<div class="flex items-center gap-6">
		<a href="/" class={buttonStyles({ variant: 'link' })}>home</a>
		<a href="/work" class={buttonStyles({ variant: 'link' })}>work</a>
		<a href="/snippets" class={buttonStyles({ variant: 'link' })}>snippets</a>
	</div>

	<div class="flex items-center gap-3">
		{#each personalData.socials as link}
			<a
				href={link.url}
				class={buttonStyles({ variant: 'outline', size: 'icon' })}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={link.id}
			>
				{#if link.id === 'twitter'}
					<TwitterIcon />
				{:else if link.id === 'github'}
					<GithubIcon />
				{:else if link.id === 'linkedin'}
					<LinkedinIcon class="p-0.5" />
				{:else if link.id === 'mail'}
					<MailIcon class="p-0.5" />
				{/if}
			</a>
		{/each}
	</div>

	<Text class="text-center sm:text-left">
		Developed by <span class="text-muted-foreground">@chizidotdev</span>. Built with
		<a
			href="https://kit.svelte.dev"
			class={buttonStyles({ variant: 'link' })}
			target="_blank"
			rel="noopener noreferrer"
		>
			SvelteKit
		</a>
		and
		<a
			href="https://tailwindcss.com/"
			class={buttonStyles({ variant: 'link' })}
			target="_blank"
			rel="noopener noreferrer"
		>
			TailwindCSS,
		</a>
		deployed on
		<a
			href="https://railway.app/"
			class={buttonStyles({ variant: 'link' })}
			target="_blank"
			rel="noopener noreferrer"
		>
			Railway
		</a>
	</Text>
</footer>
