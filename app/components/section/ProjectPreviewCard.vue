<script setup lang="ts"></script>

<template>
	<div class="content-wrapper shadow-1">
		<h3 class="type-heading-24 text-highlight on-dark">
			Lüneburger Heide Immobilien
		</h3>
		<div class="label-wrapper vflex gap-8">
			<div>Label</div>
			<div>Label</div>
			<div>Label</div>
		</div>

		<div class="card-image-wrapper">
			<div class="image-overlay-dark border-radius-inherit"></div>
			<div class="image-overlay-brand border-radius-inherit"></div>
			<NuxtImg
				class="image border-radius-inherit"
				src="/images/test.png" />
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

		.label-wrapper {
			opacity: 1;
		}
	}
}

.card-image-wrapper {
	position: absolute;
	inset: 0;
	border-radius: inherit;
	z-index: -1;
}

.label-wrapper {
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
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
