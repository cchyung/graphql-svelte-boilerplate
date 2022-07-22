<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { Icon } from '$components/ui'
	import { ChevronDown } from '$icons'

	export let label = ''
	export let open = false
	export let color: string = 'default'
	export let size: string = 'md'
	export let wide: boolean = false

	const colorStyles = {
		none: 'bg-none',
		default: 'bg-gray-100',
		blur: 'bg-gray-300/20 backdrop-blur',
		outlined: 'border-solid border border-gray-300 text-theme',
		primary: 'bg-primary',
		secondary: 'bg-secondary',
		'gradient-primary': 'bg-gradient-primary',
		'gradient-secondary': 'bg-gradient-secondary',
		'conic-gradient-primary': 'bg-conic-gradient-primary',
		'conic-gradient-secondary': 'bg-conic-gradient-secondary',
		info: 'bg-info-secondary text-info-primary',
		success: 'bg-success-secondary text-success-primary',
		warning: 'bg-warning-secondary text-warning-primary',
		error: 'bg-error-secondary text-error-primary',
		plus: 'bg-gray-300/20 text-success-primary',
		minus: 'bg-gray-300/20 text-error-primary'
	}

	const sizeStyles = {
		sm: 'caption',
		md: 'btn-text-lite',
		lg: 'heading',
		xl: 'title-3'
	}

	const dispatch = createEventDispatcher()

	const dispatchOpen = (open) => {
		if (open) {
			dispatch('open')
		}
	}

	$: colorStyle = colorStyles[color]
	$: sizeStyle = sizeStyles[size]
	$: dispatchOpen(open)
	$: wideStyle = wide ? '' : 'px-6'
</script>

<details bind:open class={`rounded-2xl cursor-pointer group ${colorStyle}`}>
	<summary
		class={`flex flex-row justify-between lg:body py-2 ${wideStyle} outline-none items-center`}
	>
		<slot name="label">
			<span class={`center ${sizeStyle} font-bold`}>
				{label}
			</span>
		</slot>

		<Icon
			data={ChevronDown}
			size="md"
			class="flex-none ml-3 group-open:rotate-180 transition-all ease-in-out duration-500"
		/>
	</summary>
	<div class={`${wideStyle} pb-5 w-full text-left ${sizeStyle}`}>
		<slot name="content" />
	</div>
</details>

<style lang="scss">
	details[open] summary ~ * {
		animation: sweep 0.1s ease-in-out;
	}

	@keyframes sweep {
		0% {
			opacity: 0;
			margin-top: -10px;
		}
		100% {
			opacity: 1;
			margin-top: 0px;
		}
	}

	summary {
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
</style>
