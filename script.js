//Atgal į viršų
$(document).ready(function () {

    // Paslėpti #back-top pradžioje kad nerodytų
    $("#back-top").hide();

    //Gražus atėjimas #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // Kai paspaudžiame eiti iki 0px į viršų
        $('#back-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
            return false;
        });
    });
});

//Burger meniu
var toggleMenu = document.getElementById("js-toggle-menu");
var menu = document.getElementById("js-menu");

//Kai paspaudžiame pasikeičia ikonos ir išlenda meniu
toggleMenu.addEventListener("click", function () {
    toggleMenu.classList.toggle("burgerx");
    menu.classList.toggle("burger");
});

//Slideshow
var slideIndex = 0;
var timer= null;
showSlides(0);
//slideshow valdymas
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
	
    slideIndex++;
	
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    //parodyti kuri nuotrauka aktyvi
    dots[slideIndex - 1].className += " active";
	if (timer){
		clearTimeout(timer);
	}
     timer = setTimeout(iskv, 5000); // Keičiame kas 5000ms
	return slideIndex;
}
function iskv(){
	showSlides(slideIndex);
}