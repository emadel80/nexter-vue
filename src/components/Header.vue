<script setup>
import { ref } from "vue"
import HeaderButton from "@/components/Button.vue"
import logosData from "@/assets/data/logos.json"
import realtorsData from "@/assets/data/realtors.json"

const images = ref(logosData)
const realtors = ref(realtorsData)
</script>

<template>
  <header class="header">
		<img 
			:src="$assets('img/logo.png')" 
			alt="Nexter logo" 
			class="header__logo">
		<h3 class="heading-3">Your own home::</h3>
		<h1 class="heading-1">The ultimate personal freedom</h1>
		<HeaderButton class="header__btn">
			View our properties
		</HeaderButton>
		<div class="header__seenon-text">Seen on</div>
		<div class="header__seenon-logos">
			<img 
				v-for="image in images"
				:key="image.id"
				:src="$assets(image.url)"
				:alt="`Seen on logo ${image.id}`">
		</div>
	</header>
	<aside class="realtors">
		<h3 class="heading-3">Top 3 Realtors</h3>
		<div class="realtors__list">
			<div
				v-for="realtor in realtors"
				:key="realtor.id"
				class="realtors__item">
				<img 
					:src="$assets(realtor.image)" 
					:alt="`Realtor ${realtor.id}`" 
					class="realtors__img">
				<div class="realtors__details">
					<h4 class="heading-4 heading-4--light">
						{{ realtor.name }}
					</h4>
					<p class="realtors__sales">
						{{ realtor.sales }} houses sold
					</p>
				</div>
			</div>
		</div>		
	</aside>
</template>

<style lang="scss" scoped>
.header {
	background-color: var(--color-grey-dark-1);
	grid-column: full-start / col-end 6;
	background-image: var(--grad-header-overlay), url(@/assets/img/hero.jpeg);
	background-size: cover;
	background-position: center;
	padding: 4rem 8rem 8rem;
	

	display: grid;
	grid-template-rows: 1fr min-content 6rem 1fr;
	grid-template-columns: max-content;
	row-gap: 1.5rem;
	justify-content: center;

	&__logo {
		height: 3rem;
	}

	&__seenon-text {
		font-size: 1.6rem;
		color: var(--color-grey-light-2);
		
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		column-gap: 2rem;
		align-items: center;

		&::before,
		&::after {
			content: "";
			height: 1px;
			display: block;
			background-color: currentColor;
		}
	}

	&__seenon-logos {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 3rem;
		justify-items: center;

		img {
			height: 2.5rem;
			filter: brightness(70%);
		}
	}

	&__btn {
		align-self: start;
		justify-self: start;
	}
}

.realtors {
	background-color: var(--color-secondary);
	grid-column: col-start 7 / full-end;
	padding: 3rem;

	display: grid;
	justify-content: center;
	align-content: center;
	justify-items: center;
	row-gap: 2rem;

	&__list {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 5vh;
	}

	&__item {
		display: grid;
		grid-template-columns: min-content max-content;
		column-gap: 2rem;
		align-items: center;
	}

	&__img {
		width: 7rem;
		border-radius: 50%;
		display: block;
	}

	&__sales {
		margin-top: -3px;
		text-transform: uppercase;
		color: var(--color-grey-light-2);
	}
}
</style>