const navbar = document.querySelector('.navbar')
const barsToggle = document.querySelector('.toggle')
const toggleIcon = document.querySelector('.toggle i')

barsToggle.onclick = function () {
    navbar.classList.toggle('open')
    const isOpen = navbar.classList.contains('open')
}

document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && !barsToggle.contains(e.target)) {
        navbar.classList.remove('open');
    }
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}