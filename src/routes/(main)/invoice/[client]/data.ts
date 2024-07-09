export let info = [
	{ label: 'Quote for', values: ['Winewave LTD', '0915-760-6264'] },
	{ label: 'Quote by', values: ['Chizi Victor', '0903-739-0992'] },
	{ label: 'Issue date', values: ['2024-03-26'] },
	{ label: 'Expiration date', values: ['2024-04-23'] }
];

export type ItemType = 'design' | 'code' | 'support' | 'integration';
export type Item = {
	type: ItemType;
	title: string;
	description: string;
	price?: number;
};
export let items: Item[] = [
	{
		type: 'support',
		title: 'Kickoff Call',
		description:
			"Let's get together and discuss the strategy of your project. Requirements, goals, and expectations."
	},
	{
		type: 'design',
		title: 'Design Moods',
		description: 'Defining the visual style of your company & website.',
		price: 200000
	},
	{
		type: 'code',
		title: 'Storefront Development',
		description:
			'Building the website, integrating the agreed design, and making sure everything works as expected.',
		price: 500000
	},
	{
		type: 'code',
		title: 'CMS Development',
		description: 'Building the Content Management System (CMS) for the website.',
		price: 200000
	},
	{
		type: 'integration',
		title: 'Payment Gateway',
		description: 'Setting up a payment gateway to receive payments online.',
		price: 100000
	},
	{
		type: 'integration',
		title: 'Custom Email',
		description: 'Setting up a custom business email addresses for your company.'
	},
	{
		type: 'support',
		title: 'CMS Walkthrough',
		description: 'Showing you how to manage the content of your website with the CMS.'
	}
];
