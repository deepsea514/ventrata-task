<script lang="ts">
	import {
		requiredContactFields as requiredContactFieldsStore,
		booking as bookingStore,
	} from "../stores";
	import axios from "axios";
	import { onMount } from "svelte";
	import { push } from "svelte-spa-router";
	import type Product from "../models/Product";
	import type Option from "../models/Option";

	let loading: Boolean = false;
	let product: Product | null = null;
	let option: Option | null = null;

	onMount(() => {
		if ($bookingStore == null) {
			return push("/");
		}
		product = null;
		axios
			.get<Product>(
				`https://ventrata.blackstormy.workers.dev/product/${$bookingStore.productId}`
			)
			.then(({ data }) => {
				product = data;
				option = product.options.find(
					(option) => option.id == $bookingStore.optionId
				);
			})
			.catch(console.error)
			.finally(() => (loading = false));
	});

	function onGoBack() {
		$bookingStore = null;
		$requiredContactFieldsStore = [];
		push("/");
	}
</script>

<h1 class="text-center">Success!</h1>
{#if product != null && $bookingStore != null}
	<div class="row">
		<div class="col-md-3 col-lg-4" />
		<div class="col-md-6 col-lg-4 mt-5">
			<h3>{product.name}</h3>
			<div class="row mt-3">
				<span class="col-6">Selected Option: </span>
				<strong class="col-6">{option.name}</strong>
			</div>
			<p class="mt-3">Unit Items:</p>
			{#each $bookingStore.unitItems as unitItem}
				<div class="d-flex justify-content-between mt-2">
					<span class="">{unitItem.unitId.toUpperCase()}: </span>
					<string class=""
						>{Number(unitItem.price).toFixed(
							$bookingStore.pricing.currencyPrecision
						)}
						{$bookingStore.pricing.currency} * {unitItem.quantity} =
						{Number(unitItem.price * unitItem.quantity).toFixed(
							$bookingStore.pricing.currencyPrecision
						)}
						{$bookingStore.pricing.currency}</string
					>
				</div>
			{/each}
			<hr />
			<div class="d-flex flex-column align-items-end">
				<p>
					Total Price = {Number($bookingStore.pricing.price).toFixed(
						$bookingStore.pricing.currencyPrecision
					)}
					{$bookingStore.pricing.currency}
				</p>
				<div class="d-flex align-items-end">
					<button class="btn btn-primary" on:click={onGoBack}
						>Go To Products</button
					>
				</div>
			</div>
		</div>
		<div class="col-md-3 col-lg-4" />
	</div>
{:else if loading == true}
	<h4 class="text-center">Loading ...</h4>
{:else}
	<h4 class="text-center">No Products</h4>
{/if}

<style>
	h1 {
		color: #ff0040;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
