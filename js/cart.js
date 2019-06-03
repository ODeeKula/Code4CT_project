/* CART FUNCTIONALITY ONLY! */

let courses = [];
let cart = [];

//Add a course
function addCourse() {
    let name = document.getElementsByClassName("title");

    let price = document.getElementsByClassName("price");

    //throw into cart at designated tags
    document.getElementsByClassName("course_name")[0].innerHTML = name;
    document.getElementsByClassName("course_price")[0].innerHTML = price;
}

//Add course to cart
function addCart(course_id) {
    for (var i = 0; i < courses.length; i++) {
        if (courses[i].course_id == course_id) {
            var cartItem = null;
            for (var k = 0; k < cart.length; k++) {
                if (cart[k].product.course_id == courses[i].course_id) {
                    cartItem = cart[k];
                    cart[k].product_qty++;
                    break;
                }
            }

            if (cartItem == null) {
                
                var cartItem = {
                    product: courses[i],
                    product_qty: courses[i].product_qty 
                };
                cart.push(cartItem);
            }
        }
    }
    renderCartTable();
}

//Remove a course from cart
function subtractQuantity(course_id) {            
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.course_id == course_id) {
            cart[i].product_qty--;
        }

        if (cart[i].product_qty == 0) {
            cart.splice(i,1);
        }    
    }
    renderCartTable();
}

//Add number of courses
function addQuantity(course_id) {            
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.course_id == course_id) {
            cart[i].product_qty++;
        }  
    }
    renderCartTable();
}

//Remove a course
function removeItem(course_id) {            
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.course_id == course_id) {
            cart.splice(i, 1);
        }
    }
    renderCartTable();
}