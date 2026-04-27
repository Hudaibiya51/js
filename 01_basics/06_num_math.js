 
 //+++++++++++++++++About numbers in js
 const score = 200;
// console.log(score);


 const balance = new Number(100);
//  console.log(balance);
 

//  console.log(balance.toString().length);

//   console.log(balance.toFixed(3));


  const othernum = 45.987
//    console.log(othernum.toPrecision(3));


   const hunderds  = 1000000
// console.log(hunderds.toLocaleString());  // US standard

// console.log(hunderds.toLocaleString('en-IN')); // Indian format


//+++++++++++++++++++ Maths in js

// console.log(Math);

// console.log(Math.abs(-4));  // absolute value
// console.log(Math.round(3.5)); // round up or down
// console.log(Math.ceil(3.5)); // round up
// console.log(Math.floor(3.5)); // round down

// console.log(Math.min(3.,5,4,5,6,7));
// console.log(Math.max(3.,5,4,5,6,7));

console.log(Math.random());   // random number between 0-1

console.log((Math.random()*10) + 1);  // * by and number for the desried rand and + 1 in order to skip number 0
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min);

