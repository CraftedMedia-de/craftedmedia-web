<script setup lang="ts">
import { computed } from 'vue';
import { createError, useRoute } from '#imports';
import { projects } from '~/data/projects';
import FooterGlobal from '~/components/section/FooterGlobal.vue';
import CTA from '~/components/section/CTA.vue';
import ProjectPreviewCard from '~/components/ProjectPreviewCard.vue';

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

const MAX_RELATED_PROJECTS = 3;

const filteredProjects = computed(() => {
	if (!project.value) return [];

	const currentProject = project.value;

	// Erst passende Kategorie (ohne aktuelles Projekt)
	const sameCategory = projects.filter(
		(p) =>
			p.id !== currentProject.id &&
			p.category === currentProject.category
	);

	// Dann alle anderen Kategorien (ebenfalls ohne aktuelles Projekt)
	const otherCategories = projects.filter(
		(p) =>
			p.id !== currentProject.id &&
			p.category !== currentProject.category
	);

	// Reihenfolge: erst passend, dann Fallback
	return [...sameCategory, ...otherCategories].slice(
		0,
		MAX_RELATED_PROJECTS
	);
});
</script>

<template>
	<section v-if="project">
		<div class="margin-top-256 vflex-center-center gap-16">
			<p class="type-heading-20 text-highlight">
				{{ project.customer }}
			</p>
			<h1 class="type-display-64">{{ project.title }}</h1>
		</div>
	</section>

	<section>
		<div class="content-split">
			<h3 class="type-heading-32">Kontext</h3>
			<div>
				<p
					class="paragraph-gap type-body-20"
					v-for="(paragraph, i) in project?.contextText ?? []"
					:key="`context-${i}`">
					{{ paragraph }}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="content-split">
			<h3 class="type-heading-32">Lösung</h3>
			<div>
				<p
					class="paragraph-gap type-body-20"
					v-for="(paragraph, i) in project?.solutionText ?? []"
					:key="`context-${i}`">
					{{ paragraph }}
				</p>
			</div>
		</div>
	</section>

	<section class="breakout">
		<div class="project-image-wrapper">
			<NuxtImg
				class="project-image"
				v-for="(image, i) in project?.images ?? []"
				:key="`project-image-${i}`"
				:src="image.src"
				:alt="image.alt" />
		</div>
	</section>

	<section>
		<h2 class="type-heading-48 margin-bottom-48">
			Weitere Projekte aus unserem Haus
		</h2>
		<div class="grid-autoFit-300 gap-32">
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

	<section class="breakout">
		<CTA />
	</section>
	<section class="breakout">
		<FooterGlobal />
	</section>
</template>

<style scoped>
.content-split {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-row-gap: 1rem;
	grid-column-gap: 1rem;
	color: var(--text-heading);
}

.content-split h3 {
	position: sticky;
	top: 2rem;
	height: fit-content;
}

.paragraph-gap + .paragraph-gap {
	margin-top: 2rem;
}

.project-image {
	border-radius: 1.5rem;
}

.project-image-wrapper {
	display: flex;
	flex-direction: column;
	gap: 4rem;
}
</style>
