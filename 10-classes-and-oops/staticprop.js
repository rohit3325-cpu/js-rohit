class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username:${this.username}`);
        
    }

    createid(){
        return `123`
    }
}



const Rohit = new User("rohit")
// console.log(Rohit.createid())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone","i@gmail.com")
iphone.logMe();
console.log(iphone.createid());
