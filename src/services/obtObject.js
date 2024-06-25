// Reemplaza 'yourAuthToken' con tu token de autenticación real

import { apiUrl } from "../consts";


// Configura el encabezado Authorization con el token de autenticación


// Función asíncrona para realizar la solicitud GET
export async function obtObject(url) {
    const authToken = localStorage.getItem('token');

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Token ${authToken}`,
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(apiUrl + url, options);

        // Verifica si la respuesta fue exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        // Parsea la respuesta como JSON
        const data = await response.json();
        // Aquí puedes manejar los datos recibidos
        return data;
    } catch (error) {
        console.error('Hubo un problema con la petición:', error);
        // Maneja cualquier error que pueda haber ocurrido durante la petición
        return null;

    }
}