<script lang="ts">
	import type Product from "../models/Product";
	import { onMount } from "svelte";
	import axios from "axios";

	let products: Product[] = null;
	let loading: Boolean = false;
	onMount(() => {
		loading = true;
		axios
			.get<Product[]>("https://ventrata.blackstormy.workers.dev/api/products")
			.then(({ data }) => {
				products = data;
			})
			.catch(console.error)
			.finally(() => (loading = false));
	});
</script>

<h1 class="text-center">Products List</h1>
<div>
	<div class="row">
		<div class="col-md-3" />
		<div class="col-md-6">
			{#if products != null}
				{#each products as product}
					<div class="card mt-4">
						<div class="card-body">
							<h5 class="card-title">{product.name}</h5>
							<h6 class="card-subtitle mb-2 text-muted">
								Available Currencies: {product.availableCurrencies.join(
									", "
								)}
							</h6>
							<div class="card-text">
								<ul class="list-group">
									{#each product.options as option}
										<li class="list-group-item">
											{option.name}
											({option.units
												.map((unit) =>
													unit.id.toUpperCase()
												)
												.join(", ")})
										</li>
									{/each}
								</ul>
							</div>
							<a
								href={"#/product/" + product.id}
								class="card-link mt-2">View Detail</a
							>
						</div>
					</div>
				{/each}
			{:else if loading == true}
				<h4 class="text-center">Loading ...</h4>
			{:else}
				<h4 class="text-center">No Products</h4>
			{/if}
		</div>
		<div class="col-md-3" />
	</div>
</div>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
