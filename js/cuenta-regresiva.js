
// Definir manualmente la fecha para la cuenta regresiva
var fechaCuentaRegresiva = 'Apr 26, 2026 17:00:00';  // Cambia esta fecha según lo que necesites
var countDownDate = new Date(fechaCuentaRegresiva).getTime();

// Actualizar el contador cada 1 segundo
var x = setInterval(function() {

  // Obtener la fecha y hora actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha actual y la de la cuenta regresiva
  var distance = countDownDate - now;

  // Cálculos para días, horas, minutos y segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar los resultados en los elementos correspondientes
  $("#dias .number").text(days);
  $("#horas .number").text(hours);
  $("#minutos .number").text(minutes);
  $("#segundos .number").text(seconds);

  // Si la cuenta regresiva ha terminado
  if (distance < 0) {
    clearInterval(x);
    $("#reloj").html('<p class="fin-cuenta">¡La cuenta regresiva ha terminado!</p>');
  }
}, 1000);
