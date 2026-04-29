// {} -  scope. 


let a = 300;
if (true){
    let a =10
    let b =20
    // console.log("Inner a: ", a); // here o/p will be 10
    
}

// console.log(a);// here o/p will be 300


// nested scope in functions

function one(){
    const username = "huda"

    function two(){
        const website = "youtube"
        console.log(username); // here is the o/p we will recive the content of var username
        
    }
    // console.log(website);// will get error in the o/t saying website is not defined
    two()  
}
// one() 
// so the child function can access the variables of parent function but not vice versa


// // nested scope in if else

if (true){
    const username = "huda"
    if(username === "huda"){
        const website = " youtube"
        // console.log(username + website); // will work
    }
    // console.log(website); // will give error because out of scope
    
}

// console.log(username); // error 


// +++++++++++++++ interesting+++++++++++


// two ways to define a func

console.log(addone(6)); // here we are calling the function before defining it and it will work without any error
function addone(num1){
    return num1 +1
}
// console.log(addone(6));

console.log((addtwo(6))); // here we will get the following error:addtwo is not defined because this function is stored in a variable n we are trying to call it before defining so it won't work

// const result = function addtwo(num2){
//     return num2 +1
// } // this concept is called hoisting
 
