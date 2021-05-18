var calcs = document.querySelector(".result");
var btnNumber = document.querySelectorAll(".btn");

// create input to display result
var result = document.createElement("input");
result.setAttribute("type", "text");
result.setAttribute("class", "numInputed");
result.setAttribute("Value", "");
result.setAttribute("disabled", "true");
calcs.appendChild(result);

// addeventlistener to each button
btnNumber.forEach(function(btnNumber) {
    btnNumber.addEventListener('click', calculate);
});

// function to calculate using js eval() function.
function calculate(event) {
    var btnNumberValue = event.target.value;
    result.disabled = "false";

    if(btnNumberValue === "=") {
        if(result.value != '') {
            result.value = eval(result.value);
        }
    } else if(btnNumberValue === "AC") {
        result.value = '';
    } else {
        result.value += btnNumberValue;
    }
}


