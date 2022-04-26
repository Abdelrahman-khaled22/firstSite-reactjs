export const data = [
	{
		title: 'What our clients say',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Our security ',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/security.jpg',
	},
	{
		title: 'Our Team',
		description: 'Our team consists of the best experts in the industry, learn about them',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Our servers',
		description: 'Find more about hardware and software used for your service',
		image: './assets/istockphoto-1197646065-612x612.jpg',
	},
	{
		title: 'Our top clients',
		description: 'We have provided services to top clients in tech industry',
		image: './assets/istockphoto-619084248-612x612.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};