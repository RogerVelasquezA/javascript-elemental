const crearPersona = (nombre, apellido) => ({nombre,apellido}) 

function imprimirArgumentos(){
    console.log(arguments)
}
const imprimirArgumentos2 = (...arg) => arg


console.log(imprimirArgumentos2(23,34,'Roger', false))
console.log(crearPersona('Roger','Velasquez'));
imprimirArgumentos(10, true, 'Hola mundo');

const[edad, nota, nombre, vivo] = imprimirArgumentos2(23,34,'Roger', false)

console.log({edad,vivo})

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Aeroman',
    vivo: false,
    edad: 35,
    trajes: ['Mark I', 'Mark II'],
};

const imprimirPersonajes = ({nombre, codeName, vivo, edad,trajes, area="informatica"}) =>
{ 
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
    console.log({area})
}
 imprimirPersonajes({tony})