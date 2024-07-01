<script>
	import Layout from './layout.svelte';
	import { addObject } from '../../services/addObject';
	import { editarProfesor } from '../../store/profesoresStore';
	import { toastError, toastSuccess } from '../helpers/toasts';

	export let isShow;

	export let pageName;
	export let url;
	export let method = 'PATCH';
	export let id;
	export let hiddenEdit;

	let userData = {
		password: '',
		confirmPassword: '',
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
		}
	};

	function validate(password) {
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
		let isValidated = validate(userData.password);

		// Verificar coincidencia entre contraseña y confirmación de contraseña
		if (userData.password !== userData.confirmPassword) {
			isValidated = false;
		}

		if (isValidated) {
			const formData = new FormData(event.target);
			formData.delete('confirm_password');
			console.log(formData.get('password'));

			const response = await addObject(url, formData, method);
			if (response) {
				editarProfesor(id, response);
				toastSuccess('Acción realizada con éxito');
				hiddenEdit();
			} else {
				toastError('Error al editar la contraseña');
			}
		}
	}

	//en img necesito un check img
</script>

<Layout {isShow}>
	<form class="modal" on:submit|preventDefault={submitForm}>
		<div class="modal__t">
			<h1>Editar {pageName}</h1>
			<button on:click|preventDefault><span class="ti-close"></span></button>
		</div>
		<hr />
		<div class="content">
			<input
				name="password"
				bind:value={userData.password}
				on:input={() => validate(userData.password)}
				type="password"
				placeholder="Contraseña"
				onchange=""
			/>
			<input
				name="confirm_password"
				bind:value={userData.confirmPassword}
				type="password"
				placeholder="Confirmar Contraseña"
			/>

			<button>Enviar</button>
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
	</form>
</Layout>

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
