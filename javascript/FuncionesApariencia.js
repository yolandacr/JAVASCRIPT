$(document).ready(function () {
  $(".theme").attr("href", "./css/light.css");
});

$(".checkbox").click(function () {
  if ($("input.checkbox").is(":checked")) {
    $(".theme").attr("href", "./css/dark.css");
  } else {
    $(".theme").attr("href", "./css/light.css");
  }
});

$(".checkbox2").click(function () {
  if ($("input.checkbox2").is(":checked")) {
    $("#fondo").css("opacity", "0");
  } else {
    $("#fondo").css("opacity", "0.6");
  }
});


//funcion para que salgan los mensajes de console.log en un div consola.

 if (typeof console  != "undefined") 
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

console.log = function(message) {
    console.olog(message);
    $('#consola').append('<p>' + message + '</p>');
};
console.error = console.debug = console.info =  console.log 
