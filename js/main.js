var montoOriginal = parseInt(prompt("Por favor ingrese el monto en Pesos chilenos (CLP)"));
var monedaFinal = prompt("Por favor ingrese la moneda de destino: las opciones son 'USD' y 'EUR'");


// acá están las funciones que se encargan de realizar las conversiones
const convertirEUR = function (cantidad) {
    return cantidad * 0.0011;
}

const convertirUSD = function (cantidad) {
    return cantidad * 0.0013;
}

let resultadoEUR = convertirEUR(montoOriginal);
let resultadoUSD = convertirUSD(montoOriginal);

//se crea la clase objeto que almacenará los resultados
// class Objeto {
//     constructor(montoCLP, montoEUR, montoUSD) {
//         this.montoCLP = montoCLP;
//         this.montoEUR = montoEUR;
//         this.montoUSD = montoUSD;
//     }
// }

// se crea el objeto1 con los montos originales y montos ya conevrtidos
// const objeto1 = new Objeto (montoOriginal, resultadoEUR, resultadoUSD);

// se crea un array que almacenará los montos originales y los montos ya convertidos
const arrayResultados = [montoOriginal, resultadoEUR, resultadoUSD];



// entrega el resultado mediante alert usando los datos almacenados en el array
if (monedaFinal.toUpperCase() == "EUR") {
    alert("El monto solicitado en (EUR) es: " + arrayResultados[1]);
} else if (monedaFinal.toUpperCase() == "USD") {
    alert("El monto solicitado en (USD) es: " + arrayResultados[2]);
} else {
    alert("Inténtelo nuevamente");
}

//Se muestran por consola algunos métodos aplicados al array
console.log ("El largo del array es: "+ arrayResultados.length);
console.log ("Los resultados guardados en el array son: "+ arrayResultados.toString());