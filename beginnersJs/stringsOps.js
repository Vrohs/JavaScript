
// strings can be declared using single quotes, double quotes, or backticks(` `).

// Strings are immutable in JavaScript (and most of the other languages). This means that once a string is created, it cannot be changed. We can only create a new string from the existing one.

// Strings are indexed in JavaScript. The first character of a string has the index 0, the second character has the index 1, and so on.
// however, do not confuse it with Arrays, Strings are Objects in JavaScript.


const gameName = 'Tic Tac Toe'
const gameDescription = 'A simple game of crosses and zeroes'

console.log(`Hello there! welcome to ${gameName.toUpperCase()}, this is ${gameDescription} `) // Interpolation of strings.

const userName = new String("John Doe");
console.log(userName); // String object
console.log(userName[0]); // J
console.log(userName.charAt(2)) // string method to get character at index 2
console.log(userName.indexOf('D')) // string method to get index of character D


/* 

const userName = new String("John Doe");
console.log(userName);

run this in your browser console and see the magic 😎 .

*/
console.log(typeof(userName)); // object


console.log(userName.__proto__); // String prototype
console.log(userName.__proto__.__proto__); // Object null prototype

console.log(userName.length); // 8
console.log(userName.toUpperCase()) // JOHN DOE


const newStr = '   Vivek Rohtasvi       '
console.log(newStr)
console.log(newStr.trim()) // removes all the white spaces from both sides of the string
// console.log(newStr.trimLeft()) 
// console.log(newStr.trimRight())



const subStr = 'JavaScript'
console.log(subStr.substring(0, 4)) // skips 4th index
console.log(subStr.slice(0, 5)) // does not skip 4th index
console.log(subStr.slice(-9, 0))

const url = "https://flipkart.com/philips%20trimmers"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // asking if the string includes the given substring, i.e. 'sundar' in this case

console.log(gameName.split('-')) // splits the string into an array of strings based on the given separator, i.e. '-' in this case