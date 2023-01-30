(callbackfn => {
    "use strict";
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
//1.
//     const arrayOne = users.filter(user => user.languages.length >= 3);
//     console.log(arrayOne);
//2.
//     const arrayTwo = users.map(user => user.email);
//     console.log(arrayTwo);
//3.
//        const arrayThree = users.reduce((accumulator, currentValue ) => {
//            return accumulator + currentValue.yearsOfExperience / users.length
//
//        }, 0)
//         console.log(arrayThree)

//4.
//        const arrayFour = users.reduce((accumulator, currentValue) => {
//            return accumulator.length < currentValue.email.length ? currentValue.email : accumulator
//        }, "")
//         console.log(arrayFour)
    //    const longestEmail = users.reduce(longEmail, user) =>{
    //    if (user.email.length > longEmail.length){
    //    longEmail = user.email;
    //    }
    //      return longEmail;
    //    }, '')
//5.
//        const arrayFive = users.reduce((accumulator, currentValue, idx) =>
//            (idx !== 0 ? `${accumulator}, `: 'Your instructor are: ')+`${currentValue.name}`, '') + `.`
//
//         console.log(arrayFive)
//Bonus
//           const arraySix = users.reduce((accumulator, currentValue, idx) => {
//               if(idx === ){
//                   return currentValue.languages
//               }
//           }, '')
//             console.log(arraySix)
})();