// let myname = "Rohit"
// let mytitle = "raj"

//  console.log(myname.trim().length);
// console.log(myname.truelength);

let myheros = ["thor","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    
    getspiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.Rohit = function(){
   // console.log(`rohit is present in all objects`);
    
}

Array.prototype.heyRohit = function(){
   // console.log(`Rohit is here`);
    
}

// heropower.Rohit()
myheros.Rohit()
myheros.heyRohit()
// heropower.heyRohit()


//Inheritance

const user = {
    username: "hike",
    email:"chai.google.com"

}
const Teacher ={
    makevideos: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment:'make assignment',
    fullTime: true,
    __proto__:TeacherSupport
}

Teacher.__proto__=user

// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "chaiaurcode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"Rohit".trueLength()
"LemonTea".trueLength()