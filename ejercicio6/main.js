'use strict';

let tam = 0;
let arrayFinal = [];

do {
   tam = prompt("Introduce el tamaño del primer array (no puede ser 0): ");
   if (tam <= 0) {
       alert("Error, el tamaño debe ser mayor que 0");
   }
} while (tam <= 0);

let array1 = new Array(parseInt(tam));

for (let i = 0; i < array1.length; i++) {
   array1[i] = prompt("Introduce datos para el primerar array: ");
}

do {
   tam = prompt("Introduce el tamaño del segundo array (no puede ser 0): ");
   if (tam <= 0) {
       alert("Error, el tamaño debe ser mayor que 0");
   }
} while (tam <= 0);

let array2 = new Array(parseInt(tam));

for (let i = 0; i < array2.length; i++) {
   array2[i] = prompt("Introduce datos para el segundo array: ");
}

let repe = true;
let aux = 0;
for (let i = 0; i < array1.length; i++) {
    repe = false;
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            repe = true;
            break;
        }
    }
    if (!repe) {
            arrayFinal[aux] = array1[i];
            aux++;
    }
}

aux = 0;
for (let i = 0; i < array2.length; i++) {
    repe = false;
    for (let j = 0; j < array1.length; j++) {
        if (array2[i] === array1[j]) {
            repe = true;
            break;
        }
    }
    if (!repe) {
            arrayFinal[aux] = array2[i];
            aux++;
    }
}

document.writeln(arrayFinal);