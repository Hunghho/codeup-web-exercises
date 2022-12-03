'use strict';

//While Loop
// let i = 1


function whileLoop() {
    let i = 1
    while (i <= 65536) {
        console.log(i);
        i *= 2
    }
}
whileLoop();


//     var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//

//Do While Loop
// var i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

function getRandomNum(min, max){
return Math.floor(Math.random() * (max - min +1) + min);}

let stocks = getRandomNum(50, 100); // amount of cones to sell
console.log(stocks);
let i = stocks; //declaring new value for stock
do {
    let sellingCones = getRandomNum(1, 5); // number of cones being bought
    console.log(`${sellingCones} cones sold`);
    let stockLeftOver = i - sellingCones; // declaring new value for stock minus costumer brought
    i = stockLeftOver; // recalling shock from leftover
    console.log(stockLeftOver);
    if (stockLeftOver === 0){
        console.log(`Yay! I sold them all!`);
    } else if (stockLeftOver < sellingCones) {
        console.log(`Cannot sell you ${sellingCones} cones I only have ${stockLeftOver}...`);
    }

} while (i > 5); //loop stop below 5