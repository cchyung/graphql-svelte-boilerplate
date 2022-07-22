<script lang="ts">
	export let anchor = 'bottom'
	export let size = 'auto'
	export let variant = 'default'

	const anchorStyles = {
		left: 'left-0 -translate-x-[105%]',
		right: 'right-0 translate-x-[105%]',
		top: 'top-0 -translate-y-[105%]',
		bottom: 'bottom-0 translate-y-[105%]'
	}

	const sizeStyles = {
		auto: 'w-auto h-auto',
		full: 'w-full',
		xs: 'w-16',
		sm: 'w-32',
		md: 'w-48',
		lg: 'w-64',
		xl: 'w-96'
	}

	const variantStyles = {
		default: 'bg-white',
		blur: 'bg-white/70 backdrop-blur'
	}

	$: anchorStyle = anchorStyles[anchor]
	$: sizeStyle = sizeStyles[size]
	$: variantStyle = variantStyles[variant]
</script>

<div class="relative w-auto h-auto group">
	<div
		class={$$props.class +
			` absolute hide group-hover:show rounded-lg shadow-xl px-3 py-2 z-10 text-left ${anchorStyle} ${sizeStyle} ${variantStyle}`}
	>
		<slot name="tooltip" />
	</div>
	<slot />
</div>
