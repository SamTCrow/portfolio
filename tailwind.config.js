/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		container: {
			center: true,
		},

		extend: {},
	},
	plugins: [],
	"tailwind-class-sorter.classRegex": {
		rescript: [
			'className\\w*?=\\w*("[\\s\\S]+?")|className\\w*?=\\w*?\\{([\\s\\S]+?)\\}',
			'"(.+?)"',
		],
	},
};
