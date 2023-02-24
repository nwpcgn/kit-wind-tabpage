<script>
	import { _page, _loading } from '../data'
	import Panel from './Panel.svelte'
	import { loader } from './loader'
	// const setPage = (index = 0, delay = 300) => {
	// 	_loading.set(true)
	// 	sleep(delay)
	// 		.then(() => {
	// 			_page.set(index)
	// 		})
	// 		.then(() => sleep(delay))
	// 		.then(() => {
	// 			_loading.set(false)
	// 		})
	// }
	export let setPage
	const handleClick = (e) => {
		let i = e.currentTarget.dataset.id
		setPage(i)
	}
</script>

<main use:loader={_loading}>
	<Panel page={0} left>
		{#if $$slots.p1}
			<slot name="p1" />
		{:else}
			<slot />
		{/if}
	</Panel>
	<Panel page={1} right={$_page == 0} left={$_page != 0}>
		<slot name="p2" />
	</Panel>
	<Panel page={2} right>
		<slot name="p3" />
	</Panel>
	<Panel page={3} right>
		<slot name="p4" />
	</Panel>
</main>

<footer>
	<ul>
		<li>
			<button class="block" data-id={0} on:click={handleClick} class:active={$_page == 0}>Home</button>
		</li>
		<li>
			<button class="block" data-id={1} on:click={handleClick} class:active={$_page == 1 || $_page == 3}>Archiv</button>
		</li>
		<li>
			<button class="block" data-id={2} on:click={handleClick} class:active={$_page == 2}>Settings</button>
		</li>
	</ul>
</footer>

<style>
	main {
		flex: 1;
		position: relative;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
	}
	footer {
		--tw-bg-opacity: 1;
		position: sticky;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 40;
		background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
	}
	ul {
		list-style: none;
		display: flex;
		width: 100%;
		align-items: stretch;
		border-bottom-width: 1px;
		border-left-width: 1px;
		border-right-width: 1px;
	}
	ul > :not([hidden]) ~ :not([hidden]) {
		--tw-divide-x-reverse: 0;
		border-right-width: calc(1px * var(--tw-divide-x-reverse));
		border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
		--tw-divide-opacity: 1;
		border-color: rgba(209, 213, 219, var(--tw-divide-opacity));
	}
	li {
		list-style: none;
		width: 100%;
	}
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		--tw-divide-opacity: 1;
		border-color: rgba(209, 213, 219, var(--tw-divide-opacity));
		border-width: 3px 0 0 0;
		color: var(--app-color);
		font-size: 1.125rem;
		line-height: 1.75rem;
		transition-property: background-color, border-color, color, fill, stroke;
		transition-duration: 300ms;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		cursor: pointer;
	}
	button.block {
		width: 100%;
	}

	button.active {
		--tw-border-opacity: 1;
		border-color: rgba(59, 130, 246, var(--tw-border-opacity));
	}
</style>
