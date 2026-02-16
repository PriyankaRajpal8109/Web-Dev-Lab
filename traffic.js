let currentLight = "red";
let position = 10;
let speed = 0;

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");

document.getElementById("btn").addEventListener("click", changeLight);

function changeLight() {
    if (currentLight === "red") {
        currentLight = "yellow";
    } else if (currentLight === "yellow") {
        currentLight = "green";
    } else {
        currentLight = "red";
    }
    updateLight();
}

function updateLight() {
    red.classList.remove("on");
    yellow.classList.remove("on");
    green.classList.remove("on");

    if (currentLight === "red") {
        red.classList.add("on");
        speed = 0;      // Stop
    } 
    else if (currentLight === "yellow") {
        yellow.classList.add("on");
        speed = 1;      // Ready
    } 
    else {
        green.classList.add("on");
        speed = 3;      // Go
    }
}

function moveCar() {
    position += speed;

    if (position > window.innerWidth) {
        position = -150;
    }

    car1.style.left = position + "px";
    car2.style.left = position + "px";
}

setInterval(moveCar, 30);
