let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    // Calcular la nueva posición del carrusel
    currentSlide = (currentSlide + direction + totalItems) % totalItems;
    const offset = -currentSlide * 100;

    // Mover el carrusel
    carousel.style.transform = `translateX(${offset}%)`;
}

function openModal(imgElement) {
    var modalImage = document.getElementById("modalImage-2");
    modalImage.src = imgElement.src;
    $('#imageModal-gallery').modal('show');
}

function openImageModal(imgElement) {
    var modalImage = document.getElementById("modalImage");
    var downloadImage = document.getElementById("downloadImage");
    
    // Cambiar la imagen dentro del modal
    modalImage.src = imgElement.src;
    
    // Configurar el enlace de descarga con la misma URL de la imagen
    downloadImage.href = imgElement.src;
  
    // Mostrar el modal
    $('#imageModal').modal('show');
  }
  
  