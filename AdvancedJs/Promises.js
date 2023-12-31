"use strict";

let promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("Async task complete");
        resolve();
    }, 1000)
})


promiseOne.then(function(){

    console.log("promise consumed")
})




const promiseTwo = new Promise(function(resolve, reject){

    setTimeout( function(){
        console.log("Inside Promise 2")
        resolve({username: "Xyz", Email: "Xyz@gmail.com"})
    } , 1000)

})

promiseTwo.then(function(usr){

    console.log(usr);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = false;
        if(!error){
            resolve({user: "Abc", email: "Abc@google.com"})
        }
        else{
            reject("ERROR")
        }

    },1000)
})

promiseFour.then(function(usr){

    console.log(usr);
}).catch(function(er){
    console.log(er);
})



const promiseFourr = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = false;
        if(!error){
            resolve({user: "Abc", email: "Abc@google.com"})
        }
        else{
            reject("ERROR")
        }

    },1000)
})

// chaining
promiseFourr

.then(function(usr){

    console.log(usr);
    return usr.user;
})

.then(function(usrn){
    console.log(usrn)
})

.catch(function(er){
    console.log(er);
})

.finally(()=>{
    console.log("Either resolved or rejected");
})



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let error = false;

        if (!error) {
            console.log("Inside promise five");
            resolve({ name: "viv", moc: "outlook" })
        }
        else {
            reject("Promise rejected")
        }
    }, 1000)
})


async function promiseFiveConsumption(){
    const response = await promiseFive;
    console.log(response)
 }

promiseFiveConsumption();


async function getUser() {

    try {

        const response = await fetch('https://api.github.com/users/Vrohs');
        const data = await response.json();
        console.log(data);

    }
    
    catch (error) {
        console.log("E: ", error);
    }

}

getUser();