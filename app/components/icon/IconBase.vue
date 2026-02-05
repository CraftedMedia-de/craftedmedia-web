<script setup lang="ts">
type Props = {
	/**
	 * Accessible label:
	 * - if provided: icon is announced by screen readers
	 * - if omitted: icon is decorative (aria-hidden)
	 */
	label?: string;

	/**
	 * Optional title element inside SVG (useful for some SRs).
	 * If label exists, we also render <title>.
	 */
	title?: string;

	/**
	 * Tag for wrapper (span is default, but you can use i/div)
	 */
	as?: "span" | "i" | "div";
};

const props = withDefaults(defineProps<Props>(), {
	as: "span",
});

const isDecorative = computed(() => !props.label);
</script>

<template>
	<component
		:is="as"
		class="icon"
		:aria-hidden="isDecorative ? 'true' : undefined"
		:aria-label="!isDecorative ? label : undefined"
		role="img"
	>
		<!-- Slot expects an SVG component -->
		<slot />
	</component>
</template>
