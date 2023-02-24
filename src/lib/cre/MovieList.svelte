<script>
	import PaginationBar from './PaginationBar.svelte'
	import { fade } from 'svelte/transition'
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
	let infoDialog
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
	const setDetail = (e) => {
		return new Promise((resolve, reject) => {
			let el = e.target.closest('[data-id]')
			let i = el.dataset.id
			let d = daten[i]
			_params.set(d)
			resolve()
		})
	}

	const handleDetailClick = async (e) => {
		await setDetail(e)
		setPage(3, 100)
	}
	const handleInfoClick = async (e) => {
		await setDetail(e)
		infoDialog.showModal()
	}

	onMount(async () => {
		await setAppDb()
		setActivePage(currentPage)
	})
</script>

<section class="py-8">
	<div class="w-full max-w-3xl mx-auto px-4">
		<PaginationBar {handleNavClick} bind:paginNav bind:currentPage />
		{#if daten.length}
			<article class="py-4">
				<!-- {id, categorie, name, image, description, front, back, op} -->
				{#key currentPage}
					<div class="space-y-3" transition:fade={{ duration: 300 }}>
						{#each daten as d, i}
							<div
								class="py-0 pr-3 flex items-center shadow-lg rounded-lg"
								data-id={i}>
								<figure class="flex-shrink-0 mb-0 mr-2 sm:mr-4">
									<a href="#/" on:click|preventDefault={handleDetailClick}>
										<img
											class="w-full rounded-l-lg rounded-r h-40 lg:w-28 object-cover"
											src={d.image}
											alt="text" />
									</a>
								</figure>
								<article class="flex flex-col">
									<span class="text-sm font-thin text-blue-600 mb-0"
										>{d.id}</span>
									<a
										href="#/"
										on:click|preventDefault
										class="text-3xl sm:text-4xl font-semibold lg:font-bold mb-0">
										{d.name}
									</a>
									<a
										href="#/"
										on:click|preventDefault
										class="text-sm sm:text-base lg:text-lg font-light">
										{d.categorie}
									</a>
									<p>
										<button on:click={handleInfoClick}>Info</button>
									</p>
								</article>
							</div>
						{/each}
					</div>
				{/key}
			</article>
			<PaginationBar {handleNavClick} bind:paginNav bind:currentPage />
		{/if}
	</div>
</section>

{#if $_params}
	<dialog class="p-0 rounded" bind:this={infoDialog}>
		<header class="px-4 py-2 bg-gray-200 rounded-t truncate">
			<span class="text-xl">{$_params.name ? $_params.name : 'Infos'}</span>
		</header>

		<div class="px-4 py-3 text-left">
			<p class="text-gray-700 text-lg">
				{$_params.description ? $_params.description : 'No Data'}
			</p>
		</div>
		<form
			class="px-4 py-2 border-t text-right bg-gray-50 rounded-b"
			method="dialog">
			<button class="btn btn-blue" on:click={() => setPage(3, 100)}
				>Details</button>
			<button class="btn btn-gray">Close</button>
		</form>
	</dialog>
{/if}

<style>
	dialog {
		width: 100%;
		max-width: 480px;
	}
	dialog::backdrop {
		background: repeating-linear-gradient(
			60deg,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 1px,
			rgba(0, 0, 0, 0.3) 1px,
			rgba(0, 0, 0, 0.3) 20px
		);
		backdrop-filter: blur(1px);
	}
</style>
