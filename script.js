const inputField = document.querySelector('.calculator--screen');

const numberButtons = document.querySelectorAll('.calculator--btn__number');
const operatorButtons = document.querySelectorAll('.calculator--btn__operator');
const answerBtn = document.querySelector('.calculator--btn__equals');
const deleteBtn = document.querySelector('.calculator--btn__delete');
const clearBtn = document.querySelector('.calculator--btn__clear');



const data = [];

// Function to pass the operands and operator to data[]
const dataFunction = function(operator) {
    let currentValue = parseFloat(inputField.innerText);

    if (data && data.length) {
        data.push(currentValue);

        // Passing an array to the calculate()
        const answer = calculate(data);

        // pushing the answer into the data[]
        data.push(answer);

        data.push(operator);

        // Clearing the screen
        inputField.innerText = '';

    } else {

        data.push(currentValue);
        data.push(operator);
        inputField.innerText = '';
    }
}

// 
const calculate = data => {
    const lastOperand = data[2];
    const operator = data[1];
    const firstOperand = data[0];

    switch (operator) {
        case "+":
            return firstOperand + lastOperand;
            break;
        case "-":
            return firstOperand - lastOperand;
            break;
        case "*":
            return firstOperand * lastOperand;
            break;
        case "÷":
            return firstOperand / lastOperand;
            break;
        default:
            return lastOperand;
    }
}




operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        dataFunction(operator.innerText)
    })
})


// Adding event listeners for each numbers & displaying the numbers on the screen
numberButtons.forEach(number => {

    number.addEventListener('click', () => {

        inputField.innerText = inputField.innerText !== "0" ? inputField.innerText + number.innerText : number.innerText;
    })
})

//Carrying out the calculation when the equals sign is clicked
answerBtn.addEventListener('click', () => {
    if (data && data.length) {
        data.push(parseFloat(inputField.innerText));

        inputField.innerText = calculate(data);
    }
})

// Clear the screen
clearBtn.addEventListener('click', () => {
    inputField.innerText = 0;
    data.length = 0;
})

// Deleting the last input
deleteBtn.addEventListener('click', () => {
    inputField.innerText = inputField.innerText.toString().slice(0, -1);

});
//