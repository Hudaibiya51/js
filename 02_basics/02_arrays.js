const marvel_heros = ["spiderman", "thor", "Ironman"]
  const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)
// //  console.log(marvel_heros); // ir will not merge the arrays, it will add the array as an element
// // console.log(marvel_heros[3][1])

// const newhero = marvel_heros.concat(dc_heros) // will merge 2 arrays n makes a new array

// console.log(newhero);



// alternative method is spread operator


const all_new_arr = [...marvel_heros, ...dc_heros]
// console.log(all_new_arr);



const another_array = [1,,2,3, [4,5,6, [7,6,8,[9,10]]]]
 const real_array = another_array.flat(Infinity) // returns a new array with all the inner arrays concatinated
//  console.log(real_array);
 

// console.log(Array.isArray("Huda")); // returns true or false

// console.log(Array.from("huda")); // converts into array

// console.log(Array.from({name: "huda"})); // will return empty array because we need to mention whether key or value needs to be an array

const s1 =100
const s2 =200
const s3 = 400
console.log(Array.of(s1,s2,s3));  // merges the 3 variables into one array
