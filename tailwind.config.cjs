/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	    colors: {
	        'gray-light' : '#edefee',
	        'orange' : '#d08856',
	        'red' : '#aa210f',
	        'gray-dark' : '#41403c',
	        },
		extend: {}
	},
	plugins: [],
}
