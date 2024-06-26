<script>
	import { showMenu } from '../store/showMenu';
	import { routes } from '../consts';
  import { onMount } from 'svelte';
  import { roles } from '../consts';

  let selectedRoute = routes.profesor;
	onMount(async () => {
		const rol = localStorage.getItem('rol');
		selectedRoute = roles.profesor == rol ? routes.profesor : routes.estudiante;
	})

	let isShow;

	showMenu.subscribe((value) => {
		isShow = value;
	});
</script>

<nav class={` link-menu link-menu${isShow ? '' : '-hidden'}`}>
	<div>
		<a href={selectedRoute.orientaciones}><samp class="ti-agenda"></samp>Orientaciones</a>
		<a href={selectedRoute.tareas}><span class="ti-book"></span>Tareas</a>
		<a href={selectedRoute.recursosEducativos}
			><span class="ti-desktop"></span>Recursos Educativos</a
		>
	</div>
</nav>
