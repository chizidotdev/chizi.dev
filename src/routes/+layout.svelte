<script lang="ts">
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

<slot />
