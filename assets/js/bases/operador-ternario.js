/**
 * Dia de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 * 
 */

//Entra a un sitio para consultar si esta abierto hoy

const dia = 0
const horaActual = 9


let horaApertura =  [0,6].includes(dia)? 11: 9;

console.log(horaApertura)

let estado = (horaActual >= horaApertura)? "abierto": `Esta cerrado, la Hora de apertura es ${horaApertura}`

console.log(estado);