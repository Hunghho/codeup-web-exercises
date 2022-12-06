(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {
    firstName: "Hung",
    lastName: "Ho"
    }
    console.log(person);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = `Hello from ${person.firstName} ${person.lastName}!`
    console.log(person.sayHello);
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // let name1 = "Cameron";
    // let name2 = "Ryan";
    // let name3 = "George";
    // let cameronPay = 180;
    // let ryanPay = 250;
    // let georgePay = 320;
    function hebDiscount(amountPay) {
        if (typeof amountPay === "number") {
            if (amountPay >= 200) {
                return "12% is applied $" + (amountPay * (1 - .12)).toFixed(2);
            } else {
                return "No discount applied $" + amountPay.toFixed(2);
            }
        }
    }
    // console.log(name1 + "" + ", you paid: " + cameronPay + hebDiscount(cameronPay));
    // console.log(name2 + "" + ", you paid: " + ryanPay +hebDiscount(ryanPay));
    // console.log(`${name3}, you paid: ${georgePay} ${hebDiscount(georgePay)}`);


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (user){
        console.log(`${user.name} your total is: $${user.amount}, your total with discount applied is: ${hebDiscount(user.amount)}`);
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
 let books = [
        {book: "# 1", title: 'Book 1', author: 'Jon'},
        {book: "# 2", title: 'Book 2', author: 'Jane'},
        {book: "# 3", title: 'Book 3', author: 'Jill'},
        {book: "# 4", title: 'Book 4', author: 'James'},
        {book: "# 5", title: 'Book 5', author: 'June'}
    ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for(let i = 0 ; i < books.length ; i += 1){
    //     console.log(books[i]);
    // }
    books.forEach(function (book){
        console.log(`Book: ${book.book} Title: ${book.title} Author: ${book.author}`)
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();