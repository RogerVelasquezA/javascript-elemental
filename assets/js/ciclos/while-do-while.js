const auto = ['Mazda','Honda','Hyundai', 'Toyota'];

// let indice = 0;

// while(indice < auto.length){
//     console.log(auto[indice])
//     indice ++;
// }


console.warn('segunda forma');

let indice2 = 0;
while(auto[indice2]){
    if(indice2 === 1){
        //break;
        continue;
    }
    console.log(auto[indice2])
    indice2 ++;
}