let x = 0;

let meterEl = document.getElementById("meter-no");
let feetEl = document.getElementById("feet-no");
let literEl = document.getElementById("liter-no");
let galonsEl = document.getElementById("gallon-no");
let kiloEl = document.getElementById("kilo-no");
let poundsEl = document.getElementById("pounds-no");

function submit() {
    let x = document.getElementById("input-no").value;
    let meter = x * 3.2808;
    meterEl.textContent = x + " meters = " + meter + " feet";

    let feet = x * 0.3048;
    feetEl.textContent = x + " feet = " + feet + " meters";

    let liter = x * 0.2642;
    literEl.textContent = x + " liters = " + liter + " gallons";

    let gallons = x * 3.7854;
    galonsEl.textContent = x + " gallons = " + gallons + " liters";

    let kilograms = x * 2.2046;
    kiloEl.textContent = x + " kilos = " + kilograms + " pounds";

    let pounds = x * 0.4536;
    poundsEl.textContent = x + " pounds = " + pounds + " kilos";


}

function refresh() {
    document.getElementById("input-no").value = "";
    x = 0;
    let meter = x * 0;
    meterEl.textContent = x + " meters = " + meter + " feet";

    let feet = x * 0;
    feetEl.textContent = x + " feet = " + feet + " meters";

    let liter = x * 0;
    literEl.textContent = x + " liters = " + liter + " gallons";

    let gallons = x * 0;
    galonsEl.textContent = x + " gallons = " + gallons + " liters";

    let kilograms = x * 0;
    kiloEl.textContent = x + " kilos = " + kilograms + " pounds";

    let pounds = x * 0;
    poundsEl.textContent = x + " pounds = " + pounds + " kilos";


}