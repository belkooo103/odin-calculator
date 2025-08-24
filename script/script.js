let currentValue = "";
let previousValue = "";
let currentOperator = "";
const display = document.querySelector('#display');
display.textContent = "";

function getNumber() {
    const buttons = document.querySelectorAll('.number-input');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            currentValue += this.textContent;
            if (currentOperator) {
                display.textContent = `${previousValue} ${currentOperator} ${currentValue}`;
            } else {
                display.textContent = currentValue;
            }

            console.log("Current Value:", currentValue);
        });
    });
}


function getOperator() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', function() {
            if (currentValue === "") return; 
            currentOperator = this.textContent;
            previousValue = currentValue;
            currentValue = ""; 
            display.textContent = `${previousValue} ${currentOperator}`; 
            console.log("Operator:", currentOperator);
        });
    });
}


function calculateResult() {
    const equals = document.querySelector('.solve');
    equals.addEventListener('click', function() {
        if (previousValue && currentValue && currentOperator) {
            let result;
            const a = parseFloat(previousValue);
            const b = parseFloat(currentValue);

            switch (currentOperator) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "X":
                    result = a * b;
                    break;
                case "÷":
                    result = b !== 0 ? a / b : "Error";
                    break;
                default:
                    result = "Error";
            }

            display.textContent = result; 
            console.log("Result:", result);

            currentValue = result.toString();
            previousValue = "";
            currentOperator = "";
        }
    });
}

function clearDisplay(){
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', function(){
        display.textContent = "";
        currentOperator = "";
        currentValue = "";
    })
    
}
getNumber();
getOperator();
calculateResult();
clearDisplay();
