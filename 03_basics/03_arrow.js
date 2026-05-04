const user = {
    username: "Huda",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to JS`);
        // console.log(this); // talks about the current context
        
        
    }
}
// user.welcomeMsg()// o/p=Huda, welcome to JS 
// user.username = "Imaz"
// user.welcomeMsg() // o/p =  Imaz, welcome to JS
// so this keyword is used to refer to current context


// console.log(this); // o/p = {} o/p is empty obj because when we execute command is node env there is not context in global
// if we run the same thing in browser th o/p is window obj, because window is the global obj in browser


// function chai(){
//     console.log(this); // it prints a lot of details
    
// }
// chai()
// function chai(){
//     let username = "ABC"
//     console.log(this.username); // it prints undefined so that means cannot use this in functions
    
// }
// chai()

// const chai = function(){
//     let username = "ABC" 
//  console.log(this.username); // it prints undefined
 
// }

// lets try creating arrow function
const chai = () => {
    let username = "ABC" 
 console.log(this.username); // it prints undefined

}

// chai()


() => {} // syntax of arrow function

// const addtwp = (num1, num2) => {
//     return num1 + num2 // explicit return because we use return keyword
// } // basic arrow func

// const addtwp = (num1, num2) =>  num1 + num2 // its called implicit return where we dont need {} and return keyword

//  const addtwp = (num1, num2) =>  (num1 + num2) // we can also use () around

 // if we need to use obj
  const addtwp = (num1, num2) => ({username: "huda", age: 26})
console.log(addtwp(2,3));


