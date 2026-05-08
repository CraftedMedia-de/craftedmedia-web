<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import Home from '~/components/icon/Home.vue';
import Menu from '~/components/icon/Menu.vue';
import CraftedMediaLogo from '~/components/icon/CraftedMediaLogo.vue';
import Rocket from '~/components/icon/Rocket.vue';

const isHidden = ref(false);
const scrollThreshold = 12;
let lastScrollY = 0;

const updateNavVisibility = () => {
	const currentScrollY = window.scrollY || 0;

	if (currentScrollY <= 0) {
		isHidden.value = false;
		lastScrollY = 0;
		return;
	}

	const delta = currentScrollY - lastScrollY;

	if (Math.abs(delta) >= scrollThreshold) {
		isHidden.value = delta > 0;
		lastScrollY = currentScrollY;
	}
};

onMounted(() => {
	lastScrollY = window.scrollY || 0;
	window.addEventListener('scroll', updateNavVisibility, {
		passive: true,
	});
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', updateNavVisibility);
});
</script>

<template>
	<nav
		class="shadow-s"
		:class="{ 'nav--hidden': isHidden }">
		<ul>
			<li class="nav-group hflex-center-start gap-8">
				<NuxtLink
					class="nav-button"
					to="/">
					<IconBase class="icon-24">
						<Home />
					</IconBase>
				</NuxtLink>

				<NuxtLink
					class="nav-link type-heading-16"
					to="/designsystem">
					Design System
				</NuxtLink>

				<NuxtLink
					class="nav-link type-heading-16"
					to="/projekte">
					Projekte
				</NuxtLink>

				<NuxtLink
					class="nav-link type-heading-16"
					to="/webdesign">
					Webdesign
				</NuxtLink>
			</li>

			<li class="hflex-start-center gap-8">
				<IconBase class="icon-32">
					<CraftedMediaLogo />
				</IconBase>
				<h2 class="text-highlight on-dark type-heading-20 no-dot">
					CraftedMedia
					<span class="text-brand">.</span>
				</h2>
			</li>

			<li class="nav-group nav-group-end hflex gap-8">
				<NuxtLink to="/kontakt/projektfragebogen">
					<Button variant="solid-brand">
						<div>Projekt anfragen</div>
						<IconBase class="icon-24">
							<Rocket />
						</IconBase>
					</Button>
				</NuxtLink>

				<NuxtLink
					class="nav-button"
					to="/">
					<IconBase class="icon-24">
						<Menu />
					</IconBase>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
nav {
	background-color: rgba(26, 26, 26, 0.9);
	border-radius: 99rem;
	padding: 0.5rem;
	position: fixed;
	top: 1rem;
	z-index: 5;
	backdrop-filter: blur(4px);
	color: white;
	width: 100%;
	max-width: 100rem;
	left: 50%;
	transform: translate(-50%, 0);
	transition:
		transform 0.28s ease,
		opacity 0.28s ease;
	will-change: transform, opacity;
}

nav.nav--hidden {
	transform: translate(-50%, -130%);
	opacity: 0;
	pointer-events: none;
}

ul {
	list-style-type: none;
	padding: 0;
	gap: 0.5rem;
	margin: 0;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
}

li {
	margin: 0;
	padding: 0;
}

.nav-button {
	border-radius: 50rem;
	padding: 0.75rem;
	background-color: rgba(255, 255, 255, 0.15);
	box-shadow:
		0 1px 2px 0 rgba(255, 255, 255, 0.3) inset,
		0 1px 2px 0 rgba(0, 0, 0, 0.3),
		0 2px 4px 0 rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(32px);
	color: white;
	align-content: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color 0.2s ease;
	display: inline-flex;
}

.nav-button:hover {
	background-color: rgba(255, 255, 255, 0.25);
}

.nav-link {
	padding-inline: 1.5rem;
	padding-block: 0.75rem;
	border-radius: 0.75rem;
	transition: background-color 0.2s ease;
}

.nav-link:hover {
	background-color: #404040;
	box-shadow:
		0 1px 2px 0 rgba(255, 255, 255, 0.3) inset,
		0 1px 2px 0 rgba(0, 0, 0, 0.3),
		0 2px 4px 0 rgba(0, 0, 0, 0.15);
}

.router-link-active {
	color: var(--text-brand);
}

.nav-group {
	display: flex;
	width: 100%;

	&.nav-group-end {
		/* ensure the grid item aligns to the end of its grid column */
		justify-self: end;
		/* keep the inner flex content right-aligned */
		justify-content: flex-end;
	}
}
</style>
