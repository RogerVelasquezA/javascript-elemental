const auto = ['Mazda','Honda','Hyundai', 'Toyota'];
//               0       1        2          3
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
        indice2++;
        continue;

    }
    console.log(auto[indice2])
    indice2 ++;
}

console.warn("do while")

let indice3=0
 do{
    console.log(auto[indice3]);
    indice3++;

 }while(auto[indice3])