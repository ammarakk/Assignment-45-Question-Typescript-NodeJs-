var fruit = "apple";
console.log("Testing equality with strings:");
console.log(fruit == "apple"); // True
console.log(fruit == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
var num = 6;
console.log("Numerical tests:");
console.log(num > 5); // True
console.log(num < 1); // False
// Tests using "and" and "or" operators
var Tests = ["true" && "false"];
var tests = ["true" || "false"];
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
