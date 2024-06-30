import { obtObject } from "../services/obtObject";
import { orientacionesStore, orientacionesIdStore } from "../store/orientacionesStore";


export async function cargarOrientaciones(id="") {
    try {
        const data = await obtObject(`gestionarOrientacion/${id && id.toString()+"/"}`);

        if(id==""){orientacionesStore.set(data); console.log("eeeeeeeeeeeeeeee");}
        else{orientacionesIdStore.set([data]); }
    } catch (error) {
        console.error('Error al cargar las orientaciones:', error);
        alert('Error al cargar las orientaciones');
    }
}
