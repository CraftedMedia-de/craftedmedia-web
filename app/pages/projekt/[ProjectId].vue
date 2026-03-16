<script setup lang="ts">
import { computed } from 'vue';
import { createError, useRoute } from '#imports';
import { projects } from '~/data/projects';

const route = useRoute();

const projectId = computed(() => String(route.params.ProjectId ?? ''));

const project = computed(() =>
	projects.find((p) => p.id === projectId.value)
);

if (!project.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Projekt nicht gefunden',
	});
}
</script>

<template>
	<section v-if="project">
		<h1>{{ project.title }}</h1>
		<p>{{ project.intro }}</p>

		<template
			v-for="(block, i) in project.blocks"
			:key="i">
			<section v-if="block.type === 'text'">
				<h2>{{ block.heading }}</h2>
				<p>{{ block.body }}</p>
			</section>

			<figure v-else-if="block.type === 'image'">
				<NuxtImg
					:src="block.src"
					:alt="block.alt" />
				<figcaption v-if="block.caption">
					{{ block.caption }}
				</figcaption>
			</figure>

			<section v-else-if="block.type === 'list'">
				<h2>{{ block.heading }}</h2>
				<ul>
					<li
						v-for="item in block.items"
						:key="item">
						{{ item }}
					</li>
				</ul>
			</section>
		</template>
	</section>
</template>
