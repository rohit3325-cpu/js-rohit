//ES6

// class User {
//     constructor(Username,email,password){
//         this.Username=Username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     modifyusername(){
//         return`${this.Username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","r23@gmail.com","345")

// console.log(chai.encryptPassword());
// console.log(chai.modifyusername());


// Behind the scenes
function User(Username,email,password){
    this.Username=Username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword = function(){
    return  `${this.password}abc`
}
User.prototype.modifyusername = function(){
     return`${this.Username.toUpperCase()}`
}

const tea = new User("tea","r237@gmail.com","3459")

console.log(tea.encryptPassword());
console.log(tea.modifyusername());