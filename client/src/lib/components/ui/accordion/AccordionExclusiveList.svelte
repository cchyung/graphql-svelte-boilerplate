<script lang="ts">
	import Accordion from './Accordion.svelte'

	export let accordions: AccordionData[]
	export let title = undefined
	export let selectedKey: string = undefined
	export let selectedData: any = accordions[selectedKey]?.data

	interface AccordionData {
		label: string
		key: string
		data: any
	}

	const updateSelection = (accordionData: AccordionData) => {
		selectedKey = accordionData.key
		selectedData = accordionData.data
	}
</script>

<div class="text-left text-theme">
	{#if title}
		<div class="title-4 lg:title-3 uppercase mb-6 ml-6">{title}</div>
	{/if}
	<div class="flex flex-col gap-1">
		{#each accordions as accordion}
			<Accordion
				open={selectedKey === accordion.key}
				on:open={() => {
					updateSelection(accordion)
				}}
				label={accordion.label}
			>
				<slot data={accordion.data} slot="content" />
			</Accordion>
		{/each}
	</div>
</div>
