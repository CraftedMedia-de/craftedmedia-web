<script setup lang="ts">
import { contact } from '~/data/contact';

import type { NuxtError } from '#app';
import Phone from '~/components/icon/Phone.vue';
import ArrowRight from '~/components/icon/ArrowRight.vue';
import Chat from '~/components/icon/Chat.vue';
import Puzzle from '~/components/icon/Puzzle.vue';
import CTA from '~/components/section/CTA.vue';
import FooterGlobal from '~/components/section/FooterGlobal.vue';
import MoreInformation from '~/components/section/MoreInformation.vue';

const props = defineProps<{ error: NuxtError }>();

const errorContent: Record<number, { title: string; text: string }> = {
	404: {
		title: 'Ups – diese Seite hat sich wohl verlaufen',
		text: 'Aber keine Sorge, wir finden den Weg zurück.',
	},
	403: {
		title: 'Du darfst diese Seite leider nicht sehen',
		text: 'Bitte prüfe deine Berechtigung.',
	},
	500: {
		title: 'Hier ist leider ein interner Fehler aufgetreten',
		text: 'Bitte versuche es später noch einmal.',
	},
};

const fallbackErrorContent = {
	title: 'Es ist ein Fehler aufgetreten',
	text: 'Bitte versuche es später noch einmal.',
};

const currentErrorContent =
	errorContent[props.error.statusCode] ?? fallbackErrorContent;

const router = useRouter();

const goBack = () => {
	if (window.history.length > 1) {
		router.back();
	} else {
		router.push('/');
	}
};
</script>

<template>
	<main class="content-grid">
		<section class="margin-top-128">
			<div class="vflex-center-center gap-48">
				<div class="vflex-center-center gap-16">
					<h1
						class="type-heading-16 text-muted no-dot text-align-center">
						{{ props.error.statusCode }}
					</h1>
					<h2 class="type-display-64 text-align-center">
						{{ currentErrorContent.title }}
					</h2>
					<p class="type-heading-20 text-align-center">
						{{ currentErrorContent.text }}
					</p>
				</div>
				<div class="hflex-center-center gap-16">
					<NuxtLink to="/">
						<Button dot>Zur Startseite</Button>
					</NuxtLink>
					<Button
						variant="ghost"
						@click="goBack">
						Zurück
					</Button>
				</div>
			</div>

			<div class="vflex gap-32 margin-top-128">
				<div class="text-align-center">
					Hilfreiche links für dich:
				</div>

				<div class="grid-autoFit-300 gap-32">
					<Card
						variant="variant-2"
						heading="Ruf mal durch"
						paragraph="Persönliche Beratung, schnell und unkompliziert."
						buttonText="Anrufen">
						<template v-slot:icon>
							<Phone />
						</template>

						<template v-slot:footer>
							<a
								class="hflex-center-center gap-8 type-heading-16 text-highlight"
								:href="'tel:' + contact.phoneHref">
								Anrufen
								<IconBase class="icon-24">
									<ArrowRight />
								</IconBase>
							</a>
						</template>
					</Card>

					<Card
						variant="variant-2"
						heading="Chat mit uns"
						paragraph="Du kannst nicht finden, wonach du suchst?"
						buttonText="Anrufen">
						<template v-slot:icon>
							<Chat />
						</template>

						<template v-slot:footer>
							<a
								class="hflex-center-center gap-8 type-heading-16 text-highlight">
								Chat mit unserem Team
								<IconBase class="icon-24">
									<ArrowRight />
								</IconBase>
							</a>
						</template>
					</Card>

					<Card
						variant="variant-2"
						heading="Projekt starten"
						paragraph="Starte deine Zukunft zusammen mit uns."
						buttonText="Anrufen">
						<template v-slot:icon>
							<Puzzle />
						</template>

						<template v-slot:footer>
							<NuxtLink
								class="hflex-center-center gap-8 type-heading-16 text-highlight"
								to="/kontakt/projektfragebogen">
								Projekt Formular
								<IconBase class="icon-24">
									<ArrowRight />
								</IconBase>
							</NuxtLink>
						</template>
					</Card>
				</div>
			</div>
		</section>

		<section class="breakout">
			<CTA />
		</section>

		<section class="breakout">
			<MoreInformation />
		</section>

		<section class="breakout">
			<FooterGlobal />
		</section>
	</main>
</template>

<style scoped></style>
