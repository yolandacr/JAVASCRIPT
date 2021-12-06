/* ALUMNA:YOLANDA CORDERO ROBLEDO
CURSO: 2º DAW */

// CODIGO A EJECUTAR CUANDO HA CARGADO LA WEB
$(document).ready(function () {
  $(".theme").attr("href", "./css/light.css");
});

// CODIGO A EJECUTAR PARA EL CAMBIO DE MODO DIA/NOCHE
$(".checkbox").click(function () {
  if ($("input.checkbox").is(":checked")) {
    $(".theme").attr("href", "./css/dark.css");
  } else {
    $(".theme").attr("href", "./css/light.css");
  }
});

// CODIGO A EJECUTAR PARA QUITAR/PONER FOTO DE FONDO
$(".checkbox2").click(function () {
  if ($("input.checkbox2").is(":checked")) {
    $("#fondo").css("opacity", "0");
  } else {
    $("#fondo").css("opacity", "0.6");
  }
});

//funcion para abrir los pdfs
function abrirPdf(direccion) {
  window.open(direccion);
}

//funcion para que salgan los mensajes de console.log en un div consola.

if (typeof console != "undefined")
  if (typeof console.log != "undefined") console.olog = console.log;
  else console.olog = function () {};

console.log = function (message) {
  console.olog(message);
  $("#consola").append("<p>" + message + "</p>");
};
console.error = console.debug = console.info = console.log;
