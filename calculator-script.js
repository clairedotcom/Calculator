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
let storedValue = "";
let previousDisplay = "";

const changeDisplay = document.querySelector("#display");
const numKeys = Array.from(document.querySelectorAll(".number-btn"));
const clearDisplay = document.querySelector("#clear");
const operationBtn = Array.from(document.querySelectorAll(".operation-btn"));
const equalsBtn = document.querySelector("#equals");

numKeys.forEach(btn => btn.addEventListener("click", () => storeNumKey(btn.textContent)));
clearDisplay.addEventListener("click", clear);
operationBtn.forEach(btn => btn.addEventListener("click", () => storeOperation(btn.textContent)));
equalsBtn.addEventListener("click", test);



function storeNumKey(number){
    if (number == "zero"){
        number = 0;
    }
    runningDisplay = runningDisplay + number;
    updateDisplay(runningDisplay);
    return runningDisplay;    
}

function updateDisplay(value){
    changeDisplay.textContent = value;
}

function clear(){
    runningDisplay = "";
    updateDisplay(runningDisplay);
}

function storeOperation(operation){
    operationPressed = operation;
    previousDisplay = runningDisplay;
    runningDisplay = ""; 
    return operationPressed;
}

function test(){
    storedValue = operate(operationPressed,parseInt(previousDisplay),parseInt(runningDisplay));
    updateDisplay(storedValue);
}

