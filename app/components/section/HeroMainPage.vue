<script setup lang="ts">
const props = defineProps<{
	imageSrc: string;
	imageAlt: string;
}>();
</script>

<template>
	<div class="padding-16">
		<div class="hero hflex-end-between gap-32">
			<h1 class="type-display-64 text-highlight on-dark">
				Design und Entwicklung mit dem Nutzer im Fokus
			</h1>
			<div class="vflex-start-start gap-32">
				<p class="type-body-20">
					<strong class="on-dark">CraftedMedia</strong>
					gestaltet nutzerzentrierte Webseiten und Inhalte für
					Unternehmen, die wachsen – mit klarem Fokus auf
					Transparenz, hochwertigem Design und einem
					Nutzererlebnis, das den Menschen konsequent in den
					Mittelpunkt stellt.
				</p>
				<div class="text-highlight on-dark type-heading-20">
					Für Unternehmen, die nachhaltig wachsen wollen.
				</div>
				<div class="hflex-center-start gap-16">
					<button>Mehr erfahren</button>
					<button>Projekt unverbindlich besprechen</button>
				</div>
			</div>
			<div class="hero-image overlay"></div>
			<NuxtImg
				class="hero-image"
				:src="props.imageSrc"
				:alt="props.imageAlt"></NuxtImg>
		</div>
	</div>
</template>

<style scoped>
.hero-image {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: -2;
	border-radius: inherit;
	width: 100%;
	height: 100%;
	object-fit: cover;

	&.overlay {
		background: linear-gradient(
			180deg,
			rgba(13, 13, 13, 0) 0%,
			#0d0d0d 100%
		);
		z-index: -1;
	}
}

.hero {
	background: linear-gradient(
		270deg,
		rgba(254, 0, 72, 0) 50%,
		rgba(254, 0, 72, 0.2) 100%
	);
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
</style>
