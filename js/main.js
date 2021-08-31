// Función que convierte los montos al presionar el botón "convertir"
let buttonPress = document.getElementById("boton")
buttonPress.onclick = () => {

  // Captura el monto ingresado por el usuario y lo guarda en local storage
  localStorage.setItem("monto original", document.getElementById("montoOriginal").value)

  // Captura la moneda de origen tipo texto y lo guarda en local storage
  var origen = document.getElementById("monedaOrigen")
  localStorage.setItem("moneda original", origen.options[origen.selectedIndex].text)

  // Captura la moneda de destino tipo texto y lo guarda en local storage
  var destino = document.getElementById("monedaDestino")
  localStorage.setItem("moneda destino", destino.options[destino.selectedIndex].text)


  const objetoUser = {
    monto: localStorage.getItem("monto original"),
    origen: localStorage.getItem("moneda original"),
    destino: localStorage.getItem("moneda destino")
  }
  // Se convierte el objeto a formato JSON 
  const objJSON = JSON.stringify(objetoUser)


  // se parsea el JSON a una variable datosUser
  var datosUser = JSON.parse(objJSON)


  // Condicionales que se encargan de convertir las monedas seleccionadas y mostrar el resultado en pantalla
  if (datosUser.origen == "CLP" & datosUser.destino == "USD") {
    let conversion = parseFloat(datosUser.monto) * 0.0013
    var parrafo = document.createElement("div")
    var texto = document.createTextNode("El monto en USD es: " + conversion + " USD")
    parrafo.appendChild(texto)
    document.getElementById("resultado").appendChild(parrafo)

  } else if (datosUser.origen == "CLP" & datosUser.destino == "EUR") {
    let conversion = parseFloat(datosUser.monto) * 0.0011
    var parrafo = document.createElement("div")
    var texto = document.createTextNode("El monto en EUR es: " + conversion + " EUR")
    parrafo.appendChild(texto)
    document.getElementById("resultado").appendChild(parrafo)

  } else if (datosUser.origen == "EUR" & datosUser.destino == "CLP") {
    let conversion = parseFloat(datosUser.monto) * 923
    var parrafo = document.createElement("div")
    var texto = document.createTextNode("El monto en CLP es: " + conversion + " CLP")
    parrafo.appendChild(texto)
    document.getElementById("resultado").appendChild(parrafo)

  } else if (datosUser.origen == "EUR" & datosUser.destino == "USD") {
    let conversion = parseFloat(datosUser.monto) * 1.18
    var parrafo = document.createElement("div")
    var texto = document.createTextNode("El monto en USD es: " + conversion + " USD")
    parrafo.appendChild(texto)
    document.getElementById("resultado").appendChild(parrafo)

  } else if (datosUser.origen == "USD" & datosUser.destino == "EUR") {
    let conversion = parseFloat(datosUser.monto) * 0.85
    var parrafo = document.createElement("div")
    var texto = document.createTextNode("El monto en EUR es: " + conversion + " EUR")
    parrafo.appendChild(texto)
    document.getElementById("resultado").appendChild(parrafo)

  } else if (datosUser.origen == "USD" & datosUser.destino == "CLP") {
    let conversion = parseFloat(datosUser.monto) * 783
    var parrafo = document.createElement("div")
    var texto = document.createTextNode("El monto en CLP es: " + conversion + " CLP")
    parrafo.appendChild(texto)
    document.getElementById("resultado").appendChild(parrafo)

  } else if (datosUser.origen == "USD" & datosUser.destino == "USD" || datosUser.origen == "EUR" & datosUser.destino == "EUR" || datosUser.origen == "CLP" & datosUser.destino == "CLP") {
    let parrafo = document.createElement("div")
    parrafo.innerHTML = "<p class='response'>La moneda de origen y de destino son iguales, intente nuevamente. </p>"
    document.body.appendChild(parrafo)
  }
}