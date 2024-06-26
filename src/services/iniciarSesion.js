
import { goto } from "$app/navigation";
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
            alert('Credenciales incorrectas');
            throw new Error('Respuesta no OK');
        }

        const data = await response.json(); // Espera y parsea la respuesta como JSON

         // Guarda el token y el rol en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('rol', data.user.rol);
        if (data.user.rol === roles.admin) {
            goto('/admin');
        }
        else if (data.user.rol === roles.alumno) {
            goto('/estudiante/orientaciones');
        }
        else if (data.user.rol === roles.profesor) {
            goto('/profesor/orientaciones');
        }
    } catch (error) {
        console.error('Error en inicio de sesión:', error);
    }
}
