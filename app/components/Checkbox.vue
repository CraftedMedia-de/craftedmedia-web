<script setup lang="ts">
import {
	CheckboxGroupRoot,
	CheckboxIndicator,
	CheckboxRoot,
} from 'reka-ui';
import { computed, useId } from 'vue';

type CheckboxTheme = 'bright' | 'dark';
type CheckboxStatus = 'default' | 'success' | 'warning' | 'error';
type CheckboxVariant = 'checkbox' | 'button';

interface CheckboxOption {
	value: string;
	label: string;
	disabled?: boolean;
}

const props = withDefaults(
	defineProps<{
		modelValue?: string[];
		id?: string;
		label?: string;
		hint?: string;
		theme?: CheckboxTheme;
		status?: CheckboxStatus;
		variant?: CheckboxVariant;
		options: CheckboxOption[];
		disabled?: boolean;
		required?: boolean;
		orientation?: 'horizontal' | 'vertical';
	}>(),
	{
		modelValue: () => [],
		theme: 'bright',
		status: 'default',
		variant: 'checkbox',
		disabled: false,
		required: false,
		orientation: 'vertical',
	}
);

const emit = defineEmits<{
	(e: 'update:modelValue', value: string[]): void;
}>();

const fallbackId = useId();
const inputId = computed(() => props.id ?? `checkbox-${fallbackId}`);
const hintId = computed(() => `${inputId.value}-hint`);
const hasError = computed(() => props.status === 'error');

function onUpdateModelValue(value: string[] | undefined) {
	emit('update:modelValue', value ?? []);
}
</script>

<template>
	<div
		class="checkbox-group"
		:class="[
			`checkbox-group--${theme}`,
			`checkbox-group--${status}`,
			`checkbox-group--${orientation}`,
			`checkbox-group--${variant}`,
			{ 'is-disabled': disabled },
		]">
		<label
			class="checkbox-group__label"
			v-if="label"
			:id="inputId">
			{{ label }}
		</label>

		<CheckboxGroupRoot
			class="checkbox-group__items"
			:model-value="modelValue"
			@update:model-value="onUpdateModelValue"
			:disabled="disabled"
			:required="required"
			:aria-labelledby="label ? inputId : undefined"
			:aria-describedby="hint ? hintId : undefined"
			:aria-invalid="hasError ? 'true' : 'false'">
			<template v-if="variant === 'checkbox'">
				<div
					class="checkbox-group__item-wrapper"
					v-for="option in options"
					:key="option.value">
					<CheckboxRoot
						class="checkbox-group__item"
						:value="option.value"
						:disabled="option.disabled || disabled"
						:id="`${inputId}-${option.value}`">
						<CheckboxIndicator
							class="checkbox-group__indicator">
							<span class="checkbox-group__indicator-mark" />
						</CheckboxIndicator>
					</CheckboxRoot>

					<label
						class="checkbox-group__option-label"
						:for="`${inputId}-${option.value}`">
						{{ option.label }}
					</label>
				</div>
			</template>

			<template v-else>
				<CheckboxRoot
					class="checkbox-group__button-item"
					v-for="option in options"
					:key="option.value"
					:value="option.value"
					:disabled="option.disabled || disabled"
					:id="`${inputId}-${option.value}`">
					<span class="checkbox-group__button-label">
						{{ option.label }}
					</span>
				</CheckboxRoot>
			</template>
		</CheckboxGroupRoot>

		<p
			class="checkbox-group__hint"
			v-if="hint"
			:id="hintId">
			{{ hint }}
		</p>
	</div>
</template>

<style scoped>
.checkbox-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.checkbox-group__label {
	color: var(--checkbox-label);
	font-weight: 500;
	font-size: 1rem;
}

.checkbox-group__items {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}

.checkbox-group--vertical .checkbox-group__items {
	flex-direction: column;
	gap: 0.75rem;
}

.checkbox-group--horizontal .checkbox-group__items {
	flex-direction: row;
	gap: 1rem;
}

.checkbox-group--button .checkbox-group__items {
	gap: 0.75rem;
}

/* ============= CHECKBOX VARIANT ============= */

.checkbox-group__item-wrapper {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.checkbox-group__item {
	width: 1.25rem;
	height: 1.25rem;
	min-width: 1.25rem;
	border: 2px solid var(--checkbox-border);
	border-radius: 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--checkbox-bg);
	cursor: pointer;
	transition:
		border-color 0.2s ease,
		background-color 0.2s ease,
		box-shadow 0.2s ease;
}

