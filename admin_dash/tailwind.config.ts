/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
	    colors: {
	      'sunset-blaze': '#ff461e',
	      'hibiscus': '#f8285f',
	      'sage': '#93c393',
	      'summer-breeze': '#93c2c6',
	      'plum': '#2f1c54',
	      'charcoal': '#161616',
	    },
	  },
	},
	plugins: [],
  }