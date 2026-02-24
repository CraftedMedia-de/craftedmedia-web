<script setup lang="ts">
import ProjectPreviewCard from '~/components/ProjectPreviewCard.vue';
</script>

<template>
	<section
		class="background-dark padding-top-128 padding-bottom-128 border-radius-32">
		<h2
			class="type-heading-48 text-highlight on-dark margin-bottom-64">
			Aktuelle Projekte aus unserem Haus
		</h2>

		<div class="projects-grid gap-32">
			<ProjectPreviewCard
				class="project-highlight"
				projectCustomer="CraftedMedia"
				projectImageSrc="/images/laptop-on-sofa.png"
				projectImageAlt="test"
				label-goal="Mehr Immobilienanfragen"
				label-result="+127 % Conversion Rate"
				label-services="Design · Entwicklung · Performance" />

			<ProjectPreviewCard
				projectCustomer="CraftedMedia"
				projectImageSrc="/images/test.png"
				projectImageAlt="test"
				label-goal="Mehr Immobilienanfragen"
				label-result="+127 % Conversion Rate"
				label-services="Design · Entwicklung · Performance" />

			<ProjectPreviewCard
				projectCustomer="CraftedMedia"
				projectImageSrc="/images/laptop-on-sofa.png"
				projectImageAlt="test"
				label-goal="Mehr Immobilienanfragen"
				label-result="+127 % Conversion Rate"
				label-services="Design · Entwicklung · Performance" />
		</div>
	</section>
</template>

<style scoped>
.projects-grid {
	display: grid;
	grid-auto-rows: auto;
	grid-template-columns: 1fr 1fr;
}

.project-highlight {
	grid-column: 1 / span 2;
}

@media (max-width: 800px) {
	.projects-grid {
		grid-template-columns: 1fr;
	}

	.project-highlight {
		grid-column: 1 / span 1;
	}
}
</style>
