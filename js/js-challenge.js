"use strict";
// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.
//

// function findAverageDogAge(input){
//     let age = 0;
//     let dogCount = 0;
//     for (let i = 1; i < pets.length; i += 1){
//         if(pets[i].type == "Dog"){
//             age += pets[i].age;
//             dogCount += 1;
//         }
//         console.log(`${age} total of dogs age`);
//         console.log(`${dogCount} number of dog counted`);
//     }
//     if (dogCount == 0) {
//         return 0;
//     }
//     let avg = age / dogCount;
//     console.log(avg);
// }

// function findAverageDogAge(input){
//     let age = 0;
//     let dogCount = 0;
//     pets.forEach(function (pet){
//         if(pet.type === "Dog"){
//             age += pet.age;
//             dogCount += 1;
//         }
//     })
//     return age / dogCount;
// }
// const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];

// //
// console.log(findAverageDogAge(pets)); // returns 7.5

// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

// function returnPetsWithNoFish(input){
//     let petCount = []; // start out with empty array
//     pets.forEach(function (pet){
//         if(pet.type !== "Fish"){
//             petCount.push(pet); // pushing an array object into an empty array
//         }
//     })
//     return petCount;
// }
//
// console.log(returnPetsWithNoFish(pets));

////////
//
// ================================ WARM UP

// // Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.
// function returnLongestPetName(inputs) {
//     let count = "";
//     inputs.forEach(function (pet){
//         if(pet.name.length > count.length) {
//             count = pet.name;
//         }
//         console.log(count);
//     })
//     return count;
// }
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
// console.log(returnLongestPetName(pets)); // returns 'Mr. Salmon'


// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(???cat???) // returns ???at???
// returnLastTwoChars(???hello???) // returns ???lo???
// // returnLastTwoChars(???hi???) // returns ???hi???
// function returnLastTwoChars(input){
//     if(typeof input === "string"){
//         return input.slice(-2);
//     }
// }
//
// console.log(returnLastTwoChars("hello"));
//
// // EXTRA CHALLENGE
// // Create a function, returnLastCharsReversed that takes in two arguments:
// //     1. a string of characters
// // 2. an integer that represents how many characters should be returned
// // The function should return a string of characters, equal to the number specified
// // by the second argument, in reverse order. If 0 is passed as a second argument,
// // return an empty string. Assume only valid inputs and that the second argument
// // will NOT exceed the length of the input string.
//
// function returnLastCharsReversed(input1, input2){
//     // let splitString = input1.split("");
//     // let reverseArray = splitString.reverse();
//     // let joinArray = reverseArray.join("");
//     // let strSlice = input2.slice();
//     // return joinArray;
//     return input1.split("").reverse().slice(0, input2).join("");
// }
//
// console.log(returnLastCharsReversed("cat", 1));

//     Examples:
// returnLastCharsReversed(???cat???, 0) // returns ??????
// returnLastCharsReversed(???cat???, 1) // returns ???t???
// returnLastCharsReversed(???cat???, 2) // returns ???ta???
// returnLastCharsReversed(???cat???, 3) // returns ???tac???
// returnLastCharsReversed(???codeup???, 1) // returns ???p???
// returnLastCharsReversed(???codeup???, 3) // returns ???pue???
// returnLastCharsReversed(???codeup???, 4) // returns ???pued???

// Write a function, iBeforeE that takes in a string and returns the string with any ???ei??? characters replaced with ???ie???.
// console.log(iBeforeE(???ei???)) // returns ???ie???
// console.log(iBeforeE(???height???)) // returns ???hieght???
// console.log(iBeforeE(???heist???)) // returns ???hiest???
// console.log(iBeforeE(???their???)) // returns ???thier???
// console.log(iBeforeE(???theirtheir???)) // returns ???thierthier???

// function iBeforeE(str){
//     return str.replaceAll("ei", "ie");
// }

// console.log(iBeforeE("height"))
//
// function iBeforeE(str){
//     let result = "";
//     for (let i = 0 ; i < str.length ; i += 1){
//         if(str[i] + str[i +1] === "ei") {
//             result += "ie";
//             i++;
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

// function hasVowels(input){
//     let vowels = "aeiou";
//     for(let i = 0 ; i < input.length ; i += 1){
//         if(vowels.indexOf(input[i].toLowerCase()) !== -1){
//             return true;
//         }
//     } return false;
// }
//
// console.log(hasVowels("HELLO"));

// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filterList(num){
//     let numbers = [];
//     for (let i = 0 ; i < num.length ; i += 1){
//         if(typeof num[i] !== "string"){
//             numbers.push(num[i]);
//         }
//     } return numbers;
//
// }
//
// console.log(filterList([1,2,"a","b"]));

// filterList([1,2,???a???,???b???]) // returns [1,2]
// filterList([1,???a???,???b???,0,15]) // returns [1,0,15]
// filterList([1,2,???aasf???,???1???,???123???,123]) // returns [1,2,123]


// function hasEvens(input){
//     let evenNums = [];
//     for (let i = 0 ; i < input.length ; i += 1){
//         if(input[i] % 2 === 0){
//             evenNums.push(input[i]);
//         }
//     } return evenNums.length;
// }
//
//
// console.log(hasEvens([1, 2, 3, 4]));

// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
//

// function zipArrays(input1, input2){

//     let newArray = [];
//     for (let i = 0 ; i < input1.length ; i += 1){
//         newArray.push(input1[i]);
//         newArray.push(input2[i]);
//     } return newArray;
// }


// console.log(zipArrays([], [])); // returns []
// console.log(zipArrays([1], [2])); // returns [1, 2]
// console.log(zipArrays(['a', 'b'], ['c', 'd'])); // returns... ['a', 'c', 'b', 'd']
// console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25])); // returns...
//
//     [
//     1,
//         'bob',
//         2,
//         null,
//         'a',
//         'sally',
//         'b',
//         25
//     ]

// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.




const users = [
  {
    firstName: 'Justin',
    lastName: 'Reich',
    dob: '1923-01-01',
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    firstName: 'Sally',
    lastName: 'Smith',
    dob: '1935-03-11',
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    firstName: 'Fred',
    lastName: 'Smith',
    dob: '1999-01-21',
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

function getUserCredentials(users) {
    const credentials = [];
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      credentials.push({ username: user.username, password: user.password });
    }
    return credentials;
  }
console.log(getUserCredentials(users)); // returns...

// /*

// [
//   {
//     username: 'jreich',
//     password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//   },
//   {
//     username: 'ssmith',
//     password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//   },
//   {
//     username: 'fsmith',
//     password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//   }
// ]

// */


