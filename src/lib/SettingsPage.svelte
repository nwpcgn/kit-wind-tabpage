<script>
	// import Fa from 'svelte-fa/src/fa.svelte'
	// import { faCaretLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
	import { _settings, _page } from './data'
	import Button from './Button.svelte'
	let { op1, op2, op3, op4 } = $_settings

	let whatChanged = ''
	function applyChange() {
		_settings.update((state) => {
			whatChanged =
				`${op1 === state.op1 ? '' : 'Op1:  CHANGED'} ` +
				`${op2 === state.op2 ? '' : 'Op2:  CHANGED'} ` +
				`${op3 === state.op3 ? '' : 'Op3:  CHANGED'} ` +
				`${op4 === state.op4 ? '' : 'Op4:  CHANGED'} `
			return { op1, op2, op3, op4 }
		})
	}
	const reset = () => {
		whatChanged = ''
		
	}
	// export let setPage
	$: reset($_page)
</script>

<section class="py-8">
	<div class="w-full max-w-3xl mx-auto px-4">
		<h2 class="text-3xl font-semibold mb-4">Settings</h2>

		<div>
			<ul class="divide-y border-t border-b">
				<li>
					<label class="check-item">
						<span class="check-label" class:active={$_settings.op1 != op1}
							>Option 1</span>
						<input
							class="check-input"
							type="checkbox"
							on:change={reset}
							bind:checked={op1} />
					</label>
				</li>
				<li>
					<label class="check-item">
						<span class="check-label" class:active={$_settings.op2 != op2}
							>Option 2</span>
						<input
							class="check-input"
							type="checkbox"
							on:change={reset}
							bind:checked={op2} />
					</label>
				</li>
				<li>
					<label class="check-item">
						<span class="check-label" class:active={$_settings.op3 != op3}
							>Option 3</span>
						<input
							class="check-input"
							type="checkbox"
							on:change={reset}
							bind:checked={op3} />
					</label>
				</li>
				<li>
					<label class="check-item">
						<span class="check-label" class:active={$_settings.op4 != op4}
							>Option 4</span>
						<input
							class="check-input"
							type="checkbox"
							on:change={reset}
							bind:checked={op4} />
					</label>
				</li>
			</ul>
		</div>
		<div class="py-4">
			<Button blue on:click={applyChange}>Save Settings</Button>
		</div>
		<div class="py-4 px-4">
			{whatChanged}
		</div>
	</div>
</section>

<style>
	.check-item {
		@apply flex items-center justify-between py-2 px-2;
	}
	.check-label {
		@apply text-lg;
	}
	.check-label.active {
		@apply text-blue-800;
	}
</style>
