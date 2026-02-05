<script setup lang="ts">
import NotebookPen from '~/components/icon/NotebookPen.vue';


</script>

<template>
	<div class="padding-16"	>
		<div class="hero hflex-end-between gap-32">
			<h1 class="type-display-64 text-highlight on-dark">Design und Entwicklung mit dem Nutzer im Fokus</h1>
			<div class="vflex-start-start gap-32">
				<p class="type-body-20">CraftedMedia gestaltet nutzerzentrierte Webseiten und Inhalte für Unternehmen, die wachsen – mit klarem Fokus auf Transparenz, hochwertigem Design und einem Nutzererlebnis, das den Menschen konsequent in den Mittelpunkt stellt.</p>
				<div class="text-highlight on-dark type-heading-20">Für Unternehmen, die nachhaltig wachsen wollen.</div>
				<div class="hflex-center-start gap-16">
					<button>Mehr erfahren</button>
					<button>Projekt unverbindlich besprechen</button>
				</div>
			</div>
			<div class="hero-image"></div>

		</div>
	</div>
























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
			paragraph="Nach deiner Freigabe geht die Website live – bereit, deine Kunden zu begeistern.">
		</Card>

		<Card
			number="04"
			heading="Launch"
			paragraph="Nach deiner Freigabe geht die Website live – bereit, deine Kunden zu begeistern.">
		</Card>
	</div>

	<div class="card-grid">
		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website.">
		</Card>

		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website.">


		</Card>
		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website.">


		</Card>
		<Card
			number="02"
			heading="Konzept & Design"
			variant="variant-2"
			paragraph="Wir erstellen einen genauen Plan und gestalten das visuelle Design deiner Website.">


		</Card>
	</div>

	<CustomerShowcase paragraph="CraftedMedia hat unsere Website neu gestaltet und wir könnten nicht zufriedener sein.">
		<NotebookPen/>
	</CustomerShowcase>



	<button>Hallo</button>


</template>

<style scoped>
.hero-image {
	background-color: var(--neutral-900);
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: -1;
	border-radius: inherit;
}

.hero{
	background: linear-gradient(270deg, rgba(254, 0, 72, 0.00) 50%, rgba(254, 0, 72, 0.20) 100%);
	border-radius: 1.5rem;
	height: 95dvh;
	color: var(--text-body-on-dark);
	position: relative;
	padding: 4rem;

	h1 {
		font-size: 6rem;
		max-width: 14ch;
	}

	p {
		max-width: 45ch;
	}
}

.card-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	column-gap: 1rem;
	row-gap: 1rem;
}

button {
	background-color: red;
	padding-inline: 2rem;
	padding-block: 1rem;
	border-radius: 1rem;
	color: white;
	border: none;

	&:hover {
		background-color: darkred;
	}
}
</style>