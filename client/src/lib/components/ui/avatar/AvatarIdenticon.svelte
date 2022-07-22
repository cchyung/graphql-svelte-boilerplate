<script lang="ts">
	export let address: string = undefined
	export let size: string = 'auto'
	export let blur: boolean = false

	const sizeStyles = {
		auto: 'w-full h-full',
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
		xl: 'w-32 h-32'
	}

	const colors = [
		'#01888C', // teal
		'#FC7500', // bright orange
		'#034F5D', // dark teal
		'#F73F01', // orangered
		'#FC1960', // magenta
		'#C7144C', // raspberry
		'#F3C100', // goldenrod
		'#1598F2', // lightning blue
		'#2465E1', // sail blue
		'#F19E02', // gold
		'#FFFFFF' // white
	]

	const generateBackground = (seed) => {
		let direction = (seed % 24) * 15
		let color1 = colors[seed % colors.length]
		let offset1 = seed % 13
		let color2 = colors[(seed + offset1) % colors.length]
		return `linear-gradient(${direction}deg, ${color1} 0%, ${color2} 100%)`
	}

	$: sizeStyle = sizeStyles[size]
	$: seed = address ? parseInt(address.slice(0, 10), 16) : ''
	$: background = generateBackground(seed)
</script>

<div class="relative {sizeStyle}">
	<div
		class={$$props.class + ` rounded-full w-full h-full z-1 absolute`}
		style={`background: ${background}`}
	/>
	{#if blur}
		<div
			class={$$props.class + ` rounded-full w-full h-full z-0 absolute blur-lg`}
			style={`background: ${background}`}
		/>
	{/if}
</div>

<style lang="scss">
</style>
