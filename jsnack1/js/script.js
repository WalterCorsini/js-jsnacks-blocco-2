// INPUT
// array
const array = [10,11,12,13,1,2,3,4,5,6,"ciao"];                        // array
const resultElem = document.getElementById("result");           // container
const h2Elem = document.createElement("h2");                    // element title
const spanElem = document.createElement("span");                // element array
const spanResult = document.createElement("span");              // element result             


// LOGIC
// declaration variable and call to function
let result = contaElementi(array);

// OUTPUT
h2Elem.innerHTML = "Questo è l'array:";                                                 // save title
spanElem.innerHTML = array + "<br><br>";                                                // save array
spanResult.innerHTML = "nell'array ci sono: <strong>" + result + "</strong> elementi";  // save result 
resultElem.append(h2Elem);                                                              // insert on page
resultElem.append(spanElem);                                                            // insert on page
resultElem.append(spanResult);                                                          // insert on page