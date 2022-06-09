// JSNACK1
/* 
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
in verde i numeri pari.
*/
//Elenco di numeri pari e dispari in una variabile Array
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberList);

// Variabili
let numbers
let pariDispariColor

// Partendo da un array di numeri, stampo nell’id rosso i numeri dispari e in verde i numeri pari.
for(let i = 0; i < numberList.length; i++) {

    const numbers = numberList[i];

    if (numbers % 2 === 0) {
        document.getElementById('pari').innerHTML += numbers + ' ';
    } else {
        document.getElementById('dispari').innerHTML += numbers + ' ';
    }
}