import { obtObject } from "../services/obtObject";
import { orientacionesStore } from "../store/orientacionesStore";


export async function cargarOrientaciones() {
    try {
        const data = await obtObject('gestionarOrientacion/');
        orientacionesStore.set(data);
    } catch (error) {
        console.error('Error al cargar las orientaciones:', error);
        alert('Error al cargar las orientaciones');
    }
}
