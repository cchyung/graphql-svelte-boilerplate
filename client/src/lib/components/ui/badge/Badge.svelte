<script lang="ts">
	export let value: number = 3
	export let min: number = 0
	export let max: number = 99
	export let dot: boolean = false
	export let anchor: Anchor = { x: 'right', y: 'top' }

	interface Anchor {
		x: 'left' | 'right'
		y: 'top' | 'bottom'
	}

	const anchorStyles = {
		left: 'left-0',
		right: 'right-0',
		top: 'top-0',
		bottom: 'bottom-0'
	}

	$: anchorStyle = `${anchorStyles[anchor.x]} ${anchorStyles[anchor.y]}`
</script>

<span class="relative inline-block">
	{#if dot}
		<span class={`absolute ${anchorStyle} inline-flex w-5 h-5 bg-red-500 rounded-full`} />
	{:else if value > min}
		<span
			class={`absolute ${anchorStyle} inline-flex items-center justify-center min-w-[1.25rem] p-1 text-xs leading-none text-white bg-red-500 rounded-full`}
		>
			{value <= max ? value : `${max}+`}
		</span>
	{/if}
	<slot />
</span>
