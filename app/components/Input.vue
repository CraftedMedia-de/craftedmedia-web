<script setup lang="ts">
import { computed, useId } from 'vue';

type InputTheme = 'bright' | 'dark';
type InputStatus = 'default' | 'success' | 'warning' | 'error';
type InputMode =
	| 'none'
	| 'text'
	| 'decimal'
	| 'numeric'
	| 'tel'
	| 'search'
	| 'email'
	| 'url';

const props = withDefaults(
	defineProps<{
		modelValue?: string;
		id?: string;
		label?: string;
		hint?: string;
		type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search';
		placeholder?: string;
		theme?: InputTheme;
		status?: InputStatus;
		disabled?: boolean;
		required?: boolean;
		autocomplete?: string;
		inputmode?: InputMode;
	}>(),
	{
		modelValue: '',
		type: 'text',
		theme: 'bright',
		status: 'default',
		disabled: false,
		required: false,
		autocomplete: 'off',
	}
);

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

const fallbackId = useId();
const inputId = computed(() => props.id ?? `input-${fallbackId}`);
const hintId = computed(() => `${inputId.value}-hint`);
const hasError = computed(() => props.status === 'error');

function onInput(event: Event) {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
}

const resolvedInputmode = computed<InputMode | undefined>(() => {
	if (props.inputmode) return props.inputmode;

	// Automatisch sinnvolle Tastatur je nach Type
	if (props.type === 'tel') return 'tel';
	if (props.type === 'email') return 'email';
	if (props.type === 'url') return 'url';
	if (props.type === 'search') return 'search';

	return undefined;
});
</script>

<template>
	<div
		class="input"
		:class="[
			`input--${theme}`,
			`input--${status}`,
			{ 'is-disabled': disabled },
		]">
		<label
			class="input__label"
			v-if="label"
			:for="inputId">
			{{ label }}
		</label>

		<input
			class="input__field"
			:id="inputId"
			:type="type"
			:value="modelValue"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			:autocomplete="autocomplete"
			:aria-invalid="hasError ? 'true' : 'false'"
			:aria-describedby="hint ? hintId : undefined"
			@input="onInput"
			:inputmode="resolvedInputmode" />

		<p
			class="input__hint"
			v-if="hint"
			:id="hintId">
			{{ hint }}
		</p>
	</div>
</template>

<style scoped>
.input {
	display: grid;
	gap: 0.5rem;
}

.input__field {
	width: 100%;
	padding-inline: 1rem;
	padding-block: 0.75rem;
	border-radius: 0.75rem;
	border: 1px solid var(--input-border);
	background: var(--input-bg);
	color: var(--input-text);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease,
		background-color 0.2s ease;
}

.input__field::placeholder {
	color: var(--input-placeholder);
}

/* focus = echter Interaktionszustand */
.input__field:focus-visible {
	outline: none;
	border-color: var(--input-focus-border);
	box-shadow: 0 0 0 3px var(--input-focus-ring);
}

.input__label {
	color: var(--input-label);
}

.input__hint {
	color: var(--input-hint);
	font-size: 0.875rem;
}

/* Theme mappings */
.input--bright {
	--input-bg: var(--input-bright-bg);
	--input-border: var(--input-bright-border);
	--input-text: var(--input-bright-text);
	--input-placeholder: var(--input-bright-placeholder);
	--input-label: var(--input-bright-label);
	--input-hint: var(--input-bright-hint);
	--input-focus-border: var(--input-bright-focus-border);
	--input-focus-ring: var(--input-bright-focus-ring);
}

.input--dark {
	--input-bg: var(--input-dark-bg);
	--input-border: var(--input-dark-border);
	--input-text: var(--input-dark-text);
	--input-placeholder: var(--input-dark-placeholder);
	--input-label: var(--input-dark-label);
	--input-hint: var(--input-dark-hint);
	--input-focus-border: var(--input-dark-focus-border);
	--input-focus-ring: var(--input-dark-focus-ring);
}

/* Status overrides */
.input--success {
	--input-border: var(--input-success-border);
	--input-hint: var(--input-success-text);
}

.input--warning {
	--input-border: var(--input-warning-border);
	--input-hint: var(--input-warning-text);
}

.input--error {
	--input-border: var(--input-error-border);
	--input-hint: var(--input-error-text);
}

.is-disabled .input__field {
	opacity: 0.6;
	cursor: not-allowed;
}
</style>
