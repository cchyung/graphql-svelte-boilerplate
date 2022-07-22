<script lang="ts">
	export let variant: 'default' | 'shadow' | 'outlined' | 'glow' = 'default'
	export let color: string = 'default'
	export let texture: 'default' | 'blur' | 'slate' | 'none' = 'default'
	export let full: boolean = false
	export let img: string = undefined
	export let flush: boolean = false

	const variantStyles = {
		default: 'shadow-none',
		shadow: 'shadow-md',
		outlined: 'border-solid border-2',
		glow: 'shadow'
	}
	const variantColorStyles = {
		default: {
			gray: 'bg-zinc-100 dark:bg-zinc-800',
			'light-gray': 'bg-gray-50'
		},
		shadow: {
			default: 'dark:shadow-white shadow-gray',
			gray: 'dark:shadow-white bg-gray-50',
			white: 'shadow-lg shadow-gray-200 bg-gray-50',
			primary: 'shadow-primary',
			secondary: 'shadow-secondary',
			'gradient-primary': 'shadow-gradient-primary',
			'gradient-secondary': 'shadow-gradient-secondary'
		},
		outlined: {
			default: '',
			primary: 'border-primary',
			secondary: 'border-secondary',
			'gradient-primary':
				'ring-gradient ring-gradient-primary ring-gradient-1 ring-gradient-rounded-xl',
			'gradient-secondary':
				'ring-gradient ring-gradient-secondary ring-gradient-1 ring-gradient-rounded-xl'
		},
		glow: {
			default: 'shadow-glow dark:shadow-glow-dark',
			primary: 'shadow-glow-primary',
			secondary: 'shadow-glow-secondary'
		}
	}

	const textureStyles = {
		none: '',
		default: 'bg-white dark:bg-gray-800',
		blur: 'bg-white-100/60 dark:bg-zinc-800/80 backdrop-blur',
		slate: 'bg-zinc-100 dark:bg-zinc-800'
	}

	const commonStyle = `flex rounded-xl text-theme ${!flush && 'p-2'}`
	$: fullStyle = full ? 'w-full h-full' : ''
	$: variantStyle = variantStyles[variant]
	$: variantColorStyle = color !== 'default' ? variantColorStyles[variant][color] : ''
	$: textureStyle = textureStyles[texture]
	$: imgStyle = img ? `bg-cover bg-center bg-no-repeat` : ''
</script>

<div
	on:click
	class={$$props.class +
		` ${commonStyle} ${variantStyle} ${variantColorStyle} ${textureStyle} ${fullStyle} ${imgStyle}`}
	style={img
		? `background-image: linear-gradient(to bottom, rgb(255, 255, 255, 0.2), rgb(255, 255, 255, 1)), url('${img}')`
		: ''}
>
	<slot />
</div>
