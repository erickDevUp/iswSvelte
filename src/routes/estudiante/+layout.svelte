<script>
	import LinkMenu from '../../components/LinkMenu.svelte';
	import Nav from '../../components/Nav.svelte';
</script>

<svelte:head>
	<title>Estudiante</title>
	<link rel="stylesheet" href="/styles/in.css" />
	<link rel="stylesheet" href="/styles/inE.css" />
	<link rel="stylesheet" href="/styles/themify-icons.css" />
	<link rel="stylesheet" href="/styles/fonts.css" />
</svelte:head>
<body>
	<Nav></Nav>
	<main>
		<LinkMenu />
		<slot />
	</main>
</body>