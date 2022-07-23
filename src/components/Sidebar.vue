<template>
	<aside class="sidebar">
		Sidebar
	</aside>
</template>

<style lang="scss" scoped>
.sidebar {
	background-color: var(--color-primary);

	grid-column: sidebar-start / sidebar-end;
	grid-row: 1 / -1;
}
</style>