<script lang="ts" setup>
	import { Icon } from "#components";

	const mySkills = [
		{
			icon: "skill-icons:vuejs-dark",
			tooltip: "Vue",
		},
		{
			icon: "skill-icons:nuxtjs-dark",
			tooltip: "Nuxt",
		},
		{
			icon: "skill-icons:svelte",
			tooltip: "svelte",
		},
		{
			icon: "skill-icons:react-dark",
			tooltip: "React",
		},
		{
			icon: "skill-icons:nextjs-dark",
			tooltip: "Next",
		},
		{
			icon: "skill-icons:typescript",
			tooltip: "Typescript",
		},
		{
			icon: "skill-icons:javascript",
			tooltip: "Javascript",
		},
		{
			icon: "skill-icons:java-dark",
			tooltip: "Java",
		},
		{
			icon: "skill-icons:spring-dark",
			tooltip: "Java Spring",
		},
		{
			icon: "skill-icons:tailwindcss-dark",
			tooltip: "Tailwind CSS",
		},
		{
			icon: "skill-icons:html",
			tooltip: "HTML 5",
		},
		{
			icon: "skill-icons:php-dark",
			tooltip: "PHP",
		},
		{
			icon: "skill-icons:laravel-dark",
			tooltip: "Laravel",
		},
		{
			icon: "skill-icons:pinia-dark",
			tooltip: "Pinia",
		},
		{
			icon: "skill-icons:sqlite",
			tooltip: "SQLite",
		},
		{
			icon: "skill-icons:mysql-dark",
			tooltip: "MySQL",
		},
		{
			icon: "skill-icons:cloudflare-dark",
			tooltip: "Piattaforma Cloudflare",
		},
	];
</script>

<template>
	<div
		class="m-auto text-white text-left max-w-[800px] bg-zinc-900 bg-opacity-90 rounded-lg p-6 flex flex-col gap-6 z-10"
		data-aos="flip-left"
		data-aos-easing="ease-out-cubic"
		data-aos-duration="1000">
		<span class="text-2xl text-center">Le mie skills</span>
		<div class="w-full grid grid-cols-6 gap-4">
			<Icon
				v-for="skill in mySkills"
				:name="skill.icon"
				size="4em"
				class="hover:scale-125"
				v-tooltip.top="{
					value: skill.tooltip,
					pt: {
						arrow: '!text-gray-500',
						text: '!bg-gray-500 !text-white !font-medium !p-2 !rounded-lg !mb-2',
					},
				}" />
		</div>
	</div>
</template>
