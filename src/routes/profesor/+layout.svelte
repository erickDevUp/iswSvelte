<script>
	import LinkMenu from '../../components/LinkMenu.svelte';
	import Nav from '../../components/Nav.svelte';
	import { browser } from '$app/environment';
	import { roles } from '../../consts';
	import { goto } from '$app/navigation';

	if (browser) {
		console.log(localStorage.getItem('rol'));
		if (roles.profesor !== localStorage.getItem('rol')) {
			goto('../error');
		}
	}
</script>

<svelte:head>
	<title>Profesor</title>
	<link rel="stylesheet" href="/styles/in.css" />
	<link rel="stylesheet" href="/styles/inE.css" />
	<link rel="stylesheet" href="/styles/themify-icons.css" />
	<link rel="stylesheet" href="/styles/fonts.css" />
</svelte:head>
<body>
	<Nav></Nav>
	<main>
		
		<slot />
	</main>
</body>
