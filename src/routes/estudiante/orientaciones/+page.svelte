<script>
	import Orientacion from '../../../components/ViewData.svelte';
	import { onMount } from 'svelte';
	import { cargarOrientaciones } from '../../../helpers/cargarOrientaciones';
	import { orientacionesStore } from '../../../store/orientacionesStore';
	import Search from '../../../components/Search.svelte';


	onMount(async () => {
		await cargarOrientaciones();
	});

	const fetchUrl = 'gestionarOrientacion/';
</script>

<section>
	<Search url={fetchUrl} getObject={cargarOrientaciones} store={orientacionesStore} />
	<div>
		<div class="section__header">
			<h1>Orientaciones</h1>
		</div>
	</div>
	<div class="cont">
		{#each $orientacionesStore as orientacion (orientacion.id)}
			<a class="link" href="/estudiante/orientaciones/{orientacion.id}">
				<Orientacion
					nombre={orientacion.nombre}
					tipo={orientacion.tipo}
					fileUrl={orientacion.archivo}
					fechaEntrega={orientacion.fechaEntrega}
				/>
			</a>
		{/each}
	</div>
</section>
