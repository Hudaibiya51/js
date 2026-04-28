// singleton - declaring using the constructor
const tinderobj = new Object()
tinderobj.id = "abc123"
tinderobj.name = "Sunny"
tinderobj.isLoggedIn = false
// console.log(tinderobj);

// can create objects inside an obj

const userDteails = {
    email : "abc@gmail.com",
    fullName: {
      userName: {
          firstname: "Huda",
          lastName: "Shahzad"
              }
    }
}

// console.log(userDteails.fullName.userName.lastName);



// merge objects


const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)  // better is to use this here the {} act as empty obj which is target and the following are the source

const obj3 = {...obj1, ...obj2} // best option
// console.log(obj3);


// if we have multipe objs in an array

const database = [
    {
        id: 1,
        email: "h@gmail.com"
    }, 
     {
        id: 2,
        email: "h@gmail.com"
    }, 
     {
        id: 3,
        email: "h@gmail.com"
    }, 
     {
        id: 4,
        email: "h@gmail.com"
    }, 
]

// console.log(database[3].id);

// console.log(tinderobj);
// console.log(Object.keys(tinderobj)); // returns all the keys stored in an array
// console.log(Object.values(tinderobj)); // returns all the values stored in an array

// console.log(tinderobj.hasOwnProperty('isLoggedIn'));
// console.log(tinderobj.hasOwnProperty('age')); // hasOwnproperty checks whether the particular key is present or not



// Object de-structure



const course = {
    coursename: "JS",
    courseprice: 999,
    courseInstructor: "Huda"
}


const {courseInstructor: inst} = course
console.log(inst);

