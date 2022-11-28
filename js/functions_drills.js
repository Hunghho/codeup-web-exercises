"use strict"
console.log(isOdd(21));

function isOdd(number){
  if (number % 2 !== 0) {
  return "Odd";}
  else {
      return "Even";
  }
}

console.log(isEven( 28));

function isEven(number){
    if (number % 2 == 0) {
        return "Even"; }
    else {
        return "Odd";
    }
}

console.log(identity("same same"));
function identity(input){
    return input === input;
}

console.log(isFive(6));
function isFive(input){
    if (input == 5){
        return "is five";
    } else {
        return "is not five";
    }
}

console.log(addFive(6));
function addFive(input){
    return input + 5;
}

console.log(isMultipleOfFive(5));
function isMultipleOfFive(input){
    return input * 5;
}

console.log(isThree(3))
function isThree(input){
    return input === 3;
}

console.log(isMultipleOfThree(3));
function isMultipleOfThree(input){
    return input * 3;
}