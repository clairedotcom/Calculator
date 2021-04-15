function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1/num2;
}

function operate(operation,num1,num2){
    if (operation == "+"){
        return add(num1, num2);
    }
    if (operation == "-"){
        return sub(num1,num2);
    }
    if (operation == "*"){
        return mult(num1, num2);
    }
    if (operation == "/"){
        return div(num1, num2);
    }
}

//initialize variables and constants used in following functions
let runningDisplay = "";
let operationPressed = "";
const changeDisplay = document.querySelector("#display");

function storeNumKey(e){
    let displayValue = e.target.id;
    if (displayValue == "zero"){
        displayValue = 0;
    }
    runningDisplay = runningDisplay + displayValue;
    updateDisplay(runningDisplay);    
}

function updateDisplay(value){
    changeDisplay.textContent = value;
}

function clear(){
    runningDisplay = "";
    updateDisplay(runningDisplay);
}

function storeOperation(e){
    operationPressed = e.target.id;
    previousDisplay = runningDisplay;
    runningDisplay = "";
    return operationPressed;
}

function test(){
    if (operationPressed == "add"){
        updateDisplay(operate("+",parseInt(previousDisplay),parseInt(runningDisplay)));
    }
    if (operationPressed == "sub"){
        updateDisplay(operate("-",parseInt(previousDisplay),parseInt(runningDisplay)));
    }
    if (operationPressed == "mult"){
        updateDisplay(operate("*",parseInt(previousDisplay),parseInt(runningDisplay)));
    }
    if (operationPressed == "divide"){
        updateDisplay(operate("/",parseInt(previousDisplay),parseInt(runningDisplay)));
    }
}

//add event to number keys
const numKeys = Array.from(document.querySelectorAll(".number-btn"));
numKeys.forEach(btn => btn.addEventListener('click', storeNumKey));

//add event to clear key
const clearDisplay = document.querySelector("#clear");
clearDisplay.addEventListener("click", clear);

//add event to operation buttons
const operationBtn = Array.from(document.querySelectorAll(".operation-btn"));
operationBtn.forEach(btn => btn.addEventListener("click", storeOperation));

//add event to equals button
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", test);