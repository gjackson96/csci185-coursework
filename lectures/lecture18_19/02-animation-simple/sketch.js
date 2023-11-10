let x = 100;
let y = 500;
let width = 50;
let speed = 10;

let x1 = 600;
let y1 = 300;
let width1 = 100;
let speed1 = 20;


const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    // make circle go diagonal and up
    y -= 2;
    x += speed;

    y1 -= 2;
    x1 += speed1;
    if (x1 < 0) {
        x1 = canvasWidth;
    }

    clear();
    fill('hotpink');
    circle(x, y, width);

    
    // clear();
    fill('violet');
    circle(x1, y1, width1);

    drawGrid(canvasWidth, canvasHeight);

   
}
