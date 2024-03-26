const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		role: {
			type: String,
			required: true,
			default: 'user',
		},
		active: {
			type: Boolean,
			default: true,
		},
		premium: {
			state: {
				type: Boolean,
				default: false,
			},
			type: {
				type: String,
				default: null,
			},
			startDate: {
				type: String,
				default: null,
			},
		},
		settings: {
			language: {
				type: String,
				default: 'en',
			},
			theme: {
				type: String,
				default: 'dark',
			},
		},
		habits: [
			{
				title: {
					type: String,
					required: true,
				},
				description: {
					type: String,
				},
				icon: {
					type: String,
					default: null,
				},
				color: {
					type: String,
					default: null,
				},
				reminders: {
					monday: {
						time: {
							type: String,
							default: null,
						},
					},
					tuesday: {
						time: {
							type: String,
							default: null,
						},
					},
					wednesday: {
						time: {
							type: String,
							default: null,
						},
					},
					thursday: {
						time: {
							type: String,
							default: null,
						},
					},
					friday: {
						time: {
							type: String,
							default: null,
						},
					},
					saturday: {
						time: {
							type: String,
							default: null,
						},
					},
					sunday: {
						time: {
							type: String,
							default: null,
						},
					},
				},
				streakGoal: {
					type: {
						type: String,
						default: 'None',
					},
					times: {
						type: Number,
						default: 0,
					},
				},
				completionsPerDay: {
					type: Number,
					default: 1,
				},
				completed: {
					type: Number,
					default: 0,
				},
				archived: {
					type: Boolean,
					default: false,
				},
				completedAt: {
					type: [String],
					default: [],
				},
				createdAt: {
					type: String,
				},
			},
		],
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
