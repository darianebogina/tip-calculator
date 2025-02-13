let billElem = document.getElementById("bill");
let tipElem =  document.getElementById("tip");
let totalElem = document.getElementsByClassName("total")[0];


function calculate() {
    let bill = Number(billElem.value);
    let tip = Number(tipElem.value);
    totalElem.innerHTML = bill + (bill * tip / 100);
}
