const xyz = 5698
let accountEmail = "rohs@apple.mail"
let accountPassword = "94628"
accountResidency = "Bengaluru"

console.table([xyz, accountEmail, accountPassword, accountResidency])


let IsLoggedIn = Boolean(0) // false
console.log(IsLoggedIn);



let LoggedIn = Boolean("0") // true, because "0" is a string and being a non-empty string, it is a truthy value.
console.log(LoggedIn);