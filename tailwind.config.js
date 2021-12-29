module.exports = {
	mode: 'jit',
	prefix: '',
	purge: {
		content: [
			'./src/**/*.{html,ts}',
		]
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-800': '#121212',
				'dark-700': '#1B1B1B',
				'dark-600': '#1F1F1F',
				'dark-500': '#212121',
				'dark-400': '#222222',
				'dark-300': '#232323',
				'dark-200': '#424242',
				'dark-100': '#818181',
				'dark-err': '#cf6679',

				'light-500': '#595959',
				'light-400': '#7F7F7F',
				'light-300': '#A5A5A5',
				'light-200': '#CCCCCC',
				'light-100': '#F2F2F2',
				'light-err': '#B00020',

				'b-orange-500': '#FF6D00',
				'b-orange-400': '#fc7810',
				'b-orange-300': '#FF8500',
				'b-orange-200': '#FF9100',
				'b-orange-100': '#FF9E00',

				'b-purple-500': '#240046',
				'b-purple-400': '#3C096C',
				'b-purple-300': '#5A189A',
				'b-purple-200': '#7B2CBF',
				'b-purple-100': '#9D4EDD',

				'b-blue': '#3700B3',
				'b-lavander': '#BB86FC',
				'b-yellow': '#f7de5f',
			},
		},
	},
	variants: {
		extend: {
			display: ['group-focus'],
			opacity: ['group-focus'],
			inset: ['group-focus']
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
