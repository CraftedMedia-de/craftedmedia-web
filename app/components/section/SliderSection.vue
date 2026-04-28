<script setup lang="ts">
import SwiperSlider from '~/components/section/SwiperSlider.vue';

const props = defineProps<{
	heading: string;
}>();
</script>

<template>
	<h2 class="type-heading-48">{{ heading }}</h2>
	<SwiperSlider>
		<slot />
	</SwiperSlider>
</template>

<style scoped></style>
