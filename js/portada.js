// portada.js - Control de fondo responsive para móviles y desktop
function setupResponsiveBackground() {
    var portada = document.querySelector('.portada');
    if (!portada) return;
    
    // Configurar propiedades base que siempre se necesitan
    portada.style.backgroundImage = "url('source/img/galeria/inicio-yk.jpg')";
    portada.style.backgroundSize = "cover";
    portada.style.backgroundPosition = "center";
    portada.style.backgroundRepeat = "no-repeat";
    
    // Detectar si es móvil
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var isSmallScreen = window.innerWidth <= 768;
    
    if (isMobile || isSmallScreen) {
        // Para móviles: sin efecto parallax (mejor rendimiento)
        portada.style.backgroundAttachment = "scroll";
        console.log('📱 Modo móvil: background-attachment: scroll');
    } else {
        // Para escritorio: con efecto parallax
        portada.style.backgroundAttachment = "fixed";
        console.log('💻 Modo escritorio: background-attachment: fixed');
    }
}

// Ejecutar en múltiples eventos para asegurar
window.addEventListener('load', setupResponsiveBackground);
document.addEventListener('DOMContentLoaded', setupResponsiveBackground);
window.addEventListener('resize', setupResponsiveBackground);

// También ejecutar después de un tiempo por si acaso
setTimeout(setupResponsiveBackground, 100);
setTimeout(setupResponsiveBackground, 500);

// Debug opcional
function debugBackground() {
    var portada = document.querySelector('.portada');
    if (portada) {
        var style = window.getComputedStyle(portada);
        console.log('🔍 Debug fondo:', {
            backgroundImage: style.backgroundImage,
            backgroundAttachment: style.backgroundAttachment,
            screenWidth: window.innerWidth,
            isMobile: /Mobi/.test(navigator.userAgent)
        });
    }
}
setTimeout(debugBackground, 1000);

