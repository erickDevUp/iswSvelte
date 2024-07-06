<script>
	import Tarea from '../../../../components/WriteTarea.svelte';
	import AddTask from '../../../../components/modals/AddTarea.svelte';
	import { tareaStore } from '../../../../store/tareaStore';
	import Orientacion from '../../../../components/ViewData.svelte';
	import RecursoEducativo from '../../../../components/ViewData.svelte';
	import { cargarTarea } from '../../../../helpers/cargarTarea';
	import { cargarOrientaciones } from '../../../../helpers/cargarOrientaciones';
	import { cargarRecursoED } from '../../../../helpers/cargarRecursoED';
	import { recursoEDStore } from '../../../../store/recursoEDStore';
	import { orientacionesIdStore } from '../../../../store/orientacionesStore';

	import { onMount } from 'svelte';

	export let data;
	const id = data.id;
	onMount(async () => {
		await cargarTarea('gestionarTarea/tareaUser/' + id + '/');
		await cargarOrientaciones(id);
		await cargarRecursoED('recursoEducativo/recurso/' + id + '/');
	});
	let fetchUrl = 'gestionarTarea/';
	let isShowAddTask = false;
</script>

<svelte:head>
	<title>GestionarTarea</title>
</svelte:head>
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
	{#if $recursoEDStore.length > 0}
		<div>
			<div class="section__header">
				<h1>Recursos Educativos</h1>
			</div>
		</div>

		<div class="cont">
			{#each $recursoEDStore as recursoED (recursoED.id)}
				<RecursoEducativo nombre={recursoED.nombre} id={recursoED.id} fileUrl={recursoED.archivo} />
			{/each}
		</div>
	{/if}
		<div>
			<div class="section__header">
				<h1>Tareas</h1>
				<div class="header__buttom">
					<button on:click={() => (isShowAddTask = true)}><span class="ti-plus"></span></button>
				</div>
			</div>
		</div>

		<div class="cont">
			{#each $tareaStore as tarea (tarea.id)}
				<Tarea
					nota={tarea.nota}
					nombreTarea={tarea.nombre}
					tipo={tarea.tipo}
					fileUrl={tarea.tareaArchivo}
					id={tarea.id}
				/>
			{/each}
		</div>
	<AddTask
		pageName={'Tarea'}
		method="POST"
		on:click={() => (isShowAddTask = false)}
		isShow={isShowAddTask}
		url={fetchUrl}
		idOrient={id}
	/>
</section>
