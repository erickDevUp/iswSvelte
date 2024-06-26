<script>
	import { searchObject } from '../services/searchObject';

	export let getObject;
	export let store;
	export let url;

	let searchValue = '';

	async function handleSearch(e) {
		e.preventDefault();

		const result = await searchObject(url, searchValue);

		if (result) {
			store.set(result);
		} else {
			alert('error al buscar la orientación');
		}
	}

	async function handleCancel(e) {
		e.preventDefault();
		await getObject();
		searchValue = '';
	}
</script>

<form on:submit|preventDefault={handleSearch} class="search">
	<input
		type="text"
		placeholder="Buscar..."
		pattern="[a-zA-Z0-9]*"
		bind:value={searchValue}
		title="Por favor, no utilizar caracteres especiales"
	/>
	<div>
		<button class="search-button" type="submit"><span class="ti-search"></span></button>
	
		{#if searchValue.length > 0}
			<button class="search-cancel" on:click|preventDefault={handleCancel}><span>&#x2715;</span></button>
		{/if}
	</div>
</form>

<style>
	.search {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
		flex: 1;
		border: 2px solid #ddd; /* Bordes más claros para el campo de entrada */
		border-radius: 4px; /* Redondea las esquinas del campo de entrada */
		transition: border-color 0.3s ease; /* Transición suave para el color del borde */
		outline: none; /* Quita el borde al enfocar */
	}
	.search input {
		border: none;
		background-color: transparent;
		outline: none;
		padding: 0.75rem; /* Un poco más de padding para un aspecto más moderno */
		font-size: 1rem;
		width: 100%;
		height: 100%;
	}

	.search:focus {
		border-color: #007bff; /* Cambia el color del borde a azul cuando está enfocado */
	}
	.search-button {
		background-color: #007bff; /* Color de fondo azul */
		color: white; /* Texto blanco */
		border: none;
		padding: 0.75rem 1rem; /* Más padding para un botón más grande */
		border-radius: 4px; /* Redondea las esquinas del botón */
		cursor: pointer;
		font-size: 1rem;
		transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
	}
	.search-button:hover {
		background-color: #0056b3; /* Oscurece el color de fondo al pasar el mouse */
	}
	.search div {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
	}
	.search-cancel {
		background-color: transparent;
		height: 100%;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
		margin-right: 10px;
	}
	.search-cancel span {
		font-size: 20px;
		color: #007bff;
		margin: auto;
	}
</style>
