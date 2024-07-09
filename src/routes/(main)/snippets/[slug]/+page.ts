import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const snippet = await import(`../../../../snippets/${params.slug}.md`);

		return {
			content: snippet.default,
			meta: snippet.metadata as Snippet
		};
	} catch (e) {
		error(404, 'Snippet not found');
	}
};
