const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "",
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		plugin(({ addComponents }) => {
			addComponents({
				".btn-primary": {
					padding: ".5rem 1rem",
					borderRadius: ".5rem",
					backgroundImage: "var(--primary-gradient)",

					"&:hover": {
						backgroundImage: "var(--primary-gradient-hover)",
					},
				},

				".btn-secondary": {
					padding: ".5rem 1rem",
					borderRadius: ".5rem",
					backgroundColor: "#FFFFFF",
					"&:hover": {
						backgroundColor: colors.gray["100"],
					},
				},
			});
		}),
	],
};
