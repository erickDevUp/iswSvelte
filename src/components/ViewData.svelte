<script>
	export let nombre;
	export let tipo = '';
	export let fileUrl;
</script>

<div class="cont__nt">
	<div class="nt__t">
		<div class="t__d">
			<p>{nombre}</p>
		</div>
	</div>
	<div class="nt__d">
		<p>
			{tipo}
		</p>
	</div>
	<a href={fileUrl} target="_blank" download>
		<button><span class="ti ti-download"></span></button>
	</a>
</div>
