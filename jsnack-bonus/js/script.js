// INPUT
// declaration array and variable
let arrayA = ["pippo", "pluto", "Simone Bonvecchio"];
let arrayB = [];
let formElem = document.getElementById("form");     // form
let btnElem = document.getElementById("send-btn");  //send button
let alertElem = document.getElementById("alert");   // message error
let divElem = document.getElementById("result");    // container element
let h2Elem = document.createElement("h2");          // title
let spanElem = document.createElement("span");      // shoping list
let newItem = document.getElementById("new-item");  // input new element

spanElem.innerHTML = arrayA;
h2Elem.innerHTML = "questo il tuo elenco della spesa: ";
divElem.append(h2Elem);                             // add title in HTML
divElem.append(spanElem);                           // add array in HTML

// no refresh page when click send button
formElem.addEventListener("click", function (noRefresh) {
  noRefresh.preventDefault();
});
// no refresh page when click send button

// send button
btnElem.addEventListener("click", function () {
  if (newItem.value !== "") {                         // if input element not empty
    alertElem.classList.add("hidden");                // add class hidden to error message
    console.log(newItem.value);
    arrayB = inserisciInTesta(arrayA, newItem.value); // save new element in arrayB
    arrayA = arrayB;                                  // copy arrayB in arrayA to print list with new item in html
    spanElem.innerHTML = arrayA;                      // print list in HTML
  } else {
    alertElem.classList.remove("hidden");             // if input element is empty remove class hidden and show error message
  }
  newItem.value = "";                                 // refresh input value element.
});
