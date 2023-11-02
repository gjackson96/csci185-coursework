const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";

function turnOnOff() {
    // turn the lightbulb on!
    const elem = document.querySelector("#my_image");
    if (elem.scr === imgOn) {
        elem.src = imgOff;
    } else {
        elem.src = imgOn;
    }

}
