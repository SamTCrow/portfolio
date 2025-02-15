<script lang="ts" setup>
	import { Icon } from "#components";

	const mySkills = ref([
		{
			icon: "skill-icons:vuejs-dark",
			tooltip: "Vue",
			expanded: false,
			content:
				"Esperienza avanzata nello sviluppo di applicazioni con Vue.js, inclusa la gestione dello stato e l'integrazione con altre librerie.",
		},
		{
			icon: "skill-icons:nuxtjs-dark",
			tooltip: "Nuxt",
			expanded: false,
			content: "Buona conoscenza di Nuxt.js per la creazione di applicazioni Vue.js lato server e statiche.",
		},
		{
			icon: "skill-icons:svelte",
			tooltip: "svelte",
			expanded: false,
			content: "Esperienza intermedia con Svelte per la costruzione di interfacce utente reattive e performanti.",
		},
		{
			icon: "skill-icons:react-dark",
			tooltip: "React",
			expanded: false,
			content:
				"Competenza avanzata nello sviluppo di applicazioni con React, inclusa la gestione dello stato con Jotai e Zustand e l'uso di hook.",
		},
		{
			icon: "skill-icons:nextjs-dark",
			tooltip: "Next",
			expanded: false,
			content: "Esperienza con Next.js per la creazione di applicazioni React lato server e statiche.",
		},
		{
			icon: "skill-icons:typescript",
			tooltip: "Typescript",
			expanded: false,
			content: "Ottima conoscenza di TypeScript per lo sviluppo di applicazioni JavaScript tipizzate.",
		},
		{
			icon: "skill-icons:javascript",
			tooltip: "Javascript",
			expanded: false,
			content:
				"Esperienza avanzata nello sviluppo con JavaScript, inclusa la conoscenza approfondita delle specifiche ECMAScript.",
		},
		{
			icon: "skill-icons:java-dark",
			tooltip: "Java",
			expanded: false,
			content: "Buona conoscenza di Java per lo sviluppo di applicazioni backend e orientate agli oggetti.",
		},
		{
			icon: "skill-icons:spring-dark",
			tooltip: "Java Spring",
			expanded: false,
			content: "Esperienza con Spring Framework per lo sviluppo di applicazioni Java robuste e scalabili.",
		},
		{
			icon: "skill-icons:tailwindcss-dark",
			tooltip: "Tailwind CSS",
			expanded: false,
			content: "Competenza nell'uso di Tailwind CSS per la creazione di design personalizzati e reattivi.",
		},
		{
			icon: "skill-icons:html",
			tooltip: "HTML 5",
			expanded: false,
			content: "Ottima conoscenza di HTML5 per la strutturazione e presentazione di contenuti web.",
		},
		{
			icon: "skill-icons:php-dark",
			tooltip: "PHP",
			expanded: false,
			content:
				"Esperienza nello sviluppo di applicazioni web con PHP, inclusa l'integrazione con database e framework.",
		},
		{
			icon: "skill-icons:laravel-dark",
			tooltip: "Laravel",
			expanded: false,
			content:
				"Buona conoscenza di Laravel per lo sviluppo di applicazioni web con una sintassi elegante e funzionalità avanzate.",
		},
		{
			icon: "skill-icons:pinia-dark",
			tooltip: "Pinia",
			expanded: false,
			content: "Esperienza con Pinia per la gestione dello stato in applicazioni Vue.js.",
		},
		{
			icon: "skill-icons:sqlite",
			tooltip: "SQLite",
			expanded: false,
			content: "Conoscenza di SQLite per la gestione di database leggeri e integrati in applicazioni.",
		},
		{
			icon: "skill-icons:mysql-dark",
			tooltip: "MySQL",
			expanded: false,
			content: "Esperienza con MySQL per la gestione di database relazionali e l'ottimizzazione delle query.",
		},
		{
			icon: "skill-icons:cloudflare-dark",
			tooltip: "Piattaforma Cloudflare",
			expanded: false,
			content:
				"Conoscenza della piattaforma Cloudflare per migliorare la sicurezza, velocità e affidabilità delle applicazioni web.",
		},
	]);
</script>

<template>
	<div
		class="m-auto text-white text-left max-w-[800px] bg-zinc-900 bg-opacity-90 rounded-lg p-6 flex flex-col gap-6 z-10"
		data-aos="zoom-in"
		data-aos-easing="ease-out-cubic"
		data-aos-duration="1000">
		<span class="text-2xl text-center">Le mie skills</span>
		<div
			class="grid w-full grid-cols-6 gap-4"
			v-auto-animate>
			<div
				v-for="(skill, index) in mySkills"
				:key="index"
				:class="skill.expanded ? 'col-span-6' : 'col-span-1'"
				class="flex items-center gap-2"
				v-auto-animate>
				<Icon
					:name="skill.icon"
					@click="
						() => {
							mySkills.forEach((s, i) => {
								if (i !== index) {
									s.expanded = false;
								}
							});
							skill.expanded = !skill.expanded;
						}
					"
					size="5em"
					class="hover:scale-125"
					v-tooltip.top="{
						value: skill.tooltip,
						pt: {
							arrow: '!text-gray-500',
							text: '!bg-gray-500 !text-white !font-medium !p-2 !rounded-lg !mb-2',
						},
					}" />
				<Card
					v-if="skill.expanded"
					class="">
					<template #content>
						<span>{{ skill.content }}</span>
					</template>
				</Card>
			</div>
		</div>
	</div>
</template>
