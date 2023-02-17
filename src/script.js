const display = document.querySelector ("#display");
const numberButton = document.querySelectorAll(".number");    
const operatorButton= document.querySelectorAll(".operator");
const goBack =document.querySelector("#backspace");
const equal =document.querySelector("#result");
let currentNumber ;
let currentOperator;
let firstNumber;
let secondNumber;



const operation = (operator, a, b) => {
    a = Number(a);
    b= Number(b);
    console.log("Operation: " + a + operator +b);
    switch(operator) {
        case "+":
        return addition( a,b);
        case "-":
        return substracting (a,b);
        case "*" :
        return multiplication(a,b);
        case "/":
        return divide (a,b); 
        default: console.log("Default");
    }
};


function updateDisplay (){
    display.value =currentNumber;    
}


function buttonNumberClicked(event){  
   
   if (currentNumber == null){
    currentNumber= event.target.innerText;
   } else {
    newSelectedNumber = event.target.innerText;
    newNumber = currentNumber.toString() + newSelectedNumber.toString();
    currentNumber= parseInt(newNumber);
    console.log(currentNumber);
   }

    updateDisplay();
}

for (i=0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', buttonNumberClicked);
}


function operationButtonClicked (event){
    if (currentNumber) {
        currentOperator = event.target.innerText;
        console.log(currentOperator);
        if(firstNumber){
            secondNumber = currentNumber;
            currentNumber = operation(currentOperator, firstNumber, secondNumber);
            updateDisplay();
        }else {
            firstNumber =currentNumber;
        }  
        currentNumber =null;
    }
}

for (i=0; i < operatorButton.length; i++){
    operatorButton[i].addEventListener('click', operationButtonClicked);
}


function showResult (){
    if (currentOperator && firstNumber && currentNumber){
        operation(currentOperator, firstNumber, secondNumber)
    } 
}

let resultDisplay = equal.addEventListener('click', showResult);



function showOperationResult(){
    console.log ('Hello')
    
}
let operationResult = equal.addEventListener('click',showOperationResult);



function clearInput() {
    let clearAll =document.querySelector("#display");
    if (clearAll.value != " ") {
        clearAll.value ="";
        currentNumber = null;
  }

  clearAll.addEventListener('click', clearInput);
}


function addition (a,b) {
    console.log(a,b);
    console.log(a+b);
    return a + b;

}

function substracting(a,b){
    return a-b;
}

function multiplication (a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0) {
        return ("No division by 0")
    }
    return a /b 
  
}   




