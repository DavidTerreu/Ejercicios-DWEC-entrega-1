'use strict';

let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
let palabras = [];
let auxColor = [];
let auxPalabra = [];
let arrayFinal = [];
let col = 0;
let pal = 0;

document.writeln("Introduce 8 palabras:");
document.writeln("<br>");
document.writeln("<br>");
for (let i = 0; i < 8; i++) {
    palabras[i] = prompt("Introduce una palabra ");
}

for (let i = 0; i < palabras.length; i++) {
    document.writeln(palabras[i] + " ");
}

document.writeln("<br>");
document.writeln("<br>");
document.writeln("Array final:");

let esColor = false;

for (let i = 0; i < palabras.length; i++) {
    esColor = false;
    for (let j = 0; j < colores.length; j++) {
        if (palabras[i] === colores[j]) {
            auxColor[col] = palabras[i];
            col++;
            esColor = true;
            break;
        }
        if (!esColor && j === colores.length -1) {
            auxPalabra[pal] = palabras[i];
            pal++;
        }
    }
}

for (let i = 0; i < auxColor.length; i++) {
    arrayFinal[i] = auxColor[i];
}
for (let i = 0; i < auxPalabra.length; i++) {
    arrayFinal[auxColor.length + i] = auxPalabra[i];
}

document.writeln("<br>");
for (let i = 0; i < arrayFinal.length; i++) {
    document.writeln(arrayFinal[i] + " ");
}
document.writeln("<br>");