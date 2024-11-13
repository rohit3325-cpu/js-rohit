"use strict";  //treat all JS code as newer veersion

// alert( 3 + 3) //we are using nodejs ,not browser

console.log( 3+ 
    3);//code readibility should be high
console.log("Rohit")

let name = "Rohit"
let age = 18
let isloggedin = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean =>true/false
// null => standalone value
// undefined => 
// symbol

console.log(typeof undefined);
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity


// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal
console.log(x+1n);
console.log(x+2n);


// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
