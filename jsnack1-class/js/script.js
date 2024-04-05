// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.
const array =[];
const userNum = parseInt(prompt("inserisci un numero"));
const bodyElem = document.getElementById("body");
console.log(bodyElem);
for(let i = 1; i<= userNum; i++){
    array.push(rndGen(1,100,10));
    console.log(array);
}


for(let i = 0; i<userNum; i++){
const h2Elem = document.createElement("h2");
h2Elem.innerHTML = array[i];
bodyElem.append(h2Elem);
}