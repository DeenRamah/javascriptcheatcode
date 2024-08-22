// Array Methods
let arr = [1, 2, 3, 4, 5];

console.log(arr.push(6, 7)); // adds 6 and 7 to the end of the array
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

console.log(arr.pop()); // removes the last element (7)
console.log(arr); // [1, 2, 3, 4, 5, 6]

console.log(arr.shift()); // removes the first element (1)
console.log(arr); // [2, 3, 4, 5, 6]

console.log(arr.includes(3)); // returns true if 3 is in the array
console.log(arr.indexOf(3)); // returns the index of 3 in the array

// String Methods
let str = "Hello World";

console.log(str.charAt(0)); // returns the first character ("H")
console.log(str.charCodeAt(0)); // returns the Unicode value of the first character (72)

console.log(str.concat("!", " How are you?")); // combines strings
console.log(str.indexOf("World")); // returns the index of "World" in the string

// Object Methods
let obj = { name: "John", age: 30 };

console.log(obj.hasOwnProperty("name")); // returns true if obj has a property "name"
console.log(obj.toString()); // returns a string representation of obj

// Math Methods
console.log(Math.abs(-5)); // returns the absolute value of -5 (5)
console.log(Math.max(1, 2, 3, 4, 5)); // returns the maximum of the numbers (5)

// Date Methods
let date = new Date();

console.log(date.getDate()); // returns the day of the month (1-31)
console.log(date.getDay()); // returns the day of the week (0-6)
