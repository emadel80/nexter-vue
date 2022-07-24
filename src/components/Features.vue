<script setup>
import { ref } from "vue"
import Icon from "@/components/Icon.vue"
import data from "@/assets/data/features.json"

const features = ref(data)
</script>

<template>
	<section class="features">
		<article 
			v-for="feature in features"
			:key="feature.id"
			class="feature">
		
			<Icon :name="feature.icon" class="feature__icon" />
			<h4 class="heading-4 heading-4--dark">{{ feature.title }}</h4>
			<p class="feature__content">{{ feature.content }}</p>
		</article>
	</section>
</template>

<style lang="scss" scoped>
.features {
	grid-column: center-start / center-end;
	margin: 15rem 0;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	gap: 6rem;
	align-items: start;
}

.feature {
	display: grid;
	grid-template-columns: min-content 1fr;
	row-gap: 1.5rem;
	column-gap: 2.5rem;

	&__icon {
		fill: var(--color-primary);
		width: 4.5rem;
		height: 4.5rem;
		grid-row: 1 / span 2;
		transform: translateY(-1rem)
	}

	&__content {
		font-size: 1.7rem;
	}
}
</style>