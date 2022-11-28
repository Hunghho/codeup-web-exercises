"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("green"));
// function analyzeColor(color){
//     if (color == "red") {
//     return `red as the red sea`;
//     } else if (color == "blue"){
//         return `blue as the sky`;
//     } else if (color == "green"){
//         return `green like the grass`;
//     } else if (color == "orange"){
//         return `like an orange`;
//     } else {
//         return `I dont know anything about ${color}!`;
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log (analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("green"));
function analyzeColor(color) {
    switch (color) {
        case "red":
            return "red like red sea";
            break;
        case "blue":
            return "blue like the sky";
            break;
        case "orange":
            return "orange like the fruit";
            break;
        default:
            return "I dont know anything about " + color;
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let user = prompt("What is your favorite color?");
let result = analyzeColor(user.toLowerCase());
alert(result);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// let luckyNumber = Math.floor(Math.random() * 6);
// // console.log("Lucky Random number is: " + luckyNumber);
// // let totalAmount = Math.floor(Math.random() * 100) + 50;
// let totalAmount = prompt("What is your total bill?");
// // console.log("Random total price is: " + totalAmount);
// let luckyNumberPrompt = alert("Your lucky number is: " + luckyNumber);
// let originalPrice = alert("Your original price is : " + "$" + totalAmount);
// let walmartLuckyNumber = calculatedTotal(luckyNumber, totalAmount);
// let displayFinalPrice = alert("Your new total price after discount applied: " + "$" + walmartLuckyNumber);
// function calculatedTotal(luckyNumber, totalAmount){
//     console.log("Run calculatedTotal()");
//     console.log("Your random number is: " + luckyNumber);
//     console.log("The random total price is: " + totalAmount);
//     if (luckyNumber === 0){
//         console.log("Better luck next time. You paid FULL PRICE!");
//     return (totalAmount);
//     } else if (luckyNumber === 1){
//         console.log("10% discount applied");
//         return (totalAmount * .9).toFixed(2);
//     } else if (luckyNumber === 2){
//         console.log("25% discount applied");
//         return (totalAmount * .75).toFixed(2);
//     } else if (luckyNumber === 3){
//         console.log("35% discount applied");
//         return (totalAmount * .65).toFixed(2);
//     } else if (luckyNumber === 4){
//         console.log("50% discount applied");
//         return (totalAmount * .50).toFixed(2);
//     } else if (luckyNumber === 5){
//         console.log("It's FREE!");
//         return (totalAmount * 0);
//     }
// }
function calculateTotal (luckyNumber, total){
    let discount, discountedPrice;
    switch (luckyNumber) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1;
            break;
        case 2:
            discount = 0.25;
            break;
        case 3:
            discount = 0.35;
            break;
        case 4:
            discount = 0.50;
            break;
        case 5:
            discount = 1;
            break;
        default:
            return "No lucky number!";
            break;
    }

    if ( !isNaN(total) ){
        discountedPrice = total * (1- discount);
    } else {
        return "No number"
    }
        return discountedPrice.toFixed(2);
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let userNumberPrompt = prompt("What was the total of your bill");
let userResult = calculateTotal(luckyNumber, userNumberPrompt);
alert(`Your lucky number was ${luckyNumber}.
The price before the discount was $${userNumberPrompt}.
The price after the discount is $${userResult}.`)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let enterNumber = confirm("Would you like to enter a number?");

if (enterNumber == true) {
    let number = prompt("Enter a number: ");
    number = parseFloat(number);

    if (isNaN(number)) {
        alert("Not a number");
    } else {
        if (number % 2 == 0) {
            alert("Your number is Even");
        } else {
            alert("Your number is Odd");
        }
    let plus100 = parseFloat(number + 100);
        alert("Your enter number plus 100 equal " + plus100);

        if (number >= 0) {
            alert("Your number is Positive");
        } else {
            alert("Your number is Negative");
        }

    }

} else {
    alert("Good Bye!");
}