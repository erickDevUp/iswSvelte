
import { obtObject } from "../services/obtObject";
import { recursoEDStore } from "../store/recursoEDStore";


export async function cargarRecursoED() {
    try {
        const data = await obtObject('recursoEducativo/');
        recursoEDStore.set(data);
    } catch (error) {
        console.error('Error al cargar los recursos educativos', error);
        alert('Error al cargar los recursos educativos');
    }
}
