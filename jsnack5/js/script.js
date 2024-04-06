// INPUT
// declaration variable adn array
const array = ["pasta","pane","CAFFE","vino"];                                                                                  // array 
// LOGIC and OUTPUT
document.getElementById("result").innerHTML = "<h2>il tuo array è: </h2>" + array;                                              // insert on page original array
document.getElementById("result").innerHTML += "<h2>il tuo array senza il primo elemento è</h2>" + rimuoviDallaTesta(array);     // insert on page original array less the first element
console.log("ARRAY ORIGINALE",array);                                                                                           // show in console original array
console.log("ARRAY SENZA ULTIMO ELEMENTO",rimuoviDallaTesta(array));                                                             // show in console orring array less the first element
