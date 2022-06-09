// JSNACK4
/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// Variabile Array vuoto
let numbers = [];

// Dichiarazione variabile utente
let userNumber;

// ciclo da eseguire per chiedere per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {

  // variabile per la richiesta del numero
  userNumber = parseInt(prompt('Scrivi un numero:'));

  // SE il risultato del numero è dispari
  if (userNumber % 2 != 0) {
    // inserisco nell’array
    numbers.push(userNumber);
    
    // Stampo i risultati nella console
    console.log(userNumber);
  }
}