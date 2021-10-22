const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	// ...
};
