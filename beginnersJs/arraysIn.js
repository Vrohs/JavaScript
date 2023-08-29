const myArray = [0, 1, 6, 9, 25, true, "Viv" ]; // yep, elements can be of different types in Js.

console.log(myArray[5]); // true
console.log(myArray[6]); // viv

console.log();

let extPhilosophers = [1,"Nietzsche", 2,"Dostoevesky", 3,"Solzenietsen", 4,"Schiller"]; // Dostoevesky wrote Crime and Punishment...#shameless-recommendation😁
console.log(extPhilosophers);

console.log(extPhilosophers[0], extPhilosophers[1]); // 1 Nietzsche, you're getting a feel of it...don't you 😎?    



// some methods on Arrays in Js

let Arr = [56, 4, 5, 91, 48];
console.log(Arr); // [ 56, 4, 5, 91, 48 ]

Arr.push(9); // method for adding a value to last of the Array.
Arr.pop(); // method for removing last value in an Array.

console.log(Arr); // [ 56, 4, 5, 91, 48, 9 ]

console.log();


Arr.unshift(9);
console.log(Arr); //  highly-unoptimized method for adding a value at the 0-th index of the Array.
Arr.shift() // will remove the 9 added through unshift() method.


console.log(Arr.includes(5)); // questionare method which returns a boolean value.

console.log(Arr.indexOf(5));  // you know what this method does, c'mon 🤷‍♂️!

console.log(Arr.indexOf(595)); // -1 for non-existing values.

const newArr = Arr.join() // method for converting an array from an Object to String data-type.
console.log(newArr);

let x = typeof(Arr);
let y = typeof(newArr);
console.log(x,",",y);   // you see...😯!

console.log();



// Interview Question: What's the key difference b/w slice() and splice() methods ?
let anArr = [4, 5, 9, 2, 8, 3];
console.log(anArr.slice(1,3));
console.log(anArr); 
// after using the slice operation our Array still remains the same 


console.log(anArr.splice(1,3)); // splice also includes the range but that's not the key difference here.
console.log(anArr); // Here we see complete Array is manipulated, the key difference b/w slice() and splice() methods.

// refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  for more information.