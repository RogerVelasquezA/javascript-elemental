let personajes = {
    nombre: 'Tony Stark',
    codeName: 'Aeroman',
    vivo: false,
    coords: {
        lat: 34.034,
        ing: -118.034,
    },
    trajes: ['Mark I', 'Mark II'],
    'ultima-pelicula': 'Infinity Wars'

};

console.log({personajes});
console.log(personajes.nombre);
console.log(personajes['nombre'])
console.log(personajes.coords.ing)
console.log(personajes.trajes.length)
console.log(personajes["ultima-pelicula"]);

personajes.casado = true

//Mas detalles
delete personajes.nombre;
console.log({personajes});

let conjunto = Object.entries(personajes)
console.log({conjunto})

let propertys = Object.getOwnPropertyNames(personajes)
let valores = Object.values(personajes)
console.log(propertys,valores)

