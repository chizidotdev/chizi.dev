import { json } from '@sveltejs/kit';

async function getAnimations() {
	let animations: string[] = [];
	const paths = import.meta.glob('/src/routes/animations/*/*.svelte', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/')[4];

		if (!file || typeof file !== 'object' || !slug) continue;
		animations.push(slug);
	}

	return animations;
}

export async function GET() {
	const animations = await getAnimations();

	return json(animations);
}
