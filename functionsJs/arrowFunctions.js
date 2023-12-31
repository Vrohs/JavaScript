
const user = {
    uname: "Xyz",
    regnFee: 450,
    email: "xyz@hotmail.com",

    greetings: function() {

        return `hello ${this.uname}`

    }
}

const {uname:u} = user
console.log(u)


// console.log(user.greetings())

// function greet() {
//     console.log(this)
// }

// greet()

// arrow function

const AddTwo = (num1, num2) => {

    return num1 + num2
}

console.log(AddTwo(4,9))

const AddTo = (num1, num2) => (num1 + num2) // no need to write return, if we're using parentheses instead of curly braces. Extensively used in ReactJs
console.log(AddTo(4,9))

