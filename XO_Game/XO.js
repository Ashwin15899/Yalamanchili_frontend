const r1c1 = document.querySelector("#r1c1");
const r1c2 = document.querySelector("#r1c2");
const r1c3 = document.querySelector("#r1c3");
const r2c1 = document.querySelector("#r2c1");
const r2c2 = document.querySelector("#r2c2");
const r2c3 = document.querySelector("#r2c3");
const r3c1 = document.querySelector("#r3c1");
const r3c2 = document.querySelector("#r3c2");
const r3c3 = document.querySelector("#r3c3");
let result = document.getElementById("result");
let wonTag = document.getElementById("won");
let lostTag = document.getElementById("lost")

let flag = false;
let count = 1;
const O = "<b>O</b>";
const X = "<b>X</b>";

const box1 = () => {
    if (count % 2 == 0) {
        r1c1.innerHTML = O;
        checkGame()
    }
    else {
        r1c1.innerHTML = X;
        checkGame()
    }
    count++;
    r1c1.removeEventListener("click", box1);
}
r1c1.addEventListener("click", box1);

const box2 = () => {
    if (count % 2 == 0) {
        r1c2.innerHTML = "<b>O</b>";
        checkGame()
    }
    else {
        r1c2.innerHTML = "<b>X</b>"
        checkGame()
    }
    count++;
    r1c2.removeEventListener("click", box2);
}
r1c2.addEventListener("click", box2);

const box3 = () => {
    if (count % 2 == 0) {
        r1c3.innerHTML = O;
        checkGame()
    }
    else {
        r1c3.innerHTML = X;
        checkGame()
    }
    count++;
    r1c3.removeEventListener("click", box3);
}
r1c3.addEventListener("click", box3);

const box4 = () => {
    if (count % 2 == 0) {
        r2c1.innerHTML = O;
        checkGame()
    }
    else {
        r2c1.innerHTML = X;
        checkGame()
    }
    count++;
    r2c1.removeEventListener("click", box4);
}
r2c1.addEventListener("click", box4);

const box5 = () => {
    if (count % 2 == 0) {
        r2c2.innerHTML = O;
        checkGame()
    }
    else {
        r2c2.innerHTML = X;
        checkGame()
    }
    count++;
    r2c2.removeEventListener("click", box5);
}
r2c2.addEventListener("click", box5);

const box6 = () => {
    if (count % 2 == 0) {
        r2c3.innerHTML = O;
        checkGame()
    }
    else {
        r2c3.innerHTML = X;
        checkGame()
    }
    count++;
    r2c3.removeEventListener("click", box6);
}
r2c3.addEventListener("click", box6);

const box7 = () => {
    if (count % 2 == 0) {
        r3c1.innerHTML = O;
        checkGame()
    }
    else {
        r3c1.innerHTML = X;
        checkGame()
    }
    count++;
    r3c1.removeEventListener("click", box7);
}
r3c1.addEventListener("click", box7);

const box8 = () => {
    if (count % 2 == 0) {
        r3c2.innerHTML = O;
        checkGame()
    }
    else {
        r3c2.innerHTML = X;
        checkGame()
    }
    count++;
    r3c2.removeEventListener("click", box8);
}
r3c2.addEventListener("click", box8);

const box9 = () => {
    if (count % 2 == 0) {
        r3c3.innerHTML = O;
        checkGame()
    }
    else {
        r3c3.innerHTML = X;
        checkGame()
    }
    count++;
    r3c3.removeEventListener("click", box9);
}
r3c3.addEventListener("click", box9);


