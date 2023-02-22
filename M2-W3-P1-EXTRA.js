// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function giveMeRandom(n) {
//     let array = [];
//     for (let i = 0; i < n; i++) {
//       array.push(Math.floor(Math.random() * 10));
//     }
//     return array;
//   }

//   function checkArray(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > 5) {
//         console.log(true);
//       } else {
//         console.log(false);
//       }
//     }
//   }

//   let array = giveMeRandom(10);
//   checkArray(array);

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let shoppingCart = [
//   {
//     id: 1,
//     nome: "Libro",
//     prezzo: 10.99,
//     quantità: 2,
//   },
//   {
//     id: 2,
//     nome: "Mela",
//     prezzo: 0.5,
//     quantità: 10,
//   },
//   {
//     id: 3,
//     nome: "Webcam",
//     prezzo: 80.0,
//     quantità: 1,
//   },
// ];

// function shoppingCartTotal(shoppingCart) {
//   let total = 0;
//   for (let i = 0; i < shoppingCart.length; i++) {
//     total += shoppingCart[i].prezzo * shoppingCart[i].quantità;
//   }
//   console.log(total);
// }

// shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let shoppingCart = [
//   {
//     id: 1,
//     nome: "Libro",
//     prezzo: 10.99,
//     quantità: 2,
//   },
//   {
//     id: 2,
//     nome: "Mela",
//     prezzo: 0.5,
//     quantità: 10,
//   },
//   {
//     id: 3,
//     nome: "Webcam",
//     prezzo: 80.0,
//     quantità: 1,
//   },
// ];

// let obj = {
//   id: 4,
//   nome: "Casco integrale",
//   prezzo: 300,
//   quantità: 1,
// };

// function addToShoppingCart(obg) {
//   shoppingCart.push(obj);
//   return shoppingCart.length;
// }

// addToShoppingCart(obj);

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let shoppingCart = [
//   {
//     id: 1,
//     nome: "Libro",
//     prezzo: 10.99,
//     quantità: 2,
//   },
//   {
//     id: 2,
//     nome: "Mela",
//     prezzo: 0.5,
//     quantità: 10,
//   },
//   {
//     id: 3,
//     nome: "Webcam",
//     prezzo: 80.0,
//     quantità: 1,
//   },
// ];

// function maxShoppingCart(shoppingCart) {
//   let max = 0;
//   let mostExpensive = {};
//   for (let i = 0; i < shoppingCart.length; i++) {
//     if (shoppingCart[i].prezzo > max) {
//       max = shoppingCart[i].prezzo;
//       mostExpensive = shoppingCart[i];
//     }
//   }

//   return mostExpensive;
// }

// console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let shoppingCart = [
//   {
//     id: 1,
//     nome: "Libro",
//     prezzo: 10.99,
//     quantità: 2,
//   },
//   {
//     id: 2,
//     nome: "Mela",
//     prezzo: 0.5,
//     quantità: 10,
//   },
//   {
//     id: 3,
//     nome: "Webcam",
//     prezzo: 80.0,
//     quantità: 1,
//   },
// ];

// function latestShoppingCart(shoppingCart) {
//   return shoppingCart[shoppingCart.length - 1];
// }

// console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function loopUntil(x) {
//   let count = 0;

//   while (count < 3) {
//     let estratto = Math.floor(Math.random() * 9);
//     console.log(estratto);
//     if (estratto > x) {
//       count++;
//     } else {
//       if (count > 0) {
//         count--;
//       }
//     }
//   }
// }

// loopUntil(4);

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let array = [
//   1,
//   45,
//   27,
//   { nome: "mario", cognome: "rossi" },
//   8977,
//   62,
//   2,
//   "ciao",
//   412,
//   2,
//   343,
//   46531,
//   "test",
//   64,
// ];

// function average(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       sum += array[i];
//     }
//   }

//   return sum / array.length;
// }

// console.log(average(array));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let array = ["ciao", "come", "stai?"];

// function longest(array) {
//   let longest = "";

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > longest.length) {
//       longest = array[i];
//     }
//   }
//   return longest;
// }

// console.log(longest(array));

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let emailContent =
//   "dsfhbweif wdfhbvewqrv oibiewqyrf ewq hfbyiwerb f  weibfeuwiybfiuywbe  wfqeifb ew8iof  e fifbweqhdfib";
// function spamFilter(emailContent) {
//   if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
//     return true;
//   }
//   return false;
// }

// console.log(spamFilter(emailContent));

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function days(dateInput) {
//   let date1 = new Date(dateInput);
//   let date2 = new Date();
//   return Math.floor(Math.abs(date1 - date2) / (60 * 60 * 24 * 1000));
// }

// console.log(days("2022-12-12"));
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let matrix = [];
function matrixGenerator(x, y) {
  //colonne
  for (let i = 0; i < x; i++) {
    //righe
    for (let j = 0; j < y; j++) {
      matrix.push(i + "" + j);
    }
  }
}
matrixGenerator(3, 2);
console.log(matrix);
