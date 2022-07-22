<script lang="ts">
	import { Icon } from '$components/ui'

	export let icon: any = undefined
	export let size: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
	export let variant: string = 'default'
	export let color: string = 'default'
	export let disabled: boolean = false

	const sizeStyles = {
		auto: 'w-auto h-auto',
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-12 h-12'
	}

	const variantStyles = {
		none: 'bg-transparent',
		default: 'bg-gray-100',
		white: 'bg-white',
		blur: 'bg-gray-300/50 backdrop-blur',
		outlined: 'border-solid border border-gray-300',
		'outlined-primary': 'border-solid border border-primary',
		'outlined-secondary': 'border-solid border border-secondary',
		primary: 'bg-primary',
		secondary: 'bg-secondary',
		'gradient-primary': 'bg-gradient-primary',
		'gradient-secondary': 'bg-gradient-secondary',
		'conic-gradient-primary': 'bg-conic-gradient-primary',
		'conic-gradient-secondary': 'bg-conic-gradient-secondary',
		success: 'bg-success-secondary text-success-primary',
		info: 'bg-info-secondary text-info-primary',
		warning: 'bg-warning-secondary text-warning-primary',
		error: 'bg-error-secondary text-error-primary'
	}

	const commonStyle = `content-center items-center rounded-full leading-none ${
		variant == 'none' ? 'hover:none' : 'hover:shadow-md'
	}`
	$: sizeStyle = sizeStyles[size]
	$: variantStyle = variantStyles[variant]
	$: disabledStyle = disabled ? 'cursor-not-allowed' : ''
</script>

<button
	on:click
	{disabled}
	class={$$props.class + ` ${commonStyle} ${sizeStyle} ${variantStyle} ${disabledStyle}`}
>
	{#if icon}
		<Icon {color} data={icon} {size} />
	{:else}
		<slot />
	{/if}
</button>
