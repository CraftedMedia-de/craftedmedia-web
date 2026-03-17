<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant =
	| 'solid'
	| 'ghost'
	| 'ghost-on-dark'
	| 'outline'
	| 'solid-bright'
	| 'solid-brand';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

const props = withDefaults(
	defineProps<{
		to?: string | Record<string, unknown>;
		href?: string;
		variant?: ButtonVariant;
		size?: ButtonSize;
		type?: ButtonType;
		disabled?: boolean;
		loading?: boolean;
		block?: boolean;
		dot?: boolean;
		label?: string; // optional fallback, wenn kein Slot genutzt wird
	}>(),
	{
		variant: 'solid',
		size: 'md',
		type: 'button',
		disabled: false,
		loading: false,
		block: false,
		dot: false,
	}
);

const isNuxtLink = computed(() => !!props.to);
const isAnchor = computed(() => !props.to && !!props.href);
const isButton = computed(() => !props.to && !props.href);
const isDisabled = computed(() => props.disabled || props.loading);

const classes = computed(() => [
	'button',
	`button--${props.variant}`,
	`button--${props.size}`,
	{
		'is-loading': props.loading,
		'is-block': props.block,
		'is-disabled': isDisabled.value,
	},
]);
</script>

<template>
	<NuxtLink
		v-if="isNuxtLink"
		:to="props.to!"
		:class="classes"
		:aria-disabled="isDisabled ? 'true' : undefined"
		@click.prevent="isDisabled && $event.preventDefault()">
		<div
			class="button--dot"
			v-if="dot"></div>
		<slot>
			{{ props.label }}
		</slot>
	</NuxtLink>

	<a
		v-else-if="isAnchor"
		:href="props.href"
		:class="classes"
		:aria-disabled="isDisabled ? 'true' : undefined"
		@click.prevent="isDisabled && $event.preventDefault()">
		<div
			class="button--dot"
			v-if="dot"></div>
		<slot>
			{{ props.label }}
		</slot>
	</a>

	<button
		v-else
		:type="props.type"
		:class="classes"
		:disabled="isDisabled">
		<div
			class="button--dot"
			v-if="dot"></div>
		<slot>
			{{ props.label }}
		</slot>
	</button>
</template>

<style scoped>
.button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	border-radius: 0.75rem;
	border: 1px solid transparent;
	text-decoration: none;
	font-weight: var(--font-heading-weight);
	font-family: var(--font-heading), sans-serif;
	cursor: pointer;
	transition:
		background-color 0.2s,
		border-color 0.2s,
		opacity 0.2s;
}

/* Variants */
.button--solid {
	background: var(--button-dark-background);
	color: var(--button-dark-text);
}

/* Hover nur auf Geräten, die wirklich hover können */
@media (hover: hover) and (pointer: fine) {
	.button--solid:hover {
		background: var(--button-dark-background-hover);
	}
}

.button--solid-bright {
	background: var(--button-bright-background);
	color: var(--button-bright-text);
}

/* Hover nur auf Geräten, die wirklich hover können */
@media (hover: hover) and (pointer: fine) {
	.button--solid-bright:hover {
		background: var(--button-bright-background-hover);
	}
}

.button--solid-brand {
	background: var(--button-brand-background);
	color: var(--button-brand-text);
}

/* Hover nur auf Geräten, die wirklich hover können */
@media (hover: hover) and (pointer: fine) {
	.button--solid-brand:hover {
		background: var(--button-brand-background-hover);
	}
}

.button--ghost {
	background: var(--button-ghost-background);
	color: inherit;
}

/* Hover nur auf Geräten, die wirklich hover können */
@media (hover: hover) and (pointer: fine) {
	.button--ghost:hover {
		background: var(--button-ghost-background-hover);
		color: inherit;
	}
}

.button--ghost-on-dark {
	background: var(--button-ghost-background);
	color: inherit;
}

/* Hover nur auf Geräten, die wirklich hover können */
@media (hover: hover) and (pointer: fine) {
	.button--ghost-on-dark:hover {
		background: var(--button-ghost-background-hover-on-dark);
		color: inherit;
	}
}

.button--outline {
	background: transparent;
	border-color: var(--neutral-300);
	color: var(--text-body);
}

/* Sizes */
.button--sm {
	padding: 0.5rem 0.875rem;
	font-size: 0.875rem;
}
.button--md {
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
}
.button--lg {
	padding: 1rem 2rem;
	font-size: 1.25rem;
}

.is-block {
	width: 100%;
}
.is-disabled {
	opacity: 0.6;
	pointer-events: none;
}

.button--dot {
	aspect-ratio: 1/1;
	width: 0.5rem;
	background-color: var(--button-dot-background);
	border-radius: 0.75rem;
}
</style>
