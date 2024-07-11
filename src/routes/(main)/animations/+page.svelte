<script lang="ts">
	import { Text, ArticleItem } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	$: animations = data.animations;
</script>

<section>
	<Text variant="h1" class="mb-4 flex items-center gap-2">Animations</Text>
	<!-- <Text>{description}</Text> -->

	<div class="mt-10 grid gap-3 sm:grid-cols-2">
		{#each animations as snippet}
			<a href={`/animations/${snippet}`}>
				<ArticleItem variant="compact" showLink={false}>
					<Text variant="h3">{snippet}</Text>
				</ArticleItem>
			</a>
		{/each}
	</div>
</section>
