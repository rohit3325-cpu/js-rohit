

// {} it is scope of program i.e of function,if..else
//var c=300
let a=300
if(true){
    let a  =10// it has local scope
    const b=20//it has local scope
     //var c =30 //it has global scope
     console.log("INNER: ",a);
     
}





// console.log(a);
//console.log(b);
// console.log(c);

function one (){
    const username ="Rohit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); it's scope is not valid here

    two()
    
}
// one()

if(true){
    const username ="Rohit"
    if(username ==="Rohit"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(wwebsite);
    
}
// console.log(username);

// ++++++++++++++++ Interesting+++++++

console.log(addone(5));


function addone(num){
    return num+1
}

addone(5)

// addTwo(3) -> here it will give error because of declaration of function in another form
const addTwo = function(num){
    return num + 2
}
addTwo(3)