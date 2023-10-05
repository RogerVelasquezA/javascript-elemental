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
const soyFalse = false;
const soyUndefined = undefined;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy Falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy Falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || devolverTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2,a3,a4,a5})
