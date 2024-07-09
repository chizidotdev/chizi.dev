<script lang="ts">
	import { personalData } from '$lib/config';
	import { SnippetsPreview, Button, Text, ArticleItem, Badge } from '$lib/components';
	import { MailIcon } from '$lib/icons';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Chizi Victor - Software Developer</title>
	<meta name="title" content="Chizi Victor - Software Developer" />
	<meta
		name="description"
		content="Software developer and unabashed nerd. Building (and occasionally designing) accessible and timeless digital experiences."
	/>
	<meta property="og:title" content="Chizi Victor - Software Developer" />
	<meta
		property="og:description"
		content="Software developer and unabashed nerd. Building (and occasionally designing) accessible and timeless digital experiences."
	/>
	<meta property="og:image" content="/preview.png" />
</svelte:head>

<section class="space-y-14 md:space-y-20">
	<section class="flex flex-col gap-4">
		<div class="flex flex-col capitalize">
			<Text variant="h1">{personalData.headline.top}</Text>
			<Text asLabel variant="h1">
				{personalData.headline.bottom}
			</Text>
		</div>

		<Text>{personalData.summary}</Text>

		<a href="mailto:chiziwokoma@gmail.com" class="mt-2 w-fit">
			<Button variant="primary"><MailIcon class="mr-2 w-4 stroke-foreground" /> Contact me</Button>
		</a>
	</section>

	<section>
		<Text variant="h2">Projects</Text>
		{#each personalData.projects as project}
			<a href={project.link} target="_blank" rel="noopener noreferrer">
				<ArticleItem>
					<Text variant="h3" class="flex items-center gap-2">
						{project.title}
						{#if project.pending}
							<Badge variant="secondary">In progress</Badge>
						{/if}
					</Text>
					<Text asLabel class="mt-1">
						{project.summary}
					</Text>
				</ArticleItem>
			</a>
		{/each}
	</section>

	<SnippetsPreview snippets={data.snippets} />
</section>
