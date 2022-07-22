<script lang="ts">
	export let data: any
	export let size: string = 'auto'
	export let color: string = 'default'

	const sizeStyles = {
		auto: 'w-auto h-auto',
		xs: 'w-2 h-2',
		sm: 'w-4 h-4',
		md: 'w-6 h-6',
		lg: 'w-8 h-8',
		xl: 'w-12 h-12'
	}

	const colorStyles = {
		default: 'text-theme',
		inherit: 'text-inherit',
		gray: 'text-gray-400',
		primary: 'text-primary',
		secondary: 'text-secondary',
		info: 'text-info-primary',
		success: 'text-success-primary',
		warning: 'text-warning-primary',
		error: 'text-error-primary'
	}

	$: sizeStyle = sizeStyles[size]
	$: colorStyle = colorStyles[color]
</script>

<svg
	class={$$props.class + ` inline ${sizeStyle} ${colorStyle}`}
	viewBox="0 0 20 20"
	xmlns="http://www.w3.org/2000/svg"
>
	<svelte:component this={data} />
</svg>
