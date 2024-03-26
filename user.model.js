const user = {
	username: 'G1q',
	password: 'test',
	email: 'bg@bg.com',
	role: 'user',
	habits: [
		/* ...habits */
	],
	active: true, // default: false, after verify email => true
	premium: {
		state: true,
		type: 'yearly', // default null, enum: monthly, yearly, lifetime
		startDate: '2024-03-26',
	},
	settings: {
		language: 'en',
		theme: 'light',
	},
}
