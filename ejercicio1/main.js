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

let divisores = [];
let numDiv = 0;

for (let i = 1; i <= num; i++) {
    if (num%i === 0) {
        alert("El número " + i + " es divisor de " + num);
        divisores[numDiv] = i;
        numDiv++;
    }
}

let sumaDivisores = 0;

for (let i = 0; i < divisores.length; i++) {
    sumaDivisores += divisores[i] ** 2;
}

alert("La suma de los cuadrados de los divisores es " + sumaDivisores);

let esCuadrado = false;

for (let i = 1; i * i <= sumaDivisores; i++) {
    if (i * i === sumaDivisores) {
        esCuadrado = true;
        break;
    }
}

if (esCuadrado) {
    alert("La suma de los cuadrados de los divisores es cuadrado perfecto");
} else {
    alert("La suma de los cuadrados de los divisores no es cuadrado perfecto");
}