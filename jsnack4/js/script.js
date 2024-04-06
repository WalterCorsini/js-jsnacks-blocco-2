// INPUT
// declaration variable adn array
const array = ["pasta","pane","CAFFE","vino"];                                                                                  // array 
// LOGIC and OUTPUT
document.getElementById("result").innerHTML = "<h2>il tuo array è: </h2>" + array;                                              // insert on page original array
document.getElementById("result").innerHTML += "<h2>il tuo array senza l'ultimo elemento è</h2>" + rimuoviDallaCoda(array);     // insert on page original array less the last element
console.log("ARRAY ORIGINALE",array);                                                                                           // show in console original array
console.log("ARRAY SENZA ULTIMO ELEMENTO",rimuoviDallaCoda(array));                                                             // show in console orring array less the last element

