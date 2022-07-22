<script lang="ts">
	export let variant: string = 'default'
	export let label: string = ''
	export let clickable: boolean = false
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
	export let shadow: boolean = false

	const variantStyles = {
		default: 'bg-gray-100',
		blur: 'bg-gray-100/60 backdrop-blur',
		clean: 'bg-theme text-theme',
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

	const variantClickableStyles = {
		default: 'active:bg-gray-200',
		blur: 'active:bg-gray-300/60 backdrop-blur',
		clean: 'active:opacity-60',
		outlined: 'active:bg-gray-300/20',
		primary: 'active:bg-primary-focus',
		secondary: 'active:bg-secondary-focus',
		info: 'active:opacity-60',
		success: 'active:opacity-60',
		warning: 'active:opacity-60',
		error: 'active:opacity-60',
		plus: 'active:opacity-60',
		minus: 'active:opacity-60'
	}

	const sizeStyles = {
		xs: 'px-2 py-0.5 sub-heading',
		sm: 'px-2 py-1 sub-heading',
		md: 'px-2 py-1 body font-bold',
		lg: 'px-3 py-2 heading',
		xl: 'px-4 py-2 title-4 font-bold'
	}

	const commonStyle = 'rounded-full align-center w-max'
	$: variantStyle = variantStyles[variant]
	$: clickableStyle = clickable
		? `${variantClickableStyles[variant] || ''} cursor-pointer transition duration-300`
		: ''
	$: sizeStyle = sizeStyles[size]
	$: shadowStyle = shadow ? 'shadow' : ''
</script>

<span
	on:click
	class={$$props.class +
		` ${commonStyle} ${variantStyle} ${clickableStyle} ${sizeStyle} ${shadowStyle} whitespace-nowrap`}
>
	{#if label}
		{label}
	{:else}
		<slot />
	{/if}
</span>
