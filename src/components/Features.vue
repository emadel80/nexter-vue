<script setup>
import { ref } from "vue"
import Icon from "@/components/Icon.vue"

const features = ref([
	{
		id: 1,
		icon: 'global',
		title: "World's best luxury homes",
		content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
	},
	{
		id: 2,
		icon: 'trophy',
		title: 'Only the best properties',
		content: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
	},
	{
		id: 3,
		icon: 'map-pin',
		title: 'All homes in top locations',
		content: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
	},
	{
		id: 4,
		icon: 'key',
		title: 'New home in one week',
		content: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		id: 5,
		icon: 'presentation',
		title: 'Top 1% realtors',
		content: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
	},
	{
		id: 6,
		icon: 'lock',
		title: 'Secure payment on nexter',
		content: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'
	}
])
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