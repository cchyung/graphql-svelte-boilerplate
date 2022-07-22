<script>
	import CreatePanel from '$lib/components/create/SetupPanel/CreatePanel.svelte'
</script>

<div class="flex mx-auto max-w-[1200px] my-20 gap-20 px-10">
	<div class="w-[60%]">
		<slot name="content" />
	</div>

	<slot name="panel" />
</div>