.checkbox-group__item:focus-visible {
	outline: none;
	border-color: var(--checkbox-focus-border);
	box-shadow: 0 0 0 3px var(--checkbox-focus-ring);
}

.checkbox-group__item[data-state='checked'] {
	border-color: var(--checkbox-status-checked-border);
	background: var(--checkbox-status-checked-border);
}

.checkbox-group__indicator {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	color: var(--checkbox-status-checked-text);
}

.checkbox-group__indicator-mark {
	width: 0.3rem;
	height: 0.55rem;
	border-right: 2px solid currentColor;
	border-bottom: 2px solid currentColor;
	transform: rotate(45deg);
	margin-top: -0.06rem;
}

.checkbox-group__option-label {
	color: var(--checkbox-text);
	cursor: pointer;
	user-select: none;
}

/* ============= BUTTON VARIANT ============= */

.checkbox-group__button-item {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.625rem 1.25rem;
	border: 2px solid var(--checkbox-border);
	border-radius: 0.75rem;
	background: transparent;
	color: var(--checkbox-text);
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

.checkbox-group__button-label {
	color: inherit;
	user-select: none;
}

.checkbox-group__button-item:hover {
	border-color: var(--checkbox-border);
}

.checkbox-group--button
	.checkbox-group__button-item[data-state='checked'] {
	border-color: var(--checkbox-status-checked-border);
	background: var(--checkbox-status-checked-border);
	color: var(--checkbox-status-checked-text);
}

.checkbox-group--button .checkbox-group__button-item:focus-visible {
	outline: none;
	border-color: var(--checkbox-focus-border);
	box-shadow: 0 0 0 3px var(--checkbox-focus-ring);
}

.checkbox-group--button .checkbox-group__button-item[data-disabled],
.is-disabled .checkbox-group__button-item,
.is-disabled .checkbox-group__item,
.is-disabled .checkbox-group__option-label {
	opacity: 0.6;
	cursor: not-allowed;
}

.checkbox-group__hint {
	color: var(--checkbox-hint);
	font-size: 0.875rem;
	margin-top: 0.25rem;
}

/* ============= THEME MAPPINGS ============= */

.checkbox-group--bright {
	--checkbox-bg: var(--radio-bright-bg, var(--neutral-0));
	--checkbox-border: var(--radio-bright-border, var(--neutral-300));
	--checkbox-text: var(--radio-bright-text, var(--neutral-900));
	--checkbox-label: var(--radio-bright-label, var(--neutral-900));
	--checkbox-hint: var(--radio-bright-hint, var(--neutral-600));
	--checkbox-focus-border: var(
		--radio-bright-focus-border,
		var(--brand-500)
	);
	--checkbox-focus-ring: var(
		--radio-bright-focus-ring,
		rgba(59, 130, 246, 0.1)
	);
	--checkbox-checked-border: var(
		--radio-bright-checked-border,
		var(--brand-500)
	);
	--checkbox-checked-text: var(--neutral-0);
	--checkbox-status-checked-border: var(--checkbox-checked-border);
	--checkbox-status-checked-text: var(--checkbox-checked-text);
}

.checkbox-group--dark {
	--checkbox-bg: var(--radio-dark-bg, var(--neutral-850));
	--checkbox-border: var(--radio-dark-border, var(--neutral-0));
	--checkbox-text: var(--radio-dark-text, var(--neutral-0));
	--checkbox-label: var(--radio-dark-label, var(--neutral-0));
	--checkbox-hint: var(--radio-dark-hint, var(--neutral-300));
	--checkbox-focus-border: var(
		--radio-dark-focus-border,
		var(--brand-500)
	);
	--checkbox-focus-ring: var(
		--radio-dark-focus-ring,
		rgba(96, 165, 250, 0.2)
	);
	--checkbox-checked-border: var(--neutral-0);
	--checkbox-checked-text: var(--neutral-900);
	--checkbox-status-checked-border: var(--checkbox-checked-border);
	--checkbox-status-checked-text: var(--checkbox-checked-text);
}

/* Status overrides */
.checkbox-group--success {
	--checkbox-hint: var(--radio-success-text, #16a34a);
}

.checkbox-group--warning {
	--checkbox-hint: var(--radio-warning-text, #d97706);
}

.checkbox-group--error {
	--checkbox-hint: var(--radio-error-text, #dc2626);
}
</style>
