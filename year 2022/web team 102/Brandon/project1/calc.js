
function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var value1 = document.getElementById("result").value;
    var value2 = eval(value1);
    document.getElementById("result").value = value2;
}

function clearScreen() {
    document.getElementById("result").value = "";
}