<script>
	import Alert from './modals/Delete.svelte';
	import EditObject from './modals/EditOrientacion.svelte';
	import { parseFecha } from '../helpers/parseFecha';
	import { delObject} from "../services/delObject";
	import { eliminarOrientacion } from '../store/orientacionesStore';
	import { toastError, toastSuccess } from './helpers/toasts';
    let isShowDelete = false;
	let isShowEdit = false;
    
	export let nombre;
	export let tipo = '';
	export let fechaEntrega = null;
	export let fileUrl;
	export let id;
	
	let fetchUrl = "gestionarOrientacion/"+id+"/"

	function hiddenEdit() {
    isShowEdit = false;
  }

	async function handleClickCheck() {
		isShowDelete = false;
		const result = await delObject(fetchUrl)
		if (result) {
			eliminarOrientacion(id)
			toastSuccess("Acción realizada con éxito")
		}else{
			toastError("error al eliminar la orientación")
		}
	}
	
</script>

<div class="cont__nt">
	<div class="nt__t">
		<div class="t__d">
			<img src="/img/illustration-checklist.jpg" alt="checklist" />
			<p>{nombre}</p>
		</div>
	</div>
	<div class="nt__d">
		<p>Tipo de Orientación: <span style="color: #007bff;">{tipo}</span></p>
		
		{#if fechaEntrega}
			<p>Fecha de Entrega: <span style="color: #007bff;">{parseFecha(fechaEntrega)}</span></p>
		{/if}
	</div>
	<div class="header__buttom card__button">
		<button on:click={() => isShowEdit = true}><span class="ti-pencil-alt"></span></button>
		<button on:click={() => isShowDelete = true}><span class="ti-trash"></span></button>
		<a href={fileUrl} download>
            <button><span class="ti ti-download"></span></button>
        </a>
	</div>
</div>

<EditObject on:click={() => isShowEdit = false} isShow={isShowEdit} url={fetchUrl} id={id} pageName="Orientación" method="PATCH" hiddenEdit={hiddenEdit}/>
<Alert on:check={handleClickCheck} on:close={() => isShowDelete = false} mensaje="Esto es un mensaje" isShow={isShowDelete}/>
