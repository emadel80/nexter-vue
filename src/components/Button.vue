<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  background-color: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: var(--font-display);
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all .2s;
    
  &:hover {
    background-color: var(--color-primary-dark);
  }
}
</style>