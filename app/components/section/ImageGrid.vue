<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const wrapperRef = ref<HTMLElement | null>(null);

let rowEls: HTMLElement[] = [];
let observer: IntersectionObserver | null = null;
let rafId = 0;
let isListening = false;

const updateParallax = () => {
	const wrapper = wrapperRef.value;
	if (!wrapper) return;

	const rect = wrapper.getBoundingClientRect();
	const vh = window.innerHeight;

	// Progress 0..1, während die Section durch den Viewport läuft
	const start = vh;
	const end = -rect.height;
	const progress = Math.min(
		1,
		Math.max(0, (start - rect.top) / (start - end))
	);

	rowEls.forEach((row, index) => {
		const direction = index % 2 === 0 ? 1 : -1;
		const strength = 140 + index * 75; // Bewegung pro Zeile in px
		const x = (progress - 0.5) * 2 * strength * direction;
		row.style.transform = `translate3d(${x}px, 0, 0)`;
	});
};

const requestUpdate = () => {
	if (rafId) return;
	rafId = requestAnimationFrame(() => {
		rafId = 0;
		updateParallax();
	});
};

const addListeners = () => {
	if (isListening) return;
	window.addEventListener('scroll', requestUpdate, { passive: true });
	window.addEventListener('resize', requestUpdate);
	isListening = true;
};

const removeListeners = () => {
	if (!isListening) return;
	window.removeEventListener('scroll', requestUpdate);
	window.removeEventListener('resize', requestUpdate);
	isListening = false;
};

onMounted(() => {
	const wrapper = wrapperRef.value;
	if (!wrapper) return;

	rowEls = Array.from(
		wrapper.querySelectorAll('.image-row')
	) as HTMLElement[];

	observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				addListeners();
				requestUpdate();
				return;
			}

			removeListeners();

			// Erst resetten, wenn das Element komplett oberhalb oder unterhalb ist
			const fullyOut =
				entry.boundingClientRect.bottom <= 0 ||
				entry.boundingClientRect.top >= window.innerHeight;

			if (fullyOut) {
				rowEls.forEach((row) => {
					row.style.transform = 'translate3d(0, 0, 0)';
				});
			}
		},
		{
			threshold: 0,
		}
	);

	observer.observe(wrapper);
});

onBeforeUnmount(() => {
	removeListeners();
	if (observer && wrapperRef.value) observer.unobserve(wrapperRef.value);
	observer?.disconnect();
	if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
	<div
		class="full-width image-grid-wrapper margin-bottom-256"
		ref="wrapperRef">
		<div class="image-grid-holder vflex gap-64">
			<div class="image-row">
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
			</div>
			<div class="image-row">
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
			</div>
			<div class="image-row">
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
			</div>
			<div class="image-row">
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
				<NuxtImg
					class="shadow-s"
					src="/images/test.png" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.image-grid-wrapper {
	display: flex;

	max-height: 75rem;
	overflow: clip;

	background-color: var(--neutral-0);
}

.image-grid-holder {
	transform: rotate(10deg);
	display: flex;
	justify-content: center;
	align-items: center;
}

img {
	border-radius: 1.5rem;
	aspect-ratio: 16 / 9;
	object-fit: cover;
	max-height: 22.5rem;
}

.image-row {
	display: flex;
	gap: 4rem;
	will-change: transform;
	justify-content: center;
	align-items: center;
}
</style>
