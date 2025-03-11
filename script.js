document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img, .gallery video");
    
    images.forEach(img => {
        img.addEventListener("click", function() {
            alert("Kenangan ini spesial! 💖");
        });
    });
});
