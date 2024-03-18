/*
QUESTION :46
Enhanced Laptop Object: Construct an object for a laptop including properties make,
model, year, and a method describe() that logs a sentence about the laptop.

*Explain & TIP:* Objects can also contain functions (methods) that can perform
actions using the object's properties. This introduces method definition within
objects.
*/
// SOLUTION BELOW
 let laptop = {
    make: "HP",
    model: "PRO BOOK-4430S",
    year: 2023,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
 };
 laptop.describe();
