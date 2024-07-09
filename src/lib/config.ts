export const appConfig = {
	title: 'Chizi Victor - Software Developer',
	description: 'Creative software developer and unabashed nerd.',
	url: 'https://chizi.dev'
} as const;

export const personalData = {
	headline: { top: 'Building my own ideas.', bottom: 'Assisting you to launch yours.' },
	summary: `Software developer and unabashed nerd.
        Building (and occasionally designing) accessible and timeless digital experiences. 
        Currently Frontend Engineer at Pioneering Programmers.`,
	projects: [
		{
			title: 'Link',
			link: 'https://aidm.link',
			summary:
				'Digital portfolio generator for creatives. Publish an online portfolio in just a few minutes and showcase your work to the world.',
			pending: true
		},
		{
			title: 'Copia',
			link: 'https://copia.aidmedium.com',
			summary:
				'Headless multi-vendor e-commerce platform for small businesses and direct sales representatives.',
			pending: true
		},
		{
			title: 'Nuntius',
			link: 'https://nuntius.aidmedium.com',
			summary: 'An interactive messaging web-app with a dare game.',
			pending: false
		}
	],
	socials: [
		{ id: 'twitter', name: 'Twitter', url: 'https://twitter.com/chizidotdev' },
		{ id: 'github', name: 'GitHub', url: 'https://github.com/chizidotdev' },
		{
			id: 'linkedin',
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/chizi-wokoma-1b486a226/'
		},
		{ id: 'mail', name: 'Email', url: 'mailto:chiziwokoma@gmail.com' }
	]
} as const;
