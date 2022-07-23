<template>
	<article class="story__pictures">
		Story Pictures
	</article>
	<article class="story__content">
		Story Content
	</article>
</template>

<style lang="scss" scoped>
.story {
	&__pictures {
		background-color: var(--color-primary);
		grid-column: full-start / col-end 4;
	}

	&__content {
		background-color: var(--color-grey-light-1);
		grid-column: col-start 5 / full-end;
	}
}
</style>