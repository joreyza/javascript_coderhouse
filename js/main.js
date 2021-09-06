
// usamos el ready para estar seguro de manipular el DOM cuando esté completamente cargadp

$( document ).ready(function() 


{

// Función que convierte los montos al presionar el botón "convertir" escrita con jQuery
$("#boton").click(function () {


  // Captura el monto ingresado por el usuario y lo guarda en local storage usando jQuery
  localStorage.setItem("monto original", $("#montoOriginal").val())

  // Captura la moneda de origen tipo texto y lo guarda en local storage usando jQuery
  localStorage.setItem("moneda original", $("#monedaOrigen").val())

  // Captura la moneda de destino tipo texto y lo guarda en local storage usando jQuery
  localStorage.setItem("moneda destino", $("#monedaDestino").val())


  const objetoUser = {
    monto: localStorage.getItem("monto original"),
    origen: localStorage.getItem("moneda original"),
    destino: localStorage.getItem("moneda destino")
  }

  // console.log(objetoUser.monto)
  // console.log (objetoUser.origen)
  // console.log(objetoUser.destino)

  // Se convierte el objeto a formato JSON 
  const objJSON = JSON.stringify(objetoUser)


  // se parsea el JSON a una variable datosUser
  var datosUser = JSON.parse(objJSON)


  // Condicionales que se encargan de convertir las monedas seleccionadas y mostrar el resultado en pantalla con JQuery
  if (datosUser.origen == "CLP" & datosUser.destino == "USD") {
    let conversion = parseFloat(datosUser.monto) * 0.0013

    $("#resultado").append(`<div>${datosUser.monto} CLP es: ${conversion} USD`)


  } else if (datosUser.origen == "CLP" & datosUser.destino == "EUR") {
    let conversion = parseFloat(datosUser.monto) * 0.0011

    $("#resultado").append(`<div>${datosUser.monto} CLP es: ${conversion} EUR`)


  } else if (datosUser.origen == "EUR" & datosUser.destino == "CLP") {
    let conversion = parseFloat(datosUser.monto) * 923

    $("#resultado").append(`<div>${datosUser.monto} EUR es: ${conversion} CLP`)


  } else if (datosUser.origen == "EUR" & datosUser.destino == "USD") {
    let conversion = parseFloat(datosUser.monto) * 1.18

    $("#resultado").append(`<div>${datosUser.monto} EUR es: ${conversion} USD`)


  } else if (datosUser.origen == "USD" & datosUser.destino == "EUR") {
    let conversion = parseFloat(datosUser.monto) * 0.85

    $("#resultado").append(`<div>${datosUser.monto} USD es: ${conversion} EUR`)


  } else if (datosUser.origen == "USD" & datosUser.destino == "CLP") {
    let conversion = parseFloat(datosUser.monto) * 783

    $("#resultado").append(`<div>${datosUser.monto} USD es: ${conversion} CLP`)


  } else if (datosUser.origen == "USD" & datosUser.destino == "USD" || datosUser.origen == "EUR" & datosUser.destino == "EUR" || datosUser.origen == "CLP" & datosUser.destino == "CLP") {
    
    $("#resultado").append(`<div><p>La moneda de origen y de destino son iguales, intente nuevamente. </p></div>`)

  }
});


});







