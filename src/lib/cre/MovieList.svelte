<script>
	import { onMount } from 'svelte'
	import { _page, _params, _loading } from '../data'
	export let setPage
	let dataDb = []
	let daten = []
	let paginNav = []
	let numberOfItems = dataDb.length
	let page_size = 10
	let currentPage = 1
	let numberOfPages = Math.ceil(numberOfItems / page_size)

	const paginate = (array, page_size, page_number) =>
		array.slice((page_number - 1) * page_size, page_number * page_size)

	const fetchDb = async () => {
		try {
			let r = await fetch('https://nwp-cgn.de/apis/carmen')
			let d = await r.json()
			let dat = d.data1
			if (dat) {
				return dat
			}
		} catch (error) {
			alert(error)
		}
	}
	const setPaginNav = async () => {
		paginNav = []
		for (let i = 0; i < numberOfPages; i++) {
			paginNav.push(i + 1)
		}
	}
	const setAppDb = async () => {
		let d = await fetchDb()
		dataDb = d
		numberOfItems = dataDb.length
		currentPage = 1
		numberOfPages = Math.ceil(numberOfItems / page_size)
		setPaginNav()
		return d
	}
	const setActivePage = async (curr = 1) => {
		daten = paginate(dataDb, page_size, curr)
	}
	const handleNavClick = (e) => {
		let i = e.currentTarget.dataset.page
		currentPage = i
		setActivePage(currentPage)
	}
	const handleDetailClick = (e) => {
		let i = e.currentTarget.dataset.id
		let d = daten[i]
		_params.set(d)
		setPage(3, 50)
	}
	onMount(async () => {
		await setAppDb()
		setActivePage(currentPage)
	})
</script>

<section class="py-8">
	<div class="container mx-auto px-4">
		<nav class="space-x-1 py-4">
			{#each paginNav as el}
				<button
					class="btn btn-blue"
					data-page={el}
					on:click={handleNavClick}
					class:active={currentPage == el}>
					{el}
				</button>
			{/each}
		</nav>
		{#if daten.length}
			<article class="py-4">
				<ul>
					<!-- {id, categorie, name, image, description, front, back, op} -->
					{#each daten as d, i}
						<li>
							<div class="py-4 sm:flex lg:items-stretch group">
								<figure class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
									<a
										href="#/"
										data-id={i}
										on:click|preventDefault={handleDetailClick}>
										<img
											class="w-full rounded-md h-32 lg:w-32 object-cover"
											src={d.image
												? d.image
												: 'https://wickedblocks.dev/assets/images/placeholders/neon-1.jpg'}
											alt="text" />
									</a>
								</figure>
								<article>
									<span class="text-sm font-thin text-blue-600">{d.id}</span>
									<h4 class="text-4xl font-semibold mb-1">{d.name}</h4>
									<p class="text-lg font-light">{d.categorie}</p>
								</article>
							</div>
						</li>
					{/each}
				</ul>
			</article>
		{/if}
		<nav class="space-x-1 py-4">
			{#each paginNav as el}
				<button
					class="btn btn-blue"
					data-page={el}
					on:click={handleNavClick}
					class:active={currentPage == el}>
					{el}
				</button>
			{/each}
		</nav>
	</div>
</section>
