"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// console.log( sayHello("codeup") );
// function sayHello(name)
// {
//     let message = "Hello " + name + "!";
//     return message;
// }
const sayHello = (name) => {
    let message = `Hello, ${name}!`;
    return message;
}
console.log( sayHello("CodeUp") );
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Hung");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Hung";
let helloMessage2 = sayHello(myName);
console.log(helloMessage2);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
console.log("The random number generated was: " + random);
let test = isTwo(random);
console.log("is " + random + " equal to 2?");
console.log(test);
function isTwo(num){
    let number = num;
    let answers = num === 2;
    return answers;
}
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//let tip = calculateTip(0.15, 33.42)
//console.log(tip);

function calculateTip(num1, num2){
    console.log("Running calculateTip()");
    console.log("The total is " + num2);
    console.log("The tip entered is " + num1);
    let tipCal = "0." + num1;
    console.log("The concatenated tip is " + tipCal);
    tipCal = parseFloat(tipCal);
    console.log("Turning the tipCal into a number");
    console.log(tipCal);
    //if you (parseFloat instead of parseFloat( it will stay as a string with .toFixed(2)
    let calculation = (parseFloat(tipCal * num2).toFixed(2));
    console.log("The calculated tip is: " + calculation);
    return calculation;
}
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let total = prompt("Bill Total?")
let tip1 = prompt("Tip percentage?");
let tipAmount = "The amount of tips is " + "$" + calculateTip(tip1, total);
alert(tipAmount);
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
//applyDiscount(100, .2);
//console.log(applyDiscount);
function applyDiscount(num1, num2,){
    console.log("Running applyDiscount()");
    console.log("The original price: " + num1);
    console.log("The discounted percent: " + num2);
    let originalPrice = num1;
    let discountPercent = ("0." + num2);
    console.log("The concatenated discount percent is " + discountPercent);
    discountPercent = parseFloat(discountPercent);
    console.log("Turn the discounted percent into a number")
    console.log(discountPercent)
    let appDiscount = (parseFloat(num1 - (num1 * discountPercent)).toFixed(2));
    console.log("The price after discounted percent applied: " + appDiscount);
    return appDiscount;
}

let orgTotal = prompt("What is your total?");
let orgDiscount = prompt("Discounted percent?");
let actPrice = applyDiscount(orgTotal, orgDiscount);
alert("Your total bill is " + "$" + actPrice);