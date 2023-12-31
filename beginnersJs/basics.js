const accountId = 156456;
console.log(typeof "accountId"); // string

console.log(typeof accountId); // number

console.log(accountId); // 156456

console.log(typeof null); // object
// approximately pow(2,53) is the maximum number that can be represented in JS.
// bigint for significantly larger numbers.



// hoisting in js
// hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
// var declarations are hoisted to the top of their scope and initialized with a value of undefined.
// let and const are hoisted to the top of their scope but not initialized.
// let and const are not initialized until their actual declaration is evaluated during runtime.
// this means that accessing a variable before it is declared will result in a reference error.
// for example: 

console.log(y); // undefined
var y = 10;
console.log(y); // 10

console.log(x); // ReferenceError: x is not defined
x = 10;
console.log(x); // 10

// function hoisting
console.log(foo()); // Output: "hello"
function foo() {
  return "hello";
}

