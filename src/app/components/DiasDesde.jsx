import { FormatFecha } from './FormatFecha';

export const DiasDesde = (fecha) => {

const fechaActual = new Date();
const fechaAnterior = fecha.split(' ')
// Obtén la fecha deseada
const fechaDeseada = new Date(fechaAnterior[0]); 

// Calcula la diferencia en milisegundos
const diferenciaMilisegundos = fechaActual - fechaDeseada;

// Calcula la diferencia en días
const diasPasados = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

return diasPasados

}
