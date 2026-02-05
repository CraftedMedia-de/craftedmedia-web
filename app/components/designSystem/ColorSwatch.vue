<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  token?: string
}

const props = withDefaults(defineProps<Props>(), {
  token: '--brand-500'
})

// Raw-Token (z. B. "--brand-500")
const rawToken = computed(() => (props.token ?? '').trim())

// Label: entfernt führende "--" und liefert z. B. "brand-500"
// optional: .replace(/-/g, ' ') wenn Leerzeichen gewünscht sind
const label = computed<string>(() => {
  const t = rawToken.value
  if (t === '') return ''
  return t.replace(/^--/, '')
})

// Background: wandelt "--name" in "var(--name)", sonst gibt's den Wert direkt zurück
const background = computed<string>(() => {
  const t = rawToken.value
  if (t === '') return ''
  if (t.startsWith('--')) return `var(${t})`
  return t
})

</script>

<template>
  <div class="swatchWrapper">
    <div class="color" :style="{ backgroundColor: background }"></div>
    <div>{{props.token}}</div>
  </div>
</template>

<style scoped>
.color {
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
	  border: 1px solid var(--neutral-300);
}

.swatchWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  font-size: 16px;
  font-weight: bold;
}
</style>