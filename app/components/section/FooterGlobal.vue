<script setup lang="ts">
import CraftedMediaLogo from '~/components/icon/CraftedMediaLogo.vue';
import Instagram from '~/components/icon/Instagram.vue';
import LinkedIn from '~/components/icon/LinkedIn.vue';

const email = 'info@craftedmedia.de';
const phone = '+49 123 456789';
</script>

<template>
	<footer class="footer-body text-on-dark">
		<div class="footer-content-wrapper">
			<div class="footer-grid paddingx-64 margin-bottom-64">
				<div class="footer-logo-wrapper text-highlight on-dark">
					<IconBase class="icon-64">
						<CraftedMediaLogo />
					</IconBase>
					<h2 class="text-highlight on-dark type-heading-32">
						CraftedMedia
					</h2>
				</div>
				<div class="navWrapper">
					<h2
						class="type-heading-32 no-dot text-highlight on-dark margin-bottom-24">
						Kontakt
					</h2>
					<ul class="type-body-14">
						<li>
							<span>CraftedMedia</span>
						</li>
						<li>
							<span>Bahnhofstraße 39</span>
						</li>
						<li>
							<span>21423 Winsen (Luhe)</span>
						</li>
						<li class="margin-top-24 text-highlight on-dark">
							<a :href="'mailto:' + email">{{ email }}</a>
						</li>
						<li class="text-highlight on-dark">
							<a :href="'tel:' + phone">{{ phone }}</a>
						</li>
					</ul>
				</div>
				<div class="navWrapper">
					<h2
						class="type-heading-32 no-dot text-highlight on-dark margin-bottom-24">
						Services
					</h2>
					<ul class="type-body-14">
						<li>
							<NuxtLink to="/webdesign">Webdesign</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/entwicklung">
								Entwicklung
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/fotografie">
								Fotografie
							</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="navWrapper">
					<h2
						class="type-heading-32 no-dot text-highlight on-dark margin-bottom-24">
						Links
					</h2>
					<ul class="type-body-14">
						<li>
							<NuxtLink to="/faq">FAQ’s</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/kontakt">Kontakt</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/ueber-uns">Über uns</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/projekte">Projekte</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="footer-grid text-highlight on-dark margin-bottom-32">
				<a
					class="footer-social-button"
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram (öffnet in neuem Tab)">
					<IconBase class="icon-32">
						<Instagram />
					</IconBase>
					<div class="type-heading-32">Instagram</div>
				</a>
				<a
					class="footer-social-button"
					href="https://www.linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn (öffnet in neuem Tab)">
					<IconBase class="icon-32">
						<LinkedIn />
					</IconBase>
					<div class="type-heading-32">LinkedIn</div>
				</a>
			</div>
			<div>
				<ul
					class="footer-legal text-muted type-body-14 hflex gap-32 justify-center">
					<li>© 2025 CraftedMedia</li>
					<li>
						<NuxtLink to="/agb">AGB</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
					</li>
					<li>Cookie Vereinbarung</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer-body {
	border-radius: 1.5rem;
	padding: 4rem;
	gap: 4rem;
	background:
		radial-gradient(
			120.97% 139.59% at 50% 0%,
			var(--brand-500-transparent-30) 0%,
			var(--card-dark-background) 100%
		),
		var(--card-dark-background);
}

.footer-grid {
	display: grid;

	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem; /* Abstand zwischen Spalten/Zeilen nach Bedarf anpassen */
	align-items: start;
}

.footer-content-wrapper {
	max-width: 1440px;
	margin-inline: auto;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
li {
	margin-bottom: 0.25rem;
}

.footer-logo-wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: fit-content;
	gap: 1rem;
}

.footer-social-button {
	flex-direction: row;
	display: flex;
	padding: 2rem;
	border-radius: 1rem;
	background-color: rgba(255, 255, 255, 0.1);
	justify-content: center;
	align-items: center;
	gap: 1rem;

	transition: background-color 0.25s;

	&:hover {
		background-color: rgba(255, 255, 255, 0.15);
	}
}

.footer-legal {
	flex-wrap: wrap;
}

a {
	&:hover {
		color: var(--text-highlight-on-dark);
	}
}
</style>
