<script setup lang="ts">
const props = defineProps({
	projectInformation: Object,
});
</script>

<template>
	<div class="card-body shadow-s">
		<NuxtImg
			class="card-image"
			:src="props.projectInformation?.teaserImage"
			:alt="props.projectInformation?.teaserAlt"
			format="webp"></NuxtImg>
		<div class="vflex-stretch-between gap-32">
			<div class="card-section-intro">
				<h2 class="type-heading-48 margin-bottom-24 margin-top-16">
					{{ props.projectInformation?.customer }}
				</h2>
				<p>
					{{ props.projectInformation?.customerSummery }}
				</p>
			</div>

			<div class="card-section-info vflex gap-32">
				<div class="vflex gap-8">
					<h3 class="type-heading-14">Umgesetzte Leistungen</h3>
					<div class="service-labels">
						<label
							class="type-heading-12"
							v-for="service in props.projectInformation
								?.services"
							:key="service">
							{{ service }}
						</label>
					</div>
				</div>
				<div>
					<div
						class="card-info-row hflex-center-between gap-16"
						v-for="result in props.projectInformation
							?.projectResults"
						:key="result.label">
						<span class="type-heading-14">
							{{ result.label }}
						</span>
						<span class="type-heading-16 text-highlight">
							{{ result.value }}
						</span>
					</div>
				</div>
			</div>

			<div class="card-section-navigation">
				<NuxtLink
					:to="{
						name: 'projekt-ProjectId',
						params: {
							ProjectId: props.projectInformation?.id,
						},
					}">
					<button>Mehr zum Projekt</button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-body {
	display: grid;
	grid-template-columns: minmax(300px, 1fr) clamp(280px, 500px, 500px);
	gap: 2rem;

	padding: 1rem;
	border-radius: 2rem;
	background-color: var(--card-background);
}

@media (max-width: 1000px) {
	.card-body {
		grid-template-columns: 1fr;
	}
}

.card-image {
	border-radius: 1rem;
	height: 100%;
	object-fit: cover;
}

label {
	padding: 0.25rem 0.75rem;
	background-color: var(--page-background);
	border-radius: 4rem;
}

.card-info-row {
	padding-block: 0.375rem;
	border-bottom: 1px solid var(--neutral-300);
}

.card-section-navigation {
	display: flex;
	justify-content: end;
}

.service-labels {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}
</style>
