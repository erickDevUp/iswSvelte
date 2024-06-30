<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { tareaStore, editarTarea } from '../../store/tareaStore';
	import { get } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';

	export let isShow;
	
	export let url;
	export let method = "PATCH";
	export let id;

	let Tareas = get(tareaStore);
	let nota = Tareas.find(tarea => tarea.id === id).nota;
	let notaValue = nota;

	const dispatch = createEventDispatcher();
	function handleClickCheck() {
		dispatch('send', { isShow });
	}


	async function submitForm(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const formData = new FormData(event.target); // Crear FormData directamente desde el formulario
	
        const response = await addObject(url, formData, method);

        if (response) {
			editarTarea(id, response);
			alert('Acción realizada con éxito');
        } else {
            alert('Error al enviar el formulario');
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
			<input type="number" name="nota"  bind:value={notaValue}  placeholder="Asignar Nota" max="5" min="2" step="1" />
			<button on:click={handleClickCheck}>Asignar</button>
		</div>
	</form>
</Layout>