<script setup lang="ts">
import {
	RadioGroupIndicator,
	RadioGroupItem,
	RadioGroupRoot,
} from 'reka-ui';
import { computed, useId } from 'vue';

type RadioGroupTheme = 'bright' | 'dark';
type RadioGroupStatus = 'default' | 'success' | 'warning' | 'error';
type RadioGroupVariant = 'radio' | 'button';

interface RadioOption {
	value: string;
	label: string;
	disabled?: boolean;
}

const props = withDefaults(
	defineProps<{
		modelValue?: string;
		id?: string;
		label?: string;
		hint?: string;
		theme?: RadioGroupTheme;
		status?: RadioGroupStatus;
		variant?: RadioGroupVariant;
		options: RadioOption[];
		disabled?: boolean;
		required?: boolean;
		orientation?: 'horizontal' | 'vertical';
	}>(),
	{
		modelValue: '',
		theme: 'bright',
		status: 'default',
		variant: 'radio',
		disabled: false,
		required: false,
		orientation: 'vertical',
	}
);

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const fallbackId = useId();
const inputId = computed(() => props.id ?? `input-${fallbackId}`);
const hintId = computed(() => `${inputId.value}-hint`);
const hasError = computed(() => props.status === 'error');
</script>

<template>
	<div
		class="radio-group"
		:class="[
			`radio-group--${theme}`,
			`radio-group--${status}`,
			`radio-group--${orientation}`,
			`radio-group--${variant}`,
			{ 'is-disabled': disabled },
		]">
		<label
			class="radio-group__label"
			v-if="label"
			:id="inputId">
			{{ label }}
		</label>

		<RadioGroupRoot
			class="radio-group__items"
			:model-value="modelValue"
			@update:model-value="
				(value) => emit('update:modelValue', value)
			"
			:disabled="disabled"
			:required="required"
			:aria-labelledby="label ? inputId : undefined"
			:aria-describedby="hint ? hintId : undefined"
			:aria-invalid="hasError ? 'true' : 'false'">
			<template v-if="variant === 'radio'">
				<div
					class="radio-group__item-wrapper"
					v-for="option in options"
					:key="option.value">
					<RadioGroupItem
						class="radio-group__item"
						:value="option.value"
						:disabled="option.disabled || disabled"
						:id="`${inputId}-${option.value}`">
						<RadioGroupIndicator
							class="radio-group__indicator" />
					</RadioGroupItem>
					<label
						class="radio-group__option-label"
						:for="`${inputId}-${option.value}`">
						{{ option.label }}
					</label>
				</div>
			</template>

			<template v-else-if="variant === 'button'">
				<RadioGroupItem
					class="radio-group__button-item"
					v-for="option in options"
					:key="option.value"
					:value="option.value"
					:disabled="option.disabled || disabled"
					:id="`${inputId}-${option.value}`">
					<span class="radio-group__button-label">
						{{ option.label }}
					</span>
				</RadioGroupItem>
			</template>
		</RadioGroupRoot>

		<p
			class="radio-group__hint"
			v-if="hint"
			:id="hintId">
			{{ hint }}
		</p>
	</div>
</template>

<style scoped>
.radio-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.radio-group__label {
	color: var(--radio-label);
	font-weight: 500;
	font-size: 1rem;
}

.radio-group__items {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}

.radio-group--vertical .radio-group__items {
	flex-direction: column;
	gap: 0.75rem;
}

.radio-group--horizontal .radio-group__items {
	flex-direction: row;
	gap: 1rem;
}

.radio-group--button .radio-group__items {
	gap: 0.75rem;
}

/* ============= RADIO VARIANT ============= */

.radio-group__item-wrapper {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.radio-group__item {
	width: 1.25rem;
	height: 1.25rem;
	min-width: 1.25rem;
	border: 2px solid var(--radio-border);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--radio-bg);
	cursor: pointer;
	transition:
		border-color 0.2s ease,
		background-color 0.2s ease,
		box-shadow 0.2s ease;
}

