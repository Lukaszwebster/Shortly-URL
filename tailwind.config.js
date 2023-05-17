/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		extend: {
			colors: {
				cyan: "hsl(180, 66%, 49%)",
				darkViolet: "hsl(257, 27%, 26%)",
				gray: "hsl(0, 0%, 75%)",
				grayishViolet: "hsl(257, 7%, 63%)",
				veryDarkBlue: "hsl(255, 11%, 22%)",
				veryDarkViolet: "hsl(260, 8%, 14%)",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				shortenMobile: "url('/images/bg-shorten-mobile.svg')",
				boostMobile: "url('/images/bg-boost-mobile.svg')",
			},
		},
	},
	plugins: [],
};
