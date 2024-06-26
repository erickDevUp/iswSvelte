<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { recursoEDStore,editarRecursoED } from '../../store/recursoEDStore';
	import { get } from 'svelte/store';
	export let isShow;
	let hasFiles = false;
	let formElement; 

	export let pageName;
	export let url;
	export let method = "PATCH";
	export let id;

	let recursoEDs = get(recursoEDStore);
	let recursoED = recursoEDs.find(recursoED => recursoED.id === id);

	function handleFileInput(event) {
		if (event.target.files.length > 0) {
			hasFiles = true;
		} else {
			hasFiles = false;
		}
	}
	async function submitForm(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const formData = new FormData(event.target); // Crear FormData directamente desde el formulario
		if (!hasFiles) {
            formData.delete('archivo'); // Remover el campo 'archivo' si no hay archivos seleccionados
        }
		// Enviar el FormData al servidor
        const response = await addObject(url, formData, method);
        if (response) {
			formElement.reset();
			hasFiles=false;
			editarRecursoED(id, response);
			alert('Se ha enviado correctamente');
        } else {
            alert('Error al enviar el formulario');
        }
    }

	//en img necesito un check img
</script>

<Layout {isShow}>
	<form class="modal" bind:this={formElement} on:submit|preventDefault={submitForm}>
		<div class="modal__t">
			<h1>Nuevo {pageName}</h1>
			<button on:click|preventDefault><span class="ti-close"></span></button>
		</div>
		<hr />
		<div class="content">
			<input type="text" name="nombre" value={recursoED.nombre} required pattern="[A-Za-z0-9 ]*" placeholder="Nombre del Recurso Educativo" title="Por favor no utilizar caracteres especiales." />
			
			<div class="drag__area">
				{#if hasFiles}
					<h2>Archivo seleccionado exitosamente</h2>
					<button>Cambiar archivo</button>
				{:else}
					<h2>Ya tienes un archivo seleccionado</h2>
					<button>Cambiar archivo</button>
				{/if}
				<input
					type="file"
					id="input-file"
					class="addFile"
					name="archivo"
					on:change={handleFileInput}
				/>
			</div>
			<div id="preview"></div>
			<button>Enviar</button>
		</div>
	</form>
</Layout>
