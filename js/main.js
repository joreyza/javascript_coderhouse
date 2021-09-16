// Se obtienen los valores del EURO y el DOLAR a Pesos Chilenos (CLP)
// usando la API de mindicador.cl basado en el Banco Central de Chile

//Obtención del valor del EURO
$.getJSON('https://mindicador.cl/api', function (data) {
  var dailyIndicators = data;
  globalThis.clpAeuro = 1 / (dailyIndicators.euro.valor);
  globalThis.euro = dailyIndicators.euro.valor;

  // se captura error
}).fail(function () {
  alert('Error al consumir la API!');
});

//Obtención del valor del DOLAR
$.getJSON('https://mindicador.cl/api', function (data) {
  var dailyIndicators = data;
  globalThis.clpAusd = 1 / (dailyIndicators.dolar.valor);
  globalThis.dolar = dailyIndicators.dolar.valor;

  // se captura error
}).fail(function () {
  alert('Error al consumir la API!');
});

// usamos el ready para estar seguro de manipular el DOM cuando esté completamente cargadp
$(document).ready(function () {

  $("#refrescar").click(function () {
    //Actualizamos la página
    location.reload()
  });

  // Se usa Sweet Alert 2 para los links de la navBar
  $(".aboutMe").click(function () {

    Swal.fire({
      title: 'Soy un Front End Developer',
      text: 'Mi nombre es Jorge Reyes. Sé varias tecnologías web como: HTML, CSS3 y Javascript',
      imageUrl: 'img/jorge_reyes.jpg',
      imageAlt: 'Custom image',
      background: '#b7d2ff',
      customClass: {
        image: 'swalImage',
      }
    })
  })

  $(".aboutApp").click(function () {

    Swal.fire({
      title: 'Convertidor de monedas JR',
      text: 'Puedes converir entre tres divisas distintas: CLP (Pesos Chilenos), USD (Dolar USA) y EUR (euros). Los valores se obtienen de una base de datos actualizada diariamente, por lo tanto los resultados son reales.',
      background: '#b7d2ff'
    })
  })

  $(".credits").click(function () {

    Swal.fire({
      title: 'Créditos',
      text: 'La app fue escrita en HTML, CSS3, SASS y Bootstrap. El convertidor funciona con Javascript y JQuery. Adicionalmente se usa la API de mindicador.cl para obtener los valores actualizados. Las alertas fueron construidas con sweetalert2.github.io y además se usa la librería numeral js para formatear los resultados',
      background: '#b7d2ff'
    })
  })

  $(".contact").click(function () {

    Swal.fire({
      text: 'Te dejo mi mail personal para que me escribas!',
      title: 'joreyza@gmail.com',
      imageUrl: 'img/jorge_reyes.jpg',
      imageAlt: 'Custom image',
      background: '#b7d2ff',
      customClass: {
        image: 'swalImage',
      }
    })
  })



  // Función que convierte los montos al presionar el botón "convertir" escrita con jQuery
  $("#boton").click(function () {

    // Captura el monto ingresado por el usuario y lo guarda en local storage usando jQuery
    localStorage.setItem("monto original", $("#montoOriginal").val())
    // Captura la moneda de origen tipo texto y lo guarda en local storage usando jQuery
    localStorage.setItem("moneda original", $("#monedaOrigen").val())
    // Captura la moneda de destino tipo texto y lo guarda en local storage usando jQuery
    localStorage.setItem("moneda destino", $("#monedaDestino").val())

    // se crea el objeto objetoUser donde se guardan los datos capturados.
    const objetoUser = {
      monto: localStorage.getItem("monto original"),
      origen: localStorage.getItem("moneda original"),
      destino: localStorage.getItem("moneda destino")
    }

    // Se convierte el objeto a formato JSON 
    const objJSON = JSON.stringify(objetoUser)


    // se parsea el JSON a una variable datosUser
    var datosUser = JSON.parse(objJSON)


    // Condicionales que se encargan de convertir las monedas seleccionadas y mostrar el resultado en pantalla con JQuery

    if (datosUser.origen == "CLP" & datosUser.destino == "USD") {
      let conversion = parseFloat(datosUser.monto) * clpAusd;

      //se usa la librería Numeral JS para formatear resultado a moneda
      var miConvertido = numeral(conversion);
      var monedaConvString = miConvertido.format('$0,0.00');

      var miOriginal = numeral(parseFloat(datosUser.monto));
      var monedaOrigString = miOriginal.format('$0,0.00');

      $("#resultado").append(`<div id="div1" style="display:none">${monedaOrigString} CLP es: ${monedaConvString} USD`)
      $('#div1').slideDown(2000)

    } else if (datosUser.origen == "CLP" & datosUser.destino == "EUR") {
      let conversion = parseFloat(datosUser.monto) * clpAeuro;

      //se usa la librería Numeral JS para formatear resultado a moneda
      var miConvertido = numeral(conversion);
      var monedaConvString = miConvertido.format('$0,0.00');

      var miOriginal = numeral(parseFloat(datosUser.monto));
      var monedaOrigString = miOriginal.format('$0,0.00');

      $("#resultado").append(`<div id="div1" style="display:none">${monedaOrigString} CLP es: ${monedaConvString} EUR`)
      $('#div1').slideDown(2000)

    } else if (datosUser.origen == "EUR" & datosUser.destino == "CLP") {
      let conversion = parseFloat(datosUser.monto) * euro;

      //se usa la librería Numeral JS para formatear resultado a moneda
      var miConvertido = numeral(conversion);
      var monedaConvString = miConvertido.format('$0,0.00');

      var miOriginal = numeral(parseFloat(datosUser.monto));
      var monedaOrigString = miOriginal.format('$0,0.00');

      $("#resultado").append(`<div id="div1" style="display:none">${monedaOrigString} EUR es: ${monedaConvString} CLP`)
      $('#div1').slideDown(2000)

    } else if (datosUser.origen == "EUR" & datosUser.destino == "USD") {
      let conversion = parseFloat(datosUser.monto) * (euro / dolar);

      //se usa la librería Numeral JS para formatear resultado a moneda
      var miConvertido = numeral(conversion);
      var monedaConvString = miConvertido.format('$0,0.00');

      var miOriginal = numeral(parseFloat(datosUser.monto));
      var monedaOrigString = miOriginal.format('$0,0.00');

      $("#resultado").append(`<div id="div1" style="display:none">${monedaOrigString} EUR es: ${monedaConvString} USD`)
      $('#div1').slideDown(2000)

    } else if (datosUser.origen == "USD" & datosUser.destino == "EUR") {
      let conversion = parseFloat(datosUser.monto) * (dolar / euro);

      //se usa la librería Numeral JS para formatear resultado a moneda
      var miConvertido = numeral(conversion);
      var monedaConvString = miConvertido.format('$0,0.00');

      var miOriginal = numeral(parseFloat(datosUser.monto));
      var monedaOrigString = miOriginal.format('$0,0.00');

      $("#resultado").append(`<div id="div1" style="display:none">${monedaOrigString} USD es: ${monedaConvString} EUR`)
      $('#div1').slideDown(2000)

    } else if (datosUser.origen == "USD" & datosUser.destino == "CLP") {
      let conversion = parseFloat(datosUser.monto) * dolar;

      //se usa la librería Numeral JS para formatear resultado a moneda
      var miConvertido = numeral(conversion);
      var monedaConvString = miConvertido.format('$0,0.00');

      var miOriginal = numeral(parseFloat(datosUser.monto));
      var monedaOrigString = miOriginal.format('$0,0.00');

      $("#resultado").append(`<div id="div1" style="display:none">${monedaOrigString} USD es: ${monedaConvString} CLP`)
      $('#div1').slideDown(2000)

    } else if (datosUser.origen == "USD" & datosUser.destino == "USD" || datosUser.origen == "EUR" & datosUser.destino == "EUR" || datosUser.origen == "CLP" & datosUser.destino == "CLP") {

      $("#resultado").append(`<div id="div1" style="display:none"><p>La moneda de origen y de destino son iguales, intente nuevamente. </p></div>`)
      $('#div1').slideDown(2000);
    }
  });
});