// INPUT
// declaration variable and array element
const array = [3, "pane", "CAFFE", "vino"];                 // array
const formElem = document.getElementById("form");           // form
const sendBTnElem = document.getElementById("send-button"); // send button
const inputElem = document.getElementById("input-text");    // user input
let result = 0;                                             // position of element in array

// LOGIC

// no refresh page
formElem.addEventListener("click", function (noRefresh) {
  noRefresh.preventDefault();
});
// no refresh page

// send button
sendBTnElem.addEventListener("click", function () {
  if (inputElem.value !== "") {                                     // if value is not empty
    // call to function and save result
    result = trovaIndice(inputElem.value, array);                               // save position of elemnent
    inputElem.value = "";                                                       // reset input value
    //  OUTPUT
    if (result !== -1) {                                                        // if found elment in array
      document.getElementById("result").innerHTML =
        "la parola che stavi cercando è presente ed è alla posizione numero: " +
        result;
      document.getElementById("result").classList.remove("hidden");
    } else {                                                                    // else not found
      document.getElementById("result").innerHTML =
        "la parola che stai cercando non è presente nell'archivio";
      document.getElementById("result").classList.remove("hidden");
    }
  } else {                                                          // error message input value is empty
    document.getElementById("result").innerHTML =
      " Non hai inserito nessuna parola: SEI UBRIACO?";
    document.getElementById("result").classList.remove("hidden");
  }
});
