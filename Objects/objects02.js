// path: Objects/objects03.js

// exploring Singleton and Constructor type objects.


// let newObject = new Object() // this is a constructor type singleton object.

let newObject = new Object()

newObject.name = "Rohtasvi"
newObject.age = 18
newObject.isAttending = true
newObject.seatsAcquired = ["502", "503", "504"]
newObject.eMail = "someone@example.com"

// console.log(newObject)



// nesting of objects.

let anObject = {
    name: {
        fullName: {
            firstName: "Vivek",
            lastName: "Rohtasvi"
        },
        middleName: "xyz"
    }
}

console.log(anObject.name?.fullName.lastName) // accesing nested objects. Also that question mark is called optional chaining. It will check if the property exists or not. If it exists then it will print the value otherwise it will print undefined.


// combining two objects.

let obj1 = { 
    
    keyValue1: "value1",
    keyValue2: "value2",
     
}

let obj2 = { 
    
    keyValue3: "value3",
    keyValue4: "value4",
     
}

// now,

Object.assign({}, obj1, obj2) // this will combine both the objects and store it in obj1. ⚠️⚠️⚠️ note that this will mutate obj1 ONLY. ⚠️⚠️⚠️	

console.log(obj1) // this will print obj1 as it is.
console.log(obj2) // this will print obj2 as it is.

// but if we want to store the combined object in a new object then we can do this.

let obj3 = Object.assign({}, obj1, obj2) // this will combine both the objects and store it in obj3. Now the purpose of empty object {} is to store the combined object in a new object not the first parametered object. ⚠️⚠️⚠️ note that this will not mutate obj1 or obj2. ⚠️⚠️⚠️
console.log(obj3) // this will print obj3 as it is.


// OR simply we should just use spread operator.

let spreadeadObj = { ...obj1, ...obj2 } // latest + best + easiest way to combine two objects.
console.log(spreadeadObj)  


// creating ojects inside an Array.

let arr = [
    {
        name: "Rohtasvi",
        age: 18
    },
    {
        name: "Vivek",
        age: 19
    },
    {
        name: "Rohtasvi",
        age: 20
    }

    // and so on...
]

// 🙋🙋🙋
// if the objects were already created outside then, we can simply create an array and push the objects into it like [...obj1, ...obj2, ...obj3] and so on,
// how do we access the objects inside an array?
// we can use for loop or forEach loop to access the objects inside an array.
// or to access a specific object we can use arrayName[index]. e.g. arr[0].name will print Rohtasvi. 

console.log(Object.keys(newObject)) // this will print all the keys of obj1 as arrays.

// ALSO,

console.log(Object.values(newObject)) // this will print all the values of obj1 as arrays.


console.log(Object.entries(newObject)) // this will print all the keys and values of obj1 as arrays inside an array.

console.log(newObject.hasOwnProperty("age")) // this will check if the object has the property or not. If it has then it will print respective boolean value. 