/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Monterrat', 'sans-serif']
			},
			colors: {
				'principal': '#121212',
			},
			borderColor: {
				'contenedor': '#d9d9d9',
				'celeste': '#00FFF6',
			},
		},
	},
	plugins: [],
}

