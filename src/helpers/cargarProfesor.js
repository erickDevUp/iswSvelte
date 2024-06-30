
import { obtObject } from "../services/obtObject";
import { profesoresStore } from "../store/profesoresStore";


export async function cargarProfesor(customUrl="gestionarProfesor/") {
    try {
        const data = await obtObject(customUrl);
        profesoresStore.set(data);
    } catch (error) {
        console.error('Error al cargar los profesores', error);
        alert('Error al cargar los profesores');
    }
}
