<script setup lang="ts">
import Service from '~/components/Service.vue';
import videoWebdesign from '~/assets/videos/service_Webdesign.mp4';
import videoPlaceholder from '~/assets/videos/service_placeholder.mp4';

const faqWebdesign: { question: string; answer: string; id?: number }[] = [
	{
		id: 1,
		question: 'Wie lange dauert die Entwicklung einer Website?',
		answer: 'Die Entwicklungszeit variiert je nach Umfang und Komplexität des Projekts. In der Regel dauert es zwischen 4 und 12 Wochen.',
	},
	{
		id: 2,
		question: 'Bietet ihr auch Wartung und Support an?',
		answer: 'Ja, wir bieten verschiedene Wartungs- und Support-Pakete an, um sicherzustellen, dass deine Website immer auf dem neuesten Stand und funktionsfähig bleibt.',
	},
	{
		id: 3,
		question: 'Könnt ihr auch bestehende Websites überarbeiten?',
		answer: 'Absolut! Wir können deine bestehende Website analysieren und überarbeiten, um Design, Performance und Nutzererfahrung zu verbessern.',
	},
];

const faqDevelopment: { question: string; answer: string; id?: number }[] =
	[
		{
			id: 1,
			question: 'Wie lange dauert die Entwicklung einer Website?',
			answer: 'Die Entwicklungszeit variiert je nach Umfang und Komplexität des Projekts. In der Regel dauert es zwischen 4 und 12 Wochen.',
		},
	];

const faqOther: { question: string; answer: string; id?: number }[] = [
	{
		id: 1,
		question: 'Wie entstehen Bilder für die Webseiten',
		answer: 'Mit unserem Inhouse Fotografen Team, kommen wir persönlich bei dir vorbei um z.b. deine Arbeit zu begleiten und die Bilder für die Webseite zu erstellen.',
	},
];
</script>

<template>
	<div class="wrapper">
		<Service
			service="Webdesign"
			service-description="Ideal für Unternehmen, die Vertrauen aufbauen und neue Kunden gewinnen wollen."
			:video-url="videoWebdesign"
			video-type="video/mp4"
			:faq="faqWebdesign">
			<p>
				Wir entwickeln Websites, die dein Unternehmen sichtbar
				machen und
				<strong>Vertrauen schaffen.</strong>
				Jedes Projekt entsteht mit Fokus auf gutes
				<strong>Design,</strong>
				starke
				<strong>Performance</strong>
				und eine klare
				<strong>Nutzerführung</strong>
				– damit deine Website für dich arbeitet.
				<br />
				<br />
				Ideal für Unternehmen, die Vertrauen aufbauen und neue
				Kunden gewinnen wollen.
			</p>
		</Service>

		<Service
			service="Web Entwicklung"
			service-description="Für Projekte, bei denen Performance, Stabilität und Zukunftssicherheit entscheidend sind."
			:video-url="videoPlaceholder"
			video-type="video/mp4"
			:faq="faqDevelopment">
			<p>
				Wir entwickeln Websites mit einem klaren Anspruch:
				technisch sauber,
				<strong>zukunftssicher</strong>
				und leistungsstark. Jedes Projekt entsteht auf Basis
				<strong>moderner Technologien</strong>
				und sauberem Code – optimiert für Geschwindigkeit,
				Stabilität und Sicherheit.
				<br />
				<br />
				Dabei achten wir auf jedes Detail: von der strukturierten
				Umsetzung bis zur reibungslosen Performance auf allen
				Geräten. So entsteht eine Website, die nicht nur gut
				aussieht, sondern zuverlässig funktioniert und mit
				<strong>deinem Unternehmen mitwächst.</strong>
			</p>
		</Service>

		<Service
			service="Andere Services"
			:video-url="videoPlaceholder"
			video-type="video/mp4"
			:faq="faqOther">
			<p>
				Wir entwickeln Websites mit einem klaren Anspruch:
				technisch sauber,
				<strong>zukunftssicher</strong>
				und leistungsstark. Jedes Projekt entsteht auf Basis
				<strong>moderner Technologien</strong>
				und sauberem Code – optimiert für Geschwindigkeit,
				Stabilität und Sicherheit.
				<br />
				<br />
				Dabei achten wir auf jedes Detail: von der strukturierten
				Umsetzung bis zur reibungslosen Performance auf allen
				Geräten. So entsteht eine Website, die nicht nur gut
				aussieht, sondern zuverlässig funktioniert und mit
				<strong>deinem Unternehmen mitwächst.</strong>
			</p>
		</Service>
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 16rem;
}
</style>
