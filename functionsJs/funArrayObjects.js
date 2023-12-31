const user = {

    userName: "Xyz",
    age: 41

}


function objHandler(genericObjectName){

    return (`the user is ${genericObjectName.userName} and age is ${genericObjectName.age}`)

}


console.log(objHandler(user))   


const newArray = [1, 6574, 654, 5754]

function handleArray(genericArrayName){
    return genericArrayName[2]
}

console.log(handleArray(newArray))