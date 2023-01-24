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
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// // returnLastTwoChars(‘hi’) // returns ‘hi’
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
// returnLastCharsReversed(‘cat’, 0) // returns ‘’
// returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’

// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// console.log(iBeforeE(‘ei’)) // returns ‘ie’
// console.log(iBeforeE(‘height’)) // returns ‘hieght’
// console.log(iBeforeE(‘heist’)) // returns ‘hiest’
// console.log(iBeforeE(‘their’)) // returns ‘thier’
// console.log(iBeforeE(‘theirtheir’)) // returns ‘thierthier’

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

// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]


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



//
// const users = [
//   {
//     firstName: 'Justin',
//     lastName: 'Reich',
//     dob: '1923-01-01',
//     username: 'jreich',
//     password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//   },
//   {
//     firstName: 'Sally',
//     lastName: 'Smith',
//     dob: '1935-03-11',
//     username: 'ssmith',
//     password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//   },
//   {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     dob: '1999-01-21',
//     username: 'fsmith',
//     password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//   }
// ]
//
// function getUserCredentials(users) {
//     const credentials = [];
//     for (let i = 0; i < users.length; i++) {
//       const user = users[i];
//       credentials.push({ username: user.username, password: user.password });
//     }
//     return credentials;
//   }
// console.log(getUserCredentials(users)); // returns...

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



// function loop(input){
// for (let i = 0; i < 10; i++) {
//   console.log("The value of i is " + i);



// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9

// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence

// function onlyPositiveEvens(input){
//     let nums = [];
//     for(let i = 0 ; i < input.length ; i += 1){
//         if(input[i] > 0 && input[i] % 2 === 0){
//             nums.push(input[i]);
//         }
//     } return nums;
//
// }
//
// console.log(onlyPositiveEvens([1, -2, 3]), []);
// console.log(onlyPositiveEvens([2, -5, -6]), [2]);
// console.log(onlyPositiveEvens([3, 3, 4, 6]), [4, 6]);
// console.log(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4]);

// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.




// function elementsTimesTwo (input){
//     let newArray = [];
//
//     for (let i = 0 ; i < input.length ; i += 1){
//
//         newArray.push(input[i] * 2);
//
//     } return newArray;
// }

// function elementsTimesTwo (input){
//     let newArray = [];
//     input.forEach(num => {
//         newArray.push(num * 2);
//     })
//     return newArray;
// }


// console.log(elementsTimesTwo([5, 10, 15]), [10, 20, 30], "Exercise 84")
// console.log(elementsTimesTwo([0, 0, 0]), [0, 0, 0], "Exercise 84")
// console.log(elementsTimesTwo([1, 2, 3]), [2, 4, 6], "Exercise 84")

// function flatten (input){
//     return input.reduce((a, b) => a.concat(b));
// }
//
// console.log(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6], "Exercise 85");
// console.log(flatten([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), [1, 2, 3, 1, 2, 3, 1, 2, 3], "Exercise 85");
// console.log(flatten([["tomato", "mango", "kiwi"], ["eggplant", "broccoli"]]), ["tomato", "mango", "kiwi", "eggplant", "broccoli"], "Exercise 85");



// const tukeyPaper = {
//     "title": "The Future of Data Analysis",
//     "author": "John W. Tukey",
//     "link": "https://projecteuclid.org/euclid.aoms/1177704711",
//     "year_published": 1962
// }
//
// const thomasPaper = {
//     "title": "A mathematical model of glutathione metabolism",
//     "author": "Rachel Thomas",
//     "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
//     "year_published": 2008
// }
//
// function getPaperTitle (input){
//
//     return input.title;
//
// }
//
// console.log(getPaperTitle(tukeyPaper), "The Future of Data Analysis", "Exercise 87");
// console.log(getPaperTitle(thomasPaper), "A mathematical model of glutathione metabolism", "Exercise 87");

// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...
//
// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }
//
// function good (input){
//
//     let schoolRating = 0;
//     for (let i = 0; i < input.schools.length ; i += 1){
//         schoolRating += input.schools[i].rating;
//     }
//     return input.medianHomePrice < 300000 && input.crimeRate === "low" && schoolRating >= 24;
// }
//
// console.log(good(neighborhood1)); // returns false due to school rating
// console.log(good(neighborhood2)); // returns false due to crime rate
// console.log(good(neighborhood3)); // returns true
// console.log(good(neighborhood4)); // returns false due to median home price


