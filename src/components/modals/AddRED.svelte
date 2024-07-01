<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { recursoEDStore } from '../../store/recursoEDStore';
	import { toastError, toastSuccess } from '../helpers/toasts';
	export let isShow;
	let hasFiles = false;
	let formElement; 

	export let pageName;
	export let url;
	export let method = "POST";
	export let idOrient;

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
		formData.append('Orientaciones', parseInt(idOrient));
		
        const response = await addObject(url, formData, method);
        if (response) {
			formElement.reset();
			hasFiles=false;
            recursoEDStore.update(recursoEDs => [...recursoEDs, response]);
			toastSuccess('Acción realizada con éxito');
        } else {
            toastError('El nombre del recurso educativo ya se encuentra en el sistema');
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
			<input type="text" name="nombre" required pattern="[A-Za-z0-9 ]*" placeholder="Nombre del Recurso Educativo" title="Por favor no utilizar caracteres especiales." />
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
