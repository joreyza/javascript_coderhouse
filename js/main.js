var montoOriginal = parseInt(
  prompt("Por favor ingrese el monto en Pesos chilenos (CLP)")
);
var monedaFinal = prompt(
  "Por favor ingrese la moneda de destino: las opciones son 'USD' y 'EUR'"
);

// acá están las funciones que se encargan de realizar las conversiones
const convertirEUR = function (cantidad) {
  return cantidad * 0.0011;
};

const convertirUSD = function (cantidad) {
  return cantidad * 0.0013;
};

let resultadoEUR = convertirEUR(montoOriginal);
let resultadoUSD = convertirUSD(montoOriginal);

const arrayResultados = [montoOriginal, resultadoEUR, resultadoUSD];

// entrega el resultado mediante alert usando los datos almacenados en el array
if (monedaFinal.toUpperCase() == "EUR") {
  alert("El monto solicitado en (EUR) es: " + arrayResultados[1]);
} else if (monedaFinal.toUpperCase() == "USD") {
  alert("El monto solicitado en (USD) es: " + arrayResultados[2]);
} else {
  alert("Inténtelo nuevamente");
}

// Función que arroja una alerta informando de los montos cuando el usuario presiona el boton "convertir"
let buttonPress = document.getElementById("boton");
buttonPress.onclick = () =>
  {
    //crea un parrafo con los montos en pesos chilenos
let parrafoPesos = document.createElement("div");
parrafoPesos.innerHTML = "<p> Monto en pesos chilenos</p>" + arrayResultados[0] + " (CLP)";
document.body.appendChild(parrafoPesos);

//crea un parrafo con los montos en dólares
let parrafoUsd = document.createElement("div");
parrafoUsd.innerHTML = "<p> Monto en dólares</p>" + arrayResultados[2] + " (USD)";
document.body.appendChild(parrafoUsd);

//crea un parrafo con los montos en Euros
let parrafoEur = document.createElement("div");
parrafoEur.innerHTML = "<p> Monto en Euros</p>" + arrayResultados[1] + " (EUR)";
document.body.appendChild(parrafoEur);
  }

//Se muestran por consola algunos métodos aplicados al array
console.log("El largo del array es: " + arrayResultados.length);
console.log(
  "Los resultados guardados en el array son: " + arrayResultados.toString()
);