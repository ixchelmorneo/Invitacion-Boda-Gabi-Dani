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
  document.querySelector('.portada').style.backgroundImage = `url(${imageParallax})`;
};
