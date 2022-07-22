<script lang="ts">
	export let value: number
	export let max: number = 100
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
	export let color: string = 'default'
	export let background: string = 'default'

	const sizeStyles = {
		xs: 'h-0.5',
		sm: 'h-1',
		md: 'h-2',
		lg: 'h-3',
		xl: 'h-5'
	}

	const colorStyles = {
		default: 'bg-black',
		primary: 'bg-primary',
		secondary: 'bg-secondary',
		'gradient-primary': 'bg-gradient-primary',
		'gradient-secondary': 'bg-gradient-secondary',
		'conic-gradient-primary': 'bg-conic-gradient-primary',
		'conic-gradient-secondary': 'bg-conic-gradient-secondary'
	}

	const backgroundStyles = {
		default: 'bg-gray-100/30',
		gray: 'bg-gray-200'
	}

	const calculateValue = (val): number => {
		const valPercentage = (val / max) * 100
		return valPercentage > 100 ? 100 : valPercentage
	}

	$: sizeStyle = sizeStyles[size]
	$: colorStyle = colorStyles[color]
	$: backgroundStyle = backgroundStyles[background]
	$: formattedValue = calculateValue(value)
</script>

<div class={`${$$props.class} shadow w-full rounded-full ${backgroundStyle} ${sizeStyle}`}>
	<div class={`rounded-full ${sizeStyle} ${colorStyle}`} style={`width: ${formattedValue}%`} />
</div>
