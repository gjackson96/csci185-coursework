
function openLightbox(imageSrc) {
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('character-lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('character-lightbox').style.display = 'none';
}
