// INPUT
// declaration array and variable
let arrayA = ["pippo", "pluto", "Simone Bonvecchio"];
let arrayB = [];
let formElem = document.getElementById("form"); // form
let btnElem = document.getElementById("send-btn"); //send button
let alertElem = document.getElementById("alert"); // message error
let divElem = document.getElementById("result");
let h2Elem = document.createElement("h2");
let spanElem = document.createElement("span");
let newItem = document.getElementById("new-item");

spanElem.innerHTML = arrayA;
h2Elem.innerHTML = "questo il tuo elenco della spesa: ";
divElem.append(h2Elem);
divElem.append(spanElem);

// no refresh page when click send button
formElem.addEventListener("click", function (noRefresh) {
  noRefresh.preventDefault();
});
// no refresh page when click send button

// send button
btnElem.addEventListener("click", function () {
  if (newItem.value !== "") {
    alertElem.classList.add("hidden");
    console.log(newItem.value);
    arrayB = inserisciInTesta(arrayA, newItem.value);
    arrayA = arrayB;
    spanElem.innerHTML = arrayA;
  } else {
    alertElem.classList.remove("hidden");
  }
  newItem.value = "";
});
