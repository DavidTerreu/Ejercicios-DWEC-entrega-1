'use strict';

let arrayFinal = new Array(10);

let array = new Array(10);

for (let i = 0; i < 10; i++) {
   array[i] = prompt("Introduce los números del array (" + (i+1) + ") :");
}

for (let i = 0; i < 10; i++){
    document.writeln("[ " + i + " ]");
}

document.writeln("<br>");

for (let i = 0; i < 10; i++){
    document.writeln("[" + array[i] + "]");
}

let inicio = 0;
let final = 0;
let aux = 0;
let posActual = 0;
let posSig = 0;

do {
   inicio = parseInt(prompt("Introduce la posición de inicio:"));
   final = parseInt(prompt("Introduce la posición final (tiene que ser mayor que inicio):"));
   if (inicio < 0 || inicio > 9 || final < 0 || final > 9 || inicio >= final) {
       alert("Error, posiciones no válidas");
   }
} while (inicio < 0 || inicio > 9 || final < 0 || final > 9 || inicio >= final);

aux = array[9];

for (let i = 1; i < 10; i++) {
    arrayFinal[i] = array[(i-1)];
}
arrayFinal[0] = aux;

let arrayFijos = [];

for (let i = (inicio+1); i < final; i++) {
    arrayFinal[i] = array[i];
}

arrayFinal[final] = array[inicio];

document.writeln("<br>");
document.writeln("<br>");

for (let i = 0; i < 10; i++){
    document.writeln("[ " + i + " ]");
}

document.writeln("<br>");

for (let i = 0; i < 10; i++){
    document.writeln("[" + arrayFinal[i] + "]");
}