<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { tareaStore, editarTarea } from '../../store/tareaStore';
	import { get } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { toastSuccess, toastError } from '../helpers/toasts';

	export let isShow;
	
	export let url;
	export let method = "PATCH";
	export let id;
	export let hiddenEdit;

	let Tareas = get(tareaStore);
	let nota = Tareas.find(tarea => tarea.id === id).nota;
	let notaValue = nota;	


	async function submitForm(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const formData = new FormData(event.target); // Crear FormData directamente desde el formulario
	
        const response = await addObject(url, formData, method);
		console.log(notaValue);
		if (notaValue>5) notaValue=5;
		if (notaValue<2) notaValue=2;
        if (response) {
			editarTarea(id, response);
			hiddenEdit();
			toastSuccess('Acción realizada con éxito');
        } else {
            toastError('Error al enviar el formulario');
        }
    }
</script>

<Layout {isShow}>
	<form class="modal" on:submit|preventDefault={submitForm}>
		<div class="modal__t">
			<h1>Asignar Nota</h1>
			<button on:click|preventDefault><span class="ti-close"></span></button>
		</div>
		<hr />
		<div class="content">
			<input type="number" name="nota"  bind:value={notaValue} required  placeholder="Asignar Nota" max="5" min="2" step="1" />
			<button>Asignar</button>
		</div>
	</form>
</Layout>