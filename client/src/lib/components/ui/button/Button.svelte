<script lang="ts">
	import { Spinner } from '$components/ui'

	export let loading: boolean = false
	export let variant: string = 'default'
	export let wide: boolean = false
	export let disabled: boolean = false
	export let pill: boolean = true
	export let shrink: boolean = false

	const variantStyles = {
		default: 'bg-gray-200 text-black',
		outlined: 'border-solid border border-gray-300 text-theme',
		'outlined-primary': 'border-solid border border-primary text-primary',
		'outlined-secondary': 'border-solid border border-secondary text-secondary',
		primary: 'bg-primary text-black',
		secondary: 'bg-secondary text-black',
		'gradient-primary': 'bg-gradient-primary text-black hover:bg-gradient-primary-transitioned',
		'gradient-secondary': 'bg-gradient-secondary text-black',
		'conic-gradient-primary': 'bg-conic-gradient-primary text-black',
		'conic-gradient-secondary': 'bg-conic-gradient-secondary text-black',
		info: 'bg-info-secondary text-info-primary',
		success: 'bg-success-secondary text-success-primary',
		warning: 'bg-warning-secondary text-warning-primary',
		error: 'bg-error-secondary text-error-primary'
	}

	const commonStyle =
		'relative hover:shadow-lg transition duration-300 ease content-center items-center btn-text'
	$: variantStyle = variantStyles[variant]
	$: wideStyle = wide ? 'w-full' : 'object-contain'
	$: disabledStyle = disabled ? 'cursor-not-allowed grayscale' : ''
	$: borderStyle = pill ? 'rounded-full' : 'rounded-lg'
	$: shrinkStyle = shrink ? 'min-w-[0rem] px-4 py-3' : 'min-w-[10rem] px-10 py-3.5'
	$: visibilityStyle = loading ? 'invisible' : 'visible'
</script>

<button
	on:click
	type="button"
	class={$$props.class +
		` ${commonStyle} ${borderStyle} ${shrinkStyle} ${variantStyle} ${wideStyle} ${disabledStyle}`}
	disabled={loading || disabled}
>
	<span class={visibilityStyle}>
		<slot />
	</span>
	{#if loading}
		<div class="absolute w-full h-full center right-0 top-0">
			<Spinner variant="black" size="sm" animation="spin" />
		</div>
	{/if}
</button>
