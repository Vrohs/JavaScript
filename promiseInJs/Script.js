// promises in JavaScript

// let myPromise = new Promise((resolved, rejected) => {
//     let req = new XMLHttpRequest()
//     req.open('GET', 'user.text');
//     req.onload = function () {
//         if (req.status == 200) {
//             resolved(req.responseText);
//         }
//         else {
//             rejected(req.status);
//         }
//     }
//     req.send();

// })


// myPromise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{console.log(error);})


// //--------------------------------------------------------------------------------------------------

// // fetch by default uses get method
// // fetch return the promise
// fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => { console.log(data); })



// // promises can work on resolve state w/o having rejected state.

// // promise chaining [handling promise under promises] 

// fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => { console.log(data); }).catch(error => { console.log(error); })


//Async and Await

// ASYNC is used to make a function asynchronous
// Async and await are used to handle promises in a better way
// await returns the promise in a resolved state


// fetch API using async and await

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

fetchUsers();

// fetch api returns the promise in a resolved state
// by default fetch uses 'get' method
