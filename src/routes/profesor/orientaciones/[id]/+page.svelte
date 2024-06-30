<script>
	import Tarea from '../../../../components/WriteNota.svelte';
	import AddRED from '../../../../components/modals/AddRED.svelte';
	import { tareaStore } from '../../../../store/tareaStore';
	import { orientacionesIdStore } from '../../../../store/orientacionesStore';
	import Orientacion from '../../../../components/WriteOrientacion.svelte';
	import RecursoEducativo from '../../../../components/WriteRED.svelte';
	import { cargarTarea } from '../../../../helpers/cargarTarea';
	import { cargarOrientaciones } from '../../../../helpers/cargarOrientaciones';
	import { cargarRecursoED } from '../../../../helpers/cargarRecursoED';
	import { recursoEDStore } from '../../../../store/recursoEDStore';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export let data;
	const id = data.id;
	let isShowAddRecursoED = false;

	onMount(async () => {
		await cargarTarea('gestionarTarea/tarea/' + id + '/');
		await cargarOrientaciones(id);
		await cargarRecursoED('recursoEducativo/recurso/' + id + '/');
	});

	const fetchUrl = 'recursoEducativo/';
</script>

<section>
	<div>
		<div class="section__header">
			<h1>Orientación</h1>
		</div>
	</div>
	<div class="cont">
		{#each $orientacionesIdStore as orientacion (orientacion.id)}
			<Orientacion
				id={orientacion.id}
				fechaEntrega={orientacion.fechaEntrega}
				nombre={orientacion.nombre}
				tipo={orientacion.tipo}
				fileUrl={orientacion.archivo}
			/>
		{/each}
	</div>

	<div>
		<div class="section__header">
			<h1>Recursos Educativos</h1>
			<div class="header__buttom">
				<button on:click={() => (isShowAddRecursoED = true)}><span class="ti-plus"></span></button>
			</div>
		</div>
	</div>
	{#if $recursoEDStore.length > 0}
		<div class="cont">
			{#each $recursoEDStore as recursoED (recursoED.id)}
				<RecursoEducativo
					nombre={recursoED.nombre}
					recursoID={recursoED.id}
					id={recursoED.id}
					fileUrl={recursoED.archivo}
				/>
			{/each}
		</div>
	{/if}

	{#if $tareaStore.length > 0}
		<div>
			<div class="section__header">
				<h1>Tareas</h1>
			</div>
		</div>
		<div class="cont">
			{#each $tareaStore as tarea (tarea.id)}
				<Tarea
					nota={tarea.nota}
					nombreTarea={tarea.nombre}
					nombreAlumno={tarea.Usuarios.first_name + ' ' + tarea.Usuarios.last_name}
					fileUrl={tarea.tareaArchivo}
					id={tarea.id}
				/>
			{/each}
		</div>
	{/if}
	<AddRED
		on:click={() => (isShowAddRecursoED = false)}
		isShow={isShowAddRecursoED}
		url={fetchUrl}
		pageName="Recurso Educativo"
		idOrient={id}
	/>
</section>
