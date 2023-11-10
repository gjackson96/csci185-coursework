function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    let y = 0;
    let x = 0;
    let w = 50;
    while (y <= 600) {
        // circles that go horizontal
        fill('red');
        circle (x, 200, w);

        x += 5;

        // circles that go vertical
        circle (100, y, w);
        circle (300, y * 2, w);
        fill('violet');
        circle (500, y, w);
        circle (700, y * 7, w);

        y += 5;
        w += 1;
    }


    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
