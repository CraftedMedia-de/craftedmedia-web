<script setup lang="ts">
import {
	AccordionContent,
	AccordionHeader,
	AccordionItem,
	AccordionRoot,
	AccordionTrigger,
} from 'reka-ui';
import ArrowDown from '~/components/icon/ArrowDown.vue';

interface AccordionEntry {
	question: string;
	answer: string;
	id?: string | number;
}

interface Props {
	type: 'single' | 'multiple';
}

const props = defineProps<{
	accordionObject: AccordionEntry | AccordionEntry[];
	type: 'single' | 'multiple';
}>();

const entries = computed(() =>
	Array.isArray(props.accordionObject)
		? props.accordionObject
		: [props.accordionObject]
);
</script>

<template>
	<AccordionRoot
		class="AccordionRoot"
		:type="props.type"
		value="item-1">
		<AccordionItem
			class="AccordionItem"
			v-for="(item, index) in entries"
			:key="item.id ?? index"
			:value="`item-${index}`">
			<AccordionHeader
				class="AccordionHeader type-heading-20 no-dot">
				<AccordionTrigger class="AccordionTrigger">
					<span>{{ item.question }}</span>
					<IconBase class="icon-24 AccordionChevron">
						<ArrowDown />
					</IconBase>
				</AccordionTrigger>
			</AccordionHeader>

			<AccordionContent class="AccordionContent type-body-16">
				<p class="contentWrapper">{{ item.answer }}</p>
			</AccordionContent>
		</AccordionItem>
	</AccordionRoot>
</template>

<style scoped>
.AccordionRoot {
}

.AccordionItem {
	padding-block: 2rem;
	padding-right: 1rem;
	border-bottom: 0.063rem solid var(--Accordion-border);
}

.AccordionHeader {
}

.AccordionTrigger {
	background-color: transparent;
	color: var(--text-heading);
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 1rem;
}

.AccordionTrigger[data-state='open'] > .AccordionChevron {
	transform: rotate(180deg);
}

.AccordionChevron {
	transition: transform 300ms;
}

.AccordionContent {
	overflow: hidden;
}
.AccordionContent[data-state='open'] {
	animation: slideDown 200ms ease-out;
}
.AccordionContent[data-state='closed'] {
	animation: slideUp 200ms ease-out;
}

@keyframes slideDown {
	from {
		height: 0;
	}
	to {
		height: var(--reka-accordion-content-height);
	}
}

@keyframes slideUp {
	from {
		height: var(--reka-accordion-content-height);
	}
	to {
		height: 0;
	}
}

.contentWrapper {
	padding-top: 2rem;
}
</style>
