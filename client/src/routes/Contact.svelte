<script lang="ts">
	import { ContactField } from "../models/Enums";
	import { onMount } from "svelte";
	import { push } from "svelte-spa-router";
	import {
		requiredContactFields as requiredContactFieldsStore,
		booking as bookingStore,
	} from "../stores";
	import type Contact from "../models/Contact";
	const requiredContactFields: ContactField[] = $requiredContactFieldsStore;

	onMount(() => {
		if ($bookingStore == null) {
			push("/");
		}
	});

	function onSubmit(evt: SubmitEvent) {
		const formData = new FormData(evt.target);

		const contact: Contact = {
			fullName: null,
			emailAddress: null,
			phoneNumber: null,
		};
		contact.fullName = formData.get("fullName").toString();
		contact.emailAddress = formData.get("emailAddress").toString();
		contact.phoneNumber = formData.get("phoneNumber").toString();
		if ($bookingStore) {
			$bookingStore = { ...$bookingStore, contact: contact };
			push("/success");
		}
	}
</script>

<h1 class="text-center">Contact Form</h1>
<div class="row">
	<div class="col-md-3 col-lg-4" />
	<div class="col-md-6 col-lg-4 mt-5">
		<form class="form" on:submit|preventDefault={onSubmit}>
			<div class="form-group">
				<label for="fullName">Full Name</label>
				<input
					id="fullName"
					name="fullName"
					class="form-control"
					type="text"
					value=""
					required={requiredContactFields.includes(
						ContactField.fullName
					)}
					on:keyup={(evt) => {}}
				/>
			</div>
			<div class="form-group">
				<label for="emailAddress">Email Address</label>
				<input
					id="emailAddress"
					name="emailAddress"
					class="form-control"
					type="email"
					value=""
					required={requiredContactFields.includes(
						ContactField.emailAddress
					)}
					on:keyup={(evt) => {}}
				/>
			</div>
			<div class="form-group">
				<label for="phoneNumber">Phone Number</label>
				<input
					id="phoneNumber"
					name="phoneNumber"
					class="form-control"
					type="text"
					value=""
					required={requiredContactFields.includes(
						ContactField.phoneNumber
					)}
					on:keyup={(evt) => {}}
				/>
			</div>
			<div class="d-flex justify-content-end">
				<button class="btn btn-primary" type="submit">Submit</button>
			</div>
		</form>
	</div>
	<div class="col-md-3 col-lg-4" />
</div>

<style>
	h1 {
		color: #ff0040;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
