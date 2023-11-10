const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 10,
    color: 'hotpink'
};

const c2 = {
    x: 400,
    y: 400,
    width: 350,
    speed: -7,
    color: 'violet'
};

const c3 = {
    x: 600,
    y: 600,
    width: 50,
    speed: 13,
    color: 'teal'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;

    // check if the car has moved off the right edge of the canvas
    if (c1.x > canvasWidth + c1.width / 2) {
    // if so, reset the x-coordinate to start from the left side
    c1.x = -c1.width / 2;
    }

    // move the second car:
    c2.x += c2.speed;

    // check if the second car has moved off the left edge of the canvas
    if (c2.x < -c2.width / 2) {
    // if so, reset the x-coordinate to start from the right side
    c2.x = canvasWidth + c2.width / 2;
    }

    // move the third car:
    c3.x += c3.speed;

    // check if the third car has moved off the right edge of the canvas
    if (c3.x > canvasWidth + c3.width / 2) {
    // if so, reset the x-coordinate to start from the left side
    c3.x = -c3.width / 2;
    }

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);

    // redraw the second car:
    drawCar(c2.x, c2.y, c2.width, c2.color);

    // redraw the third car:
    drawCar(c3.x, c3.y, c3.width, c3.color);
    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
