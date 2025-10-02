'use strict';

let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];

let num = 0;
do {
    num = parseInt(prompt("Introduce un número de franjas entre 1 y 5"));
    if (num < 1 || num > 5) {
        alert("El número introducido no es correcto");
    } else {
        alert("Es correcto");
    }
} while (num < 1 || num > 5);

let random = [];
random = colores[Math.floor(Math.random() * colores.length)];
for (let i = 1; i < num+1; i++) {
    document.writeln(random[0]);
}

//a

//b

//c