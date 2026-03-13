<script setup lang="ts">
import { ref } from 'vue';
import NestedList from '../../components/NestedList.vue';
import FooterGlobal from '~/components/section/FooterGlobal.vue';

const sections = ref([
	{
		heading: '1. Geltungsbereich',
		points: [
			'Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen CraftedMedia und ihren Kunden über Dienstleistungen in den Bereichen Webdesign, Webentwicklung, Immobilienfotografie sowie verwandte Beratungs- und Unterstützungsleistungen.',
			'Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn wir ihrer Geltung ausdrücklich schriftlich zugestimmt haben.',
			'Die AGB gelten sowohl gegenüber Unternehmern im Sinne von § 14 BGB als auch – soweit nicht ausdrücklich anders geregelt – gegenüber Verbrauchern im Sinne von § 13 BGB.',
		],
	},
	{
		heading: '2. Vertragsgegenstand',
		points: [
			{
				text: 'Vertragsgegenstand sind die im jeweiligen Angebot beschriebenen Leistungen, insbesondere:',
				subpoints: [
					'Konzeption, Gestaltung und Umsetzung von Websites,',
					'technische Integration (z. B. HTML, CSS, JavaScript, CMS-Umsetzung, Webflow),',
					'Anpassung und Weiterentwicklung bestehender Websites,',
					'Immobilienfotografie und Bildbearbeitung in vereinbartem Umfang,',
					'ergänzende Beratungs- und Unterstützungsleistungen (z. B. Hosting-Beratung, SEO-Basistuning). ',
				],
			},
			'Umfang und Inhalt der Leistungen ergeben sich aus unserem individuellen Angebot oder der Auftragsbestätigung. Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der Textform (z. B. E-Mail).',
		],
	},
	{
		heading: '3. Angebot und Vertragsschluss',
		points: [
			'Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden.',
			{
				text: 'Ein Vertrag kommt zustande durch:',
				subpoints: [
					'schriftliche oder textliche Annahme unseres Angebots durch den Kunden (z. B. E-Mail), oder',
					'die ausdrückliche Bestätigung des Auftrags durch uns, oder',
					'die Aufnahme der Ausführung der Leistungen durch uns, sofern der Kunde vorher ein entsprechendes Angebot erhalten hat.',
				],
			},
			'Angebote haben – sofern nicht anders angegeben – eine Gültigkeit von 14 Tagen ab Angebotsdatum.',
		],
	},
	{
		heading: '4. Mitwirkungspflichten des Kunden',
		points: [
			{
				text: 'Der Kunde ist verpflichtet, alle zur Durchführung des Auftrags erforderlichen Informationen, Inhalte und Materialien rechtzeitig, vollständig und in geeigneter Form zur Verfügung zu stellen. Dazu gehören insbesondere:',
				subpoints: [
					'Texte, Logos, Bilder, Grafiken, Marken- und Unternehmensdaten,',
					'Zugangsdaten zu bestehenden Systemen (z. B. Hosting, Domains, CMS), soweit erforderlich,',
					'Vorgaben zu Corporate Design, Stil und besonderen Wünschen, sofern vorhanden. ',
				],
			},
			'Der Kunde versichert, dass alle von ihm bereitgestellten Inhalte frei von Rechten Dritter sind bzw. er über die erforderlichen Nutzungsrechte verfügt.',
			'Verzögert sich die Leistungserbringung aufgrund fehlender oder verspäteter Mitwirkung des Kunden, verlängern sich vereinbarte Fristen entsprechend. Eventuelle Mehraufwände durch Verzögerungen können gesondert in Rechnung gestellt werden.',
		],
	},
	{
		heading: '5. Leistungen, Änderungen und Mehrleistungen',
		points: [
			'Wir erbringen unsere Leistungen nach dem aktuellen Stand der Technik und mit der branchenüblichen Sorgfalt.',
			'Änderungswünsche des Kunden nach Auftragserteilung können zu Anpassungen des Zeitplans und des vereinbarten Honorars führen. Wir informieren den Kunden vorab über entstehende Mehrkosten.',
			'Leistungen, die nicht ausdrücklich im Angebot aufgeführt sind (z. B. zusätzliche Unterseiten, zusätzliche Shooting-Termine, umfangreiche Textleistungen, zusätzliche Korrekturrunden), gelten als Mehrleistungen und werden nach unserem jeweils gültigen Stundensatz oder einer gesonderten Vereinbarung abgerechnet.',
		],
	},
	{
		heading: '6. Korrekturschleifen',
		points: [
			'Sofern nicht anders vereinbart, sind im Angebot eine angemessene Anzahl an Korrekturschleifen (z. B. 1–2 Runden) enthalten.',
			'Weitere Korrekturschleifen oder umfangreiche Änderungswünsche nach Freigabe einer Phase können als Mehrleistung gesondert berechnet werden.',
		],
	},
	{
		heading: '7. Vergütung und Zahlungsbedingungen',
		points: [
			'Die Vergütung ergibt sich aus dem jeweiligen Angebot.',
			{
				text: 'Bei Webprojekten kann die Vergütung wie folgt gestaltet sein:',
				subpoints: [
					'vollständige Zahlung im Voraus, oder',
					'Aufteilung in Teilzahlungen (z. B. 50 % bei Auftragserteilung, 50 % nach einem Monat oder Projektabschluss), je nach individueller Vereinbarung.',
				],
			},
			'Bei Fotoprojekten erfolgt die Zahlung in der Regel nach Abschluss und Lieferung der vereinbarten Leistungen, sofern nichts anderes vereinbart wurde.',
			'Alle Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht ausdrücklich Brutto-Preise ausgewiesen werden.',
			'Rechnungen sind, sofern nichts anderes vereinbart wurde, innerhalb von 14 Tagen ohne Abzug zur Zahlung fällig.',
			'Bei Zahlungsverzug sind wir berechtigt, gesetzliche Verzugszinsen zu berechnen und weitere Leistungen bis zur vollständigen Zahlung zurückzuhalten.',
		],
	},
	{
		heading: '8. Nutzungsrechte',
		points: [
			'Mit vollständiger Bezahlung der vereinbarten Vergütung erhält der Kunde die im Angebot beschriebenen einfachen Nutzungsrechte an den von uns erstellten Werken (z. B. Webdesign, Programmierung, Fotografien) für den vereinbarten Zweck.',
			{
				text: 'Soweit nicht anders vereinbart, erhält der Kunde ein einfaches, nicht exklusives Nutzungsrecht zur Verwendung:',
				subpoints: [
					'der Website im Rahmen seines Unternehmensauftritts,',
					'der Fotografien zur Darstellung seiner Immobilien und Leistungen (online und, falls vereinbart, offline).',
				],
			},
			'Eine Weitergabe der Werke oder Nutzungsrechte an Dritte, die über den ursprünglichen Zweck hinausgeht (z. B. Weiterverkauf von Templates oder Fotos), bedarf unserer vorherigen schriftlichen Zustimmung.',
			'Wir behalten uns das Recht vor, die erbrachten Leistungen – insbesondere Websites, Layouts und Fotografien – zu Eigenwerbezwecken zu nutzen (z. B. Portfolio, Website, Social Media), sofern der Kunde dem nicht aus wichtigem Grund widerspricht.',
			'An Entwürfen, Zwischenständen, nicht umgesetzten Konzepten und abgelehnten Designs verbleiben sämtliche Rechte bei uns.',
		],
	},
	{
		heading: '9. Referenznennung',
		points: [
			'Der Kunde gestattet CraftedMedia, im Rahmen der eigenen Außendarstellung auf die Zusammenarbeit hinzuweisen und das Projekt als Referenz zu nennen.',
			{
				text: 'Dies umfasst insbesondere:',
				subpoints: [
					'Nennung des Unternehmensnamens,',
					'Darstellung von Screenshots der Website,',
					'Verwendung ausgewählter Projektbilder (inkl. Immobilienfotos) in unserem Portfolio (online und offline).',
				],
			},
			'Sollte der Kunde diese Nutzung nicht wünschen, kann dies vor oder während des Projekts mit uns individuell geregelt werden.',
		],
	},

	{
		heading: '10. Abnahme',
		points: [
			'Nach Fertigstellung der vereinbarten Leistungen oder einer abgeschlossenen Projektphase wird dem Kunden das Ergebnis zur Abnahme bereitgestellt (z. B. über eine Testumgebung, Präsentation oder Übergabe von Dateien).',
			'Der Kunde ist verpflichtet, das Werk innerhalb einer angemessenen Frist (in der Regel 7–10 Tage) zu prüfen und etwaige Mängel schriftlich mitzuteilen.',
			'Erfolgt innerhalb dieser Frist keine Mängelanzeige oder nutzt der Kunde die Leistungen produktiv, gilt das Werk als abgenommen.',
		],
	},

	{
		heading: '11. Gewährleistung',
		points: [
			'Es gelten die gesetzlichen Gewährleistungsrechte.',
			'Offensichtliche Mängel sind uns innerhalb von 10 Tagen nach Abnahme schriftlich mitzuteilen.',
			'Bei berechtigten Mängelrügen sind wir zunächst zur Nacherfüllung berechtigt (Beseitigung des Mangels oder Neuerstellung). Schlägt die Nacherfüllung fehl, kann der Kunde nach den gesetzlichen Vorschriften Minderung verlangen oder vom Vertrag zurücktreten.',
			{
				text: 'Wir übernehmen keine Gewähr für Fehler oder Ausfälle, die auf:',
				subpoints: [
					'unsachgemäße Bedienung,',
					'Änderungen durch den Kunden oder Dritte,',
					'externe Systeme (z. B. Hosting-Anbieter, Plugins, Drittanbieter-Tools)  zurückzuführen sind.',
				],
			},
		],
	},

	{
		heading: '12. Haftung',
		points: [
			'Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.',
			'Bei leicht fahrlässigen Pflichtverletzungen haften wir nur für Schäden aus der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), jedoch der Höhe nach beschränkt auf den vertragstypisch vorhersehbaren Schaden.',
			'Eine weitergehende Haftung ist ausgeschlossen.',
			'Für Datenverlust haftet CraftedMedia nur, soweit der Schaden auch bei ordnungsgemäßer und regelmäßiger Datensicherung durch den Kunden nicht vermeidbar gewesen wäre.',
		],
	},

	{
		heading: '13. Support und Wartung',
		points: [
			'Eine laufende Pflege, Wartung oder Aktualisierung der Website bzw. Systeme ist nur dann Vertragsbestandteil, wenn dies ausdrücklich vereinbart wurde (z. B. in einem gesonderten Wartungsvertrag).',
			'Einzelne Änderungs- oder Supportleistungen können nach Aufwand zu unseren aktuellen Stundensätzen abgerechnet werden.',
		],
	},

	{
		heading: '14. Datenschutz',
		points: [
			'Die Verarbeitung personenbezogener Daten erfolgt gemäß den geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO.',
			'Einzelheiten sind in unserer Datenschutzerklärung geregelt, die auf unserer Website abrufbar ist.',
		],
	},

	{
		heading: '15. Schlussbestimmungen',
		points: [
			'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).',
			'Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen zwischen dem Kunden und CraftedMedia unser Geschäftssitz.',
			'Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt die gesetzliche Regelung.',
		],
	},
]);
</script>

<template>
	<div class="margin-bottom-128">
		<h1 class="type-heading-48 margin-bottom-64">
			Datenschutzvereinbarung
		</h1>
		<p class="type-body-20">
			von
			<br />
			Lennart Elbers und Jack Spieler CraftedMedia GbR
			<br />
			Bahnhofstraße 39, 21423 Winsen (Luhe)
			<br />
			(im Folgenden: „CraftedMedia“, „wir")
		</p>
	</div>

	<div
		class="margin-bottom-128"
		v-for="(section, sIdx) in sections"
		:key="sIdx">
		<ContentSplit
			:heading="section.heading"
			:custom-paragraph="true">
			<!-- Nutze die rekursive NestedList-Komponente (items können string oder { text, subpoints }) -->
			<NestedList
				class="type-body-20"
				:items="section.points" />
		</ContentSplit>
	</div>

	<FooterGlobal />
</template>

<style scoped>
ul {
	list-style-type: upper-roman;
}

li {
	margin-bottom: 2rem;
}
</style>
