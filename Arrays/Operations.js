const programming = ["functional", "object-oriented", "low-level", "high-level"]

const values = programming.forEach((value) => {

    console.log(value)
    // return value  forEach does not return anything.
})

console.log(values);



const nums = [55, 21, 32, 45, 8654]


const newaNums = nums.filter((item) => item > 50)
console.log(newaNums)

//------------------------------------------------------------------------------------------------------------------------------------------------

// FILTER

const mockData = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 1996 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];



let ftrdValue = mockData.filter((frd) => frd.edition === 1996)

// but if you open a scope, do not forget to return the values...same code can be written as:

ftrdValue = mockData.filter( (frd) => frd.edition === 1996) .filter( (frd) => frd.publish === 1986) // chaining

console.log(ftrdValue)

// --------------------------------------------------------------------------------------------------------------------------------------------------

// MAP

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


// chaining of methods
const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);



//------------------------------------------------------------------------------------------------------------------------------------------------


// FILTER

const numGroup = [1, 2, 3]

const modValue = numGroup.reduce( function(accumulator, currentValue){
    
    console.log(`acc: ${accumulator} and cvl: ${currentValue}`)

    return accumulator + currentValue;
}, 0 )

// or we can write 

// const modValue = numGroup.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 )

console.log(modValue)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);