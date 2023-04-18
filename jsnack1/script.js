// 1) snack 1.5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// const inputNum = document.querySelector('input');
const arrNum = [];
console.log(arrNum);


for (let i = 0; i < 6; i++){

    let numUser = parseInt(prompt('scrivi qui un numero intero'));
    console.log('numUser:', numUser);

    if (numUser %2 == 1){
        arrNum.push(numUser);
        console.log(arrNum);
    }else{
        console.log(arrNum);
    }
}