<script setup>
import { ref } from "vue"
import housesData from "@/assets/data/homes.json"
import iconsData from "@/assets/data/icons.json"
import HomeCard from "@/components/Card.vue"

const homes = ref(housesData)
const icons = ref(iconsData)
</script>

<template>
	<section class="homes">
		<HomeCard
			v-for="home in homes"
			:key="home.id"
			:icons="icons"
			:content="home"
			btn="Contact Realtors" />
	</section>
</template>

<style lang="scss" scoped>
.homes {
	grid-column: center-start / center-end;
	margin: 15rem 0;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	gap: 7rem;
}
</style>