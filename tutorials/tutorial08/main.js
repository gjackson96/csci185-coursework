function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged(){
    const colorInput = document.getElementById('color');
    const outlineColor = document.getElementById('outlineColor').value;
    const sizeInput = document.getElementById('size');

    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    // fill("red");
    // circle(mouseX, mouseY, 20);

    const color = colorInput.value;
    const size = parseFloat(sizeInput.value);
    stroke(outlineColor);

    fill(color);
    strokeWeight(2);

    if (shape.value === "circle") {
        circle (mouseX, mouseY, size);
    } else if (shape.value === "square") {
        square (mouseX, mouseY, size);
    } else if (shape.value === "triangle") {
        triangle (mouseX, mouseY, mouseX +size, mouseY +size, mouseX -size, mouseY +size, );
    }

}



/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/