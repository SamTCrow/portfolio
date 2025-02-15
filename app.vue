<script setup lang="ts">
	import { NuxtLayout } from "#components";
	import Projects from "./components/projects.vue";

	const options = {
		fullScreen: {
			enable: true,
			zIndex: -1,
		},
		fpsLimit: 60,
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: "push",
				},
				onHover: {
					enable: true,
					mode: "repulse",
				},
			},
			modes: {
				bubble: {
					distance: 400,
					duration: 2,
					opacity: 0.8,
					size: 40,
				},
				push: {
					quantity: 4,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
			},
		},
		particles: {
			color: {
				value: "#ffffff",
			},
			links: {
				color: "#ffffff",
				distance: 150,
				enable: true,
				opacity: 0.5,
				width: 1,
			},
			move: {
				enable: true,

				random: true,
				speed: 6,
				straight: false,
			},
			number: {
				density: {
					enable: true,
				},
				value: 80,
			},
			opacity: {
				value: 0.5,
			},
			shape: {
				type: "circle",
			},
			size: {
				value: { min: 1, max: 5 },
			},
		},
		detectRetina: true,
	};
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<div class="fixed left-0 z-20 h-full shadow-md"><MenuNav /></div>
			<div class="flex min-h-screen">
				<Me />
			</div>
			<div
				class="flex min-h-screen"
				id="skills">
				<Skills />
			</div>
			<div
				class="flex min-h-screen"
				id="projects">
				<Projects />
			</div>
			<div
				class="flex min-h-screen"
				id="awards">
				<Awards />
			</div>
			<ScrollTop />
			<NuxtParticles
				id="tsParticles"
				:options="options">
			</NuxtParticles>
		</NuxtLayout>
	</div>
</template>
