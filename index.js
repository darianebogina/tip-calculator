const billElem = document.getElementById("bill");
const tipElem =  document.getElementById("tip");
const totalElem = document.getElementsByClassName("total")[0];


function calculate() {
    let bill = Number(billElem.value);
    let tip = Number(tipElem.value);
    totalElem.style.visibility = "visible";
    totalElem.innerHTML = (bill + (bill * tip / 100)).toFixed(2);
}
