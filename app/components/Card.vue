<script setup lang="ts">
interface Props {
	heading: string;
	paragraph: string;
	number?: string;
	variant?: 'default' | 'variant-2';
}

const props = withDefaults(defineProps<Props>(), {
	heading: 'heading',
	paragraph: 'paragraph',
	variant: 'default',
});
</script>

<template>
	<div
		class="card shadow-s"
		v-if="props.variant === 'default'">
		<div>
			<div
				class="type-heading-32 dot"
				v-if="props.number">
				{{ props.number }}
			</div>
			<h3 class="type-heading-32 no-dot">{{ props.heading }}</h3>
		</div>

		<div class="vflex-start-start gap-16">
			<IconBase class="icon-32">
				<slot />
			</IconBase>
			<p class="type-body-16">{{ props.paragraph }}</p>
		</div>
	</div>

	<div
		class="card variant-2 shadow-s"
		v-else-if="props.variant === 'variant-2'">
		<IconBase class="icon-32">
			<slot />
		</IconBase>
		<div class="vflex-start-start gap-16">
			<h3 class="type-heading-32 no-dot">{{ props.heading }}</h3>
			<p class="type-body-16">{{ props.paragraph }}</p>
		</div>

		<div>Button</div>
	</div>
</template>

<style scoped>
.card {
	padding: 2rem;
	border-radius: 1.5rem;
	background-color: var(--card-background);
	display: grid;
	grid-template-rows: subgrid;
	justify-items: start;
	align-items: start;
	grid-row: span 2;
	gap: 12rem;
}

.variant-2 {
	grid-row: span 3;
	gap: 4rem;
}
</style>
