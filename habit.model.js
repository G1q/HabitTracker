const habit = {
	title: 'Habit #1',
	description: 'Habit #1 description',
	createdAt: '2024-03-26',
	icon: 'habit.svg',
	color: '#FF6200',
	reminders: [
		{
			name: 'Monday',
			time: '12:00',
		},
		{
			name: 'Tuesday',
			time: '12:00',
		},
		{
			name: 'Wednesday',
			time: null,
		},
		// etc
	],
	streakGoal: {
		type: 'Weekly',
		times: 3, // type === 'Daily' ? times === 1 || type === 'none' ? times === 0
	},
	completionsPerDay: 2, // default: 1
	completed: 1, // default: 0
	completedAt: [
		'2024-03-26',
		'2024-03-27',
		'2024-03-28',
		'2024-03-29',
		'2024-03-30',
		'2024-03-31',
		'2024-04-01',
		'2024-04-02',
		'2024-04-03',
		'2024-04-04',
		'2024-04-05',
		'2024-04-06',
		'2024-04-07',
		'2024-04-08',
		'2024-04-09',
	],
	archived: false, // default: false
	updatedAt: '2024-03-26',
}
