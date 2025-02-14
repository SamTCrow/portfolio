<script lang="ts" setup></script>

<template>
	<div class="m-auto text-white text-left max-w-[800px] bg-zinc-900 bg-opacity-90 rounded-lg p-6 flex gap-6 z-10">
		<div class="space-y-4">
			<p class="text-4xl font-bold">Ciao, sono Andrea.</p>
			<p class="text-2xl">Sviluppatore <span class="text-purple-500">Full Stack</span>.</p>
			<p class="text-lg">
				Sono un appassionato di coding e creo soluzioni sia per il front-end che per il back-end. Sempre alla
				ricerca di nuove sfide e opportunità di apprendimento.
			</p>
			<div class="space-x-4">
				<NuxtLink to="https://www.linkedin.com/in/andrea-niccolini-497a57348/"
					><Icon
						name="line-md:linkedin"
						size="2em" />
				</NuxtLink>
				<NuxtLink
					to="https://github.com/SamTCrow"
					target="_blank"
					><Icon
						name="line-md:github-loop"
						size="2em" />
				</NuxtLink>
				<NuxtLink to="mailto:gripunt@hotmail.com">
					<Icon
						name="line-md:email"
						size="2em" />
				</NuxtLink>
			</div>
		</div>
		<NuxtImg
			src="/me.png"
			sizes="250px" />
	</div>
</template>
