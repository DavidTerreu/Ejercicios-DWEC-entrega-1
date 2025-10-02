'use strict';

//Ejercicio 2

let km = 0;
do {
    km = prompt("Introduce un número de kilómetros mayor a 0");
    if (km < 0) {
        alert("El número introducido no puede ser negativo");
    } else {
        alert("Es correcto");
    }
} while (km < 0);

let total = km*7;

if (total <=10) {
    document.writeln("Es un corredor novato");
}
if (total >10 && total <=30) {
    document.writeln("Es un corredor iniciado");
}
if (total >30 && total <=40) {
    document.writeln("Es un corredor experto");
}
if (total >40) {
    document.writeln("Es un corredor nivel élite");
}