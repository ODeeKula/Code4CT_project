/* BUTTON FUNCTIONALITY ONLY! */

/* Declarations */
//count defined as integer and assigned zero to start from
//count for coffees, girls, projects & hours
let countC = 0, countG = 0, countP = 0, countH = 0;

//sets interval to how often timer will update in milliseconds
const counterCoffee = setInterval(timerCoffee, 1);
const counterGirls = setInterval(timerGirls, 1);
const counterProj = setInterval(timerProj, 1);
const counterHours = setInterval(timerHours, 1);

//Cups Of Coffee
function timerCoffee() {
    //enables count iteration
    countC++;

    //setting parameters to enable count to stop at desired number
    if(countC > 3000) {
        clearInterval(counterCoffee);

        return;
    }
    //pushes values to HTML page
    document.getElementById('coffeeCount').innerHTML = countC + "+";
}

//Number Of Girls
function timerGirls() {
    countG++;
    if(countG > 780){
        clearInterval(counterGirls);
        return;
    }
    document.getElementById('girlsCount').innerHTML = countG + "+";
}

//Projects Completed
function timerProj() {
    countP++;
    if(countP > 3120) {
        clearInterval(counterProj);
        return;
    }
    document.getElementById('projectsCount').innerHTML = countP + "+";
}

//Hours Of Coding
function timerHours() {
    countH++;
    if(countH > 8760) {
        clearInterval(counterProj);
        return;
    }
    document.getElementById('hoursCount').innerHTML = countH + "+";
}
