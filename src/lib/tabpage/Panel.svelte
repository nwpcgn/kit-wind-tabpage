<script>
	import { _page } from '../data'
	export let page = 0
	export let left = false
	export let right = false
</script>

<section class="tab-page" class:left class:right class:active={$_page == page}>
	<slot />
</section>

<style>
	.tab-page {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		z-index: 30;
		opacity: 0;
		transition: transform 450ms, opacity 600ms ease-in-out;
	}
	.tab-page.left {
		transform: translateX(-100%);
		z-index: 32;
	}
	.tab-page.right {
		transform: translateX(100%);
		z-index: 34;
	}
	.tab-page.active {
		transform: translateX(0);
		opacity: 1;
	}
</style>
