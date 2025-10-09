// Función para verificar el soporte de WebP
function support_format_webp() {
  var elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

// Cambiar la imagen de fondo según soporte WebP
window.onload = function () {
  var imageParallax = support_format_webp() ? 'source/img/galeria/inicio-yk.jpg' : 'source/img/galeria/inicio-yk.jpg';
  
  // Aplicar la imagen de fondo con propiedades responsive
  var portada = document.querySelector('.portada');
  if (portada) {
    portada.style.backgroundImage = `url(${imageParallax})`;
    portada.style.backgroundSize = 'cover';        // Hace la imagen responsive
    portada.style.backgroundPosition = 'center';   // Centra la imagen
    portada.style.backgroundRepeat = 'no-repeat';  // Evita que se repita
  }
};



