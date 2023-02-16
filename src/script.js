const display = document.querySelector ("#display");
const numberButton = document.querySelectorAll(".number");    
const operator= document.querySelectorAll(".operator");
const goBack =document.querySelector("#backspace");
const equal =document.querySelector("#result");
let currentNumber ;

function addition (a, b) {
   return a + b;
}

function substracting(a, b){
    return a-b;
}

function multiplication (a,b ){
    return a * b;
}

function divide(a, b){
    return a /b;
}   

function updateDisplay (){
    display.value =currentNumber;    
}


function buttonClicked(event){  
   
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
    numberButton[i].addEventListener('click', buttonClicked);
    

}

function clearInput() {
    let clearAll =document.querySelector("#display");
    console.log(clearAll);
    if (clearAll.value != " ") {
        clearAll.value ="";
  }

  clearAll.addEventListener('click', clearInput);
}


