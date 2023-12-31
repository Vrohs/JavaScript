const myArray = [0, 1, 6, 9, 25, true, "Viv" ]; // yep, elements can be of different types in Js like tuples in Python.

console.log(myArray[5]); // true
console.log(myArray[6]); // viv

console.log(); // for a line break in the console.

let extPhilosophers = [1,"Nietzsche", 2,"Dostoevesky", 3,"Solzenietsen", 4,"Schiller"]; // Dostoevesky wrote Crime and Punishment...#shameless-recommendation😁
console.log(extPhilosophers); // [ 1, 'Nietzsche', 2, 'Dostoevesky', 3, 'Solzenietsen', 4, 'Schiller' ]


console.log(extPhilosophers[0], extPhilosophers[1]); // 1 Nietzsche, you're getting a feel of it...don't you 😎?    



// some methods on Arrays in Js

let Arr = [56, 4, 5, 91, 48];
console.log(Arr); // [ 56, 4, 5, 91, 48 ]

Arr.push(9); // method for adding a value to last of the Array.
console.log(Arr); // [ 56, 4, 5, 91, 48, 9 ]

Arr.pop(); // method for removing last value in an Array.
console.log(Arr); // [ 56, 4, 5, 91, 48 ]

console.log(); 


Arr.unshift(9);
console.log(Arr); //  HIGHLY un-optimized method for adding a value at the 0-th index of the Array.
Arr.shift() // will remove the 9 added through unshift() method.


console.log(Arr.includes(5)); // questionare method which returns a boolean value.

console.log(Arr.indexOf(5));  // you know what this method does, c'mon 🤷‍♂️!

console.log(Arr.indexOf(595)); // -1 for non-existing values.

const newArr = Arr.join() // method for converting an array from an Object to String data-type.
console.log(newArr);

let x = typeof(Arr); // it's an Object
let y = typeof(newArr); // it's a String
console.log(x,",",y);   // you see...😯!

console.log();



// Interview Question: What's the key difference b/w slice() and splice() methods ?
let anArr = [4, 5, 9, 2, 8, 3];
console.log(anArr.slice(1,3)); // 1,3 means from index 1 to 3 but not including 3.
console.log(anArr); 
// after using the slice operation our Array still remains the same 


console.log(anArr.splice(1,3)); // splice also includes the range but that's not the difference we're seeking here.
console.log(anArr); // Here we see complete Array is manipulated, the key difference b/w slice() and splice() methods.

// splice() method is used to add or remove elements from an Array.
anArr.splice(1, 4, 8, 6, 7); // 1,4 means from index 1 to 4 but not including 4.
console.log(anArr); // [ 4, 8, 6, 7, 3 ]

// refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  for more information.