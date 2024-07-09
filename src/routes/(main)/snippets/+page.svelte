<script lang="ts">
	import { Text, ArticleItem } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	$: snippets = data.snippets;
	let description =
		"TLDR; Bunch of stuff I keep forgetting no matter how much I use em. A collection of code snippets I've developed/stolen over time and tend to use often. Ranging from random utililty hooks to environment setup instructions.";
</script>

<svelte:head>
	<title>Snippets - Chizi Victor</title>
	<meta name="title" content="Snippets - Chizi Victor" />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content="Snippets - Chizi Victor" />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="/og-snippets.png" />
</svelte:head>

{#if snippets?.length}
	<section>
		<Text variant="h1" class="mb-4 flex items-center gap-2">Snippets</Text>
		<Text>{description}</Text>

		<div class="mt-10 grid gap-3 sm:grid-cols-2">
			{#each snippets as snippet}
				<a href={`/snippets/${snippet.slug}`}>
					<ArticleItem variant="compact" showLink={false}>
						<Text variant="h3">{snippet.title}</Text>
						<Text asLabel>{snippet.description}</Text>
					</ArticleItem>
				</a>
			{/each}
		</div>
	</section>
{/if}
