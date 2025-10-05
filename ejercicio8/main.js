'use strict';

let tam = 0;

do {
   tam = prompt("Introduce el numero de mesas (no puede ser 0): ");
   if (tam <= 0) {
       alert("Error, el numero debe ser mayor que 0");
   }
} while (tam <= 0);

let mesas = new Array(parseInt(tam));

for (let i = 0; i < tam; i++) {
   mesas[i] = Math.floor(Math.random() * 5);
}

for (let i = 0; i < mesas.length; i++) {
   document.writeln("[" + mesas[i] + "]");
}

let comensales = 0;
let finPrograma = false;
let sentado = false;

do {
    sentado = false;
    do {
        comensales = parseInt(prompt("Introduce el número de comensales (negativo para salir): "));
        if (comensales < 0) {
            document.writeln("Fin del programa");
            finPrograma = true;
            break;
        }
        if (comensales > 4) {
            document.writeln("Lo siento, no admitimos grupos de " + comensales + ", haga grupos de 4 personas como máximo e intente de nuevo");
        }
    } while (comensales === 0 || comensales > 4);
    if (finPrograma) {
        break;
    }

    document.writeln("<br>");
    document.writeln("<br>");

    document.writeln("Entran " + comensales + " comensal/es.");

    for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] === 0) {
            mesas[i] += comensales;
            document.writeln("Por favor, siéntese en la mesa " + (i+1));
            sentado = true;
            break;
        }
    }

    document.writeln("<br>");
    if (!sentado) {
        for (let i = 0; i < mesas.length; i++) {
            if ((mesas[i] + comensales) <= 4) {
                mesas[i] += comensales;
                document.writeln("Por favor, siéntese en la mesa " + (i+1));
                sentado = true;
                break;
            }
        }
    }

    if (!sentado) {
        document.writeln("Lo siento, no queda sitio en el restaurante.");
    }

    document.writeln("<br>");
    document.writeln("<br>");

    document.writeln("Estado de las mesas:");

    for (let i = 0; i < mesas.length; i++) {
        document.writeln("[" + mesas[i] + "]");
    }

} while (finPrograma === false);