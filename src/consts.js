
export const roles = { "admin": 'admin', "alumno": 'alumno', "profesor": 'profesor' };
export const apiUrl = 'http://127.0.0.1:8000/';

export const routes = {
    estudiante: {
        orientaciones: '/estudiante/orientaciones',
        tareas: '/estudiante/tareas',
        recursosEducativos: '/estudiante/recursos-educativos',
    },
    profesor: {
        orientaciones: '/profesor/orientaciones',
        tareas: '/profesor/tareas',
        recursosEducativos: '/profesor/recursos-educativos',
    },
}


