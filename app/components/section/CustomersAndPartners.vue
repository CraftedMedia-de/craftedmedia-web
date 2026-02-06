<script setup lang="ts">
import LandPlot from '~/components/icon/LandPlot.vue';
</script>

<template>
	<h2 class="type-heading-48">Unsere Kunden & Partner</h2>
	<div class="grid">
		<CustomerShowcase
			paragraph="Design und Umsetzung einer Physiotherapie Praxis Webseite.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Behind the Scenes Fotoshooting eines Produkt Fotoshootings für die Marke myliebling.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Social Media Strategie Entwicklung und Umsetzung.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Redesign & Umsetzung in Webflow einer Website für den Immobilienvertrieb.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Logo- und Branddesign für die Jungend Berufs Agentur aus Harburg.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Entwicklung einer Website mit Fokus auf Seriosität & Nutzerfreundlichkeit.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Umsetzung einer Website für den Immobilienvertrieb in Webflow.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Design & technische Umsetzung einer Team-Website mit Fokus auf Branding & Content.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Design und technische Umsetzung eines Webshops für Tiernahrung.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Immobilienfotografie für die zahlreichen Objekte des Maklers aus Winsen Luhe.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Design und Umsetzung einer Black Friday Marketing Kampagne für das Angel Center aus Lüneburg.">
			<LandPlot />
		</CustomerShowcase>

		<CustomerShowcase
			paragraph="Design und Umsetzung einer Webseite für den Bauchfuchs aus Winsen Luhe.">
			<LandPlot />
		</CustomerShowcase>
	</div>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	grid-row-gap: 6rem;
	grid-column-gap: 8rem;
	margin-top: 4rem;
}
</style>
