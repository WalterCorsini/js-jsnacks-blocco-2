// INPUT
// declaration variable and array element
const array = ["pasta","pane","CAFFE","vino"];
let result = 0;
let userInput = prompt("dimmi la parola che vuoi cercare");

// LOGIC
// call to function and save result
result = trovaIndice(userInput,array);

//  OUTPUT
if(result !== -1){
    console.log("la parola che stavi cercando è presente ed è alla posizione numero: " + result);
} else{
    console.log("la parola che stai cercando non è presente nell'archivio");
}