<script>
	import Alert from './modals/Delete.svelte';
	import EditTask from './modals/EditTask.svelte';
	import { eliminarTarea } from '../store/tareaStore';
	import { delObject} from "../services/delObject";

    let isShowDelete = false;
	let isShowEdit = false;

	export let nota;
	export let nombreTarea;
	export let fileUrl;
	export let tipo;
	export let id;
	

	let fetchUrl = "gestionarTarea/"+id+"/"

	function hiddenEdit() {
    isShowEdit = false;
  }

	async function handleClickCheck(e) {		
		
		isShowDelete = false
		const result = await delObject(fetchUrl)		
		
		if (result) {
			eliminarTarea(id)
			alert("Acción realizada con éxito")
		}else{
			alert("error al eliminar la tarea")
		}
	}

</script>

<div class="cont__nt">
	<div class="nt__t">
		<div class="t__d">
			<img src="/img/illustration-checklist.jpg" alt="checklist" />
			<p>{nombreTarea}</p>
		</div>
	</div>
	<div class="nt__d">
		<p>Titulo: <span style="color: #007bff;">{nombreTarea}</span></p>
		<p>Tipo: <span style="color: #007bff;">{tipo}</span></p>
		<p>Nota: <span style={`${!nota||nota==2?"color: red;":"color: green;"}`}>{nota?nota:"Sin Asignar"}</span></p>
	</div>
	<div class="header__buttom card__button">
		<button on:click={() => isShowEdit = true}><span class="ti-pencil-alt"></span></button>
		<button on:click={() => isShowDelete = true}><span class="ti-trash"></span></button>
		<a href={fileUrl}  download>
            <button><span class="ti ti-download"></span></button>
        </a>
	</div>
</div>

<EditTask hiddenEdit={hiddenEdit}  pageName={"Tarea"} id={id} isShow={isShowEdit} url={fetchUrl} nombre={nombreTarea} on:click={() => isShowEdit = false}  />
<Alert on:check={handleClickCheck}  on:close={() => isShowDelete = false} mensaje="Seguro que quieres eliminar esta tarea?" isShow={isShowDelete}/>
