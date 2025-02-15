<script lang="ts" setup>
	const projects = [
		{
			title: "FitGang",
			image: "/fitGang.png",
			description:
				"App per la consultazione di esercizi fisici, con funzione di ricerca e vari tipi di categorie. \nRealizzata con React, Tailwind e shadcn/ui.",
			link: "https://fitness-app-b38.pages.dev/",
			github: "https://github.com/SamTCrow/Fitness-App",
		},
		{
			title: "The Crow's nest",
			image: "/crownest.png",
			description:
				"Blog in markdown. Caricando i file .md sull'apposito repository di github, viene automaticamente generato un post con relative categorie e tag per la navigazione. \nSupporta componenti personalizzati all'interno dei file di markdown. \nRealizzato in Svelte e tailwindcss, usa MDsveX come preprocessor per i file in markdown.",
			link: "https://crowinger.com/",
			github: "https://github.com/SamTCrow/svlog",
		},
		{
			title: "AnimeGang",
			image: "/animegang.png",
			description:
				"Applicazione full stack con autenticazione che permette la ricerca di anime giapponesi con relative informazioni, la creazione di liste personalizzate, il tracciamento degli anime già visti e la loro valutazione con score numerico, una funzione di like per i personaggi, la possibilità di lasciare commenti e rispondere agli stessi su ogni anime. \n Realizzato interamente in Nuxt e typescript, è hostato su piattaforma Cloudflare. Si interfaccia al database SQLite D1 di Cloudflare tramite DrizzleORM. \nInterfaccia realizzata con NuxtUI e tailwindCss.",
			link: "https://anime-gang.nuxt.dev/",
			github: "https://github.com/SamTCrow/AnimeGang",
		},
	];
</script>

<template>
	<div
		class="m-auto text-white text-left max-w-[800px] bg-zinc-900 bg-opacity-90 rounded-lg p-6 flex flex-col gap-6 z-10"
		data-aos="zoom-in"
		data-aos-easing="ease-out-cubic"
		data-aos-duration="1000">
		<p class="text-2xl font-medium text-center text-pretty">I miei progetti</p>
		<Card
			v-for="project in projects"
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="1000"
			class="p-2">
			<template #header>
				<NuxtLink
					:to="project.link"
					target="_blank">
					<NuxtImg
						:src="project.image"
						sizes="800px"
						class="hover:opacity-80" />
				</NuxtLink>
			</template>
			<template #title>
				{{ project.title }}
			</template>
			<template #content>
				<span class="whitespace-pre text-wrap">{{ project.description }}</span>
			</template>
			<template #footer>
				<NuxtLink
					:to="project.github"
					target="_blank">
					<Icon
						name="line-md:github-loop"
						size="2em"
						class="mt-2 hover:scale-125" />
				</NuxtLink>
			</template>
		</Card>
	</div>
</template>
