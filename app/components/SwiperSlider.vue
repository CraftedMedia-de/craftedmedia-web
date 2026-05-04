<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { ref } from 'vue';

import 'swiper/css';

const modules = [Autoplay];
const swiperRef = ref<any | null>(null);
const isPrevDisabled = ref(true);
const isNextDisabled = ref(true);
const activePaginationIndex = ref(0);
const paginationCount = ref(0);

const syncNavigationState = (swiper: any) => {
	if (!swiper) {
		isPrevDisabled.value = true;
		isNextDisabled.value = true;
		return;
	}

	if (swiper.params?.loop) {
		isPrevDisabled.value = false;
		isNextDisabled.value = false;
		return;
	}

	isPrevDisabled.value = swiper.isBeginning;
	isNextDisabled.value = swiper.isEnd;
};

const syncPaginationState = (swiper: any) => {
	if (!swiper) {
		activePaginationIndex.value = 0;
		paginationCount.value = 0;
		return;
	}

	// snapGrid = tatsächlich erreichbare Positionen / "Seiten"
	paginationCount.value = Math.max(swiper.snapGrid?.length ?? 0, 1);
	activePaginationIndex.value = swiper.snapIndex ?? 0;
};

const onSwiper = (swiper: unknown) => {
	console.log(swiper);
	swiperRef.value = swiper as any;
	syncNavigationState(swiperRef.value);
	syncPaginationState(swiperRef.value);
};

const onSlideChange = () => {
	console.log('slide change');
	syncNavigationState(swiperRef.value);
	syncPaginationState(swiperRef.value);
};

const onReachBeginning = () => {
	syncNavigationState(swiperRef.value);
	syncPaginationState(swiperRef.value);
};

const onReachEnd = () => {
	syncNavigationState(swiperRef.value);
	syncPaginationState(swiperRef.value);
};

const onFromEdge = () => {
	syncNavigationState(swiperRef.value);
	syncPaginationState(swiperRef.value);
};

const onBreakpoint = () => {
	// responsiv kann sich die Anzahl der erreichbaren Seiten ändern
	syncNavigationState(swiperRef.value);
	syncPaginationState(swiperRef.value);
};

const slidePrev = () => {
	if (isPrevDisabled.value) return;
	swiperRef.value?.slidePrev?.();
};

const slideNext = () => {
	if (isNextDisabled.value) return;
	swiperRef.value?.slideNext?.();
};

const goToSlide = (index: number) => {
	swiperRef.value?.slideTo?.(index);
	activePaginationIndex.value = index;
};
</script>

<template>
	<section class="slider-wrapper full-width">
		<div class="slider-inner">
			<ClientOnly>
				<Swiper
					class="slider-swiper"
					:modules="modules"
					:slides-per-view="4"
					:space-between="32"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
					@reachBeginning="onReachBeginning"
					@reachEnd="onReachEnd"
					@fromEdge="onFromEdge"
					@breakpoint="onBreakpoint">
					<slot />
				</Swiper>
			</ClientOnly>

			<div
				class="slider-controls"
				aria-label="Slider navigation">
				<button
					class="slider-button slider-button--prev shadow-s"
					type="button"
					aria-label="Vorherige Slides"
					:disabled="isPrevDisabled"
					@click="slidePrev">
					←
				</button>
				<div
					class="slider-pagination shadow-s"
					aria-label="Slider pagination">
					<button
						class="slider-pagination__dot"
						v-for="index in paginationCount"
						:key="index"
						type="button"
						:class="{
							'is-active':
								activePaginationIndex === index - 1,
						}"
						:aria-label="`Go to page ${index}`"
						:aria-current="
							activePaginationIndex === index - 1
								? 'true'
								: undefined
						"
						@click="goToSlide(index - 1)" />
				</div>
				<button
					class="slider-button slider-button--next shadow-s"
					type="button"
					aria-label="Nächste Slides"
					:disabled="isNextDisabled"
					@click="slideNext">
					→
				</button>
			</div>
		</div>
	</section>
</template>

<style>
.slider-wrapper {
	padding-block: 2rem;
	overflow: clip;
}

.slider-inner {
	grid-column: content;
	overflow: visible;
}

.slider-controls {
	display: flex;
	justify-content: center;
	gap: 0.75rem;
	align-items: center;
	margin-bottom: 1rem;
	margin-top: 2rem;
}

.slider-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	appearance: none;
	-webkit-appearance: none;
	box-shadow: none;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 999px;
	background: var(--slider-navigation-background);
	color: inherit;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;
}

.slider-button:hover {
	background: var(--slider-navigation-background-hover);
}

.slider-button:disabled {
	opacity: 0.35;
	cursor: not-allowed;
	background: var(--slider-navigation-background);
	transform: none;
}

.slider-button:focus-visible {
	outline: 2px solid currentColor;
	outline-offset: 3px;
}

.slider-swiper {
	overflow: visible;
}

/* Swiper-Wrapper streckt Slides auf gleiche Höhe */
.slider-swiper .swiper-wrapper {
	align-items: stretch;
}

/* Slides füllen die Wrapper-Höhe */
.slider-swiper .swiper-slide {
	height: auto;
	display: flex;
	align-items: stretch;
}

/* Direct Children der Slides füllen die Slide-Höhe */
.slider-swiper .swiper-slide > * {
	flex: 1;
	width: 100%;
}

.slider-pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	background-color: var(--slider-pagination-background);
	padding: 0.75rem 1rem;
	border-radius: 999px;
}

.slider-pagination__dot {
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 999px;
	border: none;
	padding: 0;
	background: rgba(0, 0, 0, 0.25);
	cursor: pointer;
	transition:
		transform 0.2s ease,
		background-color 0.2s ease,
		width 0.2s ease;
}

.slider-pagination__dot:hover {
	transform: scale(1.1);
	background: rgba(0, 0, 0, 0.45);
}

.slider-pagination__dot.is-active {
	width: 1.5rem;
	background: currentColor;
}

.slider-pagination__dot:focus-visible {
	outline: 2px solid currentColor;
	outline-offset: 3px;
}
</style>
