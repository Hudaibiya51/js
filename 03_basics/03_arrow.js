const user = {
    username: "Huda",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to JS`);
        
    }
}
user.welcomeMsg()// o/p=Huda, welcome to JS 
user.username = "Imaz"
user.welcomeMsg() // o/p =  Imaz, welcome to JS
// so this keyword is used to refer to current context
