// JSNACK3
/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// variabile somma
let som = 0;

// ciclo di 10 richieste di numeri chiesti all'utente
for (let i = 0; i < 10; i++) {
  // inserisco il dato dell'utente nella variabile trasformandolo in numero
  let userNumber = parseInt(prompt('Scrivi un numero:'));
  // Eseguo la somma dei numeri ottenuti nel ciclo alla variabile "userNumber"
  som += userNumber;
}

// Stampa la somma ottenuta dai numeri inseriti dall'utente.
console.log(som);