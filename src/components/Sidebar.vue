<script setup>
import NavButton from "@/components/Button.vue"
</script>

<template>
	<aside class="sidebar">
		<NavButton class="nav-btn">
			<div class="hamburger-icon"></div>
		</NavButton>
	</aside>
</template>

<style lang="scss" scoped>
.sidebar {
	background-color: var(--color-primary);

	grid-column: sidebar-start / sidebar-end;
	grid-row: 1 / -1;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.hamburger-icon {
	border: none;
	border-radius: 0;
	margin-top: 2rem;
	background-color: #fff;
	height: 3px;
	width: 3.5rem;

	&::before,
	&::after {
		content: "";
		background-color: #fff;
		height: 3px;
		width: 3.5rem;
		display: block;
		text-align: center;
	}

	&::before {
		transform: translateY(-1.5rem);
	}

	&::after {
		transform: translateY(1.3rem);
	}
}

.nav-btn {
	padding-bottom: 3.8rem;
}
</style>