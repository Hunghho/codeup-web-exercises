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
const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

// //
// console.log(findAverageDogAge(pets)); // returns 7.5

// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

function returnPetsWithNoFish(input){
    let petCount = []; // start out with empty array
    pets.forEach(function (pet){
        if(pet.type !== "Fish"){
            petCount.push(pet); // pushing an array object into an empty array
        }
    })
    return petCount;
}

console.log(returnPetsWithNoFish(pets));