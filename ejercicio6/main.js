'use strict';

console.log("Buenos dias desde visual studio code");

// Number
let number = 5;
console.log(typeof number);
number = "5";
console.log(typeof number);

let undefinedVariable;
console.log(typeof undefinedVariable);

let nullVariable = null;
console.log(typeof nullVariable);

/*
variable = "Hola";
numberVariable = parseInt(variable);
console.log(numberVariable, typeof numberVariable);
*/

/*
//Ejercicio 1
var A, B, C, D, E, res;
A = 23;
B = 15;
C = 3;
D = 2;
E = 10;

res = A + (B * (C/D)) - E;
console.log(res);

res -= 5;
console.log(res);

res--;
console.log(res);

//Ejercicio 2
var enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre;
enero = 1;
febrero = 2;
marzo = 3;
abril = 4;
mayo = 5;
junio = 6;
julio = 7;
agosto = 8;
septiembre = 9;
octubre = 10;
noviembre = 11;
diciembre = 12;

console.log(enero > diciembre);
console.log(junio < julio);
console.log(marzo > febrero && septiembre > octubre);
console.log(marzo > febrero || septiembre > octubre);

//Ejercicio 3

var num1, num2, num3;
num1 = 5;
num2 = 8;
num3 = 14;

res = (num1 + num2 + num3) / 3;
console.log(res);

alert("Hola caracola");
let mensajeAlerta = prompt("Introduce un mensaje");
alert(mensajeAlerta);
let conforme = confirm("¿Estás conforme?");



document.writeln("Hola mundo 2");
let nombre = "David";
document.writeln("<h1>Hola " + nombre + "</h1>");
*/

//Ejercicios alertas
//Ejercicio 1

//Ejercicio 2
/*let nombre = prompt("¿Cuál es tu nombre?");
alert("Bienvenid@ a mi página " + nombre);*/
//Ejercicio 3
let res = 0;
let nombre = prompt("¿Qué producto quieres comprar?");
let precio = prompt("¿Cuá es el precio del producto?");
let unidades = prompt("¿Cuántas unidades del producto quieres?");
precio = parseFloat(precio);
unidades = parseInt(unidades);
res = precio * unidades;
alert(`Del producto ${nombre} has comprado ${unidades} unidades. Y el precio final es ${res} euros.`);
let confirmacion = confirm("¿Quieres confirmar la compra?");
if (confirmacion) {
    alert("Compra confirmada");
} else {
    alert("Compra rechazada");
}