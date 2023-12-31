// for-of loop

const arr = [1, 2, 3, 4, 5]

for (const itr of arr) {
    console.log(itr)
}

console.log("-------------------")


// for-of loop with string

const Greeting = "Hello World 🙋‍♂️"

for (const greet of Greeting) {
    console.log(`Individual character ${greet}`)
}



// MAPS are objects that hold key-value pairs
// MAPS are known for unique values and they maintain insertion order unlike objects    
// MAPS are not iterable in case of for in loop

const map = new Map()
map.set('name', 'John')
map.set('age', 25)
map.set('job', 'Developer')


for (const [key, value] of map) {
    console.log(key, value)
}


console.log("---------------------------")


const objects = {
    name: 'John',
    age: 25,
    job: 'Developer'
}

for (const key in objects) {

    console.log(key, objects[key])
}

console.log("---------------------------")

// Higher order functions

arr.forEach(function (item) {

    console.log(item)

})



// OR as arrow function

arr.forEach(( item, index, arr ) => {

    console.log("content : ",item, "Array Index : ", index, "Entire Arry : ", arr)
})

console.log("--------------------------------------------")

// fetching values from an object inside an array

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Karen' },
    { id: 4, name: 'Steve' }
]

users.forEach( (itm) => {

    console.log(itm.id)
    console.log(itm.name)
} )