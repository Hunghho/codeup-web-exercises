'use strict';
//While loop
let iteration = 0;
while (iteration < 10) {
    console.log(`while loop #${iteration +1}`);
    iteration++;
}
//Do While loop
iteration = 0;
        do {
            console.log(`do-while loop #${iteration + 1}`);
            iteration++;
        } while (iteration < 10);

// For loop (initialize; test; increment) { what you want to do over and over again }
for (let i = 0; i < 10; i++) {
    console.log(`For loop #${i + 1}`);

}

//loop through an array, and print the string in each item in a sentence

let array = ["oranges", "apples", "tomatoes", "pears", "grapes", "pineapple"];
for (let i = 0; i < array.length; i++){
    // console.log(`${array[i]} are awesome!`);
}

for (let i = 0; i < array.length; i++) {
    if (array [i] === "tomatoes") {
        console.log(`Wait...${array[i]} are a fruit?`);
    }
    else {
        fruitMessage(array[i]);
    }
}
//added function and call it inside For loop
function fruitMessage(input){
    console.log(`${input} are awesome`);
}
// start For loop exercises
function showMultiplicationTable(input) {

    for (let i = 1; i < 11; i++) {
        console.log( input + " x " + i + "= " + i * input);
    }
}
showMultiplicationTable(7);
//
function isEven(input){
    if (input % 2 === 0) {
        return input + " is even";
    }else{
        return input + " is odd";
    }
}
// function getRandomNum(min, max){
// return Math.floor(Math.random() * (max - min +1) + min);

function logEvenOddNumbers(){
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 200) + 20;
    console.log(isEven(randomNumber));
}
}
logEvenOddNumbers();
//
function conCat() {
    for (let i = 1; i < 10; i++) {
        let answer = i.toString();
        for (let d = 1; d < i; d++) {
            answer = answer + i.toString();
        }
        console.log(answer);
    }
}
conCat()
//
function countDownFive() {
    for (let i = 100; i > 0; i-= 5) {
        console.log(i);
    }
}
countDownFive();
//