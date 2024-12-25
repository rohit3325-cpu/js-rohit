// singleton-object which are made through constructor
// Object.create

//object literals
const mysym = Symbol("key1")

const jsuser = {
    name: "Rohit",
    "full name": "Rohit Raj",
    [mysym]: "mykey1",
    Branch: "cseaic",
    Rollno: "158",
    age: "19",
    isLoggedin:false

}

// console.log(jsuser.name);
// console.log(jsuser["name"])
// console.log(jsuser["full name"]);
// console.log(typeof jsuser[mysym]);to acces symbol we use [] not . operator

// jsuser.Branch = "cse"
// Object.freeze(jsuser)//it freeses object and further changes will not occur
// jsuser.branch = "csea"
// console.log(jsuser);


jsuser.greeting = function(){
    console.log(`hello, ${this.name}`);
    
}
jsuser.greetingTwo = function(){
    console.log("hello");
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
