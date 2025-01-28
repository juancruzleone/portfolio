// tailwind.config.mjs
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			},
			colors: {
				'principal': '#121212',
				'principal-light': '#ffffff',
			},
			borderColor: {
				'contenedor': '#d9d9d9',
				'celeste': '#00FFF6',
			},
		},
	},
	plugins: [],
};