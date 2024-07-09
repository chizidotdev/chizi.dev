<script lang="ts">
	import '../../app.css';
	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource-variable/bricolage-grotesque';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { onMount } from 'svelte';

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newWorker = registration.installing;

			newWorker?.addEventListener('statechange', () => {
				if (newWorker.state === 'installed') {
					newWorker.postMessage({ type: 'SKIP_WAITING' });
					window.location.reload();
				}
			});
		});
	}

	onMount(() => {
		detectSWUpdate;
	});
</script>

<div
	class="mx-auto flex min-h-dvh w-full max-w-screen-md flex-col justify-between bg-background px-5 py-10 md:px-12"
>
	<Header />

	<main class="my-20 flex-1">
		<slot />
	</main>

	<Footer />
</div>
