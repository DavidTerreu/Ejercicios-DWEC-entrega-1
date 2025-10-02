'use strict';

//Ejercicio 1
let num = 0;
do {
    num = prompt("Introduce un número mayor a 0");
    if (num <= 0) {
        alert("El número introducido no es correcto");
    } else {
        alert("Es correcto");
    }
} while (num <= 0);

for (let i = 1; i <= 9; i++) {
    if (num%i === 0) {
        alert("El número " + i + " es divisor de " + num);
    }
}