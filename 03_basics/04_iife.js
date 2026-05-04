// Immediately Invoked Function Expressions IIFE is used to inmediately call a func

// we use iife in order to prevent global scope pollution
 
//syntax of iffe
//()() // here ist paranthesis are for function definition and 2nd is for func call

//named iife
(function chai(){

    console.log("db is connected");
    
}) ();

// one thing about iife: don't know where to end context so always put ; after func call
//unnamed iffe
(() =>{
    console.log("DB connected again");
    
})();
// lets use parameter n argument
((name)=>{console.log(`hello user, ${name}`);
})("huda")