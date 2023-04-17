var input = "";
var output = document.getElementById("result");

function addToInput(value) {
    input += value;
    output.value = input;
}

function clearInput() {
    input = "";
    output.value = "0";
}

function calculateResult() {
    var result = eval(input);
    input = "";
    output.value = result;
}
