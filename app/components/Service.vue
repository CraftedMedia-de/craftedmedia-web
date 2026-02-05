<script setup lang="ts">
import Accordion from '~/components/Accordion.vue';

const props = defineProps<{
	service: string;
	serviceDescription?: string;
	videoUrl: string;
	videoType: string;
	faq: {
		question: string;
		answer: string;
	}[];
}>();
</script>

<template>
	<div class="grid-2-columns gap-32">
		<div class="rail vflex-start-start gap-16">
			<h2 class="type-heading-48">{{ props.service }}</h2>
			<p
				class="description type-body-20"
				v-if="serviceDescription">
				{{ props.serviceDescription }}
			</p>
		</div>

		<div class="grid gap-64">
			<video
				class="video"
				width="100%"
				height="100%"
				loop
				muted
				playsinline
				autoplay>
				<source
					:src="props.videoUrl"
					:type="props.videoType" />
				Dein Browser unterstützt dieses Format nicht.
			</video>
			<div class="vflex-start-start gap-32">
				<slot />
				<button>Mehr zu {{ props.service }}</button>
			</div>

			<Accordion
				type="multiple"
				:accordion-object="faq" />
		</div>
	</div>
</template>

<style scoped>
.rail {
	position: sticky;
	top: 8rem;
	height: fit-content;
}

.video {
	aspect-ratio: 416 / 311;
	border-radius: 1.5rem;
}

.grid {
	display: grid;
	grid-template-columns: 1fr;
}

.description {
	max-width: 36ch;
}
</style>
