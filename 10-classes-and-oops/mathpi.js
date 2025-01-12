const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);

// console.log(descripter);

// we can make our own property or hardcore value that anyone cannot change this propwerties in our frameworks.

const chai ={
    name:'adrak chai',
    price: 250,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nnhi hai");
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai));//undefined because here we not defined the specific property.

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
    }
}