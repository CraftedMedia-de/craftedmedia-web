<script setup lang="ts">
interface Props {
	paragraph: string

}

const props = withDefaults(defineProps<Props>(), {
	paragraph: 'Inhalt fehlt',

})
</script>

<template>
	<div class="vflex-start-start gap-16">
		<slot />
		<p class="type-body-14">{{ props.paragraph }}</p>
	</div>
</template>

<style scoped>

</style>