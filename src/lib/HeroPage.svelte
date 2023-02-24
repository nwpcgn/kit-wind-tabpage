<script>
	export let bg = false
</script>

<div
	style="background-image: url({bg ? bg : ''});"
	class="flex flex-col w-full h-full items-center justify-center bg-no-repeat bg-cover">
	<slot />
</div>
