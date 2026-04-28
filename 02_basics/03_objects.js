// 2 ways to declare an obj 1, luteral 2, constructor
// when we declare obj using literal singleton isn't created


// obj literals

const mySym = Symbol("key1")

const jsuser = {
    name: "Huda",
    [mySym]: "KEY1",
    "Full name": "Huda shahzad",
    age: 2,
    email: "huda@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Tues","Wed"]
}

// console.log(jsuser.email);

// console.log(jsuser["email"]); // this is the better way rather than dot method because using dot you cannt print keys like "full name"

// console.log(jsuser["Full name"]);
// console.log(typeof jsuser[mySym]);

// in order to update js objects
jsuser.email = "xyz@gmail.com"
 
// Object.freeze(jsuser) // freeze prevents any further changes in the obj

jsuser.email = "abc@gmail.com"
// console.log(jsuser);


jsuser.greetings = function(){ // adding a func into an obj
    console.log("Hello user");
    
}


jsuser.greetingstwo = function(){ // adding a func into an obj while accesing one of the keys of the obj using this keyword
    console.log(`Hello user, ${this.name}`);
    
}
console.log(jsuser.greetings());
console.log(jsuser.greetingstwo());

