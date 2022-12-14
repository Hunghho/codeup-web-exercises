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
        lastName: "Ho",
        fullName: function () { return this.firstName + " " + this.lastName;},
        sayHello: function () { return "Hello from" + this.fullName();}
    }
    console.log(person.fullName());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());

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


    // console.log(name1 + "" + ", you paid: " + cameronPay + hebDiscount(cameronPay));
    // console.log(name2 + "" + ", you paid: " + ryanPay +hebDiscount(ryanPay));
    // console.log(`${name3}, you paid: ${georgePay} ${hebDiscount(georgePay)}`);


    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        if(shopper.amount > 200){
            // Shoppers that get the discount
            let savings = parseFloat(shopper.amount) *.12;
            let total = (parseFloat(shopper.amount) - (savings)).toLocaleString('en-US', {style:'currency', currency: 'USD'});
            savings = savings.toLocaleString('en-US', {style:'currency', currency: 'USD'})

            console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style:'currency', currency: 'USD'})}, and received a 12% discount.\n${shopper.name}'s discounted total is ${total}, with a saving of ${savings}\n.`)
        } else {
            let remaining = ((200 - parseFloat(shopper.amount))).toLocaleString('en-US', {style:'currency', currency: 'USD'});

            console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style:'currency', currency: 'USD'})}, and did not receive a discount.\n${shopper.name} will have to spend ${remaining} more to receive a 12% discount.`)
        }
    });

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
        {title: 'Book1', author: {firstName: "Jon", lastName: "JJ"}},
        {title: 'Book2', author: {firstName: "Jan", lastName: "JR"}},
        {title: 'Book3', author: {firstName: "Jen", lastName: "JC"}},
        {title: 'Book4', author: {firstName: "Jun", lastName: "JB"}},
        {title: 'Book5', author: {firstName: "Jin", lastName: "JD"}}
    ]
    console.log(books);
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

 let oneConsoleLog = "";
    books.forEach(function (book, index) {
        let bookNumber = index + 1;
        let fullName = `${book.author.firstName} ${book.author.lastName}`;
        let message = `Book # ${bookNumber}\nTitle: ${book.title}\nAuthor ${fullName}\n---\n...\n`;
        // console.log(message);
        oneConsoleLog += message;
    });
    console.log(oneConsoleLog)
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
    // let hungBook = createBook("Coding for Hung", "Hung Ho");
    function createBook(input1, input2) {
        let authorArray = input2.split(' '); // ["Hung", "Ho"]
        let newBook = {
            title: input1,
            author: {
                firstName: authorArray[0],
                lastName: authorArray[1]}
        }
        return newBook;
    }
    console.log(createBook("The Hobbit", "J.R.R Tolkiem"));

    let books2 = [
        createBook("The Hobbit Two", "J.R.R Tolkiem"),
        createBook("The Fellowship of the Ring", "J.R.R Tolkiem")
    ];
    console.log(books2);

    function showBookInfo(book, index){
        let bookNumber = index + 1;
        let fullName = `${book.author.firstName} ${book.author.lastName}`;
        let message = `Book # ${bookNumber}\nTitle: ${book.title}\nAuthor ${fullName}\n---\n...\n`;
        // console.log(message);
        console.log(message);
    }
    books2.forEach(function (book, index){
        showBookInfo(book, index);
    });






})();