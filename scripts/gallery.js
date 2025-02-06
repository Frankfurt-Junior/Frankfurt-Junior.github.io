// Función para mover las imágenes del slider
function moveSlide(direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    const images = gallery.querySelector('.slider-images');
    const totalSlides = images.children.length;
    const currentSlide = parseInt(images.getAttribute('data-current')) || 0; // Obtiene el índice actual

    // Calculamos el nuevo índice
    let newSlideIndex = currentSlide + direction;

    // Aseguramos que el índice esté dentro del rango válido
    if (newSlideIndex < 0) newSlideIndex = totalSlides - 1;
    if (newSlideIndex >= totalSlides) newSlideIndex = 0;

    // Desplazamos las imágenes en el slider
    images.style.transform = `translateX(-${newSlideIndex * 100}%)`;

    // Actualizamos el índice de la imagen actual
    images.setAttribute('data-current', newSlideIndex);
}
