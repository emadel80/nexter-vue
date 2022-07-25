<script setup>
import { ref } from "vue"
import data from "@/assets/data/story.json"

const story = ref(data)
</script>

<template>
	<article class="story__pictures">
		<img src="@/assets/img/story-1.jpeg" alt="Couple with new house" class="story__img--1">
		<img src="@/assets/img/story-2.jpeg" alt="New house" class="story__img--2">
	</article>
	<article class="story__content">
		<h3 class="heading-3 mb-sm">{{ story.title }}</h3>
		<h2 class="heading-2 heading-2--dark mb-md">&ldquo;{{ story.subtitle }}&rdquo;</h2>
		<p class="story__text">{{ story.content }}</p>
		<button class="btn">{{ story.btn.content }}</button>
	</article>
</template>

<style lang="scss" scoped>
.story {
	&__pictures {
		background-color: var(--color-primary);
		background-image: var(--grad-story-overlay), url(@/assets/img/back.jpg);
		grid-column: full-start / col-end 4;

		display: grid;
		grid-template-rows: repeat(6, 1fr);
		grid-template-columns: repeat(6, 1fr);
		align-items: center;
	}

	&__img--1 {
		width: 100%;
		grid-row: 2 / span 4;
		grid-column: 2 / span 4;
		box-shadow: var(--shadow-light-1)
	}

	&__img--2 {
		width: 115%;
		grid-row: 4 / span 2;
		grid-column: 4 / span 3;
		z-index: 20;
		box-shadow: var(--shadow-light-2);
	}

	&__content {
		background-color: var(--color-grey-light-1);
		grid-column: col-start 5 / full-end;
		padding: 6rem 8vw;

		// Using Flexbox
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		
		// align-items: cross axis
		// justify-content: main axis

		// Using Grid
		// display: grid;
		// align-content: center;	// align tracks vertically
		// justify-items: start;	// align items toward row axis
	}

	&__text {
		font-size: 1.5rem;
		font-style: italic;
		margin-bottom: 4rem;
	}
}
</style>