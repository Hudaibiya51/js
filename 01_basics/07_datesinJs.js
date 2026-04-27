// Dates


let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());

// console.log(myDate.toUTCString());
// console.log(typeof myDate); // object

// let createdDate = new Date(2026, 0,23) // year month day
// let createdDate = new Date(2026, 0,23, 4,3) // year month day hour mins

// let createdDate = new Date('2026-02-24') // YY-MM-DD

let createdDate = new Date('02-24-2026') //MM-DD-YY
// console.log(createdDate.toLocaleString());

let timestamp = Date.now();
// console.log(timestamp);  // milisecond value from 1970 year
// console.log(createdDate.getTime());  // from a particular date it gives milisecond
// console.log(Math.floor(Date.now()/1000));  // after diving 1000 converts into secs and math.floor to avoid decimal


let newdate = new Date()
// console.log(newdate.getDay());
console.log(newdate.toLocaleString('default', { weekday: "long"
}))


 
