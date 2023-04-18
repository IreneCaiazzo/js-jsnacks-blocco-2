// 2) snack 2.2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const arrFirstName = ['Luca', 'Marco', 'Paolo', 'Elena', 'Lisa', 'Marta', 'Andrea'];
const arrLastName = ['Bianchi', 'Rossi', 'Verdi', 'Gialli', 'Blu', 'Viola', 'Neri'];
const guests = [];

for (i = 0; i < 10; i++){
   const fakeFN = arrFirstName[Math.floor(Math.random() * arrFirstName.length)];
   console.log (fakeFN);
   
   const fakeLN = arrLastName[Math.floor(Math.random() * arrLastName.length)];
   console.log (fakeLN);

   guests.push(fakeFN + " " + fakeLN);

}

console.log(guests);