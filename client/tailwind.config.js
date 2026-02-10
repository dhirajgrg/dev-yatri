/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'terminal-black': 'var(--terminal-black)',
				'terminal-white': 'var(--terminal-white)',
				'terminal-green': 'var(--terminal-green)'
			},
			fontFamily: {
				press: ["'Press Start 2P'", 'cursive'],
				mono: ["'JetBrains Mono'", 'monospace']
			}
		}
	},
	plugins: []
};
