<script setup lang="ts">
import HeroMainPage from '~/components/section/HeroMainPage.vue';
import MediaBlock from '~/components/section/MediaBlock.vue';
import Services from '~/components/section/Services.vue';
import Process from '~/components/section/Process.vue';
import CustomersAndPartners from '~/components/section/CustomersAndPartners.vue';
</script>

<template>
	<section class="breakout">
		<HeroMainPage />
	</section>
	<section>
		<MediaBlock />
	</section>

	<section>
		<Services />
	</section>

	<section>
		<Process />
	</section>

	<section>
		<CustomersAndPartners />
	</section>
</template>

<style scoped></style>
