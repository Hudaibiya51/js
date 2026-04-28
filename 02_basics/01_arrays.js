// +++++++++++++++++++++++++arrays
const myArr = [1,2,3,4];
const heros = ["spidy", "thor"]

const myArr2 = new Array(1,2,3)

// console.log(myArr2);
// console.log(typeof myArr2);

// console.log(typeof heros);
// console.log(myArr[3]);
// ++++++++++++++++++++++++++++++array methods
// myArr.push(5)
// console.log(myArr);
// myArr.pop();
// console.log(myArr); // pusp n pop adds n deletes the element at the end

myArr.unshift(10);
// console.log(myArr);
myArr.shift();
// console.log(myArr); // unshift n shift adds n deletes the element at the begining

 console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);
// console.log(typeof newArr);  // join in used for concatenation but converts the datatype into string




// slice and splice


// console.log("A ", myArr);
// const myn1 = myArr.slice(0,2) // slice is used for extracting a certain part

// console.log("B ", myArr);

// const myn2 = myArr.splice(0, 1) // in splice this is what we have : array.splice(start, deleteCount, item1, item2, ...) start → index where changes begin deleteCount → how many elements to remove. item1, item2, ... → (optional) items to add
// console.log("C ", myArr);


