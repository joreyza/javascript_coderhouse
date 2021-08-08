var montoOriginal = parseInt(prompt("Por favor ingrese el monto en Pesos chilenos (CLP)"));
var monedaFinal = prompt("Por favor ingrese la moneda de destino: las opciones son 'USD' y 'EUR'");

const convertirEUR = function (cantidad){
    return cantidad*0.0011;
} 

const convertirUSD = function (cantidad){
    return cantidad*0.0013;
}


let resultado = convertirEUR(montoOriginal);
let resultado2 = convertirUSD(montoOriginal);



alert("el monto es: "+ resultado);

alert("el monto es: "+ resultado2);