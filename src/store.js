import { computed, signal } from "@preact/signals";
const _cat = signal(0);
export const cat = computed(() => _cat.value);
export const setCat = (value) => (_cat.value = value);
