'use strict';

//Ejercicio 3

let presupuesto = 0;

presupuesto = prompt("Introduce el presupuesto de la obra");

if (presupuesto > 0) {
    document.writeln("Coste de materiales: " + (presupuesto * 50) / 100 + "<br>");
    document.writeln("Coste de mano de obra: " + (presupuesto * 30) / 100 + "<br>");
    document.writeln("Coste de licencia de obra: " + (presupuesto * 20) / 100);
} else {
    document.writeln("<h1>El presupuesto no puede ser negativo</h1>");
}