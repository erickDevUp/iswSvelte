<script>
	import { showMenu } from '../store/showMenu';
	let isShow;

	showMenu.subscribe((value) => {
		isShow = value;
	});

	function handleCloseSesion() {
		localStorage.removeItem('rol');
		localStorage.removeItem('token');
	}
</script>

<header class="header">
	<div>
		<div>
			<img src="/img/logo__color_principal-hd.png" alt="" />
		</div>
		<h1 class="nav-name">Ingienería de Software</h1>
		<span
			class={`${isShow ? 'ti-close' : 'ti-menu-alt'}`}
			on:click={showMenu.update((value) => !isShow)}
		></span>
	</div>
	<a href="/iniciarSesion" on:click={handleCloseSesion} class="link">Cerrar sesión</a>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 1rem;
		background-color: #007bff;
		color: white;
	}
	.link {
		color: white;
		text-decoration: none;
	}
	.link:hover {
		color: white;
		text-decoration: underline;
	}
</style>
