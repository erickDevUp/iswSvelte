<script>
	import Tarea from '../../../components/WriteTarea.svelte';
	import AddTask from '../../../components/modals/AddTask.svelte';
	import { tareaStore } from '../../../store/tareaStore';
	import { cargarTarea } from '../../../helpers/cargarTarea';

	import { onMount } from 'svelte';

	onMount(async () => {
		await cargarTarea();
	});
	let fetchUrl = "gestionarTarea/"
	let isShowAddTask = false;
</script>

<section>
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
				nombreOrientacion={tarea.Orientaciones.nombre}
				tipo={tarea.tipo}
				fileUrl={tarea.tareaArchivo}
				id={tarea.id}
				fechaEntrega={tarea.Orientaciones.fechaEntrega}
			/>
		{/each}
	</div>
	<AddTask pageName={"Tarea"} method="POST" on:click={() => (isShowAddTask = false)} isShow={isShowAddTask} url={fetchUrl} />
</section>
