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
	<div class="body__div ofert">
		<div class="div__cont">
			<div class="cont__txt">
				<p class="cont__title">¿Que Ofrecemos?</p>
				<p class="cont__description">
					<span>Para los etudiante</span> , ofrecemos una amplia gama de recursos y funcionalidades.
					Podrán acceder y resolver tareas asignadas , consultar sus notas y descargar archivos educativos
					específicos de la asignatura.Nuestra plataforma está diseñada para mantener a los estudiante
					informados y apoyar su progreso académico de manera efectiva.
				</p>
				<p class="cont__description">
					Por otro lado
					<span>los profesores</span>
					cuentan con herramientas poderosas para gestionar y enriquecerel proceso de enseñanza.Podrán
					otorgar calificaciones a los estudiantes, subir archivos educativos relevantes y crear tareas
					estimulantes.Nuesto objectivo es brindar a los profesores herramientas necesarias para facilitar
					la entrega de contenido y el seguimiento de los avances de los estudiantes.
				</p>
			</div>
			<div class="cont__img">
				<img
					alt="ofert"
					class="cont__paner"
					src="/img/student-attending-maths-class-illustration-concept-on-white-background-vector.jpg"
				/>
			</div>
		</div>
	</div>
	<div class="body__div object">
		<div class="div__cont">
			<div class="cont__txt">
				<p class="cont__title">Enfoque y Objetivo</p>
				<p class="cont__description">
					En nuesto entorno virtual de aprendizaje , buscamos fomentar la interacción, la
					colaboración y el crecimiento académico.<span>Estamos comprometidos </span>
					en proporcionar una experiencia educativa en línea de calidad y accesible para todos los usarios.
				</p>
			</div>
			<img
				alt="object"
				class="cont__paner"
				src="/img/empresario-mirando-camara-objetivo-es-como-negocio-que-busca-manera-tener-exito-concepto-ilustracion-negocio-vectorial_1150-60931.jpg"
			/>
		</div>
	</div>

	<div class="body__div soport">
		<div class="div__cont">
			<div class="cont__txt">
				<p class="cont__title">Gracias por elegirnos</p>
				<p class="cont__description">
					Aprende Ingienería de Software con nosotros y alcanza tus mestas academicas , ¡Contáctanos
					si tienes preguntas!
				</p>
				<a href="mailto:erickgarciap779@gmail.com">Contáctar</a>
			</div>
			<img
				class="cont__paner"
				alt="soport"
				src="/img/ilustracion-plana-soporte-al-cliente_23-2148899114.jpg"
			/>
		</div>
	</div>
	<div class="body__div last__div">
		<div class="div__cont">
			<div class="cont__txt">
				<p class="cont__title">Explora Nuestro Entorno de Aprendizaje</p>
				<p class="cont__description">
					Descubre un entorno virtual completo y dinámico diseñado para potenciar tu aprendizaje en
					la asignatura de Ingeniería de Software. Accede a recursos educativos, resuelve tareas,
					consulta tus notas y más. Únete a nuestra comunidad de estudiantes y profesores
					comprometidos con la excelencia académica.
				</p>
			</div>
		</div>
	</div>
</body>
