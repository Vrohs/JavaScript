"use-strict";

const user = {

        name: "ExName",
        address: "HomeAddress",
        age: 19,
        isLoggedIn: true,
        
        getMethod: function(){

         // console.log(`Username: ${this.name}`);   // this keyword for current context...you know it don't you 😎 //
            console.log(this);
        }
}


// console.log(user.name);
// user.getMethod();

console.log(this); // returns empty object.