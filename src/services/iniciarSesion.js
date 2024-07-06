
import { goto } from "$app/navigation";
import { toastError } from "../components/helpers/toasts.JS";
import { apiUrl, roles } from "../consts";
export async function iniciarSesion(username, password) {
    // Crear el cuerpo de la solicitud con las credenciales
    const credentials = { username, password };


    // Opciones de la solicitud fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    };

    // Reemplaza 'URL_DE_TU_ENDPOINT_DE_LOGIN' con la URL real de tu endpoint de inicio de sesión
    try {
        const response = await fetch(apiUrl + 'auth/login/', requestOptions);

        if (!response.ok) {
            toastError('Credenciales incorrectas');
            throw new Error('Respuesta no OK');
        }

        const data = await response.json(); // Espera y parsea la respuesta como JSON

         // Guarda el token y el rol en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('rol', data.user.rol);
        localStorage.setItem('username',data.user.username)
        if (data.user.rol === roles.admin) {
            goto('/admin/gestionarProfesor');
        }
        else if (data.user.rol === roles.alumno) {
            goto('/estudiante/gestionarTarea');
        }
        else if (data.user.rol === roles.profesor) {
            goto('/profesor/gestionarOrientacion');
        }
    } catch (error) {
        console.error('Error en inicio de sesión:', error);
    }
}
