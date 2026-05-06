export interface ContactSocialLink {
	label: string;
	href: string;
	external?: boolean;
	icon?: string;
}

export interface ContactAddress {
	street: string;
	zipCode: string;
	city: string;
	country: string;
}

export interface ContactData {
	companyName: string;
	phone: string;
	phoneLabel: string;
	phoneHref: string;
	email: string;
	emailLabel: string;
	emailHref: string;
	address: ContactAddress;
	socialLinks: ContactSocialLink[];
	openingHours?: string[];
	notes?: string[];
}

const phoneToHref = (phone: string) =>
	`tel:${phone.replace(/[^\d+]/g, '')}`;

export const contact: ContactData = {
	companyName: 'CraftedMedia',
	phone: '+49 123 4567890',
	phoneLabel: '+49 123 4567890',
	phoneHref: phoneToHref('+49 123 4567890'),
	email: 'hello@craftedmedia.de',
	emailLabel: 'hello@craftedmedia.de',
	emailHref: 'mailto:hello@craftedmedia.de',
	address: {
		street: 'Musterstraße 12',
		zipCode: '12345',
		city: 'Lüneburg',
		country: 'Deutschland',
	},
	socialLinks: [
		{
			label: 'Instagram',
			href: 'https://instagram.com',
			external: true,
		},
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com',
			external: true,
		},
	],
	openingHours: ['Mo–Fr: 09:00–17:00'],
	notes: ['Antworten meist innerhalb von 24 Stunden'],
};
