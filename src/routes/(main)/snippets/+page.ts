import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/snippets');
	let snippets: Snippet[] = await response.json();

	return { snippets };
};
