let a = 10;
let b = a;

console.log({a,b})

const juan = {nombre: 'Juan'}
const roger = {...juan}; //con el operador spread permite copiar las caracteristicas de un objeto sin afectar al objeto copiado

roger.nombre = 'Roger'

console.log(juan,roger)


const cambiaNombre = ({...personaje}) =>{
    personaje.nombre = 'Tony'
    return personaje;
}

let peter = {nombre:'Peter'}
let tony = cambiaNombre(peter);

console.log(peter,tony)


//Arreglos
const frutas = ['manzana','pera','durazno']

console.time('spread')// indica el tiempo que demora en cargar
const agregarFruta = [...frutas];//Permite hacer una copia de un arreglo sin que el mismo se afecte
console.timeEnd('spread')

console.time('slice')
const agregarFruta2 = frutas.slice();
console.timeEnd('slice')


agregarFruta.push('mango')
agregarFruta2.push('naranja')

console.table({frutas, agregarFruta, agregarFruta2})