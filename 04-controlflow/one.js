//if

// if(true){
    
// }
// if(false){
    
// }

// const isUserloggedin =true
// const temperature = 58
// if( temperature === 41){
//   console.log("execute");
//   }else{
// console.log("temperature is greater than 50");
// }

//<,>,<=,>=,== -> value will same not the necessary for datatypes,!= , === ->value and datatypes both will same.


// const score = 200
// if(score >100){
//     // var power = "fly"//var has globaly scope
//     const power = "fly"
//     console.log(`user power: ${power}`);
//     }
    // console.log(`user power: ${power}`);



    //const balance = 1000

//if(balance >500) console.log("test"), console.log("test2");//not do this 
 //implicit scope

//  if (balance < 500) {
//      console.log("lees than 500");    
//  }else if(balance <750){
//     console.log("lees than 750");
//  }else if (balance <900 ) {
//    console.log("less than 900")  
//  }else{
//     console.log("less than 1100");
//  }

const isUserloggedin = true
const debitcard = true
const loggedinformGoogle =false
const loggedinfromgmail = true
if (isUserloggedin && debitcard ) {
    console.log("Allow to buy course");
}

if (loggedinformGoogle || loggedinfromgmail) {
    console.log("user logged in");
}
