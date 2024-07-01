<script>
  import { iniciarSesion } from '../../services/iniciarSesion';


	let username = '';
	let password = '';

	function submitForm() {
		iniciarSesion(username, password);
	}
</script>

<svelte:head>
	<title>Iniciar Sesión</title>
	<link rel="stylesheet" href="/styles/loginStyle.css" />
</svelte:head>
<div class="back__cont">
	<form on:submit|preventDefault={submitForm}>
		<div class="div__log">
			<div class="div_title">
				<div class="header__img"><img src="/img/logo__color_principal-smal.png" alt="" /></div>
				<p class="header__cont">Autenticar Usuario</p>
			</div>
			<div class="div__input">
				<input style="opacity: 0;" type="email" placeholder="Correo" />
				<input type="text" placeholder="Nombre de usuario" required bind:value={username} />
				<input type="password" placeholder="Contraseña" required bind:value={password} />
				<button type="submit">Iniciar Sesión</button>
			</div>
			<a href="registrarUsuario" class="">No tienes cuenta ?</a>
		</div>
	</form>
	<footer>
		<p>&copy;2024 Eva-SE, Inc. All rights reserved.</p>
	</footer>
</div>
