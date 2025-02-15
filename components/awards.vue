<script lang="ts" setup>
	const items = [
		{
			name: "Programmatore Full stack Java",
			image: "/lacerba.png",
		},
	];
</script>

<template>
	<div
		class="m-auto text-white text-left max-w-[800px] bg-zinc-900 bg-opacity-90 rounded-lg p-6 flex flex-col gap-6 z-10"
		data-aos="zoom-in"
		data-aos-easing="ease-out-cubic"
		data-aos-duration="1000">
		<Card v-for="item in items">
			<template #title>{{ item.name }}</template>
			<template #content><NuxtImg :src="item.image" /></template>
		</Card>
	</div>
</template>
