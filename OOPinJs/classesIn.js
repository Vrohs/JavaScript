"use-strict";

class Person{

    respond(){

        return ("Hello you...🙋‍♂️");
    }
}

const me = new Person();
const you = new Person();

console.log(me.respond());
console.log(you.respond());
console.log();

// only if you understand, here we solved a key problem of large codebase maintenance...😎

Person.prototype.respond = () => {

    return("Hello there....");
}

console.log(me.respond());
console.log(you.respond());


// prototypes and __proto__

