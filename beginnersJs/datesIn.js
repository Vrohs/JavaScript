let myDate = new Date();  // method to get the current date and time.

console.log(myDate); // weird looking sring -> 2023-08-17T22:44:07.534Z
console.log(myDate.toDateString());  // Fri Aug 18 2023
console.log(typeof myDate);  //object
console.log(myDate.toLocaleDateString()); // 18/08/2023




let createdDate = new Date(1970, 9, 12) // 12/10/1970  yep, month = 10 because months start from [0 = January, if in single digit. Arrays my friend Arrays...🙂 ] in Js.
console.log(createdDate.toLocaleDateString());

let customDate = new Date(1970, 9, 12, 5, 3, 0) // 12/10/1970, 05:03:00, there are numerous formats in which we can use dates. 
let x = customDate.toLocaleString()  // conveting the date into a readable format using a string method.
console.log(x); // 12/10/1970, 05:03:00

let anotherDate = new Date("2023-01-30") // format auto-converted( some compilers might not do that ) into dd/mm/yyyy 30/01/2023, 05:30:00 [and here we go, January = 1 using double digits]
console.log(anotherDate.toLocaleString());
