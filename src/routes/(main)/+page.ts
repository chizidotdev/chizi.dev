import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/snippets');
	let snippets: Snippet[] = await response.json();

	snippets = snippets.slice(0, 4);

	return { snippets };
};
