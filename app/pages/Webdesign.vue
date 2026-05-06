<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';

import Process from '~/components/section/Process.vue';
import CTA from '~/components/section/CTA.vue';
import FooterGlobal from '~/components/section/FooterGlobal.vue';
import MoreInformation from '~/components/section/MoreInformation.vue';
import SliderSection from '~/components/section/SliderSection.vue';
import Home from '~/components/icon/Home.vue';
import Rocket from '~/components/icon/Rocket.vue';
import CodeXML from '~/components/icon/CodeXML.vue';
import LandPlot from '~/components/icon/LandPlot.vue';
import Building2 from '~/components/icon/Building-2.vue';
import PanelsTopLeft from '~/components/icon/Panels-Top-Left.vue';
import ProjectsOverview from '~/components/section/ProjectsOverview.vue';
</script>

<template>
	<ProjectsOverview class="full-width" />

	<section>
		<Process />
	</section>

	<SliderSection heading="Was wir für dich umsetzen">
		<SwiperSlide>
			<Card
				heading="Websites für den Immobilien Sektor."
				paragraph="Auftritte für Makler, Verwaltungen und Dienstleister rund ums Gebäude – mit klarem Aufbau, Vertrauen und einfachen Kontaktwegen."
				variant="default">
				<IconBase>
					<Home />
				</IconBase>
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				heading="Marketing-Websites für Dienstleister & Unternehmen."
				paragraph="Klar strukturierte Websites, die zeigen, was ihr könnt – und Besucher gezielt zur Kontaktaufnahme führen."
				variant="default">
				<IconBase>
					<Building2 />
				</IconBase>
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				heading="Individuelles Webdesign & Layout."
				paragraph="Wir entwerfen deinen Auftritt von Grund auf: klare Seitenstruktur, Layout, Typo, Farben und Komponenten – passend zu deiner Marke und den Zielen der Website."
				variant="default">
				<IconBase>
					<PanelsTopLeft />
				</IconBase>
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				heading="Webflow-Websites."
				paragraph="Websites auf Basis von Webflow – ideal, wenn Inhalte später im Team gepflegt werden sollen, ohne sich mit Code zu beschäftigen."
				variant="default">
				<IconBase>
					<LandPlot />
				</IconBase>
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				heading="Individuelle Frontends."
				paragraph="Für Projekte, bei denen es mehr Freiheit braucht: maßgeschneiderte Oberflächen auf Basis von Vue.js."
				variant="default">
				<IconBase>
					<CodeXML />
				</IconBase>
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				heading="Website-Relaunch & Migration."
				paragraph="Neues Design, neue Struktur – und ein sauberer Umzug eurer bestehenden Inhalte, damit nichts Wichtiges verloren geht."
				variant="default">
				<IconBase>
					<Rocket />
				</IconBase>
			</Card>
		</SwiperSlide>
	</SliderSection>

	<section class="breakout">
		<CTA />
	</section>

	<section class="breakout">
		<MoreInformation />
	</section>

	<section class="breakout">
		<FooterGlobal />
	</section>
</template>

<style scoped></style>
