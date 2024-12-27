const user = {
    username: "Rohit",
    price:  433,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to site`);
         console.log(this);//this-> denoted current context/variables
        
        
    }

}

// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()
// console.log(this);//here this refers empty object in the node
//*object inside the browser is windows object*


// function chai(){
//     let username = "Rohit"
//     console.log(this.username);//here it's gives undefined
    
// }
// chai()

// const chai = function(){
//     let username = "rohti"
//     console.log(this.username);//here also undefined
// }
// chai()

// const chai = () => {
//     let username = "Rohit"
//     console.log(this);
//     }
// chai()
//this is undefined in arrow function but in normal function this is used as it 

// const addTwo =(num1,num2) => {
//     return num1+num2//explicit returned
// }

// const addTwo = (num1,num2) => num1 + num2 --->it's called implicit return method

// const addTwo = (num1,num2) => (num1 + num2)//here when ()bracket is used instead of{} then we donot use return statement

const addTwo = (num1,num2) => ({username: "Rohit"})

console.log(addTwo(3,4))

// const myArray = [2,3,4,5]

// myArray.forEach()