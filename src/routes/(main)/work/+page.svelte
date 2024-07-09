<script lang="ts">
	import { Text, Badge } from '$lib/components';
	import PioneeringProgrammers from './pioneering-programmers.md';
	import Aidmedium from './aidmedium.md';
	import CyteCode from './cyte-code.md';

	let description =
		'Frontend-focused software engineer with extensive experience in developing a wide array of products, ranging from managed service provider (MSP) and e-commerce software to animated portfolio showcases for creative agencies and professionals.';
</script>

<svelte:head>
	<title>Snippets - Chizi Victor</title>
	<meta name="title" content="Work - Chizi Victor" />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content="Work - Chizi Victor" />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="/og-work.png" />
</svelte:head>

<hgroup class="mb-8">
	<Text variant="h1" class="mb-4 flex items-center gap-2">
		Work <Badge>New</Badge>
	</Text>
	<Text>{description}</Text>
</hgroup>

<div class="border-t py-6">
	<Text variant="h3">Pioneering Programmers</Text>
	<Text asLabel class="mb-4">Senior Frontend Engineer, 2022 - Present</Text>
	<PioneeringProgrammers />
</div>

<div class="border-t py-6">
	<Text variant="h3">Aidmedium</Text>
	<Text asLabel class="mb-4">Full Stack Developer, 2021 - 2022</Text>
	<Aidmedium />
</div>

<div class="border-t py-6">
	<Text variant="h3">Cyte Technologies</Text>
	<Text asLabel class="mb-4">Frontend Developer, 2021</Text>
	<CyteCode />
</div>
