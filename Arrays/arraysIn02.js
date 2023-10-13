const marvelSups = ["IronMan", "Thor", "Hulk", "WinterSoldier"]

const dcSups = ["BatMan", "WonderWoman", "SuperMan", "TheFlash"]


marvelSups.push(dcSups);  // since arrays in js can take any data-type as input, the method .push() would attach the array "dcSups" into "marvelSups".
console.log(marvelSups);


const univCombined =  marvelSups.concat(dcSups);  // .concat() does the job but it can't hold the values, so we need another variable to store the array.
console.log(univCombined);

const univAssemble = [...marvelSups, ...dcSups]   // the ultimate methode to combine arays. Also the spread operator(...) is used to shallow copy an array.
console.log(univAssemble);

console.log(Array.isArray(univAssemble))  // questionaire method in arrays which returns boolean value.  

let n = 9;
let anArray = [2, 6, 9, 5, [5, 9, 8, [4, 9, 6, [0, 1, 5]]], [0, 5, 6]]
console.log(anArray.flat(Infinity));  // .flat() method is used to flatten the array. It takes a parameter which is the depth of the array,
// like in this case the array is nested 4 times so we have to pass 4 as the parameter. 
//But if we don't know the depth of the array then we can pass Infinity as the parameter.    


console.log(Array.from("Rohtasvi"));  // method to create an array from the given string.                                    
console.log(Array.from({name: "Rohtasvi"}));  // returns empty array hmmm...INTERESTING 🤔.



let score1 = 100;
let score2 = 200;
let score3 = 400;
console.log(Array.of(score1, score2, score3)); // .of() method creates an array from the given values.

// explore these methods of arrays in-depth.
