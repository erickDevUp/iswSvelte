<script>
	import Profesor from '../../components/WriteProfesor.svelte';
	import { profesoresStore } from '../../store/profesoresStore';
	import { cargarProfesor } from '../../helpers/cargarProfesor';
	import AddProfesor from '../../components/modals/AddProfesor.svelte';
	import Search from '../../components/Search.svelte';
	import { onMount } from 'svelte';
	let isShowAddProfesor = false;

	onMount(async () => {
		await cargarProfesor();
	});

	const fetchUrl = 'gestionarProfesor/';
</script>

<section>
	<Search url={fetchUrl} getObject={cargarProfesor} store={profesoresStore} />
	<div>
		<div class="section__header">
			<h1>Profesores</h1>
			<div class="header__buttom">
				<button on:click={() => (isShowAddProfesor = true)}><span class="ti-plus"></span></button>
			</div>
		</div>
	</div>
	<div class="cont">
		{#each $profesoresStore as profesor (profesor.id)}
			<Profesor
				id={profesor.id}
				nombre={profesor.first_name + ' ' + profesor.last_name}
				email={profesor.email}
				nombreUsuario={profesor.username}
			/>
		{/each}
	</div>
	<AddProfesor
		on:click={() => (isShowAddProfesor = false)}
		isShow={isShowAddProfesor}
		
	/>
</section>