.radio-group__item:focus-visible {
	outline: none;
	border-color: var(--radio-focus-border);
	box-shadow: 0 0 0 3px var(--radio-focus-ring);
}

.radio-group__item[data-state='checked'] {
	border-color: var(--radio-status-checked-border);
}

.radio-group__indicator {
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background: var(--radio-status-checked-color);
}

.radio-group__option-label {
	color: var(--radio-text);
	cursor: pointer;
	user-select: none;
}

.radio-group__hint {
	color: var(--radio-hint);
	font-size: 0.875rem;
	margin-top: 0.25rem;
}

/* ============= BUTTON VARIANT ============= */

.radio-group__button-item {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.625rem 1.25rem;
	border: 2px solid var(--radio-border);
	border-radius: 0.75rem;
	background: transparent;
	color: var(--radio-text);
	cursor: pointer;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.1;
	white-space: nowrap;
	transition:
		border-color 0.2s ease,
		background-color 0.2s ease,
		color 0.2s ease,
		box-shadow 0.2s ease;
}

.radio-group__button-label {
	color: inherit;
	user-select: none;
}


.radio-group__button-item:hover {
	border-color: var(--radio-border);
}


.radio-group--button .radio-group__button-item[data-state='checked'] {
	border-color: var(--radio-status-checked-border);
	background: var(--radio-status-checked-border);
	color: var(--radio-status-checked-text);
}


.radio-group--button .radio-group__button-item:focus-visible {
	outline: none;
	border-color: var(--radio-focus-border);
	box-shadow: 0 0 0 3px var(--radio-focus-ring);
}


.radio-group--button .radio-group__button-item[data-disabled],
.is-disabled .radio-group__button-item {
	opacity: 0.6;
	cursor: not-allowed;
}

/* ============= THEME MAPPINGS ============= */

.radio-group--bright {
	--radio-bg: var(--radio-bright-bg, var(--neutral-0));
	--radio-border: var(--radio-bright-border, var(--neutral-300));
	--radio-text: var(--radio-bright-text, var(--neutral-900));
	--radio-label: var(--radio-bright-label, var(--neutral-900));
	--radio-hint: var(--radio-bright-hint, var(--neutral-600));
	--radio-focus-border: var(--radio-bright-focus-border, var(--brand-500));
	--radio-focus-ring: var(--radio-bright-focus-ring, rgba(59, 130, 246, 0.1));
	--radio-checked-border: var(--radio-bright-checked-border, var(--brand-500));
	--radio-checked-color: var(--radio-bright-checked-color, var(--brand-500));
	--radio-checked-text: var(--neutral-0);
	--radio-status-checked-border: var(--radio-checked-border);
	--radio-status-checked-color: var(--radio-checked-color);
	--radio-status-checked-text: var(--radio-checked-text);
}

.radio-group--dark {
	--radio-bg: var(--radio-dark-bg, var(--neutral-850));
	--radio-border: var(--radio-dark-border, var(--neutral-0));
	--radio-text: var(--radio-dark-text, var(--neutral-0));
	--radio-label: var(--radio-dark-label, var(--neutral-0));
	--radio-hint: var(--radio-dark-hint, var(--neutral-300));
	--radio-focus-border: var(--radio-dark-focus-border, var(--brand-500));
	--radio-focus-ring: var(--radio-dark-focus-ring, rgba(96, 165, 250, 0.2));
	--radio-checked-border: var(--neutral-0);
	--radio-checked-color: var(--neutral-900);
	--radio-checked-text: var(--neutral-900);
	--radio-status-checked-border: var(--radio-checked-border);
	--radio-status-checked-color: var(--radio-checked-color);
	--radio-status-checked-text: var(--radio-checked-text);
}

/* Status overrides */
.radio-group--success {
	--radio-hint: var(--radio-success-text, #16a34a);
}

.radio-group--warning {
	--radio-hint: var(--radio-warning-text, #d97706);
}

.radio-group--error {
	--radio-hint: var(--radio-error-text, #dc2626);
}
</style>
