/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.205 pound
*/

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click",function (){
    lengthEl.innerHTML = "<h3>Length (Meter/Feet)</h3>";
    volumeEl.innerHTML = "<h3>Volume (Liters/Gallons)</h3>";
    massEl.innerHTML = "<h3>Mass (Kilograms/Pounds)</h3>";
    lengthConvert(input.value);
    volumeConvert(input.value);
    massConvert(input.value);
});


function lengthConvert(x){
    lengthEl.innerHTML += `<p>${x} meters = ${(3.281*x).toFixed(2)} feets | ${x} feets = ${(x/3.281).toFixed(2)} meters </p>`
}

function volumeConvert(x){
    volumeEl.innerHTML += `<p>${x} liters = ${(0.264*x).toFixed(2)} gallons | ${x} gallons = ${(x/0.264).toFixed(2)} liters </p>`
}

function massConvert(x){
    massEl.innerHTML += `<p>${x} kilograms = ${(2.205*x).toFixed(2)} pounds | ${x} pounds = ${(x/2.205).toFixed(2)} kilograms </p>`
}