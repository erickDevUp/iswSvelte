<div class="not-found-body">
	<div class="container">
		<div class="circle"></div>
		<h1>Error 404</h1>
		<p>Lo sentimos, la página que estás buscando no existe.</p>
		<a href="/">Volver al inicio</a>
	</div>
</div>

<style>
	.not-found-body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f0f0f0;
	}

	.container {
		text-align: center;
	}

	.circle {
		width: 200px;
		height: 200px;
		background-color: #ff6347;
		border-radius: 50%;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	h1 {
		font-size: 3rem;
		color: #333;
	}

	p {
		font-size: 1.5rem;
		color: #666;
	}

	a {
		display: inline-block;
		margin-top: 20px;
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	a:hover {
		background-color: #0056b3;
	}
</style>
