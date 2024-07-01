<script>
	import Alert from './modals/Delete.svelte';
	import { delObject } from '../services/delObject';
	import { eliminarProfesor } from '../store/profesoresStore';
	import EditProfesor from './modals/EditProfesor.svelte';
	import EditProfesorPass from './modals/EditProfesorPass.svelte';
	import { toastError, toastSuccess } from './helpers/toasts';

	let isShowDelete = false;
	let isShowEdit = false;
	let isShowEditPass = false;

	export let nombre;
	export let email;
	export let nombreUsuario;
	export let id;

	function hiddenEdit() {
    isShowEdit = false;
  }
  function hiddenEditPass() {
    isShowEditPass = false;
  }
	let fetchUrl = 'gestionarProfesor/' + id + '/';

	async function handleClickCheck() {
		isShowDelete = false;
		const result = await delObject(fetchUrl);
		if (result) {
			eliminarProfesor(id);
			toastSuccess('Acción realizada con éxito');
		} else {
			toastError('error al eliminar el profesor');
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
		<p>Usuario: <span style="color: #007bff;">{nombreUsuario}</span></p>
		<p>Email: <span style="color: #007bff;">{email}</span></p>
	</div>

	<div class="header__buttom card__button">
		<button on:click={() => (isShowEdit = true)}><span class="ti-pencil-alt"></span></button>
		<button on:click={() => (isShowEditPass = true)}><span class="ti-key"></span></button>
		<button on:click={() => (isShowDelete = true)}><span class="ti-trash"></span></button>
	</div>
</div>

<EditProfesor
	on:click={() => (isShowEdit = false)}
	isShow={isShowEdit}
	url={fetchUrl}
	{id}
	pageName="Profesor"
	method="PATCH"
	hiddenEdit={hiddenEdit}
/>
<EditProfesorPass
	on:click={() => (isShowEditPass = false)}
	isShow={isShowEditPass}
	url={"auth/update-password/"+id+"/"}
	{id}
	pageName="Profesor"
	method="PATCH"
	hiddenEdit={hiddenEditPass}
/>

<Alert on:check={handleClickCheck} on:close={() => (isShowDelete = false)} isShow={isShowDelete} />
