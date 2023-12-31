// understanding Objects in Js
// Object is a collection of properties and methods 
// properties are variables associated with an object 
// methods are functions associated with an object
// Object is a collection of key value pairs
// Object is a non primitive, reference, mutable and complex data type.




// Object literal syntax

let aSymbol = Symbol("declaringSymbol")

let objForPeopleAttending = {

    name: "Rohtasvi",
    [aSymbol]: "Symbol", // to convert it into a symbol we have to use square brackets. e.g. [aSymbol].
    "full name": "Vivek Rohtasvi",
    age: 18,
    isAttending: true,
    seatsAcquired: ["502", "503", "504"],
    eMail: "rohtasvi@outlook.com"

}

// Accessing

console.log(objForPeopleAttending.isAttending)

//OR

console.log(objForPeopleAttending["seatsAcquired"]) // because there's no way we can access a value like full name using dot(.) operator. 

//console.log(typeof objForPeopleAttending.aSymbol) // the problem is, it's still a String data type.

console.log(typeof objForPeopleAttending[aSymbol]) // this will print symbol as a data type, but it's not working right now.



// basics about accessing and mutating properties and methods of an object.

objForPeopleAttending.greeting = function () {
    return `Hello ${this.name}` // this keyword refers to the object itself.
}
//console.log(objForPeopleAttending.greeting) // anonymous function

console.log(objForPeopleAttending.greeting()) // this will print undefined because we are not returning anything from the function.
// to fix that we can return a string from the function. e.g. return "Hello Attendee"

objForPeopleAttending.isAttending = false // this will change the value of isAttending to false

// BUT

//Object.freeze(objForPeopleAttending) // this will freeze the properties of the object and we can't change value anymore.

objForPeopleAttending.age = 19 // this will not change the value of age to 19 because we froze the object.

console.log(objForPeopleAttending.age) // this will still print 18 because we froze values to the object.



// defining an arrow function for greeting 

objForPeopleAttending.greeting = () => {
    console.log("Hello attendee, hope you have a great time at the event.")
}

objForPeopleAttending.greeting()