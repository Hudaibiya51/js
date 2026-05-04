const user = {
    username: "Huda",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to JS`);
        console.log(this); // talks about the current context
        
        
    }
}
// user.welcomeMsg()// o/p=Huda, welcome to JS 
// user.username = "Imaz"
// user.welcomeMsg() // o/p =  Imaz, welcome to JS
// so this keyword is used to refer to current context


// console.log(this); // o/p = {} o/p is empty obj because when we execute command is node env there is not context in global
// if we run the same thing in browser th o/p is window obj, because window is the global obj in browser


