var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    // condições para a apresentação aparecer em formato de loop
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // escondendo os outros slides usando display none
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display="block";
}





