<script lang="ts">
	import IconButton from './IconButton.svelte'

	export let iconButtons: iconButton[]

	interface iconButton {
		icon: any
		size?: string
		variant?: string
		scale?: number | string
		color?: string
		onClick: () => void
	}
</script>

{#if iconButtons?.length > 0}
	<div class={$$props.class + ' inline-flex items-center gap-4'}>
		{#each iconButtons as iconButton}
			<IconButton {...iconButton} on:click={iconButton.onClick} />
		{/each}
	</div>
{/if}
