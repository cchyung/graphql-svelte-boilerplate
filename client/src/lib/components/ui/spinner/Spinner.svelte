<script lang="ts">
	import { Icon } from '$components/ui'
	import { Globe } from '$icons'

	export let variant: 'default' | 'black' = 'default'
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto' | 'full' | 'fit' = 'md'
	export let color: string = 'default'
	export let animation: 'none' | 'spin' | 'ping' | 'pulse' | 'bounce' = 'spin'

	const sizeStyleMap = {
		auto: 'w-auto h-auto',
		full: 'w-full h-full',
		fit: 'w-fit h-fit',
		xs: 'w-3 h-3',
		sm: 'w-6 h-6',
		md: 'w-10 h-10',
		lg: 'w-20 h-20',
		xl: 'w-36 h-36'
	}

	const animationStyleMap = {
		none: 'animate-none',
		spin: 'animate-spin',
		ping: 'animate-ping',
		pulse: 'animate-pulse',
		bounce: 'animate-bounce'
	}

	$: sizeStyle = sizeStyleMap[size]
	$: animationStyle = animationStyleMap[animation]
	$: iconVariant = Globe
</script>

<div class={`${sizeStyle} ${animationStyle}`}>
	<Icon data={iconVariant} {color} />
</div>
