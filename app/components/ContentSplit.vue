<script setup lang="ts">
interface Props {
	heading: string;
	paragraph?: string;
	customParagraph?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	heading: 'Hier wird die Überschrift definiert',
	paragraph:
		'Hier wird der Inhalt des Paragraphen definiert. Er kann entweder als String übergeben oder als Slot genutzt werden.',
	customParagraph: false,
});
</script>

<template>
	<div class="content-split">
		<h3 class="type-heading-32">{{ props.heading }}</h3>
		<div v-if="customParagraph">
			<slot></slot>
		</div>
		<p
			class="type-body-20"
			v-else>
			{{ props.paragraph }}
		</p>
	</div>
</template>

<style scoped>
.content-split {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-row-gap: 1rem;
	grid-column-gap: 1rem;
	color: var(--text-heading);
}

.content-split h3 {
	position: sticky;
	top: 2rem;
	height: fit-content;
}
</style>
