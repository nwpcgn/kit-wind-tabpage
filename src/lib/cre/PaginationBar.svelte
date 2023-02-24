<script>
	export let paginNav = []
	export let currentPage
	export let handleNavClick
</script>

<nav class="space-x-1 space-y-1 text-center sm:text-left py-2 px-2 shadow-lg rounded-lg">
	{#each paginNav as el}
		<button
			class="btn btn-gray"
			data-page={el}
			on:click={handleNavClick}
			class:active={currentPage == el}>
			{el < 10 ? '0' : ''}{el}
		</button>
	{/each}
</nav>
