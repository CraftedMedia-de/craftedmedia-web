export type ProjectContentBlock =
	| { type: 'text'; heading: string; body: string }
	| { type: 'image'; src: string; alt: string; caption?: string }
	| { type: 'list'; heading: string; items: string[] };

export interface Project {
	id: string; // wird in URL verwendet, z.B. /projekt/craftedmedia
	customer: string;
	teaserImage: string;
	teaserAlt: string;
	labelGoal: string;
	labelResult: string;
	labelServices: string;
	title: string;
	intro: string;
	blocks: ProjectContentBlock[];
}

export const projects: Project[] = [
	{
		id: 'craftedmedia',
		customer: 'CraftedMedia',
		teaserImage: '/images/laptop-on-sofa.png',
		teaserAlt: 'Laptop auf Sofa',
		labelGoal: 'Mehr Immobilienanfragen',
		labelResult: '+127 % Conversion Rate',
		labelServices: 'Design · Entwicklung · Performance',
		title: 'Website Relaunch CraftedMedia',
		intro: 'Relaunch mit Fokus auf Conversion und Markenwirkung.',
		blocks: [
			{
				type: 'text',
				heading: 'Ausgangslage',
				body: 'Die alte Seite war technisch und visuell veraltet.',
			},
			{
				type: 'image',
				src: '/images/laptop-on-sofa.png',
				alt: 'Hero Shot',
			},
			{
				type: 'list',
				heading: 'Ergebnisse',
				items: [
					'+127 % Conversion',
					'Schnellere Ladezeit',
					'Bessere Leads',
				],
			},
		],
	},
];
