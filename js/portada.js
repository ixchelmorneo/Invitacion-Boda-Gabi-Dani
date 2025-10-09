// portada.js - VERSIÓN CORREGIDA
function makeBackgroundResponsive() {
    var portada = document.querySelector('.portada');
    if (portada) {
        // Aplicar la imagen de fondo con todas las propiedades necesarias
        portada.style.backgroundImage = "url('source/img/galeria/inicio-yk.jpg')";
        portada.style.backgroundSize = "cover";
        portada.style.backgroundPosition = "center center";
        portada.style.backgroundRepeat = "no-repeat";
        portada.style.backgroundAttachment = "fixed";
        
        console.log('✅ Imagen de fondo aplicada y hecha responsive');
    }
}

// Ejecutar cuando la página cargue
window.addEventListener('load', makeBackgroundResponsive);

// También ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', makeBackgroundResponsive);

// Y por si acaso, ejecutar después de un pequeño delay
setTimeout(makeBackgroundResponsive, 100);

