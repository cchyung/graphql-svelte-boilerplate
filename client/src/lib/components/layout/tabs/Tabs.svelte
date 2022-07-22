<script lang="ts">
	import { goto } from '$app/navigation'
	import { Chip } from '$components/ui'

	export let options: Option[]
	export let selectedValue: any = undefined
	export let shrink: boolean = false
	export let divider: boolean = false

	interface Option {
		label: string
		subLabel?: string
		value?: any
		href?: string
	}

	$: shrinkStyle = shrink ? 'px-5' : 'px-12'
</script>

<div class="flex flex-col">
	<ul class="flex flex-row">
		{#each options as option, index}
			<li tabindex={index} class="relative group">
				<button
					class={`flex flex-row gap-1 items-center justify-center py-4 ${shrinkStyle} ${
						selectedValue === option.value
							? 'btn-text font-medium'
							: 'btn-text-lite font-light text-gray-600'
					}`}
					on:click={() => {
						selectedValue = option.value
						if (option.href) {
							goto(option.href)
						}
					}}
				>
					{option.label}
					{#if option.subLabel}
						<Chip size="xs" label={option.subLabel} />
					{/if}
				</button>
				<span
					class={`${
						selectedValue === option.value ? 'show' : 'hide'
					} absolute group-hover:show inset-x-0.5 bottom-0 bg-gradient-primary rounded-t-xl h-1`}
				/>
			</li>
		{/each}
	</ul>
	{#if divider}
		<hr class="border-gray-300" />
	{/if}
</div>
