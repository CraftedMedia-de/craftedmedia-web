<script setup lang="ts">
import HeroMainPage from '~/components/section/HeroMainPage.vue';
import MediaBlock from '~/components/section/MediaBlock.vue';
import Services from '~/components/section/Services.vue';
import Process from '~/components/section/Process.vue';
import CustomersAndPartners from '~/components/section/CustomersAndPartners.vue';
import ProjectsOverview from '~/components/section/ProjectsOverview.vue';
import CTA from '~/components/section/CTA.vue';
import FooterGlobal from '~/components/section/FooterGlobal.vue';
import CustomerFeedback from '~/components/section/CustomerFeedback.vue';
import ImageGrid from '~/components/section/ImageGrid.vue';
import MoreInformation from '~/components/section/MoreInformation.vue';
import SliderSection from '~/components/section/SliderSection.vue';
import { SwiperSlide } from 'swiper/vue';
</script>

<template>
	<section class="breakout">
		<HeroMainPage
			image-src="/images/test.png"
			image-alt="test" />
	</section>
	<section>
		<MediaBlock
			image-src="/images/2-humans-on-table.png"
			image-alt="test" />
	</section>

	<section>
		<Services />
	</section>

	<ProjectsOverview
		class="full-width"
		:categories="['webdesign']"
		:only-teaser="true"
		:limit="3" />

	<section>
		<Process />
	</section>

	<SliderSection heading="Was wir für dich umsetzen">
		<SwiperSlide>
			<Card
				class="card"
				heading="Websites für den Immobilien Sektor."
				paragraph="Auftritte für Makler, Verwaltungen und Dienstleister rund ums Gebäude – mit klarem Aufbau, Vertrauen und einfachen Kontaktwegen.">
				<IconNotebookPen />
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				class="card"
				heading="Marketing-Websites für Dienstleister & Unternehmen."
				paragraph="Klar strukturierte Websites, die zeigen, was ihr könnt – und Besucher gezielt zur Kontaktaufnahme führen.">
				<IconNotebookPen />
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				class="card"
				heading="Individuelles Webdesign & Layout."
				paragraph="Wir entwerfen deinen Auftritt von Grund auf: klare Seitenstruktur, Layout, Typo, Farben und Komponenten – passend zu deiner Marke und den Zielen der Website.">
				<IconNotebookPen />
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				class="card"
				heading="Webflow-Websites."
				paragraph="Websites auf Basis von Webflow – ideal, wenn Inhalte später im Team gepflegt werden sollen, ohne sich mit Code zu beschäftigen.">
				<IconNotebookPen />
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				class="card"
				heading="Individuelle Frontends."
				paragraph="Für Projekte, bei denen es mehr Freiheit braucht: maßgeschneiderte Oberflächen auf Basis von Vue.js.">
				<IconNotebookPen />
			</Card>
		</SwiperSlide>
		<SwiperSlide>
			<Card
				class="card"
				heading="Website-Relaunch & Migration."
				paragraph="Neues Design, neue Struktur – und ein sauberer Umzug eurer bestehenden Inhalte, damit nichts Wichtiges verloren geht.">
				<IconNotebookPen />
			</Card>
		</SwiperSlide>
	</SliderSection>

	<CustomerFeedback class="full-width" />

	<section>
		<CustomersAndPartners />
	</section>

	<ImageGrid></ImageGrid>

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
