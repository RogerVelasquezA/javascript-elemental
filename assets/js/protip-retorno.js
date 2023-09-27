const crearPersona = (nombre, apellido) => ({nombre,apellido}) 

function imprimirArgumentos(){
    console.log(arguments)
}
const imprimirArgumentos2 = (...arg) => arg


console.log(imprimirArgumentos2(23,34,'Roger', false))
console.log(crearPersona('Roger','Velasquez'));
imprimirArgumentos(10, true, 'Hola mundo');

//Segunda prueba
const[edad, nota, nombre, vivo] = imprimirArgumentos2(23,34,'Roger', false)

console.log({edad,vivo})