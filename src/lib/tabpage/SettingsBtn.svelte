<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let size = 28
	const handler = (e) => {
		dispatch('clicked', e)
	}
</script>

<button {...$$restProps} on:click={handler}>
	<svg
		width={size}
		height={size}
		viewBox="0 0 20 20"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M11.405 3.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM10 12.93a2.929 2.929 0 100-5.858 2.929 2.929 0 000 5.858z"
			clip-rule="evenodd" />
	</svg>
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 3rem;
		min-width: 3rem;
	}
</style>
