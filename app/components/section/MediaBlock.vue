<script setup lang="ts">
const props = defineProps<{
	imageSrc: string;
	imageAlt: string;
}>();
</script>

<template>
	<div class="grid-autoFit-300 gap-128 align-items-center">
		<div class="image-overlay-container image">
			<NuxtImg
				class="image"
				:src="props.imageSrc"
				:alt="props.imageAlt" />
			<div class="image-overlay"></div>
		</div>

		<div class="vflex-start-center gap-32">
			<h2 class="type-heading-48">
				Unser Prinzip:
				<span class="text-muted">
					Nutzerfokus als Weg zu nachhaltigem Erfolg
				</span>
			</h2>
			<p>
				Wir entwickeln digitale Lösungen konsequent aus Sicht der
				Nutzer – damit jede Interaktion verständlich, einfach und
				angenehm ist. Klare Strukturen, intuitive Abläufe und
				durchdachte Konzepte sorgen dafür, dass Menschen schneller
				finden, was sie suchen, Vertrauen aufbauen und langfristig
				überzeugt werden.
				<br />
				<br />
				Im digitalen Raum entscheidet genau dieses Vertrauen über
				nachhaltigen Erfolg. Deshalb gestalten wir Lösungen, die
				Klarheit ausstrahlen, seriös wirken und gleichzeitig modern
				auftreten – nicht für kurzfristige Effekte, sondern für
				langfristige Wirkung und Wachstum.
			</p>

			<Button dot>So setzen wir das in Projekten um</Button>
		</div>
	</div>
</template>

<style scoped>
.image {
	aspect-ratio: 4 / 3;
	border-radius: 1.5rem;
	object-fit: cover;
	position: relative;
	width: 100%;
}
</style>
