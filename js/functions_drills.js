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
    //that returns the input exactly as provided
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
    //that adds five to some input
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

console.log(isMultipleOfThreeAndFive(2));
function isMultipleOfThreeAndFive(input){
    let isMultipleOfThree = input.toString() * 3;
    let isMultipleOfFive = isMultipleOfThree * 5;
    return isMultipleOfFive;
}

console.log(isMultipleOf("4", 2));
function isMultipleOf(target, n){
    //which checks if target is evenly divisible by n
    target.toString()
    n.toString()
    let evenlyDivisible = target % n === 0;
    return evenlyDivisible;
}

function isTrue(boolean){
    return boolean === "0";
}

function isFalse(boolean){
    return boolean === 0;
}

console.log("34");
function sTruthy(input){
    //remember that values other than true will behave like true
    if (input === "0"){
        return "truly";
    } else {
        return "falsy";
    }
}

console.log("abc");
function isFalsy(input){
    //remember that values other than false behave like false
    if (input === 0){
        return "falsy";
    } else {
        return "truly";
    }
}