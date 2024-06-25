import { obtOrientaciones } from "../services/obtOrientaciones";
import { orientacionesStore } from "../store/orientacionesStore";


export async function cargarOrientaciones() {
    try {
        const data = await obtOrientaciones('gestionarOrientacion/');
        orientacionesStore.set(data);
    } catch (error) {
        console.error('Error al cargar las orientaciones:', error);
    }
}
