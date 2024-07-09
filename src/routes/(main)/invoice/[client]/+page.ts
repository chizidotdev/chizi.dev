export const ssr = false;
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.client !== 'winewaveng') {
		error(404, 'Not found');
	}

	return { client: params.client };
};
