// hamburger menu
const nav = document.getElementById('navWrapper');
//Assigning hamburger menu element to variable

let open = true;
const menu = document.getElementsByClassName('hamburgerIcon')[0];
//Displays the navBar
menu.onmouseover = function() {
    if (open == true){
        nav.style.display = "grid";
        nav.style.marginTop = "0";
        open = false;
    }
    else {
        nav.style.marginTop = "-710px";
        open = true;
    }    
}

// Allows user to click outside of the header/nav to close nav
window.onclick = function(event) {
    if (event.target == nav) {
        nav.style.marginTop = "-710px";
        open = true;
    }
}

//  cart menu 
const shop = document.getElementsByClassName('shoppingContainer')[0];
//Assigning cart icom element to variable

let display = true;
const cartIcon = document.getElementsByClassName('cartIcon')[0];

// **Allows for both click and hover to be used similtaneously
//Displays the shopping cart
cartIcon.onmouseover = function() {
    if (display == true){
        shop.style.display = "grid";
        shop.style.marginRight = "0";
        display = false;
    }
    else {
        shop.style.marginRight = "-2500px";
        display = true;
    }    
}
//Enables click function (especially appropriate for mobile view)
cartIcon.onclick = function() {
    if (display == true){
        shop.style.display = "grid";
        shop.style.marginRight = "0";
        display = false;
    }
    else {
        shop.style.marginRight = "-2500px";
        display = true;
    }    
}

// backToTop button 
//target html document
window.onscroll = function() {
    backToTop()
};

//hidden button until user scrolls on page
function backToTop() {
    if(document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
        document.getElementById('backToTop').style.display = "block";
    }
    else {
        document.getElementById('backToTop').style.display = "none";
    }    
}
//button functionality to scroll onclick
function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //smooth slide effect
    window.scrollBy ({
        top: 1,
        left: 0,
        behavior: 'smooth'
    });
    window.querySelector('body').scrollBy({
        behavior: 'smooth'
    });
}

