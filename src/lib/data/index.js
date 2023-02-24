// Reexport your entry components here
import { writable } from 'svelte/store'
export let _page = writable(0)
export const _loading = writable(false)
export const _params = writable(null)
export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))

// function createCount() {
// 	const { subscribe, set, update } = writable(0)

// 	return {
// 		subscribe,
// 		increment: () => update((n) => n + 1),
// 		decrement: () => update((n) => n - 1),
// 		reset: () => set(0)
// 	}
// }

// export const count = createCount()
