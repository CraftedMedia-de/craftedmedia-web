<script setup lang="ts">
import Flag from '~/components/icon/Flag.vue';
import ChartIncreasing from '~/components/icon/ChartIncreasing.vue';
import Wrench from '~/components/icon/Wrench.vue';

const props = defineProps<{
	projectCustomer: string;
	projectImageSrc: string;
	projectImageAlt: string;
	labelGoal: string;
	labelResult: string;
	labelServices: string;
}>();
</script>

<template>
	<div class="content-wrapper shadow-1">
		<h3 class="type-heading-24 text-highlight on-dark no-dot">
			{{ props.projectCustomer }}
		</h3>
		<div class="label-wrapper vflex gap-8">
			<Label
				class="label-item"
				:label="props.labelGoal">
				<Flag />
			</Label>
			<Label
				class="label-item"
				:label="props.labelResult">
				<ChartIncreasing />
			</Label>
			<Label
				class="label-item"
				:label="props.labelServices">
				<Wrench />
			</Label>
		</div>

		<div class="card-image-wrapper">
			<div class="image-overlay-dark border-radius-inherit"></div>
			<div class="image-overlay-brand border-radius-inherit"></div>
			<NuxtImg
				class="image border-radius-inherit"
				:src="props.projectImageSrc"
				:alt="props.projectImageAlt" />
		</div>
	</div>
</template>

<style scoped>
.content-wrapper {
	position: relative;
	padding: 2rem;
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 40rem;

	&:hover {
		.image-overlay-dark {
			opacity: 0;
		}

		.image-overlay-brand {
			opacity: 0;
		}

		.label-item {
			opacity: 1;
			transform: translateY(0);
		}
	}

	> h3 {
		z-index: 3;
		position: relative;
	}

	> .label-wrapper {
		z-index: 3;
		position: relative;
	}
}

.card-image-wrapper {
	position: absolute;
	inset: 0;
	border-radius: inherit;
}

.label-item {
	opacity: 0;
	transform: translateY(0.5rem);
	transition:
		opacity 0.3s ease,
		transform 0.3s ease;
	will-change: opacity, transform;
}

/* Stagger beim Einblenden (aufsteigende Delays) */
.content-wrapper:hover .label-item:nth-child(1) {
	transition-delay: 0.05s;
}
.content-wrapper:hover .label-item:nth-child(2) {
	transition-delay: 0.1s;
}
.content-wrapper:hover .label-item:nth-child(3) {
	transition-delay: 0.15s;
}

/* Stagger beim Ausblenden (umgekehrte Reihenfolge) */
.label-wrapper .label-item:nth-child(1) {
	transition-delay: 0.15s;
}
.label-wrapper .label-item:nth-child(2) {
	transition-delay: 0.1s;
}
.label-wrapper .label-item:nth-child(3) {
	transition-delay: 0.05s;
}

.image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	inset: 0;
}

.image-overlay-dark {
	background: linear-gradient(
		149deg,
		var(--neutral-900-transparent-50) 0%,
		rgba(0, 0, 0, 0) 23.73%
	);
	z-index: 1;
	position: absolute;
	inset: 0;
	transition: opacity 0.3s ease-in-out;
}

.image-overlay-brand {
	background: linear-gradient(
		319deg,
		rgba(0, 0, 0, 0) 23.45%,
		var(--brand-500-transparent-10) 100%
	);
	z-index: 2;
	position: absolute;
	inset: 0;
	transition: opacity 0.3s ease-in-out;
}
</style>
