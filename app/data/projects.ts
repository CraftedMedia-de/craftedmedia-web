export type ProjectCategory = 'webdesign' | 'entwicklung' | 'fotografie';

export interface ProjectImage {
	src: string;
	alt: string;
	caption?: string;
}

export interface Project {
	id: string;
	category: ProjectCategory;
	isTeaser: boolean;
	isHighlight: boolean;

	// Hauptinfos (global)
	customer: string;
	title: string;

	// Card/Overview
	teaserImage: string;
	teaserAlt: string;
	labelGoal: string;
	labelResult: string;
	labelServices: string;

	// Detailseite
	contextText: string[];
	solutionText: string[];
	images: ProjectImage[];
}

export const projects: Project[] = [
	{
		id: 'bergholzimmobilien',
		category: 'webdesign',
		isTeaser: true,
		isHighlight: false,
		customer: 'Bergholzimmobilien',
		title: 'Wo Struktur Freiheit schafft',
		teaserImage: '/images/laptop-on-sofa.png',
		teaserAlt: 'Laptop auf Sofa',
		labelGoal: 'Mehr Immobilienanfragen',
		labelResult: '+127 % Conversion Rate',
		labelServices: 'Design · Entwicklung · Performance',
		contextText: [
			'Bergholz Immobilien hat sich mit CraftedMedia verpartnert, um zentrale Herausforderungen ihrer Website anzugehen: Inhalte ließen sich nur umständlich aktualisieren, Änderungen waren oft zeitaufwendig und die laufende Pflege wurde zunehmend ineffizient. Ziel war es, die digitale Präsenz so aufzustellen, dass sie im Alltag schneller, flexibler und verlässlicher genutzt werden kann.',
		],
		solutionText: [
			'CraftedMedia hat die bestehende Website-Struktur von Bergholz Immobilien vollständig von WordPress zu Webflow übertragen und dabei die Grundlage für eine deutlich effizientere Content-Pflege geschaffen. Der Fokus lag darauf, dass neue Inhalte künftig schneller online gehen – ohne Plugin-Wartung, Update-Stress oder unnötige technische Umwege.',
			'Dafür haben wir die Seite in Webflow neu strukturiert und so aufgebaut, dass wiederkehrende Inhalte (z. B. Leistungsbereiche, Standort-Infos, Referenzen oder News) über klare, wiederverwendbare Komponenten gepflegt werden können. Das bedeutet: Bergholz kann Inhalte heute deutlich einfacher ergänzen oder anpassen, ohne dass jedes Mal in das „Technische“ eingegriffen werden muss.',
			'Ein weiterer Kernpunkt war die Performance. Durch die Umstellung auf Webflow profitiert die Website von einem modernen Hosting-Setup und sauberer, schlanker Auslieferung der Seite – was sich direkt in schnelleren Ladezeiten und einer besseren Nutzererfahrung bemerkbar macht. Gerade im Immobilienbereich ist das entscheidend: Interessenten entscheiden innerhalb weniger Sekunden, ob eine Website professionell wirkt und Vertrauen schafft.',
			'Zusätzlich wurde die Lösung so umgesetzt, dass sie skalierbar bleibt: Wenn Bergholz künftig neue Inhalte, Landingpages oder zusätzliche Unterseiten braucht, lässt sich das schnell erweitern – ohne dass die Website “komplizierter” wird. Ergebnis: ein flexibleres System, weniger laufender Pflegeaufwand und eine Website, die sowohl technisch als auch inhaltlich langfristig mitwachsen kann.',
		],
		images: [
			{
				src: '/images/laptop-on-sofa.png',
				alt: 'Projektansicht Bergholzimmobilien',
			},
			{
				src: '/images/test.png',
				alt: 'Projektansicht Bergholzimmobilien',
			},
		],
	},
	{
		id: 'craftedmedia',
		category: 'webdesign',
		isTeaser: true,
		isHighlight: false,
		customer: 'CraftedMedia',
		title: 'Wo Struktur Freiheit schafft',
		teaserImage: '/images/test.png',
		teaserAlt: 'Laptop auf Sofa',
		labelGoal: 'Mehr Immobilienanfragen',
		labelResult: '+127 % Conversion Rate',
		labelServices: 'Design · Entwicklung · Performance',
		contextText: [
			'Bergholz Immobilien hat sich mit CraftedMedia verpartnert, um zentrale Herausforderungen ihrer Website anzugehen: Inhalte ließen sich nur umständlich aktualisieren, Änderungen waren oft zeitaufwendig und die laufende Pflege wurde zunehmend ineffizient. Ziel war es, die digitale Präsenz so aufzustellen, dass sie im Alltag schneller, flexibler und verlässlicher genutzt werden kann.',
		],
		solutionText: [
			'CraftedMedia hat die bestehende Website-Struktur von Bergholz Immobilien vollständig von WordPress zu Webflow übertragen und dabei die Grundlage für eine deutlich effizientere Content-Pflege geschaffen. Der Fokus lag darauf, dass neue Inhalte künftig schneller online gehen – ohne Plugin-Wartung, Update-Stress oder unnötige technische Umwege.',
			'Dafür haben wir die Seite in Webflow neu strukturiert und so aufgebaut, dass wiederkehrende Inhalte (z. B. Leistungsbereiche, Standort-Infos, Referenzen oder News) über klare, wiederverwendbare Komponenten gepflegt werden können. Das bedeutet: Bergholz kann Inhalte heute deutlich einfacher ergänzen oder anpassen, ohne dass jedes Mal in das „Technische“ eingegriffen werden muss.',
			'Ein weiterer Kernpunkt war die Performance. Durch die Umstellung auf Webflow profitiert die Website von einem modernen Hosting-Setup und sauberer, schlanker Auslieferung der Seite – was sich direkt in schnelleren Ladezeiten und einer besseren Nutzererfahrung bemerkbar macht. Gerade im Immobilienbereich ist das entscheidend: Interessenten entscheiden innerhalb weniger Sekunden, ob eine Website professionell wirkt und Vertrauen schafft.',
			'Zusätzlich wurde die Lösung so umgesetzt, dass sie skalierbar bleibt: Wenn Bergholz künftig neue Inhalte, Landingpages oder zusätzliche Unterseiten braucht, lässt sich das schnell erweitern – ohne dass die Website “komplizierter” wird. Ergebnis: ein flexibleres System, weniger laufender Pflegeaufwand und eine Website, die sowohl technisch als auch inhaltlich langfristig mitwachsen kann.',
		],
		images: [
			{
				src: '/images/test.png',
				alt: 'Projektansicht Bergholzimmobilien',
			},
		],
	},
];
