<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { orientacionesStore,editarOrientacion } from '../../store/orientacionesStore';
	import { get } from 'svelte/store';
	export let isShow;
	let hasFiles = false;
	let formElement; 

	export let pageName;
	export let url;
	export let method = "PATCH";
	export let id;
	export let hiddenEdit;

	let orientaciones = get(orientacionesStore);
	let orientacion = orientaciones.find(orientacion => orientacion.id === id);
	let parseDateTime = new Date(orientacion.fechaEntrega).toISOString().split('.')[0].replace('Z', '').replace('T', 'T').substring(0, 16);

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
			editarOrientacion(id, response);
			hiddenEdit();
			alert('Acción realizada con éxito');
        } else {
            alert('El nombre de la orientación ya se encuentra en el sistema');
        }
    }

	//en img necesito un check img
</script>

<Layout {isShow}>
	<form class="modal" bind:this={formElement} on:submit|preventDefault={submitForm}>
		<div class="modal__t">
			<h1>Editar {pageName}</h1>
			<button on:click|preventDefault><span class="ti-close"></span></button>
		</div>
		<hr />
		<div class="content">
			<input type="text" name="nombre" value={orientacion.nombre} required pattern="[A-Za-z0-9 ]*" placeholder="Nombre de la Orientación" title="Por favor, no utilizar caracteres especiales." />
			<input type="text" name="tipo" value={orientacion.tipo} pattern="[A-Za-z0-9 ]*" placeholder="Tipo de Orientacion" title="Por favor, no utilizar caracteres especiales." />
			<input type="datetime-local" name="fechaEntrega" value={parseDateTime} placeholder="Fecha de Entrega" />

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
