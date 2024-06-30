<script>
	import { parseFecha } from '../helpers/parseFecha';
	export let nombre;
	export let tipo = '';
	export let id = '';
	export let fileUrl;
	export let fechaEntrega = null;
	export let recursoID = null;
</script>

<div class="cont__nt">
	<div class="nt__t">
		<div class="t__d">
			<img src="/img/illustration-checklist.jpg" alt="checklist" />
			<p>{nombre}</p>
		</div>
	</div>
	<div class="nt__d">
		{#if tipo}
			<p>Tipo: <span style="color: #007bff;">{tipo}</span></p>
		{/if}
		{#if recursoID}
			<p>Recurso #: <span style="color: #007bff;">{recursoID}</span></p>
		{/if}
		{#if fechaEntrega}
			<p>Fecha de Entrega: <span style="color: #007bff;">{parseFecha(fechaEntrega)}</span></p>
		{/if}
	</div>
	<a href={fileUrl} download>
		<button><span class="ti ti-download"></span></button>
	</a>
</div>
