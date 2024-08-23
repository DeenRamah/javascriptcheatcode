// Array Methods
let arr = [1, 2, 3, 4, 5];

console.log(arr.push(6, 7)); // adds 6 and 7 to the end of the array
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

console.log(arr.pop()); // removes the last element (7)
console.log(arr); // [1, 2, 3, 4, 5, 6]

console.log(arr.shift()); // removes the first element (1)
console.log(arr); // [2, 3, 4, 5, 6]

console.log(arr.unshift(1, 2)); // adds 1 and 2 to the beginning of the array
console.log(arr); // [1, 2, 2, 3, 4, 5, 6]

console.log(arr.splice(2, 2)); // removes 2 elements starting from index 2
console.log(arr); // [1, 2, 4, 5, 6]

console.log(arr.slice(1, 3)); // returns a new array with elements from index 1 to 3
console.log(arr); // [1, 2, 4, 5, 6]

console.log(arr.indexOf(4)); // returns the index of 4 in the array
console.log(arr.includes(4)); // returns true if 4 is in the array

console.log(arr.forEach((element) => console.log(element))); // executes a function for each element in the array
console.log(arr.map((element) => element * 2)); // creates a new array with the results of applying a function to each element
console.log(arr.filter((element) => element > 3)); // creates a new array with all elements that pass a test implemented by a function
console.log(arr.reduce((a, b) => a + b, 0)); // applies a function to each element in the array, reducing it to a single value

// String Methods
let str = "Hello World";

console.log(str.charAt(0)); // returns the first character ("H")
console.log(str.charCodeAt(0)); // returns the Unicode value of the first character (72)

console.log(str.concat("!", " How are you?")); // combines strings
console.log(str.indexOf("World")); // returns the index of "World" in the string
console.log(str.lastIndexOf("World")); // returns the last index of "World" in the string

console.log(str.match(/World/)); // searches for a match between a string and a regular expression
console.log(str.replace(/World/, "Universe")); // replaces a substring with another substring
console.log(str.search(/World/)); // searches for a match between a string and a regular expression

console.log(str.slice(0, 5)); // extracts a section of a string
console.log(str.split(" ")); // splits a string into an array of substrings
console.log(str.substr(0, 5)); // extracts a section of a string

console.log(str.toLowerCase()); // converts a string to lowercase
console.log(str.toUpperCase()); // converts a string to uppercase
console.log(str.trim()); // removes whitespace from the beginning and end of a string

// Object Methods
let obj = { name: "John", age: 30 };

console.log(obj.hasOwnProperty("name")); // returns true if obj has a property "name"
console.log(obj.isPrototypeOf({})); // returns true if obj is the prototype of another object
console.log(obj.propertyIsEnumerable("name")); // returns true if a property is enumerable

console.log(obj.toLocaleString()); // returns a string representation of obj in a locale-specific format
console.log(obj.toString()); // returns a string representation of obj
console.log(obj.valueOf()); // returns the primitive value of obj

// Math Methods
console.log(Math.abs(-5)); // returns the absolute value of -5 (5)
console.log(Math.acos(0.5)); // returns the arccosine of 0.5
console.log(Math.asin(0.5)); // returns the arcsine of 0.5
console.log(Math.atan(0.5)); // returns the arctangent of 0.5
console.log(Math.atan2(0.5, 0.5)); // returns the arctangent of the quotient of two numbers

console.log(Math.ceil(4.7)); // returns the smallest integer greater than or equal to 4.7 (5)
console.log(Math.cos(0.5)); // returns the cosine of 0.5
console.log(Math.exp(2)); // returns the exponential of 2
console.log(Math.floor(4.7)); // returns the largest integer less than or equal to 4.7 (4)

console.log
