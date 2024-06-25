import { writable } from 'svelte/store';

// Crear un store con un valor inicial vacío
export const recursoEDStore = writable([]);

export function editarRecursoED(id, nuevosDatos) {
    recursoEDStore.update(recursoED => {
        return recursoED.map(recursoED => {
            if (recursoED.id === id) {
                // Retorna la nueva versión de la orientación con los datos actualizados
                return {...recursoED,...nuevosDatos };
            } else {
                // Retorna la orientación sin cambios si el id no coincide
                return recursoED;
            }
        });
    });
}
export function eliminarRecursoED(id) {
    recursoEDStore.update(recursoED => {
        return recursoED.filter(recursoED => recursoED.id!== id);
    });
}