
const canvas = document.getElementsByClassName('canvas')[0].getContext('2d');
const canvas_two = document.getElementsByClassName('canvas')[1].getContext('2d');
const canvas_three = document.getElementsByClassName('canvas')[2].getContext('2d');
const canvas_four = document.getElementsByClassName('canvas')[3].getContext('2d');

let count_one = 0;
let count_two = 0;
let count_three = 0;
let count_four = 0;

let start = 4.72;

let canvasWidth = canvas.canvas.width;

let canvasHeight = canvas.canvas.height;

let diff;

//Speed at which canvas will draw
let simulation = setInterval(progressSimulation, 50);

//Function to draw canvas
function progressSimulation() {
    // **Order Imperitive!

    canvas.clearRect(0,0, canvasWidth, canvasHeight);

    canvas.lineWidth = 2;

    canvas.fillStyle = '#e38f84';

    canvas.strokeStyle = '#e38f84';

    canvas.textAlign = 'center';

    diff = ((count_one / 100) * (Math.PI * 2 * 10)).toFixed(2);

    canvas.fillText(count_one + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);

    canvas.beginPath();

    canvas.arc(35, 35, 30, start, ((diff / 10) + start), false);

    canvas.stroke();

    //Condition to which percentage will be drawn
    if(count_one > 79) {
        clearTimeout(simulation);

        //Script here upon progress complete
    }
    //Iteration allowing canvas to count through
    count_one++;
}

//stats two
let simulation_two = setInterval(prog_sim_two, 50);
function prog_sim_two() {
    canvas_two.clearRect(0,0, canvasWidth, canvasHeight);
    canvas_two.lineWidth = 2;
    canvas_two.fillStyle = '#e38f84';
    canvas_two.strokeStyle = '#e38f84';
    canvas_two.textAlign = 'center';
    diff = ((count_two / 100) * (Math.PI * 2 * 10)).toFixed(2);
    canvas_two.fillText(count_two + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);
    canvas_two.beginPath();
    canvas_two.arc(35, 35, 30, start, ((diff / 10) + start), false);
    canvas_two.stroke();
    if(count_two > 73) {
        clearTimeout(simulation_two);
    }
    count_two++;
}

//stats three
let simulation_three = setInterval(prog_sim_three, 50);
function prog_sim_three() {
    canvas_three.clearRect(0,0, canvasWidth, canvasHeight);
    canvas_three.lineWidth = 2;
    canvas_three.fillStyle = '#e38f84';
    canvas_three.strokeStyle = '#e38f84';
    canvas_three.textAlign = 'center';
    diff = ((count_three / 100) * (Math.PI * 2 * 10)).toFixed(2);
    canvas_three.fillText(count_three + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);
    canvas_three.beginPath();
    canvas_three.arc(35, 35, 30, start, ((diff / 10) + start), false);
    canvas_three.stroke();
    if(count_three > 55) {
        clearTimeout(simulation_three);
    }
    count_three++;
}

//stats four
let simulation_four = setInterval(prog_sim_four, 50);
function prog_sim_four() {
    canvas_four.clearRect(0,0, canvasWidth, canvasHeight);
    canvas_four.lineWidth = 2;
    canvas_four.fillStyle = '#e38f84';
    canvas_four.strokeStyle = '#e38f84';
    canvas_four.textAlign = 'center';
    diff = ((count_four / 100) * (Math.PI * 2 * 10)).toFixed(2);
    canvas_four.fillText(count_four + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);
    canvas_four.beginPath();
    canvas_four.arc(35, 35, 30, start, ((diff / 10) + start), false);
    canvas_four.stroke();
    if(count_four > 23) {
        clearTimeout(simulation_four);
    }
    count_four++;
}