<script>
	import { editarTarea, tareaStore } from '../../store/tareaStore';
	import { get } from "svelte/store"
	import { addObject } from '../../services/addObject';
	import Layout from './layout.svelte';
	import { createEventDispatcher } from 'svelte';
	export let isShow;
	let hasFiles = false;

		
	export let pageName;
	export let url;
	export let method = "PATCH";
	export let id;
	export let hiddenEdit;


	
	let tareas = get(tareaStore);
	let tarea = tareas.find(tarea=> tarea.id === id)

	const dispatch = createEventDispatcher();


	function handleFileInput(event) {
		const files = event.target.files;
		if (files.length > 0) {
			hasFiles = true;
		} else {
			hasFiles = false;
		}
	}

	async function submitForm(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const formData = new FormData(event.target); // Crear FormData directamente desde el formulario
		if (!hasFiles) {
            formData.delete('tareaArchivo'); // Remover el campo 'archivo' si no hay archivos seleccionados
        }
		
		// Enviar el FormData al servidor
        const response = await addObject(url, formData, method);
        if (response) {

			editarTarea(id, response);
			hiddenEdit();
			alert('Acción realizada con éxito');
        } else {
			
            alert('Error al enviar el formulario');
        }
    }
	//en img necesito un check img
</script>

<Layout {isShow}>
	<form on:submit|preventDefault={submitForm} class="modal">
		<div class="modal__t">
			<h1>Editar {pageName}</h1>
			<button on:click|preventDefault><span class="ti-close"></span></button>
		</div>
		<hr />
		<div class="content">
			<input type="text" name="nombre" value={tarea.nombre} required pattern="[A-Za-z0-9 ]*" placeholder="Tema de la Tarea" title="Por favor no utilizar caracteres especiales." />
			<input type="text" name="tipo" value={tarea.tipo} required  pattern="[A-Za-z0-9 ]*" placeholder="Tipo de la Tarea" title="Por favor no utilizar caracteres especiales." >
			
			<div class="drag__area">
				{#if hasFiles}
					<h2>Archivo seleccionado exitosamente</h2>
					<button>Cambiar archivo</button>
				{:else}
					<h2>Arrastra y suelta aquí<br> para cambiar su tarea</h2>
					<span>o</span>
					<button>Seleciona un archivo</button>
				{/if}
				<input type="file" name="tareaArchivo" id="input-file" class="addFile" multiple on:change={handleFileInput} />
			</div>
			<div id="preview"></div>
			<button on:click={handleClickCheck}>Enviar</button>
		</div>
	</form>
</Layout>