// Immediately Invoked Function Expression
// IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.
// i.e., they are a good way to prevent global namespace pollution.
// IIFEs are also useful because they have their own scope, and they are only invoked once.


// syntax named IIFE

(function hello(){
    console.log("Hello There!")
})();  // ; required at the end of IIFE

 
// non-named IIFE

(() => {
    console.log("Connecting to server...please wait")
})();


// parameterized non-named IIFE

((user) => {
    console.log()
    console.log("Connected")
    console.log(`welcome ${user}`)
})("@rohs_vivek")


