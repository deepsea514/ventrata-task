<script lang="ts">
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<main>
	<Router {routes} />
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
