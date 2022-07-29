<script setup>
import { ref } from "vue"
import data from "@/assets/data/links.json"

const links = ref(data)
</script>

<template>
	<footer class="footer">
		<ul class="nav">
			<li
				v-for="link in links"
				:key="link.id"
				class="nav__item">
				<a :href="link.url" class="nav__link">
					{{ link.text }}
				</a>
			</li>
		</ul>
		<p class="copyright">
			&copy; Copyright 2017 by Jonas Schmidtmann.  Feel free to use this project for your own purposes.
			This does NOT apply if you plan to produce your own course or tutorials based on this project.
		</p>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	background-color: var(--color-secondary);
	grid-column: full-start / full-end;
	padding: 8rem;
}

.nav {
		list-style: none;		

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		align-items: center;
		gap: 2rem;

		&__link:link,
		&__link:visited {
			font-family: var(--font-display);
			font-size: 1.4rem;
			color: #fff;
			text-decoration: none;
			text-transform: uppercase;
			text-align: center;
			padding: 1.4rem;
			display: block;	
			transition: all .2s;
		}

		&__link:hover,
		&__link:active {
			background-color: var(--color-faint-blue);
			transform: translateY(-3px);
		}
}
.copyright {
	font-size: 1.4rem;
	color: var(--color-grey-light-2);
	margin: 6rem auto 0;
	text-align: center;
	width: 70%;
}
</style>