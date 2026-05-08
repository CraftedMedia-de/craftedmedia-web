<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { useNetlifyForm } from '~/composables/useNetlifyForm'

const steps = ['contact', 'budgetAndTime', 'scope'] as const;
type StepKey = (typeof steps)[number];

const currentStepIndex = ref(0);
const currentStep = computed(
	() => steps[currentStepIndex.value] as StepKey
);

const isFirstStep = computed(() => currentStepIndex.value === 0);
const isLastStep = computed(
	() => currentStepIndex.value === steps.length - 1
);

const progressPercent = computed(() => {
	return ((currentStepIndex.value + 1) / steps.length) * 100;
});

const form = reactive({
	// Step 1
	name: '',
	email: '',
	phone: '',

	// Step 2
	budget: '',
	deadline: '',

	// Step 3
	services: [] as string[],
	message: '',
});

const { submit } = useNetlifyForm({ formName: 'projektfragebogen' })

type FieldKey = keyof typeof form;
type InputFieldKey = Exclude<FieldKey, 'services'>;

const errors = reactive<Record<FieldKey, string>>({
	name: '',
	email: '',
	phone: '',
	deadline: '',
	budget: '',
	message: '',
	services: '',
});

const touched = reactive<Record<FieldKey, boolean>>({
	name: false,
	email: false,
	phone: false,
	deadline: false,
	budget: false,
	message: false,
	services: false,
});

const stepFields: Record<StepKey, FieldKey[]> = {
	contact: ['name', 'email', 'phone'],
	budgetAndTime: ['budget', 'deadline'],
	scope: ['services', 'message'],
};

function clearErrors() {
	(Object.keys(errors) as FieldKey[]).forEach((key) => {
		errors[key] = '';
	});
}

function markCurrentStepTouched() {
	stepFields[currentStep.value].forEach((field) => {
		touched[field] = true;
	});
}

function getInputStatus(field: InputFieldKey) {
	if (errors[field]) return 'error';
	if (touched[field] && form[field].trim()) return 'success';
	return 'default';
}

function getRadioStatus(field: FieldKey) {
	return errors[field] ? 'error' : 'default';
}

function getCheckboxStatus(field: FieldKey) {
	return errors[field] ? 'error' : 'default';
}

function getInputHint(field: FieldKey) {
	return errors[field] || '';
}

function validateCurrentStep() {
	clearErrors();
	markCurrentStepTouched();

	if (currentStep.value === 'contact') {
		if (!form.name.trim()) errors.name = 'Bitte Namen eingeben.';
		if (!form.email.trim()) errors.email = 'Bitte E-Mail eingeben.';
		if (!form.phone.trim()) {
			errors.phone = 'Bitte Telefonnummer eingeben.';
		}
	}

	if (currentStep.value === 'budgetAndTime') {
		if (!form.budget.trim()) {
			errors.budget = 'Bitte ein Budget auswählen.';
		}
		if (!form.deadline.trim()) {
			errors.deadline = 'Bitte eine Deadline auswählen.';
		}
	}

	if (currentStep.value === 'scope') {
		if (!form.services.length) {
			errors.services = 'Bitte ein oder mehrere Services auswählen.';
		}
		if (!form.message.trim()) {
			errors.message =
				'Bitte erzähle uns etwas mehr zu deinem Projekt.';
		}
	}

	return stepFields[currentStep.value].every((field) => !errors[field]);
}

function nextStep() {
	if (!validateCurrentStep()) return;
	if (!isLastStep.value) currentStepIndex.value += 1;
}

function prevStep() {
	if (!isFirstStep.value) currentStepIndex.value -= 1;
}

async function submitForm() {
	if (!validateCurrentStep()) return;

	// Use the composable's submit method (handles everything: urlencoding, Netlify POST, etc.)
	await submit(form);
}

const budgetOptions = [
	{ value: '1k-1.5k', label: '€1k - €1.5k' },
	{ value: '1.5k-2.5k', label: '€1.5k - €2.5k' },
	{ value: '2.5k-5k', label: '€2.5k - €5k' },
	{ value: '5k-10k', label: '€5k - €10k' },
	{ value: '10k-20k', label: '€10k - €20k' },
	{ value: '20k-30k', label: '€20k - €30k+' },
	{ value: 'other', label: 'Anderes Budget' },
];

const deadlineOptions = [
	{ value: 'asap', label: 'Dringend / ASAP' },
	{ value: '4weeks+', label: '> 4 Wochen' },
	{ value: '6-8weeks', label: '6-8 Wochen' },
	{ value: '2-3months', label: '2-3 Monate' },
	{ value: '3-6months', label: '3-6 Monate' },
	{ value: 'noDeadline', label: 'Keine deadline' },
];

const servicesOptions = [
	{ value: 'webdesign', label: 'Webdesign' },
	{ value: 'webdevelopment', label: 'Webentwicklung' },
	{ value: 'fotografie', label: 'Fotografie' },
];
</script>

