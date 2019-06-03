
// -------- Display Hidden Window Button ----------
const window_wrapper = document.getElementsByClassName('hiddenWindowContainer')[0];

//Closes Hidden Window
const close = document.getElementsByClassName('closeButton')[0];
//Closes Hidden Window upon clicking anywhere outside Hidden Window
close.onclick = function() {
    window_wrapper.style.display = "none";
}

const images = document.getElementsByClassName('img');

const window_img = document.getElementById('hiddenImage');

// var captionText = document.getElementById('caption');

let i;
//View hidden window
for(i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        window_wrapper.style.display = "block";
        window_img.src = this.src;
    }
}

//Display Next Slider
let slideIndex = 1;
showSlides(slideIndex)

//Next/Previous Controls
function slideDir(n) {
    showSlides(slideIndex += n);
}

//Paganation Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;

    var slides = document.getElementsByClassName('slider');
    
    var dots = document.getElementsByClassName('g_list');
    
    if(n > slides.length) {
        slideIndex = 1;
    }
    
    if(n < 1) {
        slideIndex = slides.length;
    }
    //Iteration through slider div itself
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Iteration through paganation
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //Displays Next/Prev Slider and change state of paganation
    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " active";
    
}