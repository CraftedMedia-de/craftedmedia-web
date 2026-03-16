<script setup lang="ts">
import ProjectPreviewCard from '~/components/ProjectPreviewCard.vue';

import { projects, type ProjectCategory } from '~/data/projects';

const props = withDefaults(
	defineProps<{
		categories?: ProjectCategory[]; // z.B. ['webdesign']
		onlyTeaser?: boolean;
		projectIds?: string[]; // optional exakte Auswahl
		limit?: number; // optional Begrenzung
	}>(),
	{
		onlyTeaser: false,
	}
);

const filteredProjects = computed(() => {
	let list = [...projects];

	if (props.projectIds?.length) {
		list = list.filter((p) => props.projectIds!.includes(p.id));
	}

	if (props.categories?.length) {
		list = list.filter((p) => props.categories!.includes(p.category));
	}

	if (props.onlyTeaser) {
		list = list.filter((p) => p.isTeaser);
	}

	if (props.limit != null) {
		list = list.slice(0, props.limit);
	}

	return list;
});
</script>

<template>
	<section class="background-dark padding-v-128 border-radius-32">
		<h2
			class="type-heading-48 text-highlight on-dark margin-bottom-64">
			Aktuelle Projekte aus unserem Haus
		</h2>

		<div class="projects-grid gap-32">
			<article
				v-for="p in filteredProjects"
				:key="p.id">
				<ProjectPreviewCard
					:project-customer="p.customer"
					:project-image-src="p.teaserImage"
					:project-image-alt="p.teaserAlt"
					:label-goal="p.labelGoal"
					:label-result="p.labelResult"
					:label-services="p.labelServices"
					:project-link="`/projekt/${p.id}`" />
			</article>
		</div>
	</section>
</template>

<style scoped>
.projects-grid {
	display: grid;
	grid-auto-rows: auto;
	grid-template-columns: 1fr 1fr;
}

.projects-grid > article:first-child {
	grid-column: 1 / span 2;
}

@media (max-width: 800px) {
	.projects-grid {
		grid-template-columns: 1fr;
	}

	.projects-grid > article:first-child {
		grid-column: 1 / span 1;
	}
}
</style>
