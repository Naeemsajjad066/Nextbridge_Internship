const display = document.getElementById("display")
const valueButtons = document.querySelectorAll("[data-value]")
const actionButtons = document.querySelectorAll("[data-action]")
let expression = ""
let justCalculated=false;

const operators = ["-", "+", "/", "*", "%"]

function updateDisplay() {
    display.textContent = expression || "0"
}
function appendNumber(number) {
    if (justCalculated){
        justCalculated=false;
        expression=""
    }
    expression += number;
    updateDisplay()

}
function appendOperator(operator) {
    if (expression === "" || expression === "Error") {
        return;
    }
    const lastChar = expression.slice(-1);
    if (operators.includes(lastChar)) {
        return
    }
    if (justCalculated) {
        justCalculated = false;
    }
    expression += operator;
    updateDisplay()
}
function appendDecimal() {
    
    if (justCalculated){
        justCalculated=false;
        expression=""
    }
    if (expression === "") {
        expression = "0."
        updateDisplay();
        return;
    }

    const currentNumber = expression.split(/[+\-*/%]/).pop()
    if (currentNumber.includes(".")) {
        return
    }

    const lastChar = expression.slice(-1)
    if (operators.includes(lastChar)) {
        expression += "0.";
    } else {
        expression += "."
    }
    updateDisplay();
}
function clearDisplay() {
    expression = "";
    updateDisplay();
}

function calculate() {
    if (expression === "") return
    const lastChar = expression.slice(-1)
    if (operators.includes(lastChar)) return 

    try {
        const result = evaluateExpression(expression);
        expression = result.toString();
        justCalculated = true;
    } catch (error) {
        expression = "Error";
        justCalculated = true;
    }
    updateDisplay();
}

function tokenize(expression) {
    let tokens = []
    let currentNumber = ""

    for (const char of expression) {
        if (!isNaN(char) || char === ".") {
            currentNumber += char
        } else {
            tokens.push(currentNumber);
            tokens.push(char)
            currentNumber = ""
        }
    }

    if (currentNumber !== "") {
        tokens.push(currentNumber)
    }
    return tokens
}

function deleteCharacter() {
    if (expression === "") return;
    expression = expression.slice(0, -1)
    updateDisplay()
}

function precedence(operator) {

    if (operator === "+" || operator === "-") {
        return 1;
    }
    if (operator === "*" || operator === "/" || operator === "%") {
        return 2;
    }

    return 0;
}

function applyOperator(left, right, operator) {
    switch (operator) {
        case "+":
            return left + right
        case "-":
            return left - right
        case "*":
            return left * right
        case "/":
            if (right === 0) throw new Error("Cannot divide by zero")
            return left / right
        case "%":
            if (right === 0) throw new Error("Cannot mod by zero")
            return left % right
        default:
            return 0
    }
}

function evaluateExpression(expression) {

    const tokens = tokenize(expression);

    const numbers = [];
    const operators = [];

    for (const token of tokens) {

        if (!isNaN(token)) {
            numbers.push(Number(token));
        }
        else {

            while (
                operators.length &&
                precedence(operators[operators.length - 1]) >= precedence(token)
            ) {

                const operator = operators.pop();

                const right = numbers.pop();
                const left = numbers.pop();

                const result = applyOperator(left, right, operator);

                numbers.push(result);

            }

            operators.push(token);

        }

    }

    while (operators.length) {

        const operator = operators.pop();

        const right = numbers.pop();
        const left = numbers.pop();

        const result = applyOperator(left, right, operator);

        numbers.push(result);

    }

    return numbers.pop();

}

actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "clear") {
            clearDisplay();
        } else if (action === "delete") {
            deleteCharacter()
        } else if (action === "calculate") {
            calculate()
        }
    })
})

valueButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value

        if (!isNaN(value)) {
            appendNumber(value)
        }
        else if (value === ".") {
            appendDecimal()
        }
        else {
            appendOperator(value)
        }
    })
})

document.addEventListener("keydown", (event) => {

    const key = event.key;

    if (!isNaN(key)) {
        appendNumber(key)
    } else if (operators.includes(key)) {
        appendOperator(key)
    } else if (key === ".") {
        appendDecimal()
    } else if (key === "Backspace") {
        deleteCharacter()
    } else if (key === "Escape") {
        clearDisplay()
    } else if (key === "Enter") {
        calculate()
    }


})