import { writable } from 'svelte/store';

// Crear un store con un valor inicial vacío
export const tareaStore = writable([]);


export function editarTarea(id, nuevosDatos) {
    tareaStore.update(tarea => {
        return tarea.map(tarea => {
            if (tarea.id === id) {
                // Retorna la nueva versión de la orientación con los datos actualizados
                return { ...tarea, ...nuevosDatos };
            } else {
                // Retorna la orientación sin cambios si el id no coincide
                return tarea;
            }
        });
    });
}

export function eliminarTarea(id) {
    tareaStore.update(tarea => {
        return tarea.filter(tarea => tarea.id !== id);
    })
}