<script>
	import '../../styles/in.css';
	import '../../styles/inE.css';

	import '../../styles/themify-icons.css';
	import '../../styles/fonts.css';
	import LinkMenu from '../../components/LinkMenu.svelte';
	import Nav from '../../components/Nav.svelte';
</script>

<body>
	<Nav></Nav>
	<main>
		<LinkMenu />
		<slot />
	</main>
</body>