<template>
	<section class="questionar-body full-width">
		<!-- Netlify form wrapper: Netlify detects static <form> with `netlify` attribute at build time -->
		<form
			name="projektfragebogen"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			@submit.prevent="submitForm"
			class="questionar-form">
			<!-- Hidden inputs for Netlify form detection/capture -->
			<input type="hidden" name="form-name" value="projektfragebogen" />
			<input type="hidden" name="bot-field" value="" />
			<input type="hidden" name="name" :value="form.name" />
			<input type="hidden" name="email" :value="form.email" />
			<input type="hidden" name="phone" :value="form.phone" />
			<input type="hidden" name="budget" :value="form.budget" />
			<input type="hidden" name="deadline" :value="form.deadline" />
			<input type="hidden" name="services" :value="form.services.join(', ')" />
			<input type="hidden" name="message" :value="form.message" />
		<div class="progress-bar-track">
			<div
				class="progress-bar"
				:style="{ width: `${progressPercent}%` }"></div>
		</div>
		<div class="content">
			<Transition
				name="fade"
				mode="out-in">
				<div :key="currentStep">
					<template v-if="currentStep === 'contact'">
						<h1
							class="type-heading-48 text-highlight on-dark no-dot margin-bottom-64">
							Interessiert mit uns dein Projekt zu
							besprechen?
						</h1>

						<Input
							class="margin-bottom-32"
							v-model="form.name"
							label="Name"
							theme="dark"
							required
							placeholder="Wie ist dein Name?"
							:hint="getInputHint('name')"
							:status="getInputStatus('name')" />

						<Input
							class="margin-bottom-32"
							v-model="form.email"
							label="Email"
							type="email"
							theme="dark"
							required
							placeholder="Wie lautet deine Email?"
							:hint="getInputHint('email')"
							:status="getInputStatus('email')" />

						<Input
							v-model="form.phone"
							label="Telefonnummer"
							type="tel"
							theme="dark"
							required
							placeholder="Wie lautet deine Telefonnummer?"
							:hint="getInputHint('phone')"
							:status="getInputStatus('phone')" />
					</template>

					<template v-else-if="currentStep === 'budgetAndTime'">
						<h2
							class="type-heading-48 text-highlight on-dark no-dot margin-bottom-64">
							Budget und Zeitplan
						</h2>

						<div class="margin-bottom-32">
							<RadioGroup
								v-model="form.budget"
								label="Was für ein Budget hast du zur Verfügung?"
								variant="button"
								orientation="horizontal"
								theme="dark"
								:options="budgetOptions"
								:hint="getInputHint('budget')"
								:status="getRadioStatus('budget')" />
						</div>

						<div>
							<RadioGroup
								v-model="form.deadline"
								label="Bis wann sollte das Projekt fertig sein?"
								variant="button"
								orientation="horizontal"
								theme="dark"
								:options="deadlineOptions"
								:hint="getInputHint('deadline')"
								:status="getRadioStatus('deadline')" />
						</div>
					</template>

					<template v-else>
						<h2
							class="type-heading-48 text-highlight on-dark no-dot margin-bottom-64">
							Projektumfang
						</h2>
						<Checkbox
							class="margin-bottom-32"
							v-model="form.services"
							label="Wähle einen oder mehrere Services aus, die du benötigst."
							:options="servicesOptions"
							variant="button"
							theme="dark"
							orientation="horizontal"
							:hint="getInputHint('services')"
							:status="getCheckboxStatus('services')" />

						<Input
							v-model="form.message"
							label="Nachricht"
							type="text"
							theme="dark"
							required
							placeholder="Erzähle uns mehr über dein Projekt"
							:hint="getInputHint('message')"
							:status="getInputStatus('message')" />
					</template>
				</div>
			</Transition>
			<div>
				<Button
					v-if="!isFirstStep"
					variant="ghost-on-dark"
					@click="prevStep">
					Zurück
				</Button>
				<Button
					v-if="!isLastStep"
					variant="solid-bright"
					@click="nextStep">
					Nächster Schritt
				</Button>
				<Button
					v-else
					variant="solid-brand"
					type="submit"
				>
					Absenden
				</Button>
			</div>
		</div>
		</form>
	</section>
</template>

<style scoped>
.questionar-body {
	min-height: 100dvh;
	background:
		radial-gradient(
			100% 100% at 50% 0%,
			var(--brand-500-transparent-30) 0%,
			transparent 100%
		),
		var(--section-dark-background);
}

.progress-bar-track {
	background-color: var(--neutral-750);
	border-radius: 2rem;
	height: 0.25rem;
}

.progress-bar {
	width: 500px;
	height: 100%;
	background-color: var(--brand-500);
	border-radius: inherit;
}

.content {
	display: flex;
	flex-direction: column;
	gap: 4rem;
}
</style>
