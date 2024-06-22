<script>
	import './styles.css';
</script>

<svelte:head>
	<title>Eva Ingienería de Software</title>
	<link rel="icon" href="img/logo__color_segundario-hd.png" />

	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		justify-content: center;
	}
</style>
