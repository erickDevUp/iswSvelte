<script>
	import '../../styles/vm.css';
	import Layout from './layout.svelte';
	export let isShow;
	let hasFiles = false;
	let selectedOption = ''; // Variable para almacenar la opción seleccionada

	// Lista de opciones para el <select>
	const options = [
		{ value: 'opcion1', label: 'Opción 1' },
		{ value: 'opcion2', label: 'Opción 2' },
		{ value: 'opcion3', label: 'Opción 3' }
	];
	function handleFileInput(event) {
		const files = event.target.files;
		if (files.length > 0) {
			hasFiles = true;
		} else {
			hasFiles = false;
		}
	}
	//en img necesito un check img
</script>

<Layout {isShow}>
	<div class="modal">
		<div class="modal__t">
			<h1>Nueva Tarea</h1>
			<button on:click><span class="ti-close"></span></button>
		</div>
		<hr />
		<div class="content">
			<input type="text" placeholder="Asunto" />
			<select bind:value={selectedOption}>
				<option value="" disabled selected hidden>Selecciona una orientacion</option>
				{#each options as option}
					<option value={option.value}>{option.label}</option>
				{/each}
			</select>
			<div class="drag__area">
				{#if hasFiles}
					<h2>Archivo seleccionado exitosamente</h2>
					<button>Cambiar archivo</button>
				{:else}
					<h2>Arrastra y suelta aquí</h2>
					<span>o</span>
					<button>Seleciona un archivo</button>
				{/if}
				<input type="file" id="input-file" class="addFile" multiple on:change={handleFileInput} />
			</div>
			<div id="preview"></div>
			<button>Enviar</button>
		</div>
	</div>
</Layout>
