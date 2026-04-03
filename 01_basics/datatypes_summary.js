// 2 general datatypes 
// 1. Primitive  - call by value (orginal data is copied  and changes are made on the copied data not original)
//  7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const num1 = 12 //number
const num2 = 12.45 //number
const isloggedin = false //booloean
const temp = null; //null
let userEmail;  // undefined

let id = Symbol('123')
// console.log(id);


const bigNumber = 128373698267392639173n
// console.log(typeof bigNumber);

// console.log(userEmail);



// 2. Non primitive (call by refrence) refrence is direclty allocated so the changes are done directly on the original data
// Types: Array, Objects, Functions


const heros = ["spiderman", "batman", "thor"]; //array
let myobj = {
    name : "huda",
    age: 25
} // object



const myFunc = function (){
  console.log("hello world");
  
} // function => function(){} <= function definition

// Js is dynamically typed because the type of the variable is determined at runtime based on its current value
