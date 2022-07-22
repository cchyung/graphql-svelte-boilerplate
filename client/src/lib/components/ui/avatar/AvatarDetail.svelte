<script lang="ts">
	import { Icon } from '$components/ui'
	import { ExternalLink } from '$icons'

	export let size: string = 'md'
	export let wide: boolean = false
	export let label: string
	export let caption: string = undefined
	export let link: string = undefined

	const sizeStyles = {
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-20 w-20'
	}

	const labelSizeStyles = {
		sm: 'caption font-normal',
		md: 'body font-bold'
		// lg: 'title-4 font-bold'
	}

	const labelWidthStyles = {
		sm: 'w-24',
		md: 'w-40',
		lg: 'w-60'
	}

	const captionSizeStyles = {
		sm: 'caption-3',
		md: 'caption',
		lg: 'body'
	}

	const iconScales = {
		sm: 'w-2 h-2',
		md: 'w-3 h-3',
		lg: 'w-5 h-5'
	}

	$: sizeStyle = sizeStyles[size]
	$: labelSizeStyle = labelSizeStyles[size]
	$: labelWidthStyle = wide ? 'w-auto' : labelWidthStyles[size]
	$: captionSizeStyle = captionSizeStyles[size]
	$: iconScale = iconScales[size]
</script>

<div class={$$props.class + ` flex flex-row`}>
	<div class={`center ${sizeStyle} relative`}>
		<slot />
	</div>
	<div class={`flex flex-col justify-center text-left ml-3 ${labelWidthStyle}`}>
		<span class={`truncate ${labelSizeStyle}`}>
			{label}
		</span>
		{#if caption}
			<div class={`flex flex-row ${captionSizeStyle}`}>
				<span class="truncate">
					{caption}
				</span>
				{#if link}
					<a href={link} class="ml-0.5 leading-none" target="_blank">
						<Icon data={ExternalLink} class={iconScale} />
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>
