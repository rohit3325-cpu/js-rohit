//truthy and falsy

 const userEmail =[]
 if (userEmail) {
    console.log("Got the email");
 }else{
    console.log("Dont have user email");
  }

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values

// "0", 'false'," " , ---> because it is in the string,  [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

const emptyobject ={}
//object.keys --> give an array of the object
if (Object.keys(emptyobject).length === 0) {
    console.log("object is empty");
  }

//  Nullish Coalescing Operator (??): null undefined --> it helps when we get false value then to maintain the whole program functionable it gives another value

let val1;
// val1 = 5 ?? 10
// val1 = null??10
// val1 = undefined ?? 15
val1 = null??10??15

console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")