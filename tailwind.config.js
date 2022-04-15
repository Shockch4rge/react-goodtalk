module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "",
				"btn-primary": "",
			},
		},

		container: {
			center: true,
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
