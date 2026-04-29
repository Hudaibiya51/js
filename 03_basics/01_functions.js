// functions


function sayMyName() {
    console.log("H");
    console.log("u");
    console.log("D");
    console.log("A");
}  // func definition

// sayMyName() // here sayMyname is the function referance n () is execution

// func with parameter
function addTwonumbers(a, b){
    console.log(a+b); 
}
// const result = addTwonumbers(3,8); // here a nd b are the parameters n 3 and 8 are the arguments
// console.log("Result: ", result); // o/p is undefined

// now if we try to store this a variable n then check whats in the variable it shows undefined

// function addTwonumbers(a, b){
//   let result = a+b;
//   return result
// }
// const result = addTwonumbers(3,8)
// console.log("Result: ", result); // here you will get the sum stored in var result

// also if we put some code after return that doesn't work

function addTwonumbers(a, b){
return a+b;
   
}
const result = addTwonumbers(3,8)
// console.log("Result: ", result); // this is also one way



// function loginUserMsg(username) {
//     return `${username} just logged in ` 
// }
// console.log(loginUserMsg("Huda"));  




// // what if we dont pass any argument while calling the function, its returns undefined
// function loginUserMsg(username) {
//     if(username === undefined){
// console.log("Please enter a name");
// return

//     }
//     return `${username} just logged in ` 
// }
// console.log(loginUserMsg());  


// default value in functions

function loginUserMsg(username = "hud") {
    if(username === undefined){
console.log("Please enter a name");
return

    }
    return `${username} just logged in ` 
}
// console.log(loginUserMsg());  
// here username = "huda" means even if no argumaent will be given, it will use default value otherwise it will get overridden



// lets create a func where we dont know how many arguments the user will provide so we need to prepare the parameters

// function calculateCartPrice(num1){
//   return num1
// }
// console.log(calculateCartPrice(200,2,3,400)); // here the o/p will be just 200
// in order to solve it we have ***** rest operator (...) ******

function calculateCartPrice(...num1){
  return num1
}
// console.log(calculateCartPrice(200,2,3,400)); //rest operator will return the array in the output 


// how to use objects in funcions

const user = {
    name: "Huda",
    bill: 999
}

function handleObje(anyobj){
   console.log(`Hello ${anyobj.name}! your bill is: ${anyobj.bill}`);
}

// handleObje(user)

// the above is the ex of first creating an obj and then passing it as an argument while calling func

handleObje( {
    name: "Hudaibiya",
    bill: 89
}) // this can also be done where we create the object while calling a function



// how to use arrays in functions

const myArray = ["huda", 26, "pretty", true]

function handleArray(getArray){
  return getArray[2]
}
// console.log(handleArray(myArray));
// u can create an array while calling a func as well
console.log(handleArray([200, "huda", "hey"])); 

