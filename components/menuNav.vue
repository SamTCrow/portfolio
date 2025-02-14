<script lang="ts" setup>
	const items = [
		{
			label: "Le mie Skills",
			icon: "line-md:clipboard-list",
			link: "#skills",
		},
		{
			label: "I miei progetti",
			icon: "line-md:folder-network",
			link: "#projects",
		},
	];
</script>

<template>
	<Dock
		:model="items"
		position="left"
		class="py-2">
		<template #itemicon="{ item }">
			<NuxtLink :href="item.link">
				<Icon
					:name="item.icon || ''"
					size="2em"
					class="hover:scale-110"
					v-tooltip.right="{
						value: item.label,
						pt: {
							arrow: '!text-gray-500',
							text: '!bg-gray-500 !text-white !font-medium !p-2 !rounded-lg !mb-2',
						},
					}" />
			</NuxtLink>
		</template>
	</Dock>
</template>
