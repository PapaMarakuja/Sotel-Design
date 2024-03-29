module.exports = {
	mode: 'jit',
	prefix: '',
	purge: {
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darkMode: {
					'font-primary': '#F1FFFF',
					'font-secundary': '#c9d1d9',
					neonBlue: '#38bdf8',
					100: '#121212',
					200: '#23272A',
					300: '#818181',
					glass: 'rgba(35, 39, 42, 0.125)',
				},

				lightMode: {
					'font-primary': '#0f172a',
					'font-secundary': '#475569',
					neonBlue: '#0ea5e9',
					100: '#FFFFFF',
					200: '#e0e0e0',
					300: '#CCCCCC',
					glass: 'rgba(224, 224, 224, 0.125)',
				},

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
			boxShadow: {
				light: '1px 1px 5px rgba(0, 0, 0, 0.3)',
				'light-hover': '2px 2px 15px rgba(0, 0, 0, 0.3)',

				dark: '1px 1px 5px rgba(140, 140, 140, 0.3)',
				'dark-hover': '2px 2px 15px rgba(140, 140, 140, 0.3)',
			},
			transitionProperty: {
				theme: 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow;',
			},
			borderWidth: {
				'y-2': { 'border-top-width': '2px', 'border-bottom-width': '2px' },
				222: '2px',
			},
		},
	},
	variants: {
		extend: {
			display: ['group-focus'],
			opacity: ['group-focus'],
			inset: ['group-focus'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
