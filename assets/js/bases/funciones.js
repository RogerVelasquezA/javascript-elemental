function saludo(nombre){
    console.log(arguments)//llama a todos los argumentos mandados en la funcion
    console.log("hola " + nombre)
}

const saludo2 = function(nombre){
    console.log('saludo2 '+ nombre)
} 

const saludofecha = () => console.log("Saludo Flecha")


saludo('Roger', true, 1234);
saludo2('Roger');
saludofecha();

const suma  = (a,b) =>  a+b;
const suma2=(a,b)=> {
    return a+b
}
const getAleatorio = () => Math.random();



console.log(suma(6,3));
console.log(suma2(5,5));
console.log(getAleatorio());