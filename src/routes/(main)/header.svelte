<script lang="ts">
	import { personalData } from '$lib/config';
	import { Text, buttonStyles } from '$lib/components';
	import { TwitterIcon, GithubIcon } from '$lib/icons';
</script>

<header class="flex items-center justify-between">
	<div class="flex items-center gap-3">
		<a href="/">
			<img
				src="https://avatars.githubusercontent.com/u/92993973?s=80"
				class="w-12 h-12 rounded-full"
				alt="Profile avatar"
			/></a
		>
		<div>
			<Text variant="h3">Chizi Victor</Text>
			<Text asLabel>Software Engineer</Text>
		</div>
	</div>

	<div class="flex items-center gap-3">
		{#each personalData.socials as link}
			{#if link.id !== 'linkedin' && link.id !== 'mail'}
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
					{/if}
				</a>
			{/if}
		{/each}
	</div>
</header>
