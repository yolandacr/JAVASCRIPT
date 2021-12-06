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
