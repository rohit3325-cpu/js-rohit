

function anyname(){
    console.log("R");
console.log("o");
console.log("H");
console.log("I");
console.log("T");

}

// anyname()

// function addTwoNumber(num1,num2){
//    console.log(num1 + num2);
   
// }

addTwoNumber(3,"a")
addTwoNumber(3,4)
addTwoNumber(3,null)

// inputs taken at time of function definition is parameter
//when we call there we take some parametrs i.e arguments

function addTwoNumber(num1,num2){
//    let result = num1 + num2
//    return result

return num1 +num2
    
 }
const result = addTwoNumber(3,5)

// console.log("result",result);

function loginUserMessage(Username ="sam"){
    if(Username === undefined)//use another form i.e !username
        {
             console.log("Please enter the username");
             return
             
    }
    return `${Username} just logged in`
}

// console.log(loginUserMessage("Rohit"))

// console.log(loginUserMessage("Rohit"));
// ... ->it also called spred operator and here it is rest operator 
function calculateCartPrice(val1,val2,...num1){
      return num1
}
// console.log(calculateCartPrice(200,400,500));

const user = {
    username:"Rohit",
    price: 185
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Raj",
    price: 164
})

const muNewArray = [200,400,300,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(muNewArray));
console.log(returnSecondValue([200,400,600,800]));