function checkGame() {
    let won;
    let lost;
    if ((r1c1.innerHTML == X && r1c2.innerHTML == X && r1c3.innerHTML == X) || (r1c1.innerHTML == O && r1c2.innerHTML == O && r1c3.innerHTML == O)) {
        r1c1.style.backgroundColor = "green"
        r1c2.style.backgroundColor = "green"
        r1c3.style.backgroundColor = "green"
        flag = true;
        won = r1c1.innerHTML;
        lost = (won === X) ? O : X;
    }

    if ((r2c1.innerHTML == X && r2c2.innerHTML == X && r2c3.innerHTML == X) || (r2c1.innerHTML == O && r2c2.innerHTML == O && r2c3.innerHTML == O)) {
        r2c1.style.backgroundColor = "green"
        r2c2.style.backgroundColor = "green"
        r2c3.style.backgroundColor = "green"
        flag = true;
        won = r2c1.innerHTML;
        lost = (won === X) ? O : X;
    }

    if ((r3c1.innerHTML == X && r3c2.innerHTML == X && r3c3.innerHTML == X) || (r3c1.innerHTML == O && r3c2.innerHTML == O && r3c3.innerHTML == O)) {
        r3c1.style.backgroundColor = "green"
        r3c2.style.backgroundColor = "green"
        r3c3.style.backgroundColor = "green"
        flag = true;
        won = r3c1.innerHTML;
        lost = (won === X) ? O : X;
    }

    if ((r1c1.innerHTML == X && r2c1.innerHTML == X && r3c1.innerHTML == X) || (r1c1.innerHTML == O && r2c1.innerHTML == O && r3c1.innerHTML == O)) {
        r1c1.style.backgroundColor = "green"
        r2c1.style.backgroundColor = "green"
        r3c1.style.backgroundColor = "green"
        flag = true;
        won = r1c1.innerHTML;
        lost = (won === X) ? O : X;
    }

    if ((r1c2.innerHTML == X && r2c2.innerHTML == X && r3c2.innerHTML == X) || (r1c2.innerHTML == O && r2c2.innerHTML == O && r3c2.innerHTML == O)) {
        r1c2.style.backgroundColor = "green"
        r2c2.style.backgroundColor = "green"
        r3c2.style.backgroundColor = "green"
        flag = true;
        won = r1c2.innerHTML;
        lost = (won === X) ? O : X;
    }
    if ((r1c3.innerHTML == X && r2c3.innerHTML == X && r3c3.innerHTML == X) || (r1c3.innerHTML == O && r2c3.innerHTML == O && r3c3.innerHTML == O)) {
        r1c3.style.backgroundColor = "green"
        r2c3.style.backgroundColor = "green"
        r3c3.style.backgroundColor = "green"
        flag = true;
        won = r1c3.innerHTML;
        lost = (won === X) ? O : X;
    }
    if ((r1c1.innerHTML == X && r2c2.innerHTML == X && r3c3.innerHTML == X) || (r1c1.innerHTML == O && r2c2.innerHTML == O && r3c3.innerHTML == O)) {
        r1c1.style.backgroundColor = "green"
        r2c2.style.backgroundColor = "green"
        r3c3.style.backgroundColor = "green"
        flag = true;
        won = r1c1.innerHTML;
        lost = (won === X) ? O : X;
    }
    if ((r1c3.innerHTML == X && r2c2.innerHTML == X && r3c1.innerHTML == X) || (r1c3.innerHTML == O && r2c2.innerHTML == O && r3c1.innerHTML == O)) {
        r1c3.style.backgroundColor = "green"
        r2c2.style.backgroundColor = "green"
        r3c1.style.backgroundColor = "green"
        flag = true;
        won = r1c3.innerHTML;
        lost = (won === X) ? O : X;
    }

    if (flag) {
        r1c1.removeEventListener("click", box1);
        r1c2.removeEventListener("click", box2);
        r1c3.removeEventListener("click", box3);
        r2c1.removeEventListener("click", box4);
        r2c2.removeEventListener("click", box5);
        r2c3.removeEventListener("click", box6);
        r3c1.removeEventListener("click", box7);
        r3c2.removeEventListener("click", box8);
        r3c3.removeEventListener("click", box9);
        result.style.display = "block"
        wonTag.innerHTML += won.replace("<b>", "").replace("</b>", ""); // Remove <b> tags for display
        lostTag.innerHTML += lost.replace("<b>", "").replace("</b>", "");
    }
}