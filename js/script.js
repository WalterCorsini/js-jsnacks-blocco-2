// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

const userNum = parseInt(prompt("inserisci un numero"));
for(let i = 1; i<= userNum; i++){
    const array =[];
    array.push(rndGen(1,100,10));
    console.log(array);
}