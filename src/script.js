function addition (a, b) {
   return a + b;
}
// addition();
console.log(addition(4, 5));


function substracting(a, b){
    return a-b;

}
//substracting ();
console.log(substracting(20, 6));



function multiplication (a,b ){
    return a * b;
}
// multiplication ();
console.log(multiplication(3, 6));



function divide(a, b){
    return a /b;

}
divide();
console.log(divide(50, 29));


function operate(operand, x, y){
    switch (operand) {
        case "*":
            return addition(3, 5);
        default:
           return null;
    }
}