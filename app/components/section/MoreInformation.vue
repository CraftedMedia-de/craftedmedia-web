<script setup lang="ts">
import Accordion from '~/components/Accordion.vue';
import LinkedIn from '~/components/icon/LinkedIn.vue';
const email = 'hallo@craftedmedia.de';

const faq: { question: string; answer: string; id?: number }[] = [
	{
		id: 1,
		question: 'Was kostet eine Website bei euch?',
		answer: 'Die Preise starten ab 2.500 €. Der genaue Betrag hängt vom Umfang und den Anforderungen deines Projekts ab. Wir erstellen dir immer ein individuelles Angebot, damit du nur für das zahlst, was du wirklich brauchst.',
	},
	{
		id: 2,
		question: 'Wie lange dauert die Umsetzung?',
		answer: 'Das hängt von der Größe der Website ab. Kleinere Projekte sind oft in 4–6 Wochen online, größere Projekte dauern entsprechend länger. Wir geben dir vorab einen klaren Zeitplan.',
	},
	{
		id: 3,
		question: 'Macht ihr auch nur Design oder nur Entwicklung?',
		answer: 'Ja. Wir übernehmen sowohl komplette Projekte als auch einzelne Teilbereiche – ganz so, wie es für dich am besten passt.',
	},
	{
		id: 4,
		question: 'Was passiert nach dem Launch?',
		answer: 'Wir lassen dich nicht allein: Auf Wunsch übernehmen wir auch Wartung, Support und Updates. So bleibt deine Website immer aktuell und funktionsfähig.',
	},
	{
		id: 5,
		question: 'Bietet ihr auch SEO an?',
		answer: 'Ein Basis-SEO-Tuning ist bei uns standardmäßig enthalten, damit deine Website von Anfang an gefunden wird. Für weitergehende Optimierungen beraten wir dich gerne individuell.',
	},
	{
		id: 6,
		question: 'Wie läuft die Zusammenarbeit ab?',
		answer: 'Wir starten mit einem Gespräch, um deine Ziele und Wünsche zu verstehen. Danach entwickeln wir ein Konzept, gestalten das Design und setzen die Website technisch um. Du bist bei allen wichtigen Schritten eingebunden und kannst Feedback geben.',
	},
	{
		id: 7,
		question: 'Kann ich meine Website später selbst bearbeiten?',
		answer: 'Ja. Auf Wunsch bauen wir deine Website so, dass du Texte, Bilder oder Inhalte selbst anpassen kannst – ohne technisches Wissen.',
	},
	{
		id: 8,
		question: 'Arbeitet ihr nur mit bestimmten Branchen?',
		answer: 'Nein. Auch wenn wir viel Erfahrung im Immobilienbereich haben, setzen wir Websites für Unternehmen aus ganz unterschiedlichen Branchen um.',
	},
	{
		id: 9,
		question: 'Arbeitet ihr auch mit bestehenden Websites?',
		answer: 'Ja, wenn es sich um ein Webflow-Projekt handelt, können wir bestehende Websites überarbeiten oder erweitern. Bei anderen Systemen empfehlen wir in der Regel einen Neustart – so stellen wir sicher, dass deine Website technisch modern und zukunftssicher ist.',
	},
];
</script>

<template>
	<h2 class="type-heading-48 margin-bottom-32">Mehr Informationen</h2>
	<div class="grid-autoFit-300 gap-64">
		<div class="vflex gap-32">
			<div class="padding-v-32 hflex-start-start gap-32">
				<NuxtImg
					class="profile_image"
					src="/images/test.png"></NuxtImg>
				<div>
					<h3 class="type-heading-24 no-dot margin-bottom-20">
						Moin, ich bin Lennart👋
					</h3>
					<p class="type-body-16">
						UI/UX Designer · Frontend Entwickler ·
						Geschäftsführender Gesellschafter
						<br />
						<br />
						Lennart ist Mitgründer von CraftedMedia und seit
						über 10 Jahren im Design Bereich tätig. Er hat
						Projekte für Lipsky Facility Services und
						Lüneburger Heide Immobilien (LHI) umgesetzt und
						prägt als UI/UX Designer sowie Frontend Entwickler
						alle Arbeiten von CraftedMedia.
					</p>
				</div>
			</div>

			<div class="divider"></div>

			<div class="padding-v-32 hflex-start-start gap-32">
				<NuxtImg
					class="profile_image"
					src="/images/test.png"></NuxtImg>
				<div>
					<h3 class="type-heading-24 no-dot margin-bottom-20">
						Moin, ich bin Jack👋
					</h3>
					<p class="type-body-16">
						Designer · Geschäftsführender Gesellschafter
						<br />
						<br />
						Jack ist Mitgründer von CraftedMedia und seit rund
						5 Jahren im Design Bereich tätig. Er hat Projekte
						für die Bergolzimmobilien Group umgesetzt und
						arbeitet als Designer an zahlreichen Projekten von
						CraftedMedia mit. Neben dem Design ist seine große
						Leidenschaft die Fotografie, in der er die
						Fotoprojekte von CraftedMedia verantwortet.
					</p>
				</div>
			</div>
		</div>
		<div>
			<Accordion
				type="multiple"
				:accordion-object="faq" />

			<div class="padding-v-32 text-underlined">
				<a
					class="type-heading-20 text-highlight"
					:href="'mailto:' + email">
					Du hast noch fragen? Schreib uns gerne unter
					<strong class="text-underline">{{ email }}</strong>
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
.profile_image {
	width: 4rem;
	aspect-ratio: 1/1;
	border-radius: 50%;
	object-fit: cover;
}

.divider {
	background-color: var(--Accordion-border);
	height: 1px;
}
</style>
