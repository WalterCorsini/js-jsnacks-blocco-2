// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const word1 = prompt("inserisci una parola");
const word2 = prompt("inserisci una parola");
let result = "";
result = longWord(word1,word2);

if(result === word1){
    alert("la parola piu lunga è" + word1);
} else if (result === word2){
    alert("la parola piu lunga è" + word2);
}   else {
    alert("la parole" + word1 + " e " + word2 + " hanno la stessa lunghezza");
}


    
