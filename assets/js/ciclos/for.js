const heroes = ['Superman','Batman', 'Goku','Chapulin Colorado']


console.warn("For regular")
for(let i = 0; i< heroes.length;i++){
    console.log(heroes[i])
}

console.warn("For in")

for(let i in heroes){
    console.log(heroes[i]);
}

console.warn("For of")

for(let heroe of heroes){//por buena practica, la variable se suele nombrar con el sinonimo del arreglo consultado
    console.log(heroe)
}