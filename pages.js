const user = [
	{
		normal: {
			pages: [homepage, habits, addHabit, editHabit, deleteHabit, profile, editProfile, settings],
		},
	},
	{
		premium: {
			pages: [
				homepage,
				habits,
				addHabit,
				editHabit,
				deleteHabit,
				profile,
				editProfile,
				completionsPerDay,
				reminders,
				streakGoal,
				moreHabits,
				settings,
				moreIcons,
				moreColors,
				stats,
			],
		},
	},
	{
		guest: {
			pages: [homepage, login, register, support],
		},
	},
	{
		admin: {
			pages: [...all, websiteStats, users, websiteSettings, addIcons, addColors],
		},
	},
]
