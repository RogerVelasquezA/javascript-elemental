const elMayor = (a,b) => (a > b)? a :b

const tieneMembresia = (miembro) => miembro? "2 dolares": "15 dolares"



console.log(tieneMembresia(true));
console.log(elMayor(10,15));

let amigo = true;

const amigosArr = [
    'Peter',
    'Tony',
    amigo ?"Thor":"Loki",
    elMayor(12,15)

]

console.log(amigosArr)

const nota = 88;

let grado = nota >= 95 ? 'A+':
            nota >= 90 ? 'A' :
            nota >= 85 ? 'B+': 'F'

console.log(nota, grado)




