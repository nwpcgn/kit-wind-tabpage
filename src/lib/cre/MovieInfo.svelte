<script>
	import { _page, _params, _loading } from '../data'
	import HeroPage from '../HeroPage.svelte'
	import Button from '../Button.svelte'
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
	const data = {
		name: "Carmen Rivera",
		header: 'Carmen Rivera - Fetischkönigin und Domina über Lust und Schmerz!',
		body: 'Eine außergewöhnliche Frau mit anspruchsvollem Charakter und strengem Blick! Baronessa di Rivera hat alles zusammen: Charme, Phantasie und Dominanz. Sie wird von dir immer hingebungsvolle Unterwerfung, volle Aufmerksamkeit und Respekt für ihre Befehle verlangen!',
		sub: 'EXTREME STRAP-ONS, BRUTAL FISTING, HARDCORE HUMILIATION & TOTAL DOMINATION',
		bg: './img/rivera_info.jpg'
	}
	export let setPage
	let dialog
	const show = () => {
		dialog.showModal()
	}
</script>

<HeroPage bg={data.bg}>
	<div class="p-8 container mx-auto">
		<section class="p-8 shadow bg-gray-50 bg-opacity-50 space-y-6">
			<div class="text-center">
				<span class="text-5xl font-semibold text-red-800">{data.header}</span>
			</div>
			<div class="text-center">
				<span class="text-lg text-blue-800">{data.sub}</span>
			</div>
			<div class="text-center">
				<button class="btn" on:click={show}>Info</button>
			</div>

			<div class="text-center">
				<Button blue on:click={(e) => setPage(1, 100)}>Movies</Button>
				<Button on:click={() => setPage(2, 100)}>Settings</Button>
			</div>
		</section>
	</div>
</HeroPage>

<dialog class="p-0 rounded" bind:this={dialog}>
	<header class="px-4 py-2 bg-gray-200 rounded-t truncate">
		<span class="text-xl">About {data.name ? data.name : ''}</span>
	</header>

	<div class="px-4 py-3 text-left">
		<p class="text-gray-700 text-lg">
			<span>{data.body}</span>
		</p>
	</div>
	<form
		class="px-4 py-2 border-t text-right bg-gray-50 rounded-b"
		method="dialog">
		<button class="btn btn-gray">Close</button>
	</form>
</dialog>

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
