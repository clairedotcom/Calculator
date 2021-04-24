function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    if (b==0){
        alert("Try again! You can't divide by 0.")
        return "error";
    }
    return a/b;
}

function operate(operation, a, b){
    if (operation == "+"){
        return add(a, b);
    }
    if (operation == "-"){
        return sub(a, b);
    }
    if (operation == "*"){
        return mult(a, b);
    }
    if (operation == "/"){
        return div(a, b);
    }
}

let runningDisplay = "";
let operationPressed = "";
let previousDisplay = "";
let resetDisplay = false;
let finalVaule = "";

const changeDisplay = document.querySelector("#display");
const numKeys = Array.from(document.querySelectorAll(".number-btn"));
const clearDisplay = document.querySelector("#clear");
const operationBtn = Array.from(document.querySelectorAll(".operation-btn"));
const equalsBtn = document.querySelector("#equals");

numKeys.forEach(btn => btn.addEventListener("click", () => storeNumKey(btn.textContent)));
clearDisplay.addEventListener("click", clear);
operationBtn.forEach(btn => btn.addEventListener("click", () => storeOperation(btn.textContent)));
equalsBtn.addEventListener("click", result);
window.addEventListener("load", clear);


function storeNumKey(number){
    if (number == "zero"){
        number = 0;
    }

    if (resetDisplay){
        changeDisplay.textContent = "";
        resetDisplay = false;
    }
   
    if (number == "." && changeDisplay.textContent.includes(".")){
        return
    }

    if (changeDisplay.textContent.toString().length > 8){
        return
    }
    changeDisplay.textContent += number;
}

function updateDisplay(value){
    changeDisplay.textContent = value
}

function clear(){
    runningDisplay = "";
    previousDisplay = "";
    operationPressed = "";
    resetDisplay = false;
    updateDisplay(runningDisplay);
}

function storeOperation(operation){
    if (operationPressed !== ""){
        result();
    }
    operationPressed = operation;
    previousDisplay = changeDisplay.textContent;
    resetDisplay = true;
    return operationPressed;
}

function result(){
    if (operationPressed == ""){
        return
    }
    runningDisplay = changeDisplay.textContent;
    finalValue = operate(operationPressed,parseFloat(previousDisplay),parseFloat(runningDisplay));
    updateDisplay(finalValue.toString().slice(0,9));
    operationPressed = "";
}

