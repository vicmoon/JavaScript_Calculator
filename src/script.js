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

//connect the buttons with an event listener
//convers the string to a number
//connect the buttons to functions 

let Numbers =[ 1,2,3,4,5,6,7,8,9,0]
Numbers[0]= document.getElementById('one');
Numbers[1] =document.getElementById('two');
Numbers[2]= document.getElementById('three');
Numbers[3] = document.getElementById('four');
Numbers[4]= document.getElementById('five');
Numbers[5]= document.getElementById('six');
Numbers[6]= document.getElementById('seven');
Numbers[7]= document.getElementById('eight');
Numbers[8] = document.getElementById('nine');
Numbers[9] = document.getElementById('zero');
let display= document.querySelector("#result");
let buttons = document.querySelectorAll('button');



buttons.forEach((possibleChoice) =>
possibleChoice.addEventListener("click", (e) => {
  inputNumber = (e.target.id);
  console.log(inputNumber);
 
})
);
