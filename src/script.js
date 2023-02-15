const display = document.querySelector ("#display");
const number= document.querySelectorAll(".number");
const operator= document.querySelectorAll(".operator");
const clear =document.querySelector("#clear");
const back =document.querySelector("#back");


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

const operatation (operator, a, b) => {
    a = Number(a);
    b= Number(b);
}
 


buttons.forEach((possibleChoice) =>
possibleChoice.addEventListener("click", (e) => {
  inputNumber = (e.target.id);
  console.log(inputNumber);
 
})
);
