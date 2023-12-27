// speed.js
document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".button-message");
  var firstOverlay = document.querySelector(".text-overlay");
  var hiddenOverlay = document.querySelector(".text-overlay.hidden");

  button.addEventListener("click", function () {
    // Oculta el primer div, el botón y muestra el segundo div
    fadeOutAndIn(firstOverlay, hiddenOverlay, button);

    // También puedes agregar cualquier otra lógica que desees aquí
    button.style.display = 'none'; 
    // Puedes detener la reproducción del video si lo deseas
    //document.getElementById("video").pause();
  });

  function fadeOutAndIn(elementOut, elementIn) {
    elementOut.style.opacity = 1;

    (function fade() {
      if ((elementOut.style.opacity -= 0.1) < 0) {
        elementOut.style.display = "none";
        elementIn.style.display = "block";
        fadeIn(elementIn);
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = "block";

    (function fade() {
      var val = parseFloat(element.style.opacity);
      if (!((val += 0.1) > 1)) {
        element.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }
});
