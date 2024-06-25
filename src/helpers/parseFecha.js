export function parseFecha(fechaISO) {
    // Eliminar la zona horaria si está presente
    const fechaSinZonaHoraria = fechaISO.replace('Z', '');

    // Dividir la fecha y hora en partes
    const [fechaParte, horaParte] = fechaSinZonaHoraria.split('T');

    // Separar la fecha en día, mes y año
    const [dia, mes, ano] = fechaParte.split('-');

    // Formatear la hora para obtener solo horas y minutos
    const [hora, minuto] = horaParte.split(':');

    // Reorganizar y formatear la fecha y hora al formato deseado
    const fechaFormateada = `${ano}/${mes}/${dia} ${hora}:${minuto}`;

    return fechaFormateada;
}