// Promise -> object represents the eventual completion or failure of an asynchronous operation and its resulting values.
// fetch('https://something.com').then().catch().finally()
// ->promise has two part one is resolve and another is reject.
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()//it is used to connect resolve part to keep functioning.
    },1000)
})

//resolve has relation with .then()
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task2 ");
        resolve();
   },1000);
}).then(function(){
    console.log("async resolved");
    
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai" , email:"rohit@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
    
})