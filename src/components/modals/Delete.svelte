<script>
	import Layout from './layout.svelte';

	import { createEventDispatcher } from 'svelte';
	export let mensaje ;
	export let isShow;

	const dispatch = createEventDispatcher();

	function handleClickCheck() {
		dispatch('check', { mensaje, isShow });
	}

	function handleClickClose() {
		dispatch('close', { mensaje, isShow });
	}
</script>

<Layout {isShow}>
	<div class={'alert'}>
		<div class="alert__e">
			<span class="ti-alert"></span>
			<p>{mensaje || "¿Está seguro que desea eliminar?"}</p>
		</div>
		<div class="alert__b">
			<button class="ti-check" name="eliminar" on:click|preventDefault={handleClickCheck}></button>
			<button class="ti-close" name="cancelar" on:click={handleClickClose}></button>
		</div>
	</div>
</Layout>
