function resta(a, b) {
    return a - b;
}

console.log(resta(10, 2));

function nota() {
    let notaNum = prompt("Introduce la nota: ");
    let notaString;
    switch (notaNum) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
            notaString = "Insuficiente";
            break;
        case "5":
        case "6":
            notaString = "Suficiente";
            break;
        case "7":
        case "8":
            notaString = "Notable";
            break;
        case "9":
        case "10":
            notaString = "Sobresaliente";
            break;
        default:
            notaString = "Nota no valida";
            break;
    }
    return notaString;
}

//console.log(nota());


function duplicaNumero(num) {
    if (typeof num == "number") {
        return num * 2;
    } else {
        return "Debo ser ejecutada con un número";
    }
}

console.log(duplicaNumero(12));


function caracterInicial(palabra) {
    let primeraLetra;
    if (typeof palabra != "string") {
        return "Debo ser ejecutada con un string";
    } else if (palabra === "") {
        return "Debo ser ejecutada con un string no vacío";
    } else {
        primeraLetra = palabra.charAt(0);
    }
    return primeraLetra;
}

console.log(caracterInicial("Hola"));


function ultimoCaracter(palabra) {
    let ultimaLetra;
    if (typeof palabra != "string") {
        return "Debo ser ejecutada con un string";
    } else if (palabra === "") {
        return "Debo ser ejecutada con un string no vacío";
    } else {
        let n = palabra.length
        ultimaLetra = palabra.charAt(n - 1);
    }
    return ultimaLetra;
}

console.log(ultimoCaracter("Hola"));


function cuentaCaracteres(palabra) {
    let numeroLetras;
    if (typeof palabra != "string") {
        return "Debo ser ejecutada con un string";
    } else {
        numeroLetras = palabra.length;
    }
    return numeroLetras;
}

console.log(cuentaCaracteres("Hola"));

function esPalindromo(palabra) {
    let bool;
    if (typeof palabra != "string") {
        return "No es un formato correcto";
    } else if (palabra === "") {
        return "No es un formato correcto";
    } else {
        // numeroLetras = cuentaCaracteres(palabra);
        // j = numeroLetras % 2 === 0 ? numeroLetras/2 : (numeroLetras -1)/2;
        // for (let i = 0; i < j;) {
        //     if (caracterInicial(palabra) == ultimoCaracter(palabra)) {
        //         i++
        //     };

        // }
        let inversa = "";
        for (let i = cuentaCaracteres(palabra); i > 0; i--) {
            inversa += palabra.charAt(i - 1);
        }
        if (palabra === inversa) {
            bool = true;
        } else bool = false;
    }
    return bool;
}

console.log(esPalindromo("eye"));


function getPrecioMostrar(precio) {
    if (typeof precio !== "number") {
        return "no es un formato correcto";
    } else {
        return precio.toFixed(2) + "€";
    }
}

console.log(getPrecioMostrar(2124.3314));


function division(num1, num2) {
    return num1 / num2;
}

console.log(division(12, 3));

function mayoresDe5(numeros) {
    let numerosMayoresDe5 = [];
    numeros.forEach(numero => {
        if (numero > 5) {
            numerosMayoresDe5.push(numero);
        }
    });
    return numerosMayoresDe5;
}

let numeros = [3, 6, 8, 2];
console.log(mayoresDe5(numeros));

function primos() {
    let numero = prompt("Escribe un numero: ");
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

//console.log(primos());



//Extra

function obtenerImpares(numeros) {
    let numerosImpares = [];
    numeros.forEach(numero => {
        if (numero % 2 !== 0) {
            numerosImpares.push(numero);
        }
    });
    return numerosImpares
}

console.log(obtenerImpares(numeros));

function sumarArray(numeros) {
    let suma = 0;
    numeros.forEach(numero => {
        suma += numero;
    });
    return suma;
}

console.log(sumarArray(numeros));

function multiplicarArray(numeros) {
    let multiplicacion = 1;
    numeros.forEach(numero => {
        multiplicacion *= numero;
    });
    return multiplicacion;
}

console.log(multiplicarArray(numeros));

function checkPassword(contraseñaCorrecta) {
    let intentos = 0;
    let contraseña = prompt("Contraseña: ");
    do {
        if (contraseña === contraseñaCorrecta) {
            return alert("Enhorabuena");
        } else {
            intentos++;
            alert("Te quedan " + (3 - intentos) + " intentos");
            contraseña = prompt("Contraseña: ");
        }
    } while (intentos < 2);
    return alert("No te quedan intentos");
}

checkPassword("hola");