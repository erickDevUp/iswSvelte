import { browser } from "$app/environment";
import { apiUrl } from "../consts";



export async function delObject(url) {
    if (browser) {
        // Asegúrate de que el código se ejecuta en el navegador antes de acceder a localStorage

        const authToken = localStorage.getItem('token');

        try {
            const response = await fetch(`${apiUrl + url}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${authToken}`,
                }
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
           
            return response; // Asume que la API devuelve JSON en caso de éxito
        } catch (error) {
            console.error('Error al intentar eliminar:', error);
            throw error; // Puedes decidir si quieres lanzar el error nuevamente o manejarlo de otra manera
        }
    }
}