<script>
	export let label = 'blackburn-studios'
</script>

<header {...$$restProps}>
	<nav>
		{#if $$slots.start}
			<slot name="start" />
		{:else}
			<span />
		{/if}
		{#if $$slots.label}
			<slot name="label" />
		{:else}
			<h2>{label}</h2>
		{/if}
		{#if $$slots.end}
			<slot name="end" />
		{:else}
			<span />
		{/if}
	</nav>
</header>

<style>
	:root {
		--bar-bg: #075e54;
		--bar-col: #fff;
		--bar-px: 0, 5rem;
		--bar-h: 3rem;
	}
	header {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 40;
		color: var(--bar-col);
		background-color: var(--bar-bg);
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: var(--bar-px);
		padding-right: var(--bar-px);
		min-height: var(--bar-h);
	}
	h2 {
		font-size: 1.125rem;
		text-align: center;
	}
</style>
