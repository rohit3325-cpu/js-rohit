function SetUsername(username){
    //complex DB calls
    this.username = username
    // console.log(username)
}

function createUser(username, email ,password){
    SetUsername.call(this,username)
    // call give the execution context to other function
    //here in call this is use to give the context of the setusername function.
    this.email=email
    this.password=password
}

const chai = new createUser("chai", "chai@google.com","1234")

console.log(chai);
