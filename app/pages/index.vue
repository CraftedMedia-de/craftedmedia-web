<script setup lang="ts">
import HeroMainPage from '~/components/section/HeroMainPage.vue';
import MediaBlock from '~/components/section/MediaBlock.vue';
import Services from '~/components/section/Services.vue';
import Process from '~/components/section/Process.vue';
import CustomersAndPartners from '~/components/section/CustomersAndPartners.vue';
import ProjectsOverview from '~/components/section/ProjectsOverview.vue';
import CTA from '~/components/section/CTA.vue';
import FooterGlobal from '~/components/section/FooterGlobal.vue';
import CustomerFeedback from '~/components/section/CustomerFeedback.vue';
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

	<ProjectsOverview
		class="full-width"
		:categories="['webdesign']"
		:only-highlighted="true"
		:limit="3" />

	<section>
		<Process />
	</section>

	<CustomerFeedback class="full-width" />

	<section>
		<CustomersAndPartners />
	</section>

	<section class="breakout">
		<CTA />
	</section>

	<section class="breakout">
		<FooterGlobal />
	</section>
</template>

<style scoped></style>
