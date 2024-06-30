import { apiUrl } from "../consts";
import { browser } from "$app/environment";
import { goto } from '$app/navigation';
import { roles } from '../consts';


export async function register(url = '', data, method ) {
  
        console.log(data);

        // Configura el objeto fetch con opciones
        const options = {
            method: method, // Método de la solicitud

            body: data // Datos enviados son el FormData
        };

        try {
            const response = await fetch(apiUrl + url, options);
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