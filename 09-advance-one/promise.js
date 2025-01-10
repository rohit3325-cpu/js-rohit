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

const promiseFour = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"ROhit", password: "1234"})
        }else{
            reject('ERROR : Something went wrong')
        }
     },1000)
})
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
       console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or reject"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Javascript", password: "1234"})
        }else{
            reject('ERROR : JS went wrong')
        }
     },1000)
});


// doing with the help of async and await method

// async function consumePromiseFive(){
//    const response = await  promiseFive
//    console.log(response);
// }
// here it will not execute if error is false because async ,await take it as it will always true. so here we use trycatch method
async function consumePromiseFive(){
  try {
    const response = await  promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
 }

consumePromiseFive()

// async function getallUser(){
//    try {
//     const response  =await fetch('https://api.github.com/users/Rahulm2310')
//     const data = await response.json()//here we use await because json takes time
//     console.log(data);
//    } catch (error) {
//     console.log("E: ",error);
//    }
// }
// getallUser()

fetch('https://api.github.com/users/Rahulm2310')
.then( () => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.