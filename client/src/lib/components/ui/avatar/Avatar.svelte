<script lang="ts">
	export let src: string
	export let alt: string
	export let size: string = 'auto'
	export let variant: 'circle' | 'rounded' | 'square' = 'circle'
	export let blur: boolean = false

	const sizeStyles = {
		auto: 'w-full h-full',
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
		xl: 'w-32 h-32'
	}

	const variantStyles = {
		circle: 'rounded-full',
		rounded: 'rounded-lg',
		square: 'rounded-md'
	}

	const commonStyle = 'object-cover rounded-full overflow-hidden'
	$: sizeStyle = sizeStyles[size]
	$: variantStyle = variantStyles[variant]
</script>

<div class={`${sizeStyle} relative z-0`}>
	<img
		class={$$props.class + ` ${commonStyle} ${variantStyle} absolute w-full h-full z-10`}
		{src}
		{alt}
	/>
	{#if blur}
		<img
			class={$$props.class + ` ${commonStyle} ${variantStyle} blur-lg absolute w-full h-full z-0`}
			{src}
			{alt}
		/>
	{/if}
</div>
