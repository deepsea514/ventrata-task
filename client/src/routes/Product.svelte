<script lang="ts">
    import type Product from "../models/Product";
    import type UnitItem from "../models/UnitItem";
    import type Option from "../models/Option";
    import { UnitID } from "../models/Enums";
    import type Booking from "../models/Booking";
    import { onMount } from "svelte";
    import axios from "axios";
    import { push } from "svelte-spa-router";
    import {
        booking as bookingStore,
        requiredContactFields as requiredContactFieldsStore,
    } from "../stores";
    export let params: any = {};

    let product: Product | null;
    let loading: Boolean = false;
    let currency = "EUR";
    let option_id = "";
    let option: Option | null = null;
    let unitItems: UnitItem[] = [];
    let totalPrice = 0;
    let error_option = "";
    let error_unit = "";

    $: checkTotal(unitItems);

    function checkTotal(unitItems: UnitItem[]) {
        totalPrice = unitItems.reduce(
            (prev, current) => prev + current.price * current.quantity,
            0
        );
    }

    function setCurrency(_currency: string) {
        currency = _currency;
        setUnitItems();
    }

    function setOption(_option_id: string) {
        error_option = "";
        option_id = _option_id;
        option = product.options.find((option) => option.id == _option_id);
        if (!option) option = null;
        setUnitItems();
    }

    function setUnitItems() {
        if (option) {
            error_unit = "";
            unitItems = option.units
                .map((unit) => {
                    const pricing = unit.pricing.find(
                        (pricing) => pricing.currency == currency
                    );
                    if (pricing) {
                        return {
                            unitId: unit.id,
                            quantity: 0,
                            price: pricing.price,
                        };
                    } else return null;
                })
                .filter((unit) => unit);
        } else {
            unitItems = [];
        }
    }

    function changeUnitItem(unitId: UnitID, value: string) {
        error_unit = "";
        unitItems = unitItems.map((unit) => {
            if (unit.unitId == unitId)
                return {
                    ...unit,
                    quantity: Number(value),
                };
            return unit;
        });
    }

    function onSubmit() {
        if (option == null) {
            error_option = "You should choose an option.";
            error_unit = "";
            return;
        }
        const adultUnit = unitItems.find((unit) => unit.unitId == UnitID.adult);
        if (adultUnit && adultUnit.quantity == 0) {
            error_unit = "Please add at least 1 ADULT Unit";
            return;
        }
        error_unit = "";
        const booking: Booking = {
            id: "booking" + Math.random(),
            productId: product.id,
            optionId: option.id,
            pricing: {
                currency: currency,
                currencyPrecision: 2,
                price: totalPrice,
            },
            unitItems: unitItems.filter((unit) => unit.quantity > 0),
            contact: {
                emailAddress: "",
                phoneNumber: "",
                fullName: "",
            },
        };
        $bookingStore = booking;
        $requiredContactFieldsStore = option.requiredContactFields;

        push("/contact");
    }

    onMount(() => {
        product = null;
        if (params && params.product_id) {
            axios
                .get<Product>(
                    `https://ventrata.blackstormy.workers.dev/product/${params.product_id}`
                )
                .then(({ data }) => {
                    product = data;
                    setCurrency(product.defaultCurrency);
                    const defaultOption = product.options.find(
                        (option) => option.default
                    );
                    if (defaultOption) setOption(defaultOption.id);
                })
                .catch(console.error)
                .finally(() => (loading = false));
        }
    });
</script>

<h1 class="text-center">Product Detail</h1>
{#if product != null}
    <div class="row">
        <div class="col-md-3 col-lg-4" />
        <div class="col-md-6 col-lg-4 mt-5">
            <h3>{product.name}</h3>
            <div class="form-group row mt-3">
                <label for="currency-select" class="col-8"
                    >Selected Currency</label
                >
                <select
                    id="currency-select"
                    class="form-control col-4"
                    value={currency}
                    on:change={(evt) => setCurrency(evt.target.value)}
                    on:blur={() => {}}
                >
                    {#each product.availableCurrencies as currency}
                        <option value={currency}>{currency}</option>
                    {/each}
                </select>
            </div>
            <div class="form-group row mt-3">
                <label for="option-select" class="col-8">Selected Option</label>
                <select
                    id="option-select"
                    class="form-control col-4"
                    value={option_id}
                    on:change={(evt) => setOption(evt.target.value)}
                    on:blur={() => {}}
                >
                    <option value="">Select Option</option>
                    {#each product.options as option}
                        <option value={option.id}>{option.name}</option>
                    {/each}
                </select>
            </div>
            {#if error_option != ""}
                <div class="d-flex justify-content-end">
                    <p class="text-danger">{error_option}</p>
                </div>
            {/if}
            <p>Please Select Units</p>
            {#if option != null}
                {#each unitItems as unit}
                    <div class="form-group row">
                        <label class="col-8" for={`count_${unit.unitId}`}
                            >{unit.unitId.toUpperCase()} ({unit.price}
                            {currency})</label
                        >
                        <input
                            id={`count_${unit.unitId}`}
                            class="form-control col-4"
                            type="number"
                            min="0"
                            value={unit.quantity}
                            on:change={(evt) =>
                                changeUnitItem(unit.unitId, evt.target.value)}
                            on:keyup={(evt) =>
                                changeUnitItem(unit.unitId, evt.target.value)}
                        />
                    </div>
                {/each}
            {/if}
            {#if error_unit != ""}
                <div class="d-flex justify-content-end">
                    <p class="text-danger">{error_unit}</p>
                </div>
            {/if}
            <hr />
            <div class="d-flex flex-column align-items-end">
                <p>Total Price = {totalPrice} {currency}</p>
                <div class="d-flex align-items-end">
                    <a href="#/" class="btn btn-secondary">Back</a>
                    <button class="btn btn-primary ml-3" on:click={onSubmit}
                        >Submit</button
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
        color: #008cff;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
</style>
