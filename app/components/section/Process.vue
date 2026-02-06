<script setup lang="ts">
import LandPlot from '~/components/icon/LandPlot.vue';
import NotebookPen from '~/components/icon/NotebookPen.vue';
import CodeXML from '~/components/icon/CodeXML.vue';
import Rocket from '~/components/icon/Rocket.vue';
</script>

<template>
	<h2 class="type-heading-48">So läuft ein Projekt mit uns ab</h2>
	<div class="vflex gap-16">
		<div class="grid">
			<Card
				heading="Planung & Design"
				paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website."
				number="01">
				<LandPlot />
			</Card>
			<Card
				heading="Konzept & Design"
				paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website."
				number="02">
				<NotebookPen />
			</Card>
			<Card
				heading="Entwicklung"
				paragraph="Auf Basis des Designs setzen wir deine Website technisch um – modern, schnell und zuverlässig."
				number="03">
				<CodeXML />
			</Card>
			<Card
				heading="Launch"
				paragraph="Nach deiner Freigabe geht die Website live – bereit, deine Kunden zu begeistern."
				number="04">
				<Rocket />
			</Card>
		</div>
		<div class="cta shadow-s type-body-16">
			<p>
				Lass uns gemeinsam schauen, ob das auch für dein Projekt
				passt.
			</p>
			<button>Unverbindliches Gespräch starten</button>
		</div>
	</div>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-template-rows: auto auto;
	gap: 1rem;
	margin-top: 4rem;
}

.cta {
	display: flex;
	flex-direction: row;
	background-color: var(--card-background);
	border-radius: 1rem;
	padding: 1rem 1rem 1rem 1.5rem;
	justify-content: space-between;
	align-items: center;
}
</style>
