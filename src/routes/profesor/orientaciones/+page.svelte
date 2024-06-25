<script>
	import Orientacion from '../../../components/WriteData.svelte';
	import { obtOrientaciones } from '../../../services/obtOrientaciones';
	import AddObject from "../../../components/modals/AddObject.svelte";
	import { orientacionesStore } from '../../../store/orientacionesStore';
	import Search from '../../../components/Search.svelte';
	import{cargarOrientaciones} from '../../../helpers/cargarOrientaciones';
	import { onMount } from 'svelte';
    let isShowAddOrientacion = false;



	onMount(async () => {
		await cargarOrientaciones();
	});
</script>

<section>
	<div>
		<Search url="gestionarOrientacion/"></Search>
		<div class="section__header">
			
			<h1>Orientaciones</h1>
			<div class="header__buttom">
				<button on:click={() => isShowAddOrientacion = true}><span class="ti-plus"></span></button>
				
			</div>
		</div>
	</div>
	<div class="cont">
		{#each $orientacionesStore as orientacion (orientacion.id)}
      		<Orientacion id={orientacion.id} fechaEntrega={orientacion.fechaEntrega} nombre={orientacion.nombre} tipo={orientacion.tipo} fileUrl={orientacion.archivo} />
		{/each}
	</div>
	
    <AddObject on:click={() => isShowAddOrientacion = false} isShow={isShowAddOrientacion} url="gestionarOrientacion/" pageName="Orientación"/>
</section>
