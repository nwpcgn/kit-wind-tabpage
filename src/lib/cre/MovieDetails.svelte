<script>
	import { _page, _params } from '../data'
	export let setPage
</script>

<section class="py-8">
	<div class="container mx-auto px-4">
		{#if $_params}
			<article class="py-4">
				<ul>
					<!-- {id, categorie, name, image, description, front, back, op} -->

					<li>
						<div class="py-4 sm:flex lg:items-stretch group">
							<figure class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
								<img
									class="w-full rounded-md h-32 lg:w-32 object-cover"
									src={$_params.image
										? $_params.image
										: 'https://wickedblocks.dev/assets/images/placeholders/neon-1.jpg'}
									alt="text" />
							</figure>
							<article>
								<span class="text-sm font-thin text-blue-500"
									>{$_params.id}</span>
								<h4 class="text-4xl font-semibold mb-1">{$_params.name}</h4>
								<p class="text-lg font-light">{$_params.categorie}</p>
							</article>
						</div>
					</li>
				</ul>
				<div class="py-4">
					<blockquote>
						<p class="text-lg font-medium italic">
							{$_params.description}
						</p>
					</blockquote>
				</div>
				<div class="grid grid-cols-1 py-4 gap-2 sm:grid-cols-2">
					<img src={$_params.front} class="max-w-full" alt="" />
					<img src={$_params.back} class="max-w-full" alt="" />
				</div>
			</article>
		{/if}
		<nav class="py-4">
			<button
				class="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
				on:click={() => setPage(1, 50)}>Back</button>
		</nav>
	</div>
</section>
