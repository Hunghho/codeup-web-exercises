'use strict';

// function isOdd(input){
//     return input % 2 !== 0;
// }

// function userPrompt(){
//    let user = prompt("Enter odd number between 1 - 50");
//    console.log("Number to skip is: " + user);
// }

    // let user = prompt("Enter odd number between 1 - 50");
    // user = parseFloat(user);
    // console.log("Number to skip is: " + user );
    // for (let i = 1 ; i < 50 ; i+=2) {
    //     if (i === user) {
    //         console.log("Yikes! Skipping number: " + i);
    //         }else{
    //         console.log("Here is an odd number: " + i);
    //
    //         // continue;
    //     }
    //
    // }



while(true){
    let userNum = prompt("Enter an odd number between 1 and 50");
    userNum = parseFloat(userNum);
    console.log("Number to skip is: " + userNum);
    if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1){
        for (let i = 1 ; i <= 50 ; i += 2){
            if (i === userNum) {
                console.log("Yikes! Skipping number: " + i);
            } else {
                console.log("Here is an odd number: " + i);
            }
        }

        break;
    }
}