<script setup lang="ts">
import HeroMainPage from '~/components/section/HeroMainPage.vue';
import MediaBlock from '~/components/section/MediaBlock.vue';
import Services from '~/components/section/Services.vue';
import Process from '~/components/section/Process.vue';
import CustomersAndPartners from '~/components/section/CustomersAndPartners.vue';
import ProjectsOverview from '~/components/section/ProjectsOverview.vue';
import CTA from '~/components/section/CTA.vue';
</script>

<template>
	<section class="breakout">
		<HeroMainPage
			image-src="/images/test.png"
			image-alt="test" />
	</section>
	<section>
		<MediaBlock
			image-src="/images/2-humans-on-table.png"
			image-alt="test" />
	</section>

	<section>
		<Services />
	</section>

	<ProjectsOverview class="full-width" />

	<section>
		<Process />
	</section>

	<section>
		<CustomersAndPartners />
	</section>

	<section class="breakout">
		<CTA />
	</section>
</template>

<style scoped></style>
