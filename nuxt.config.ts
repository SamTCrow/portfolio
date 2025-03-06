import Material from "@primevue/themes/material";
import { definePreset } from "@primevue/themes";

const Noir = definePreset(Material, {
	semantic: {
		primary: {
			50: "{zinc.50}",
			100: "{zinc.100}",
			200: "{zinc.200}",
			300: "{zinc.300}",
			400: "{zinc.400}",
			500: "{zinc.500}",
			600: "{zinc.600}",
			700: "{zinc.700}",
			800: "{zinc.800}",
			900: "{zinc.900}",
			950: "{zinc.950}",
		},
		colorScheme: {
			light: {
				primary: {
					color: "{zinc.950}",
					inverseColor: "#ffffff",
					hoverColor: "{zinc.900}",
					activeColor: "{zinc.800}",
				},
				highlight: {
					background: "{zinc.950}",
					focusBackground: "{zinc.700}",
					color: "#ffffff",
					focusColor: "#ffffff",
				},
			},
			dark: {
				primary: {
					color: "{zinc.50}",
					inverseColor: "{zinc.950}",
					hoverColor: "{zinc.100}",
					activeColor: "{zinc.200}",
				},
				highlight: {
					background: "rgba(250, 250, 250, .16)",
					focusBackground: "rgba(250, 250, 250, .24)",
					color: "rgba(255,255,255,.87)",
					focusColor: "rgba(255,255,255,.87)",
				},
			},
		},
	},
});

export default defineNuxtConfig({
	site: {
		url: "https://nandrea.pages.dev/",
		name: "Portfolio",
		description: "Benvenuti nel mio portfolio!",
		defaultLocale: "it",
	},
	app: {
		head: {
			title: "Nandrea's Portfolio",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "My portfolio website" },
				{ name: "keywords", content: "portfolio, web development, projects" },
				{
					name: "google-site-verification",
					content: "Xa2VoN1oRDz97YXqDxfJl0gf4TFM0vJ9GAUyjKBP9l0",
				},
				{ name: "author", content: "Your Name" },
				{ property: "og:title", content: "My Portfolio" },
				{ property: "og:description", content: "My portfolio website" },
				{ property: "og:type", content: "website" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },
	modules: [
		"@primevue/nuxt-module",
		"@formkit/auto-animate/nuxt",
		"@nuxtjs/tailwindcss",
		"nuxt-particles",
		"@nuxt/image",
		"@nuxt/icon",
		"nuxt-aos",
		"@nuxtjs/seo",
	],
	tailwindcss: { editorSupport: true },
	router: {
		options: {
			hashMode: true,
			scrollBehaviorType: "smooth",
		},
	},
	primevue: {
		options: {
			ripple: true,
			unstyled: false,
			theme: {
				preset: Noir,
			},
		},
		autoImport: true,
	},
});
