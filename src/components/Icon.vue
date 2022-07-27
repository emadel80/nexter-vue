<script setup>
import { computed } from "vue"

const props = defineProps({
  name: String
})

const icon = computed(() => {
  const sprite = 'src/assets/img/sprite.svg'
  
  return `${sprite}#icon-${props.name}`
})
</script>

<template>
  <svg class="icon">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  fill: var(--color-primary);
  width: 2rem;
  height: 2rem;
}
</style>