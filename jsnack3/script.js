// 3) snack 2.3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < arrNums.length; i++){
    if (i % 2 == 1){
        sum += arrNums[i];
        console.log(sum);
    }
}

console.log('risultato:', sum);