<script lang="ts">
	import Accordion from './Accordion.svelte'

	export let accordions: AccordionData[]
	export let title = undefined
	export let color: string = 'default'
	export let size: string = 'md'

	interface AccordionData {
		label: string
		data: any
	}
</script>

<div class="text-left text-theme">
	{#if title}
		<div class="title-4 lg:title-3 uppercase mb-6 ml-6">{title}</div>
	{/if}
	<div class="flex flex-col gap-1">
		{#each accordions as accordion}
			<Accordion label={accordion.label} {color} {size} wide>
				<slot data={accordion.data} name="content" />
			</Accordion>
		{/each}
	</div>
</div>
