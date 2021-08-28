// Función que convierte los montos al presionar el botón"convertir"
let buttonPress = document.getElementById("boton");
buttonPress.onclick = () => {

  // Captura el monto ingresado por el usuario
  var montoOriginal = document.getElementById('montoOriginal').value
  console.log(montoOriginal);

  // Captura la moneda de origen
  var origen = document.getElementById("monedaOrigen");
  var monedaOrigen = origen.options[origen.selectedIndex].text;
  console.log(monedaOrigen);


  // Captura la moneda de destino
  var destino = document.getElementById("monedaDestino");
  var monedaDestino = destino.options[destino.selectedIndex].text;
  console.log(monedaDestino);

  // Condicionales que se encargan de convertir las monedas seleccionadas y mostrar el resultado en pantalla
  if (monedaOrigen == "CLP" & monedaDestino == "USD") {
    let conversion = montoOriginal * 0.0013;
    let parrafo = document.createElement("div");
    parrafo.innerHTML = "<p>Monto en USD: </p>" + conversion + " USD"
    document.body.appendChild(parrafo)
  } else if (monedaOrigen == "CLP" & monedaDestino == "EUR") {
    let conversion = montoOriginal * 0.0011;
    let parrafo = document.createElement("div");
    parrafo.innerHTML = "<p>Monto en EUR: </p>" + conversion + " EUR"
    document.body.appendChild(parrafo)
  } else if (monedaOrigen == "EUR" & monedaDestino == "CLP") {
    let conversion = montoOriginal * 923;
    let parrafo = document.createElement("div");
    parrafo.innerHTML = "<p>Monto en CLP: </p>" + conversion + " CLP"
    document.body.appendChild(parrafo)
  } else if (monedaOrigen == "EUR" & monedaDestino == "USD") {
    let conversion = montoOriginal * 1.18;
    let parrafo = document.createElement("div");
    parrafo.innerHTML = "<p>Monto en USD: </p>" + conversion + " USD"
    document.body.appendChild(parrafo)
  } else if (monedaOrigen == "USD" & monedaDestino == "EUR") {
    let conversion = montoOriginal * 0.85;
    let parrafo = document.createElement("div");
    parrafo.innerHTML = "<p>Monto en EUR: </p>" + conversion + " EUR"
    document.body.appendChild(parrafo)
  } else if (monedaOrigen == "USD" & monedaDestino == "CLP") {
    let conversion = montoOriginal * 783;
    let parrafo = document.createElement("div");
    parrafo.innerHTML = "<p>Monto en CLP: </p>" + conversion + " CLP"
    document.body.appendChild(parrafo)
  } else if (monedaOrigen == "USD" & monedaDestino == "USD" || monedaOrigen == "EUR" & monedaDestino == "EUR" || monedaOrigen == "CLP" & monedaDestino == "CLP") {
    let parrafo = document.createElement("div");
    parrafo.innerHTML = "<p>La moneda de origen y de destino son iguales, intente nuevamente. </p>"
    document.body.appendChild(parrafo)
  }
}