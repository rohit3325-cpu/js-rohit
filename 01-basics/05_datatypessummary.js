 //# Primitive->original value doesnot changed but a copy formed

 // 7 types: string, Number, Boolean, null, Undefined, Symbol,BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 345678912n

 //Reference (Non primitive->we made changes and it also changes the actual value)

 //Array, objects,Function

 const heros = ["shaktiman","naagraj","doga"]
 
//  let myObj = {
//     name:"rohit"
//     age:19
//  }

 const myFunction = function() {
    console.log("Hello world");
 }

 console.log(typeof myFunction);
 console.log(typeof heros);
 console.log(typeof bigNumber);
 console.log(typeof anotherid);
 console.log(typeof myFunction);

 // +++++++++++++++++++++++++++++++++++++++++++
 //memory
 //stack(Primitive),heap(non primitive)
 
 let myYoutubename = "rohit.com"

 let anothername = myYoutubename
 anothername="chitrakut"

 console.log(myYoutubename);
 console.log(anothername);
 
let userOne = {
   email : "rohti@gmail.com",
   upi : "r213@ybl"
}

let userTwo = userOne

userTwo.email = "fjwj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
