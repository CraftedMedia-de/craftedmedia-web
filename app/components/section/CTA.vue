<script setup lang="ts">
import Mail from '~/components/icon/Mail.vue';
import Phone from '~/components/icon/Phone.vue';
import ArrowRight from '~/components/icon/ArrowRight.vue';

import { contact } from '~/data/contact';
</script>

<template>
	<div class="cta-wrapper background-dark padding-v-128 padding-h-32">
		<div class="cta-content-wrapper vflex-center-center gap-48">
			<h2
				class="type-display-64 text-highlight on-dark text-align-center">
				Lass uns über dein Projekt sprechen – unkompliziert & auf
				Augenhöhe
			</h2>
			<div class="vflex-center-center gap-12">
				<Button
					variant="solid-brand"
					size="lg">
					Dein unverbindliches Erstgespräch starten
					<IconBase>
						<ArrowRight />
					</IconBase>
				</Button>
				<div class="hflex-center-start gap-16">
					<div class="pulse-dot"></div>
					<p class="type-heading-16 text-highlight on-dark">
						Lass uns sprechen – wir sind verfügbar
					</p>
				</div>
			</div>

			<div class="contact-grid gap-24">
				<a
					class="contact-wrapper hflex-center-start gap-16"
					:href="contact.emailHref">
					<div
						class="icon-background vflex-center-center padding-16">
						<IconBase>
							<Mail class="icon-24" />
						</IconBase>
					</div>
					<div class="vflex gap-4">
						<span class="type-body-14 text-muted on-dark">
							E-Mail
						</span>
						<span
							class="type-heading-16 text-highlight on-dark">
							{{ contact.emailLabel }}
						</span>
					</div>
				</a>

				<a
					class="contact-wrapper hflex-center-start gap-16"
					:href="contact.phoneHref">
					<div
						class="icon-background vflex-center-center padding-16">
						<IconBase>
							<Phone class="icon-24" />
						</IconBase>
					</div>
					<div class="vflex gap-4">
						<span class="type-body-14 text-muted on-dark">
							Telefon
						</span>
						<span
							class="type-heading-16 text-highlight on-dark">
							{{ contact.phoneLabel }}
						</span>
					</div>
				</a>
			</div>
		</div>

		<div class="cta-background-dot"></div>
	</div>
</template>

<style scoped>
.cta-wrapper {
	position: relative;
	overflow: clip;
	border-radius: 2rem;
}

.cta-content-wrapper {
	position: relative;
	z-index: 1;
}

.contact-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 42rem;
}

.contact-wrapper {
	border-radius: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.05);
	padding: 1.5rem;
	transition:
		background 0.3s,
		border-color 0.3s;
}

/* Hover nur auf Geräten, die wirklich hover können */
@media (hover: hover) and (pointer: fine) {
	.contact-wrapper:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.2);
	}
}

.icon-background {
	background-color: var(--brand-500-transparent-20);
	border-radius: 14px;
	color: var(--brand-500);
}

.cta-background-dot {
	position: absolute;
	width: 37.5rem;
	height: 37.5rem;
	border-radius: 50%;
	background-color: var(--brand-500-transparent-30);
	filter: blur(150px);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 0;
	animation: pulse 4s infinite;
}

@keyframes pulse {
	0% {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}
	50% {
		transform: translate(-50%, -50%) scale(1.2);
		opacity: 0.5;
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}
}

.pulse-dot {
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	background-color: var(--brand-500);
	position: relative;
	z-index: 2;
	box-shadow: 0 0 6px var(--brand-500-transparent-30);
}

/* zwei Wellen mit zeitversatz */
.pulse-dot::before,
.pulse-dot::after {
	content: '';
	position: absolute;
	left: 50%;
	top: 50%;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	transform: translate(-50%, -50%) scale(0.2);
	background: var(--brand-500-transparent-90);
	pointer-events: none;
	z-index: 1;
	animation: radar 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

.pulse-dot::after {
	animation-delay: 1s; /* zeitversatz für zweite Welle */
	background: var(--brand-500-transparent-90);
}

@keyframes radar {
	0% {
		transform: translate(-50%, -50%) scale(0.2);
		opacity: 0.85;
	}
	60% {
		opacity: 0.25;
	}
	100% {
		transform: translate(-50%, -50%) scale(3.5);
		opacity: 0;
	}
}
</style>
