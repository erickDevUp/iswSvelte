<script>
	import RecursoEducativo from '../../../components/WriteRED.svelte';
	import { cargarRecursoED } from '../../../helpers/cargarRecursoED';
	import { recursoEDStore } from '../../../store/recursoEDStore';
	import AddRED from '../../../components/modals/AddRED.svelte';
	import Search from '../../../components/Search.svelte';
	import { onMount } from 'svelte';
	let isShowAddRecursoED = false;

	onMount(async () => {
		await cargarRecursoED();
	});

	const fetchUrl = 'recursoEducativo/';
	console.log($recursoEDStore);
</script>

<section>
	<Search url={fetchUrl} getObject={cargarRecursoED} store={recursoEDStore} />

	<div>
		<div class="section__header">
			<h1>Recursos Educativos</h1>
			<div class="header__buttom">
				<button on:click={() => (isShowAddRecursoED = true)}><span class="ti-plus"></span></button>
			</div>
		</div>
	</div>
	<div class="cont">
		{#each $recursoEDStore as recursoED (recursoED.id)}
			<RecursoEducativo
				id={recursoED.id}
				nombre={recursoED.nombre}
				tipo={recursoED.tipo}
				fileUrl={recursoED.archivo}
			/>
		{/each}
	</div>
	<AddRED
		on:click={() => (isShowAddRecursoED = false)}
		isShow={isShowAddRecursoED}
		url={fetchUrl}
		pageName="Recurso Educativo"
	/>
</section>
