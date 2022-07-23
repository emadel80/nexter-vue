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
  <svg>
    <use :xlink:href="icon"></use>
  </svg>
</template>