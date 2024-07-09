import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	if (params.client !== 'winewaveng') {
		error(404, 'Not found');
	}
};
