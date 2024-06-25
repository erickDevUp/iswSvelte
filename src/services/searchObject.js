import { apiUrl } from "../consts";

export async function searchObject(url, query) {

    
    const authToken = localStorage.getItem('token');
    const baseUrl = apiUrl+url; // Reemplaza esto con la URL base de tu API
    const urlCompleta = `${baseUrl}search/${query}/`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Token ${authToken}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        const respuesta = await fetch(urlCompleta,options);
        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }
        const datos = await respuesta.json();
        return datos; // Devuelve los datos recibidos de la API
    } catch (error) {
        console.error('Error durante la búsqueda:', error);
        throw error; // Opcional: puedes decidir si quieres lanzar el error nuevamente o manejarlo de otra manera
    }
}