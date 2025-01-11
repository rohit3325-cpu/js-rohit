const user = {
    username :"Rohit",
    logincount :8,
    signedIn : true,

    getUserDetails: function(){
       // console.log("Got user details");
        //console.log(`Usernae: ${this.username}`);
        console.log(this);
        
    }

}
//console.log(user.logincount);
//console.log(user.getUserDetails());
//console.log(this);

function User(username,loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
  return this //->it is implicitily defined
}

const userone = new User("Rohit",12,true)
const userTwo = new User("Rah",3,false)
console.log(userone.constructor);
//console.log(userTwo);

// new keyword-> it creates a empty object which called instance,
// step1 ->new object is created 
//step 2-> constructor function is called ,data is copied in the created object
//step3-> we get the object