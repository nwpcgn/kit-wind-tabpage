<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let blue = false
	export let red = false
	export let active = false
	const handler = (e) => {
		dispatch('click', e)
	}
</script>

<button class:blue class:red class:active on:click={handler}>
	<slot />
</button>

<style>
	button {
		@apply inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg;
	}
	button {
		@apply text-gray-700 bg-gray-100 hover:bg-gray-200;
	}
	button.active {
		@apply text-gray-700 bg-gray-300;
	}
	button.blue {
		@apply text-white bg-blue-600 hover:bg-blue-700;
	}
	button.blue.active {
		@apply text-white bg-blue-800;
	}
	button.red {
		@apply text-white bg-red-600 hover:bg-red-700;
	}
	button.red.active {
		@apply text-white bg-red-800;
	}
</style>


<!--

'.btn-gray': {
backgroundColor: '#f1f5f9',
color: '#475569',
'&:hover': {
	backgroundColor: '#e2e8f0'
},
'&:active': {
	backgroundColor: '#cbd5e1'
},
'&.active': {
	backgroundColor: '#cbd5e1',
	color: '#334155'
}
},
	
-->