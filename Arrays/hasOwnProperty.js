"use strict";

Array.prototype.extrProperty = "Hello";

let arr = [1, 'a' , 2, 'b', 3, 'c', 4, 'd', 5, 'e' ];

for(let i in arr){
    console.log(arr[i]);
}

console.log("------------------------------------")

// we're aiming to print the properties of the given array but, we're getting an extra property..."Hello"

// 1
// a
// 2
// b
// 3
// c
// 4
// d
// 5
// e
// Hello

// to solve the problem... we'd use the hasOwnProperty() method.

for(let i=0; i<arr.length; i++ ){

    if(arr.hasOwnProperty(i)){
        console.log(arr[i]);
    }
}


// OR


// for(let i in arr){
//     if(arr.hasOwnProperty(i)){

//         console.log(arr[i]);
//     }
 
// }



// from the results we achieved, isn't it clear...what exactly hasOwnProperty() does 🤔🤔.  