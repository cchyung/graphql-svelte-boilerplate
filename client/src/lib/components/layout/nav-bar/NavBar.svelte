<script lang="ts">
	import { goto } from '$app/navigation'
	import { Icon } from '$components/ui'

	export let header: any
	export let options: Option[]
	export let selectedIndex: number = undefined
	export let selectedValue: any = undefined
	export let fixed: boolean = true
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let orientation: 'vertical' | 'horizontal' = 'vertical'

	interface Option {
		component: any
		props: Object
		value?: any
		href?: string
		styles?: {
			active?: 'ring' | 'bar' // default ring
			color?: 'default' | 'gray'
		}
	}

	const displayStyles = {
		vertical: 'sticky top-0 h-screen',
		horizontal: 'sticky top-0 w-screen'
	}

	const sizeStyles = {
		vertical: {
			sm: 'w-6 h-6 mx-2',
			md: 'w-12 h-12 mx-3',
			lg: 'w-24 h-24 mx-4'
		},
		horizontal: {
			sm: 'w-6 h-6 my-2',
			md: 'w-12 h-12 my-3',
			lg: 'w-24 h-24 my-4'
		}
	}

	const orientationStyles = {
		vertical: 'flex flex-col w-fit h-full py-6',
		horizontal: 'flex flex-row w-3/4 h-fit px-6'
	}

	const headerOrientationStyles = {
		vertical: 'mb-10',
		horizontal: 'mr-10'
	}

	$: displayStyle = fixed ? displayStyles[orientation] : 'relative'
	$: sizeStyle = sizeStyles[orientation][size]
	$: orientationStyle = orientationStyles[orientation]
	$: headerOrientationStyle = headerOrientationStyles[orientation]
</script>

<nav class={displayStyle} style="width: 72px;">
	<!-- scroll just latter section -->
	<ul
		class={`${orientationStyle} gap-6 justify-start text-center bg-theme-secondary shadow-theme rounded-br-xl overflow-auto`}
		style="position: fixed;"
	>
		<li>
			<button
				class={`${sizeStyle} ${headerOrientationStyle}`}
				on:click={() => {
					goto('/home')
				}}
			>
				{#if typeof header === 'string'}
					<img src={header} alt="header" />
				{:else}
					<Icon data={header} />
				{/if}
			</button>
		</li>
		{#each options as option, index}
			<li tabindex={index} class={`relative group`}>
				<button
					class={`rounded-full ${sizeStyle} ${
						!option.styles?.active || option.styles.active === 'ring'
							? `${
									selectedIndex === index ? 'ring-gradient' : 'ring-gradient-hover'
							  } ring-gradient ring-gradient-primary ring-gradient-2 ring-gradient-offset-2`
							: ''
					} ${option.styles?.color === 'gray' ? 'bg-gray-200/70' : ''}`}
					on:click={() => {
						selectedIndex = index
						selectedValue = option.value
						if (option.href) {
							goto(option.href)
						}
					}}
				>
					<svelte:component this={option.component} {...option.props} />
				</button>
				{#if option.styles?.active === 'bar'}
					<span
						class={`${
							selectedIndex === index ? 'show' : 'hide'
						} absolute group-hover:show inset-y-0 left-0 bg-gradient-primary-rotated rounded-r-xl w-1`}
					/>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
