let fruit : string ="apple";
console.log("Testing equality with strings:");
console.log(fruit == "apple"); // True
console.log(fruit == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
let num : number= 6
console.log("Numerical tests:");
console.log(num > 5); // True
console.log(num < 1); // False

// Tests using "and" and "or" operators
let Tests = ["true" && "false"];
let tests = ["true" || "false"];
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
