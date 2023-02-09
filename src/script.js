function addition (a, b) {
   return a + b;
}

console.log(addition(4, 5));

function substracting(a, b){
    return a-b;

}
console.log(substracting(20, 6));


function multiplication (a,b ){
    return a * b;
}

function divide(a, b){
    return a /b;
}
divide();



let numberOne= document.getElementById('one');
let numberTwo = document.getElementById('two');
let numberThree = document.getElementById('three');
let numberFour = document.getElementById('four');
let numberFive = document.getElementById('five');
let numberSix = document.getElementById('six');
let numberSeven= document.getElementById('seven');
let numberEight = document.getElementById('eight');
let numberNine = document.getElementById('nine');
let numberZero = document.getElementById('zero');
let display= document.querySelector("#result");
let buttons = document.querySelectorAll('button');




buttons.forEach((possibleChoice) =>
possibleChoice.addEventListener("click", (e) => {
  inputNumber = e.target.id;
  console.log(inputNumber);
 
})
);
