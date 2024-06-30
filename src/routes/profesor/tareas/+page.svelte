<script>
	import Tarea from '../../../components/WriteNota.svelte';
	import Search from '../../../components/Search.svelte';
	import { tareaStore } from '../../../store/tareaStore';
	import { cargarTarea } from '../../../helpers/cargarTarea';

	import { onMount } from 'svelte';

	onMount(async () => {
		await cargarTarea();
	});
</script>

<section>
	<Search/>
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
				nombreAlumno={tarea.Usuarios.first_name+" "+tarea.Usuarios.last_name}
				nombreOrientacion={tarea.Orientaciones.nombre}
				tipo={tarea.tipo}
				fileUrl={tarea.tareaArchivo}
				id={tarea.id}
			/>
		{/each}
	</div>
</section>
