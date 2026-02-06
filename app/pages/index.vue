<script setup lang="ts">
import NotebookPen from '~/components/icon/NotebookPen.vue';
import HeroMainPage from '~/components/section/HeroMainPage.vue';
import MediaBlock from '~/components/section/MediaBlock.vue';
import Services from '~/components/section/Services.vue';
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

	<div class="card-grid">
		<Card
			number="01"
			heading="Planung"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website.">
			<IconLandPlot />
		</Card>
		<Card
			number="03"
			heading="Entwicklung"
			paragraph="Auf Basis des Designs setzen wir deine Website technisch um – modern, schnell und zuverlässig.">
			<NotebookPen />
		</Card>

		<Card
			number="04"
			heading="Launch"
			paragraph="Nach deiner Freigabe geht die Website live – bereit, deine Kunden zu begeistern."></Card>

		<Card
			number="04"
			heading="Launch"
			paragraph="Nach deiner Freigabe geht die Website live – bereit, deine Kunden zu begeistern."></Card>
	</div>

	<div class="card-grid">
		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website."></Card>

		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website."></Card>
		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website."></Card>
		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website."></Card>
	</div>

	<CustomerShowcase
		paragraph="CraftedMedia hat unsere Website neu gestaltet und wir könnten nicht zufriedener sein.">
		<NotebookPen />
	</CustomerShowcase>

	<button>Hallo</button>
</template>

<style scoped>
.card-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	column-gap: 1rem;
	row-gap: 1rem;
}
</style>
