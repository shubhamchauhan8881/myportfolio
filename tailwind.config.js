/** @type {import('tailwindcss').Config} */

import {THEMES} from "./src/assets/data";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				banner: "url('/banner.jpeg')",
			},
		},
	},

	daisyui: {
		themes: THEMES,
	},

	plugins: [require("daisyui")],
};
