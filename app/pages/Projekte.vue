<script setup lang="ts">
import ProjectPreviewCardBig from '~/components/ProjectPreviewCardBig.vue';
import { projects } from '~/data/projects';
</script>

<template>
	<h1 class="type-display-64">
		Echte Projekte.
		<br />
		<span class="text-muted">Echte Ergebnisse</span>
	</h1>
	<ProjectPreviewCardBig
		class="margin-top-128"
		v-for="project in projects"
		:key="project.id"
		:project-information="project" />
</template>

<style scoped></style>
