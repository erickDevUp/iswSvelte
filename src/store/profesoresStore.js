import { writable } from 'svelte/store';

// Crear un store con un valor inicial vacío
export const profesoresStore = writable([]);

export function editarProfesor(id, nuevosDatos) {
    profesoresStore.update(profesor => {
        return profesor.map(profesor => {
            if (profesor.id === id) {
                // Retorna la nueva versión de la orientación con los datos actualizados
                return { ...profesor, ...nuevosDatos };
            } else {
                // Retorna la orientación sin cambios si el id no coincide
                return profesor;
            }
        });
    });
}

export function eliminarProfesor(id) {
    profesoresStore.update(profesores => {
        return profesores.filter(profesores => profesores.id !== id);
    });
}