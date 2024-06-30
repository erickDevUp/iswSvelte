<script>
	import AddNota from './modals/AddNota.svelte';
	let isShowEdit = false;
	export let nota;
	export let nombreTarea;
	export let fileUrl;
	export let nombreAlumno;
	export let id;
	

	let fetchUrl = "gestionarTarea/"+id+"/"
</script>

<div class="cont__nt">
	<div class="nt__t">
		<div class="t__d">
			<img src="/img/illustration-checklist.jpg" alt="checklist" />
			<p>Nombre Tarea</p>
		</div>
	</div>
	<div class="nt__d">
		<p>Nombre del alumno: <span style="color: #007bff;">{nombreAlumno}</span></p>
		<p>Titulo: <span style="color: #007bff;">{nombreTarea}</span></p>
		<p>Nota: <span style={`${!nota||nota==2?"color: red;":"color: green;"}`}>{nota?nota:"Sin Asignar"}</span></p>
	</div>
	<div class="header__buttom card__button">
		<button on:click={() => (isShowEdit = true)}><span class="ti-pencil-alt"></span></button>
		<a href={fileUrl} target="_blank" download>
			<button><span class="ti ti-download"></span></button>
		</a>
	</div>

</div>

<AddNota on:send={()=>isShowEdit=false} isShow={isShowEdit} url={fetchUrl} id={id} on:click={(e) => {e.preventDefault(), (isShowEdit = false)}} />
