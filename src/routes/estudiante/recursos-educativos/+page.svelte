<script>
	import { onMount } from 'svelte';
	import RecursoEducativo from '../../../components/ViewData.svelte';
	import { cargarRecursoED } from '../../../helpers/cargarRecursoED';
	import { recursoEDStore } from '../../../store/recursoEDStore';
	import Search from '../../../components/Search.svelte';

	onMount(async () => {
		await cargarRecursoED();
	});

	const fetchUrl = 'recursoEducativo/';
</script>

<section>
  
<Search url={fetchUrl} getObject={cargarRecursoED} store={recursoEDStore} />
	<div>
		<div class="section__header">
			<h1>Recursos Educativos</h1>
		</div>
	</div>
  <div class="cont">
    {#each $recursoEDStore as recursoED (recursoED.id)}
			<RecursoEducativo
				nombre={recursoED.nombre}
				id={recursoED.id}
				fileUrl={recursoED.archivo}
			/>
		{/each}
</section>
