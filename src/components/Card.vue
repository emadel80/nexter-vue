<script setup>
import { computed } from "vue"
import CardIcon from "@/components/Icon.vue"
import CardButton from "@/components/Button.vue"

const props = defineProps({
  content: Object,
  icons: Object,
  btn: String
})

const { 
  content, 
  content: { details: detailsObj }, 
  icons: iconsObj, 
  btn 
} = props

const iconsWithData = computed(() => {
  const details = Object.values(detailsObj)
  const icons = Object.values(iconsObj)

  return icons.map((icon, index) => [icon, details[index]])
})

const getClass = computed(() => {
  const detailsKeys = Object.keys(detailsObj)

  return detailsKeys.map(key => `home__${key}`)
})

const isKeyEquals = (key, index) => {
  const detailsKeys = Object.keys(detailsObj)

  return detailsKeys[index] === key
}

</script>

<template>
  <article class="home">
    <img 
      :src="$assets(`img/${content.image}`)" 
      :alt="`House ${content.id}`"
      class="home__img">
    <CardIcon 
      name="heart-full" 
      class="home__like" />
    <h5 class="home__name">{{ content.name }}</h5>
    <div
      v-for="([icon, data], index) in iconsWithData"
      :key="index"
      :class="getClass[index]">
      
      <CardIcon :name="icon" class="mr-sm" />
      <p class="home__text">
        {{ data }}
        <span v-if="isKeyEquals('area', index)">
          m<sup>2</sup>
        </span>
        <span v-if="isKeyEquals('rooms', index)">
          rooms
        </span>
      </p>
    </div>
    <CardButton class="home__btn">
      Contact realtor
    </CardButton>
  </article>
</template>

<style lang="scss" scoped>
.home {
	background-color: var(--color-grey-light-1);	

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3.5rem;

  &__img,
  &__name,
  &__btn {
    grid-column: 1 / -1;
  }

  &__img {
    width: 100%;
    grid-row: 1 / 2;
    z-index: 1;
  }

  &__name {
    width: 80%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    justify-self: center;
    align-self: end;
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    padding: 1.25rem;
    background-color: var(--color-secondary);
    color: var(--color-grey-light-1);
    transform: translateY(50%);
    z-index: 3; 
  }

  &__like {
    grid-row: 1 / 2;
    grid-column: 2 / -1;
    justify-self: end;
    margin: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    z-index: 2;
  }

  &__location,
  &__rooms {
    margin-top: 2.5rem;
  }

  &__location,
  &__rooms,
  &__area,
  &__price {
    font-size: 1.5rem;
    margin-left: 2rem;

    display: flex;
    align-items: center;
  }
}
</style>