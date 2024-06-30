<script>	
	import { register } from '../../services/register';

	let userData = {
        username: '',
        email: '',
        password: '',
		confirmPassword: '',
        lastName: '',
        firstName: ''
    };
//valida que userName no tenga caracteres especiales
	let validations = {
		numberCaracters: {
			isValidate: false,
			validation: 'Contraseña con al menos 8 caracteres.'
		},
		upperCase: {
			isValidate: false,
			validation: 'Contraseña con al menos una letra mayúscula.'
		},
		lowerCase: {
			isValidate: false,
			validation: 'Contraseña con al menos una letra minúscula.'
		},
		number: {
			isValidate: false,
			validation: 'Contraseña con al menos un número.'
		},
		specialChar: {
			isValidate: false,
			validation: 'Contraseña con al menos un símbolo especial.'
		},
		


	};

	function validate(password, username) {
		// Resetear validaciones
		for (let key in validations) {
			validations[key].isValidate = false;
		}

		// Verificar longitud mínima
		if (password.length >= 8) {
			validations.numberCaracters.isValidate = true;
		}

		// Verificar presencia de letra mayúscula
		if (/[A-Z]/.test(password)) {
			validations.upperCase.isValidate = true;
		}

		// Verificar presencia de letra minúscula
		if (/[a-z]/.test(password)) {
			validations.lowerCase.isValidate = true;
		}

		// Verificar presencia de número
		if (/[0-9]/.test(password)) {
			validations.number.isValidate = true;
		}

		// Verificar presencia de símbolo especial
		if (/[^A-Za-z0-9]/.test(password)) {
			validations.specialChar.isValidate = true;
		}
		
		// Verificar si todas las validaciones pasaron
		return Object.values(validations).every((val) => val.isValidate);
	}

	async function submitForm(event) {
		event.preventDefault();
		let isValidated = validate(userData.password, userData.username);

		// Verificar coincidencia entre contraseña y confirmación de contraseña
		if (userData.password !== userData.confirmPassword) {
			isValidated = false;
		}

		if (isValidated) {
			const formData = new FormData(event.target);
			formData.delete('confirm_password');

			const response = await register('auth/register/', formData, 'POST');

			alert('Formulario enviado');
		} else {
			alert('Formlario no enviado , verifica si los datos registrados son correctos');
		}
	}
</script>

<svelte:head>
  <title>Registrar Usuario</title>
  <link rel="stylesheet" href="/styles/loginStyle.css" />
</svelte:head>

<div class="back__cont registerUser">
	<form on:submit|preventDefault={submitForm}>
		<div class="div__log">
			<div class="div_title">
				<div class="header__img"><img src="/img/logo__color_principal-smal.png" alt="" /></div>
				<p class="header__cont">Registrar Usuario</p>
			</div>
			<div class="div__input">
				<input name="username" type="text" bind:value={userData.username} placeholder="Nombre de usuario" required pattern="[a-zA-Z0-9]*" />
				<input name="email" type="email" bind:value={userData.email} placeholder="Email" required />
				<input name="first_name" type="text" placeholder="Nombre" bind:value={userData.firstName} required pattern="[a-zA-Z0-9]*" />
				<input name="last_name" type="text" placeholder="Apellido" bind:value={userData.lastName} required pattern="[a-zA-Z0-9]*" />
				<input
					name="password"
					bind:value={userData.password}
					on:input={()=>validate(userData.password, userData.username)}
					type="password"
					placeholder="Contraseña"
					onchange=""
				/>
				<input name="confirm_password" bind:value={userData.confirmPassword} type="password" placeholder="Confirmar Contraseña" />
				<button type="submit">Registrar</button>
			</div>
			<div>
				{#each Object.entries(validations) as [key, validation]}
					<span
						class={`validationText ${userData.password != '' ? 'show' : 'hidden'} ${validation.isValidate ? 'valided' : 'invalided'}`}
					>
						{validation.validation}
					</span>
				{/each}
			</div>
			<a href="iniciarSesion" class="">¿ Ya tienes cuenta ?</a>
		</div>
	</form>
	<footer>
		<p>&copy;2024 Eva-SE, Inc. All rights reserved.</p>
	</footer>
</div>

<style>
	.registerUser {
		overflow-y: scroll;
		height: 100vh;
	}
	.validationText {
		font-size: small;
	}
	.valided {
		color: green;
	}
	.invalided {
		color: red;
	}
	.show {
		display: block;
	}
	.hidden {
		display: none;
	}
	.validationsContiner {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
