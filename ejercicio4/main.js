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

document.writeln("<br>");

let random = [];
let colorTexto;

//a
document.writeln("a)");
for (let i = 0; i < num; i++) {
    random[i] = colores[Math.floor(Math.random() * colores.length)];
}
document.writeln("<table>");
    for (let i = 0; i < num; i++) {
        if (random[i] === "black") {
            colorTexto = "white";
        } else {
            colorTexto = "black";
        }
        document.writeln("<tr><td style='background-color:" + random[i] + "; color:" + colorTexto + "'>" + random[i] + "</td></tr>");
    }
document.writeln("</table>");

document.writeln("<br>");

//b
document.writeln("b)");
for (let i = 0; i < num; i++) {
    random[i] = colores[Math.floor(Math.random() * colores.length)];
    for (let j = 0; j < i; j++) {
        if (random[i] === random[j]) {
            i--;
            break;
        }
    }
}
document.writeln("<table>");
    for (let i = 0; i < num; i++) {
        if (random[i] === "black") {
            colorTexto = "white";
        } else {
            colorTexto = "black";
        }
        document.writeln("<tr><td style='background-color:" + random[i] + "; color:" + colorTexto + "'>" + random[i] + "</td></tr>");
    }
document.writeln("</table>");

document.writeln("<br>");

//c
document.writeln("c)");
for (let i = 0; i < num; i++) {
    do {
        random[i] = colores[Math.floor(Math.random() * colores.length)];
    } while (i > 0 && random[i] === random[i-1]);
}
document.writeln("<table>");
    for (let i = 0; i < num; i++) {
        if (random[i] === "black") {
            colorTexto = "white";
        } else {
            colorTexto = "black";
        }
        document.writeln("<tr><td style='background-color:" + random[i] + "; color:" + colorTexto + "'>" + random[i] + "</td></tr>");
    }
document.writeln("</table>");