// const books = [
//     {
//         "title": "Genetic Algorithms and Machine Learning for Programmers",
//         "price": 36.99,
//         "author": "Frances Buontempo"
//     },
//     {
//         "title": "The Visual Display of Quantitative Information",
//         "price": 38.00,
//         "author": "Edward Tufte"
//     },
//     {
//         "title": "Practical Object-Oriented Design",
//         "author": "Sandi Metz",
//         "price": 30.47
//     },
//     {
//         "title": "Weapons of Math Destruction",
//         "author": "Cathy O'Neil",
//         "price": 17.44
//     }
// ]

// function getNumberOfBooks (input){
//     let bookPrice = {price: 100}
//     for(let i = 0 ; i < books.length ; i += 1){
//          if(books[i].price < bookPrice.price) {
//              bookPrice.price = books[i].price
//          }
//     } for (let i = 0 ; i < books.length ; i += 1){
//         if(books[i].price === bookPrice.price){
//             return books[i];
//         }
//     }
// }
//
// console.log(getNumberOfBooks(books), 4, "Exercise 91");

// function shortestString (input) {
//     let shortString = "";
//     for (let i = 0 ; i < input.length ; i += 1){
//
//             if(input[i].length > shortString.length){
//                 shortString = input[i];
//             }
//     }
//     return shortString;
// }
//
// console.log(shortestString(["kiwi", "mango", "strawberry"]), "kiwi", "Exercise 81");
// console.log(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
// console.log(shortestString(["mary", "had", "a", "little", "lamb"]), "a", "Exercise 81");


// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’

// function encodeStr (input){
//     return input
//         .replace(/a/gi, "@" )
//         .replace(/S/g, "$")
//         .replace(/i/gi, "1");
// }
//
//
// console.log(encodeStr('apple')) // returns ‘@pple’
// console.log(encodeStr('codeup')) // returns ‘codeup’
// console.log(encodeStr('SASS')) // returns ‘$@$$’
// console.log(encodeStr('bike')) // returns ‘b1ke’

// const shoppingCart = {
//     "tax": .08,
//     "items": [
//         {
//             "title": "orange juice",
//             "price": 3.99,
//             "quantity": 1
//         },
//         {
//             "title": "rice",
//             "price": 1.99,
//             "quantity": 3
//         },
//         {
//             "title": "beans",
//             "price": 0.99,
//             "quantity": 3
//         },
//         {
//             "title": "chili sauce",
//             "price": 2.99,
//             "quantity": 1
//         },
//         {
//             "title": "chocolate",
//             "price": 0.75,
//             "quantity": 9
//         }
//     ]
// }
//
// function getTaxRate(input){
//
//     console.log(Object.keys(input.items).length);
//     let total = 0;
//     for(let i = 0 ; i < input.items.length ; i += 1){
//         total += input.items[i].price;
//     }
//     return total / input.items.length;
// }
//
// console.log((getTaxRate(shoppingCart)) , .08 );


// function removeVowels(input){
//     let vowels = "aeiou";
//     let noVowels = "";
//     for(let i = 0 ; i < input.length ; i += 1){
//         if(vowels.indexOf(input[i].toLowerCase()) === -1){
//             noVowels += input[i];
//         }
//     } return noVowels;
// }
//
// console.log((removeVowels("banana")), "bnn");
// console.log((removeVowels("ubuntu")), "bnt");
// console.log((removeVowels("mango")), "mng");
// console.log((removeVowels("QQQQ")), "QQQQ");

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.


//     const strs = [
//     {
//         id: 1,
//         str: 'hello'
//     },
//     {
//         id: 2,
//         str: 'world'
//     },
//     {
//         id: 3,
//         str: 'codeup'
//     },
//     {
//         id: 4,
//         str: 'x'
//     }
// ]
//
// function reverseStrings(input){
//         for (let i = 0 ; i < input.length ; i += 1){
//             // console.log(input[i].str.split('').reverse().join(''))
//             input[i].str = input[i].str.split('').reverse().join('');
//         }
//     return input;
// }
// console.log(reverseStrings(strs));
// reverseStrings(strs) // returns...
//
//     [
//     {
//         id: 1,
//         str: 'olleh'
//     },
//         {
//             id: 2,
//             str: 'dlrow'
//         },
//         {
//             id: 3,
//             str: 'puedoc'
//         },
//         {
//             id: 4,
//             str: 'x'
//         }
//     ]
