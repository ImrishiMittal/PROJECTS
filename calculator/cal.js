let display = document.getElementById("display");

function ac() {
    display.innerHTML = "";
}

function back() {
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function plusMinus() {
    if (display.innerHTML[0] === '-') {
        display.innerHTML = display.innerHTML.slice(1);
    } else {
        display.innerHTML = '-' + display.innerHTML;
    }
}

function input(value) {
    display.innerHTML += value;
}

function calculate() {
    try {
       let result = display.innerHTML.replace('÷', '/').replace('x', '*');
        display.innerHTML = eval(result);
    } catch (e) {
        display.innerHTML = "Error";
    }
}
display.innerHTML = "";

