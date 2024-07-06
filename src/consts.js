
export const roles = { "admin": 'admin', "alumno": 'alumno', "profesor": 'profesor' };
export const apiUrl = 'http://127.0.0.1:8000/';

export const routes = {
    estudiante: {
        orientaciones: '/estudiante/gestionarTarea',
    },
    profesor: {
        orientaciones: '/profesor/gestionarOrientacion',
    },
    admin: {
        orientaciones: '/admin/gestionarProfesor',
    },
}


