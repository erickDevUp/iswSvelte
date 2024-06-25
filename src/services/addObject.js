import { apiUrl } from "../consts";
import { browser } from "$app/environment";


export async function addObject(url = '', data, method ) {
    if (browser) {
        // Asegúrate de que el código se ejecuta en el navegador antes de acceder a localStorage

        const authToken = localStorage.getItem('token');

        // Configura el objeto fetch con opciones
        const options = {
            method: method, // Método de la solicitud
            headers: {
                'Authorization': `Token ${authToken}` // Encabezado de autorización con el token
            },
            body: data // Datos enviados son el FormData
        };

        try {
            const response = await fetch(apiUrl + url, options);
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            const json = await response.json(); // Espera a que la respuesta se convierta a JSON
            return json; // Retorna la respuesta convertida a JSON
        } catch (error) {
            console.error('Error:', error); // Maneja cualquier error
        }
    }
}