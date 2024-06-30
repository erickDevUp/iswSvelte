<script>
	import Alert from './modals/Delete.svelte';
	import EditRED from './modals/EditRED.svelte';
	import { delObject } from '../services/delObject';
	import { eliminarRecursoED } from '../store/recursoEDStore';
	let isShowDelete = false;
	let isShowEdit = false;

	export let nombre;
	export let fileUrl;
	export let id;

	let fetchUrl = 'recursoEducativo/' + id + '/';

	function hiddenEdit() {
		isShowEdit = false;
	}
	async function handleClickCheck() {
		isShowDelete = false;
		const result = await delObject(fetchUrl);
		if (result) {
			eliminarRecursoED(id);
			alert('Acción realizada con éxito');
		} else {
			alert('error al eliminar el recurso educativo');
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
	<div class="header__buttom card__button">
		<button on:click={() => (isShowEdit = true)}><span class="ti-pencil-alt"></span></button>
		<button on:click={() => (isShowDelete = true)}><span class="ti-trash"></span></button>
		<a href={fileUrl} download>
			<button><span class="ti ti-download"></span></button>
		</a>
	</div>
</div>

<EditRED
	on:click={() => (isShowEdit = false)}
	isShow={isShowEdit}
	url={fetchUrl}
	{id}
	pageName="Recurso Educativo"
	method="PATCH"
	hiddenEdit={hiddenEdit}
/>
<Alert
	on:check={handleClickCheck}
	on:close={() => (isShowDelete = false)}
	mensaje="Esto es un mensaje"
	isShow={isShowDelete}
/>
