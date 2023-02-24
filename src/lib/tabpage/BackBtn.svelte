<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	// import Fa from 'svelte-fa/src/fa.svelte'
	// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
	// export let plain = false <Fa icon={faChevronLeft} size="lg" fw />
	export let size = 30
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
			d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
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
