const devolverTrue = () =>{
    console.log('Regresa True')
    return true;
}

const devolverFalse = () =>{
    console.log('Regresa False')
    return false;
}

console.warn('Not o negacion')
console.log(devolverFalse());//False
console.log(devolverTrue());//True
console.log(!devolverTrue()); //False

console.warn('And');
console.log(true && true); //true
console.log(false && true); //false

console.log('=======================================')
//imprime solo devolver false ya que detecta como false la primera funcion ejecutada
console.log(devolverFalse() && devolverTrue());//false

//imprime devolcerver true y devolver false ya que la primera funcion ejecutada es true
console.log(devolverTrue() && devolverFalse())//False

console.log('==========OR==========================')

console.log(devolverTrue() || devolverFalse())
console.log(devolverFalse() || devolverTrue()) 


console.warn("ejemplos")

const soyNull = null;
const sotFalse = false;
const soyUndefined = undefined;

const a1 = false && 'Hola mundo' && 150;

console.log({a1})
