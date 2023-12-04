function color1() {
    var square1 = document.getElementById('square1');
    if (square1) {
        square1.style.backgroundColor = 'blue';
    }
}

function color2() {
    var square2 = document.getElementById('square2');
    if (square2) {
        square2.style.backgroundColor = 'black';
    }
}

function color3() {
    var square3 = document.getElementById('square3');
    if (square3) {
        square3.style.backgroundColor = 'green';
    }
}

function color4() {
    var square4 = document.getElementById('square4');
    if (square4) {
        square4.style.backgroundColor = 'yellow';
    }
}

function color5() {
    var square5 = document.getElementById('square5');
    if (square5) {
        square5.style.backgroundColor = 'teal';
    }
}

function color6() {
    var square6 = document.getElementById('square6');
    if (square6) {
        square6.style.backgroundColor = 'purple';
    }
}

document.getElementById('square1').addEventListener('click', color1);
document.getElementById('square2').addEventListener('click', color2);
document.getElementById('square3').addEventListener('click', color3);
document.getElementById('square4').addEventListener('click', color4);
document.getElementById('square5').addEventListener('click', color5);
document.getElementById('square6').addEventListener('click', color6);
