
//Javascript is a dynamically typed language. It means that a variable declared with a particular data type can be assigned a value of any data type.

// Javascript primitive data types
// 1. Number
// 2. String
// 3. Boolean
// 4. undefined
// 5. null
// 6. Symbol
// 7. BigInt

// Javascript non-primitive data types
// 1. Object
// 2. Array
// 3. Function







console.log("2" > 1); //    true, because "2" is converted to a number.
console.log("01" == 1); //  true, 
console.log("01" === 1); // false "===" is strict equality operator, it checks for both value and data type`.
console.log("02" > 1); //   true




console.log( null > 0 ) //  false, because null is converted to 0 in comparison operators.
console.log( null == 0 ) // false, because null is not converted to 0 in equality operators.
console.log( null >= 0 ) // true  here, null is converted to 0 in comparison operators.

console.log( undefined > 0 ) //  false, because undefined is converted to NaN in comparison operators.
console.log( undefined == 0 ) // false, because undefined is not converted to 0 in equality operators.
console.log( undefined >= 0 ) // false  here, undefined is converted to NaN in comparison operators.