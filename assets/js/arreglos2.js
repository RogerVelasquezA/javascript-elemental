let juegos = ['Mario','Megaman', 'Zelda', 'Metroid'];

let primerElemento = juegos[0]
let ultimoElemento = juegos[juegos.length - 1];

console.log({primerElemento,ultimoElemento})

juegos.forEach((indice,elementos,arr) =>{
    console.log({indice,elementos,arr})
})

let juegoNuevo = juegos.push('F-Zero');
console.log({juegoNuevo, juegos})

juegoNuevoInicio = juegos.unshift('Fire Emblem')
console.log({juegoNuevoInicio,juegos})

var elementoEliminado = juegos.pop()
console.log({elementoEliminado,juegos})

var arregloEliminado = juegos.splice(2,2)
console.log({arregloEliminado,juegos})

var ubicacionelemento = juegos.indexOf('Mario')
console.log(ubicacionelemento)

