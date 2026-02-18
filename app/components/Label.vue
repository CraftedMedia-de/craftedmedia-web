<script setup lang="ts">
const props = defineProps<{
	label: string;
}>();
</script>

<template>
	<div class="label">
		<IconBase class="text-brand icon-20">
			<slot></slot>
		</IconBase>
		<span class="text-highlight on-dark type-heading-14">
			{{ props.label }}
		</span>
	</div>
</template>

<style scoped>
.label {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background-color: var(--label-dark-background);
	padding-inline: 0.75rem;
	padding-block: 0.375rem;
	border-radius: 0.5rem;
	width: fit-content;
}
</style>
