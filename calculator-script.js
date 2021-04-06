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

console.log(operate("+",2,3));
console.log(operate("-",3,1));
console.log(operate("*",9,3));
console.log(operate("/",4,3));