
var tip;
var tipPerPerson;
var total;

function five(){
var bill = parseFloat(document.getElementById("amount").value);
var amount = parFloat(document.getElementById("number").value);
tip=bill*0.05;
tipPerPerson=tip/amount;
total=(bill+tip)/amount;
document.getElementById('tipAmount').innerHTML = parseFloat(tipPerPerson).toFixed(2) + "$";
document.getElementById('totalPerPerson').innerHTML = parseFloat(total).toFixed(2) + "$";
}

function ten(){
var bill = parseFloat(document.getElementById("amount").value);
var amount = parFloat(document.getElementById("number").value);
tip=bill*0.1;
tipPerPerson=tip/amount;
total=(bill+tip)/amount;
document.getElementById('tipAmount').innerHTML = parseFloat(tipPerPerson).toFixed(2) + "$";
document.getElementById('totalPerPerson').innerHTML = parseFloat(total).toFixed(2) + "$";
}

function fifteen(){
var bill = parseFloat(document.getElementById("amount").value);
var amount = parseFloat(document.getElementById("number").value);
tip=bill*0.15;
tipPerPerson=tip/amount;
total=(bill+tip)/amount;
document.getElementById('tipAmount').innerHTML = parseFloat(tipPerPerson).toFixed(2) + "$";
document.getElementById('totalPerPerson').innerHTML = parseFloat(total).toFixed(2) + "$";
}
function twentyfive(){
var bill = parseFloat(document.getElementById("amount").value);
var amount = parseFloat(document.getElementById("number").value);
tip=bill*0.25;
tipPerPerson=tip/amount;
total=(bill+tip)/amount;
document.getElementById('tipAmount').innerHTML = parseFloat(tipPerPerson).toFixed(2) + "$";
document.getElementById('totalPerPerson').innerHTML = parseFloat(total).toFixed(2) + "$";
}
function fifty(){
var bill = parseFloat(document.getElementById("amount").value);
var amount = parseFloat(document.getElementById("number").value);
tip=bill*0.5;
tipPerPerson=tip/amount;
total=(bill+tip)/amount;
document.getElementById('tipAmount').innerHTML = parseFloat(tipPerPerson).toFixed(2) + "$";
document.getElementById('totalPerPerson').innerHTML = parseFloat(total).toFixed(2) + "$";
}