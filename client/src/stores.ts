import { writable } from 'svelte/store';
import type Booking from './models/Booking';
import type { ContactField } from './models/Enums';

export const booking = writable<Booking | null>(JSON.parse(localStorage.getItem("booking")) || null);
booking.subscribe(value => localStorage.setItem("booking", JSON.stringify(value)));

export const requiredContactFields = writable<ContactField[]>(JSON.parse(localStorage.getItem("requiredContactFields")) || []);
requiredContactFields.subscribe(value => localStorage.setItem("requiredContactFields", JSON.stringify(value)));