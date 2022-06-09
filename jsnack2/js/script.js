// JSNACK2
/* 
Chiedi un numero di 4 cifre all’utente nel prompt
 e calcola la somma di tutte le cifre che compongono il numero.
*/

// Chiedo un numero di 4 cifre all’utente nel prompt
const userNumber = prompt("Scrivi un numero di 4 cifre:");

// Variabile per la somma dei numeri
let sumNumber = 0;

// Calcolo la somma di tutte le cifre che compongono il numero
for (let i = 0; i < userNumber.length; i++) {
    let singleNumber = parseInt(userNumber[i]);

    sumNumber += singleNumber;
}

console.log(sumNumber);