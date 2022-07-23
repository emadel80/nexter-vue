<script setup>
import Sidebar 	from '@/components/Sidebar.vue'
import Header 	from '@/components/Header.vue'
import Realtors from '@/components/Realtors.vue'
import Features from '@/components/Features.vue'
import Story 		from '@/components/Story.vue'
import Homes 		from '@/components/Homes.vue'
import Gallery 	from '@/components/Gallery.vue'
import Footer 	from '@/components/Footer.vue'
</script>

<template>
  <main class="container">
		<Sidebar />
		<Header />
		<Realtors />
		<Features />
		<Story />
		<Homes />
		<Gallery />
		<Footer />
  </main>
</template>

<style lang="scss">
.container {
	display: grid;

	grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
	grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] 
												 minmax(6rem, 1fr) [center-start] 
												 repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) 
												 [center-end] minmax(6rem, 1fr) [full-end];

	& > * {
		padding: 4rem;
		font-size: 3rem;
	}
}
</style>