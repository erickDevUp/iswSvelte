<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { profesoresStore, editarProfesor } from '../../store/profesoresStore';
	import { get } from 'svelte/store';
	export let isShow;
	let formElement;

	export let pageName;
	export let url;
	export let method = 'PATCH';
	export let id;
	export let hiddenEdit;

	let profesores = get(profesoresStore);
	let profesor = profesores.find((profesor) => profesor.id === id);

	async function submitForm(event) {
		event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
		const formData = new FormData(event.target); // Crear FormData directamente desde el formulario
		// Enviar el FormData al servidor
		formData.set('username', formData.get('username').toLowerCase());
		formData.set('email', formData.get('email').toLowerCase());
		const response = await addObject(url, formData, method);
		if (response) {
			editarProfesor(id, response);
			alert('Acción realizada con éxito');
			hiddenEdit();
		} else {
			alert('El Profesor ya se encuentra en el sistema');
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
			<input
				name="username"
				type="text"
				value="{profesor.username}"
				placeholder="Nombre de usuario"
				required
				pattern="[a-zA-Z0-9]*"
				
			/>
			<input name="email" type="email" value="{profesor.email}" placeholder="Email" required lowerCase />
			<input
				name="first_name"
				type="text"
				placeholder="Nombre"
				value="{profesor.first_name}"
				required
				pattern="[a-zA-Z0-9]*"
			/>
			<input
				name="last_name"
				type="text"
				placeholder="Apellido"
				value="{profesor.last_name}"
				required
				pattern="[a-zA-Z0-9]*"
			/>

			<button>Enviar</button>
		</div>
	</form>
</Layout>
