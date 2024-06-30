
import { obtObject } from "../services/obtObject";
import { tareaStore } from "../store/tareaStore";


export async function cargarTarea(customUrl="gestionarTarea/") {
    try {
        const data = await obtObject(customUrl);
        tareaStore.set(data);
    } catch (error) {
        console.error('Error al cargar las tareas', error);
        alert('Error al cargar las tareas');
    }
}
