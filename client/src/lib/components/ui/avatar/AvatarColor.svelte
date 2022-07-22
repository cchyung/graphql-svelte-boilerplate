<script lang="ts">
	export let color: string = 'primary'
	export let size: 'auto' | 'sm' | 'md' | 'lg' | 'xl' = 'auto'
	export let variant: 'circle' | 'rounded' | 'square' = 'circle'

	const colorStyles = {
		default: 'bg-gray-200',
		primary: 'bg-primary',
		secondary: 'bg-secondary',
		'gradient-primary': 'bg-gradient-primary',
		'gradient-secondary': 'bg-gradient-secondary',
		'conic-gradient-primary': 'bg-conic-gradient-primary',
		'conic-gradient-secondary': 'bg-conic-gradient-secondary'
	}

	const sizeStyles = {
		auto: 'w-full h-full',
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
		xl: 'w-32 h-32'
	}

	const variantStyles = {
		circle: 'rounded-full',
		rounded: 'rounded-xl',
		square: 'rounded-none'
	}

	const commonStyle = 'object-cover rounded-full inline-block'
	$: colorStyle = colorStyles[color]
	$: sizeStyle = sizeStyles[size]
	$: variantStyle = variantStyles[variant]
</script>

<span class={`${commonStyle} ${colorStyle} ${sizeStyle} ${variantStyle}`} />
