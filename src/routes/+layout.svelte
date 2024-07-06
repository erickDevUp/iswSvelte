<script>
	import './styles.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<svelte:head>
	<title>EVA</title>
	<link rel="icon" href="img/logo__color_segundario-hd.png" />

	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="app">
	<div class="wrap">
		<SvelteToast />
	</div>
	<main>
		<slot />
	</main>
</div>

<style>
	.wrap {
		font-size: 15px;
	}
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
