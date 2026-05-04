<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import VolumeOff from '~/components/icon/VolumeOff.vue';
import Volume from '~/components/icon/Volume.vue';

const props = defineProps<{
	variant: 'text' | 'video';
	heading?: string;
	paragraph?: string;
	customer: string;
	customerPosition: string;
	customerImage?: string;
	videoUrl?: string;
	videoType?: string;
}>();

const isMuted = ref(true);
const volume = ref(0.5);
const videoRef = ref<HTMLVideoElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

const toggleMute = () => {
	isMuted.value = !isMuted.value;
	if (videoRef.value) {
		videoRef.value.muted = isMuted.value;
		// Wenn unmuted wird, Video neu starten
		if (!isMuted.value) {
			videoRef.value.currentTime = 0;
			videoRef.value.play();
		}
	}
};

const updateVolume = (event: Event) => {
	const target = event.target as HTMLInputElement;
	volume.value = parseFloat(target.value);
	if (videoRef.value) {
		videoRef.value.volume = volume.value;
	}
};

onMounted(() => {
	// Nur beim 'video' Variant aktivieren
	if (props.variant !== 'video' || !containerRef.value) return;

	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					isVisible.value = true;
					if (videoRef.value) {
						videoRef.value.play();
					}
				} else {
					isVisible.value = false;
					if (videoRef.value) {
						videoRef.value.pause();
					}
				}
			});
		},
		{
			threshold: 0.5, // 50% des Videos muss sichtbar sein
		}
	);

	observer.observe(containerRef.value);
});

onBeforeUnmount(() => {
	if (observer) {
		observer.disconnect();
	}
});
</script>

<template>
	<div
		class="card testimonial shadow-s"
		v-if="variant === 'text'">
		<div class="vflex gap-20">
			<h3 class="type-heading-24">{{ heading }}</h3>
			<p class="type-body-16">
				{{ paragraph }}
			</p>
		</div>

		<div class="hflex-center-start gap-16">
			<NuxtImg
				class="Profile_Image"
				:src="customerImage" />
			<div>
				<div class="type-heading-16 text-highlight">
					{{ customer }}
				</div>
				<div class="type-body-12">{{ customerPosition }}</div>
			</div>
		</div>
	</div>

	<div
		class="card video-testimonial shadow-s"
		v-if="variant === 'video'"
		ref="containerRef">
		<div class="audio-controls">
			<input
				class="volume-slider"
				v-if="!isMuted"
				type="range"
				min="0"
				max="1"
				step="0.01"
				:value="volume"
				@input="updateVolume"
				aria-label="Lautstärke anpassen" />
			<button
				class="mute-button"
				@click="toggleMute"
				:aria-label="
					isMuted ? 'Ton einschalten' : 'Ton ausschalten'
				">
				<span v-if="isMuted">
					<IconBase class="icon-24">
						<VolumeOff />
					</IconBase>
				</span>
				<span v-else>
					<IconBase class="icon-24">
						<Volume />
					</IconBase>
				</span>
			</button>
		</div>

		<div class="lowerThird">
			<div class="type-heading-16 text-highlight on-dark">
				{{ customer }}
			</div>
			<div class="type-body-12 text-on-dark">
				{{ customerPosition }}
			</div>
		</div>

		<div
			class="image-overlay"
			v-if="isMuted"></div>

		<video
			class="border-radius-inherit"
			loop
			preload="none"
			ref="videoRef"
			:muted="isMuted">
			<source
				:src="props.videoUrl"
				:type="props.videoType" />
			Dein Browser unterstützt dieses Format nicht.
		</video>
	</div>
</template>

<style scoped>
.Profile_Image {
	width: 4rem;
	aspect-ratio: 1/1;
	border-radius: 0.5rem;
	object-fit: cover;
}

.card {
	background: var(--card-background);
	border-radius: 1.5rem;
}

.card.testimonial {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 2.5rem;
	height: 100%;
	padding: 2rem;
}

.card.video-testimonial {
	aspect-ratio: 9/16;
	position: relative;
	background: var(--card-text-body);
	height: 100%;
}

.lowerThird {
	position: absolute;
	bottom: 0;
	left: 0;
	margin-left: 2rem;
	margin-bottom: 2rem;
	z-index: 2;
}

video {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

.audio-controls {
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	margin-top: 1rem;
	margin-right: 1rem;
	z-index: 2;
}

.mute-button {
	background: rgba(255, 255, 255, 0.75);
	border: none;
	border-radius: 20rem;
	padding: 0.75rem;
	cursor: pointer;
	transition: background-color 0.2s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	aspect-ratio: 1/1;
	height: 100%;
}

.mute-button:hover {
	background: rgba(255, 255, 255, 1);
}

.volume-slider {
	width: 120px;
	height: 4px;
	cursor: pointer;
	accent-color: rgba(255, 255, 255, 0.8);
}
</style>
