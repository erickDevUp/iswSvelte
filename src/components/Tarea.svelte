<script>
	import Alert from './modals/Alert.svelte';
	import EditTask from './modals/EditTask.svelte';
    let isShowDelete = false;
	let isShowEdit = false;
</script>

<div class="cont__nt">
	<div class="nt__t">
		<div class="t__d">
			<img src="/img/illustration-checklist.jpg" alt="checklist" />
			<p>Nombre Tarea</p>
		</div>
	</div>
	<div class="nt__d">
		<p>Asunto Lorem ipsum dolor sit amet.</p>
		<p>nombre orientacion</p>
		<p>Nota: <span style="color: green;">5</span></p>
	</div>
	<div class="header__buttom card__button">
		<button on:click={() => isShowEdit = true}><span class="ti-pencil-alt"></span></button>
		<button on:click={() => isShowDelete = true}><span class="ti-trash"></span></button>
		<button><span class="ti-import"></span></button>
	</div>
</div>

<EditTask isShow={isShowEdit} on:click={() => isShowEdit = false} />
<Alert on:click={() => isShowDelete = false} mensaje="Esto es un mensaje" isShow={isShowDelete}/>
