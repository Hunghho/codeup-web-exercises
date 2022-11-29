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
    return boolean === true;
}

function isFalse(boolean){
    return boolean === false;
}

console.log(sTruthy(0));
function sTruthy(input){
    //remember that values other than true will behave like true
    if (input){
        return true;
    } else {
        return false;
    }
}

console.log(isFalsy(0));
function isFalsy(input){
    //remember that values other than false behave like false
    if (!input){
        return true;
    } else {
        return false;
    }
}

console.log(isVowel("b"))
function isVowel(letter){
   letter.toLowerCase();
   if (letter === "a" | "e" | "i" | "o" | "u"){
       return "is Vowel";
   } else {
       return "not Vowel";
   }
}

console.log(isConsonant("b"))
function isConsonant(letter){
    letter.toLowerCase()
    if (letter !== "a" | "e" | "i" | "o" | "u"){
        return "is a consonant";
    } else {
        return "is not a consonant";
    }
}

// Create a function, removeFirstCharacter, that takes in a string
// and returns the string with the first character
// removed. If no input is given, return false.
// If one character is given, return an empty string.
// Assume only empty input or a valid string input.

console.log(removeFirstCharacter("bob"), "ob"); // ‘ob’
console.log(removeFirstCharacter("jason"), "ason");  // ‘ason’
console.log(removeFirstCharacter("to"));  // ‘o’
console.log(removeFirstCharacter("1")); // ‘’
console.log(removeFirstCharacter()); // false
console.log(removeFirstCharacter("")); // false
console.log(removeFirstCharacter(" codeup")); // "codeup"
console.log(removeFirstCharacter("false")); // "alse"


function removeFirstCharacter(input){
    if (typeof input !== "string") return false;
    return (input.length === 0) ? false : input.slice(1);
    // if (input.length === 0){
    //     return false;
    // } else {
    //     return input.slice(1);
    // }
    // const output = (input.length === 0) ? input : input.slice(1);
    // return output;
}

