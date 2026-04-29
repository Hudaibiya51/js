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
console.log(loginUserMsg());  
// here username = "huda" means even if no argumaent will be given, it will use default value otherwise it will get overridden
