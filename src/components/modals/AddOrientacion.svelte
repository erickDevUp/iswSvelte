<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { orientacionesStore } from '../../store/orientacionesStore';
	export let isShow;
	let hasFiles = false;
	let formElement; 

	export let pageName;
	export let url;
	export let method = "POST";

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
        // Enviar el FormData al servidor
        const response = await addObject(url, formData, method);
        if (response) {
			formElement.reset();
			hasFiles=false;
            orientacionesStore.update(orientaciones => [...orientaciones, response]);
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
			<h1>Nueva {pageName}</h1>
			<button on:click|preventDefault><span class="ti-close"></span></button>
		</div>
		<hr />
		<div class="content">
			<input type="text" name="nombre" required pattern="[A-Za-z0-9 ]*" placeholder="Nombre de la Orientación" title="Por favor no utilizar caracteres especiales." />
			<input type="text" name="tipo" pattern="[A-Za-z0-9 ]*" placeholder="Tipo de Orientacion" title="Por favor, no utilizar caracteres especiales." />
			<input type="datetime-local" name="fechaEntrega" placeholder="Fecha de Entrega" />

			<div class="drag__area">
				{#if hasFiles}
					<h2>Archivo seleccionado exitosamente</h2>
					<button>Cambiar archivo</button>
				{:else}
					<h2>Arrastra y suelta aquí</h2>
					<span>o</span>
					<button>Seleciona un archivo</button>
				{/if}
				<input
					type="file"
					id="input-file"
					class="addFile"
					name="archivo"
					required
					on:change={handleFileInput}
				/>
			</div>
			<div id="preview"></div>
			<button>Enviar</button>
		</div>
	</form>
</Layout>
