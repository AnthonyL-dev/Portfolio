/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], 
	theme: {
	  extend: {
		fontFamily: {
		  bebas: ['Bebas Neue', 'cursive'],
		  montserrat: ['Montserrat', 'sans-serif'],
		  roboto: ['Roboto', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  };
  