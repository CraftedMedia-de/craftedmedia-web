<script setup lang="ts">
import ColorSwatch from '~/components/designSystem/ColorSwatch.vue';

const aliasTokens = [
	'--neutral-900',
	'--brand-500',
	'--neutral-0',
	'--neutral-50',
	'--neutral-300',
	'--neutral-600',
];

const mappedTokens = [
	'--page-background',
	'--text-heading',
	'--text-heading-on-dark',
	'--text-heading-on-brand',
	'--text-body',
	'--text-body-on-dark',
	'--text-body-on-brand',
	'--card-background',
	'--card-text-body',
	'--card-text-heading',
	'--card-dark-background',
	'--card-dark-text-body',
	'--card-dark-text-heading',
	'--brand-dot',
	'--button-dark-background',
	'--button-bright-background',
	'--button-brand-background',
];
</script>

<template>
	<div class="design-system-page">
		<section><h1 class="type-display-64">Design System</h1></section>

		<section>
			<h2 class="type-heading-48">Color tokens</h2>
			<div class="swatch-container">
				<h3 class="type-heading-32">Alias Tokens</h3>
				<div class="swatches-wrapper">
					<ColorSwatch
						v-for="aliasToken in aliasTokens"
						:key="aliasToken"
						:token="aliasToken" />

					<ColorSwatch token="--neutral-900" />
				</div>
			</div>

			<div class="swatch-container">
				<h3 class="type-heading-32">Mapped Tokens</h3>
				<div class="swatches-wrapper">
					<ColorSwatch
						v-for="mappedToken in mappedTokens"
						:key="mappedToken"
						:token="mappedToken" />
				</div>
			</div>
		</section>

		<section>
			<h2 class="type-heading-48">Font Tokens</h2>
			<div class="swatch-container">
				<h3 class="type-heading-32">Body</h3>
				<div class="vflex-start-start">
					<div class="type-body-20">.type-body-20</div>
					<div class="type-body-16">.type-body-16</div>
					<div class="type-body-14">.type-body-14</div>
					<div class="type-body-12">.type-body-12</div>
				</div>

				<h3 class="type-heading-32">Heading</h3>
				<div class="vflex-start-start gap-16">
					<div class="type-heading-48">.type-heading-48</div>
					<div class="type-heading-32">.type-heading-32</div>
					<div class="type-heading-24">.type-heading-24</div>
					<div class="type-heading-20">.type-heading-20</div>
					<div class="type-heading-16">.type-heading-16</div>
					<div class="type-heading-14">.type-heading-14</div>
					<div class="type-heading-12">.type-heading-12</div>
				</div>

				<h3 class="type-heading-32">Display</h3>
				<div class="vflex-start-start">
					<div class="type-display-64">.type-display-64</div>
				</div>
			</div>
		</section>

		<section>
			<Button>
				<IconBase>
					<IconNotebookPen />
				</IconBase>
				Hallo
			</Button>

			<Button
				variant="solid-bright"
				size="lg">
				<IconBase>
					<IconNotebookPen />
				</IconBase>
				Hallo
			</Button>

			<Button
				variant="ghost"
				size="md">
				<IconBase>
					<IconNotebookPen />
				</IconBase>
				Hallo
			</Button>

			<Button
				variant="solid-brand"
				size="sm">
				<IconBase>
					<IconNotebookPen />
				</IconBase>
				Hallo
			</Button>
		</section>
	</div>
</template>

<style scoped>
.design-system-page {
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.swatch-container {
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.swatches-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	align-items: center;
}
</style>
