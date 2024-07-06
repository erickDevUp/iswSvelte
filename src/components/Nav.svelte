<script>
	import { showMenu } from '../store/showMenu';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { userStore } from '../store/userStore';

	let isShow;
	let showClouse = false;
	let user;

	onMount(async () => {
		user = localStorage.getItem('username');
		console.log(user);
		userStore.set(user);
	});

	const handleShowClouse = () => {
		showClouse = !showClouse;
	};

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
		<h1 class="nav-name">Ingeniería de Softaware</h1>
		<span
			class={`${isShow ? 'ti-close' : 'ti-menu-alt'}`}
			on:click={showMenu.update((value) => !isShow)}
		></span>
	</div>
	<div class="userContiner" on:click={handleShowClouse}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="icon icon-tabler icons-tabler-filled icon-tabler-user"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"
			/><path
				d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"
			/></svg>
			
		<p class="user" >{$userStore}</p>
		{#if showClouse}
			<a href="/iniciarSesion" on:click={handleCloseSesion} class="link">Cerrar sesión</a>
		{/if}
	</div>
</header>

<style>
	.userContiner {
		position: relative;
		padding-right: 25px;
		cursor: pointer;
	}
	.user {
		color: white;
		text-decoration: none;
		font-size: medium;
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 1rem;
		background-color: #007bff;
		color: white;
	}
	.link {
		color: black;
		text-decoration: none;
		position: absolute;
		background-color: aliceblue;
		padding: 5px;
		width: 150px;
		left: -50px;
		top: 40px;
		border-radius: 5px;
		text-align: center;
		border: 1px solid black;
	}
	.link:hover {
		color: #007bff;
		text-decoration: underline;
	}
</style>
