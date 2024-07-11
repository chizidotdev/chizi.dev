<script lang="ts">
	import './styles.css';
	import '@fontsource-variable/bricolage-grotesque';
	import '@fontsource-variable/jetbrains-mono';
	import { onMount } from 'svelte';
	import { animate } from './animate';

	const left = 'CHIZI';
	const right = 'VICTOR';
	const leftLetters = left.split('');
	const rightLetters = right.split('');

	onMount(async () => {
		const { gsap } = await import('gsap');
		animate(gsap);
	});
</script>

<div class="container">
	<nav>
		<div class="logo">
			<a href=".">{left} {right}</a>
		</div>
		<div class="links">
			<div class="link">
				<a href=".">Contact Us</a>
			</div>
			<div class="link">
				<a href=".">Menu</a>
			</div>
		</div>
	</nav>
	<div class="header">
		{#each leftLetters as letter, idx}
			<div class="header-item">
				<div class={`header-item-wrapper h-${idx + 1}`}><h1>{letter}</h1></div>
			</div>
		{/each}
		<div class="preview" />
		{#each rightLetters as letter, idx}
			<div class="header-item">
				<div class={`header-item-wrapper h-${idx + 1}`}><h1>{letter}</h1></div>
			</div>
		{/each}
	</div>
</div>
