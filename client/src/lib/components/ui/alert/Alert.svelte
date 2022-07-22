<script lang="ts">
	import { Card } from '../card'

	export let title: string = undefined
	export let message: string
</script>

<div class="fixed inset-0 h-full w-full overscroll-none bg-black/60 backdrop-blur-md z-20 center">
	<Card class={`${$$props.class} flex flex-col gap-2 text-left px-8 py-6 `}>
		<span class="title-4 font-bold">{title}</span>
		<span class="body">{message}</span>
		<slot />
	</Card>
</div>
