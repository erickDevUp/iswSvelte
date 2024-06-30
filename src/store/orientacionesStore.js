import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

// Crear un store con un valor inicial vacío
export const orientacionesStore = writable([]);

export const orientacionesIdStore = writable([]);

export function editarOrientacion(id, nuevosDatos) {
    orientacionesStore.update(orientaciones => {
        return orientaciones.map(orientacion => {
            if (orientacion.id === id) {
                // Retorna la nueva versión de la orientación con los datos actualizados
                return {...orientacion,...nuevosDatos };
            } else {
                // Retorna la orientación sin cambios si el id no coincide
                return orientacion;
            }
        });
    });
    orientacionesIdStore.set([nuevosDatos])
}
export function eliminarOrientacion(id) {
    orientacionesStore.update(orientaciones => {
        return orientaciones.filter(orientacion => orientacion.id!== id);
    });
    goto("./profesor/orientaciones/")
}