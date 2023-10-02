let fecha = new Date();

let dia = fecha.getDay();

console.log({dia})

if(dia === 0){
    console.log('Es domingo')
}else if(dia===1){
    console.log('Es Lunes')
}else{
    console.log('No es domingo ni lunes')
}

dia = 3;

const dias = ['Domingo', 'Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado']

console.log(dias[dia]);