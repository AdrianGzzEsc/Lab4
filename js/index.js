let operations = [];
let operator = "";
let numbers = document.querySelector(".inputNumber");
let res = document.querySelector(".resetButton");
let equal = document.querySelector(".equalButton");
let sub = document.getElementById("substractButton");
let add = document.getElementById("addButton");
let mult = document.getElementById("multiplicationButton");
let div = document.getElementById("divisionButton");
let result = 0;
let resultValue = document.getElementById("resultValue");
let log = document.getElementById("logInformation");

function Result() {
    for (let index = 0; index < operations.length; index++) {
        const oper = operations[index];
        if (oper === '+' || oper === '-' || oper === '/' || oper === '*') {
            operator = oper;
        } else {
            switch (operator) {
                case '+':
                    result = result + oper;
                    break;
                case '-':
                    result = result - oper;
                    break;
                case '*':
                    result = result * oper;
                    break;
                case '/':
                    result = result / oper;
                    break;
                default:
                    result = oper;
                    break;
            }
            resultValue.value = result;
        }
    }
}

function Reset() {
    numbers.value = "";
    resultValue.value = "";
    operations = [];
    operator = "";
    log.value = "";
}
sub.addEventListener("click", (event) => {
    operations.push(Number(numbers.value));
    numbers.value = "";
    operations.push('-');

});
add.addEventListener("click", (event) => {
    operations.push(Number(numbers.value));
    numbers.value = "";
    operations.push('+');
});
div.addEventListener("click", (event) => {
    operations.push(Number(numbers.value));
    numbers.value = "";
    operations.push('/');
});
mult.addEventListener("click", (event) => {
    operations.push(Number(numbers.value));
    numbers.value = "";
    operations.push('*');
});
res.addEventListener("click", function() {
    Reset();
});

equal.addEventListener("click", function() {
    operations.push(Number(numbers.value));
    numbers.value = "";
    Result();
    for (let index = 0; index < operations.length; index++) {
        const operation = operations[index];
        log.value += `${operation} `;;
    }
    log.value += ` = ${result}\n`;
    operator = "";
    operations = [];
    result = 0;

});