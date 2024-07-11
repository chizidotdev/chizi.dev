import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/animations');
	let animations: string[] = await response.json();

	return { animations };
};
