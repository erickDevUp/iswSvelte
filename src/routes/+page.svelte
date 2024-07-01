<script>
	// haz  un link manual con el btn comenzar
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<link rel="stylesheet" href="/styles/index.css" />
</svelte:head>
<body>
	<div class="body__div precent">
		<div class="div__baner">
			<div class="div__cont">
				<img src="/img/logo__color_principal-hd.png" alt="logo" />
				<div class="cont__txt">
					<p class="cont__title">Ingeniería de Software</p>
					<p class="cont__description">
						¡Bienvenido al sistema de apoyo de la asignatura de Ingíeneria de Software! Aquí, tanto
						estudiantes como profesores potenciarán su experiencia educativa.
					</p>

					<button class="cont__button" on:click={() => goto('/iniciarSesion')}>Comenzar</button>
				</div>
			</div>
		</div>
	</div>
</body>
