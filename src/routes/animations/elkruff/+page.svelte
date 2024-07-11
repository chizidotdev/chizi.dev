<script lang="ts">
	import '@fontsource-variable/bricolage-grotesque';
	import '@fontsource-variable/jetbrains-mono';
	import { onMount } from 'svelte';
	import './styles.css';
	import { animate } from './animate';

	const title = 'AIDMEDIUM';
	const letters = title.split('');

	onMount(async () => {
		const { gsap } = await import('gsap');
		animate(gsap);
	});
</script>

<div class="container">
	<nav>
		<div class="logo">
			<a href=".">{title}</a>
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

	<footer>
		<p>&copy;</p>
		<p>Scroll to explore</p>
	</footer>

	<div class="hero-video">
		<video autoplay loop muted>
			<source src="/creative/reel.mp4" type="video/mp4" />
		</video>
	</div>

	<div class="blocks">
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
		<div class="block"></div>
	</div>

	<div class="header">
		{#each letters as letter, idx}
			<div class="header-item">
				<div class={`header-item-wrapper h-${idx + 1}`}><h1>{letter}</h1></div>
			</div>
		{/each}
	</div>

	<div class="counter">
		<p>
			3 <br />
			2 <br />
			1
		</p>
	</div>

	<div class="tagline">
		<p>
			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
			cupidatat, minim labore adipisicing minim sint cillum sint consectetur.
		</p>
	</div>
</div>
