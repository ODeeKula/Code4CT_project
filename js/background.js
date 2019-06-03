// -------- Slider Transition ----------
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    
    //Iteration hiding images not in view
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    //Iteration enabling slide function
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    // Change image every 8 seconds
    setTimeout(showSlides, 8000); 
}