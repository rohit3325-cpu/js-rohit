class User {
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return `${this._email}@gmail.com`
    }
    set email(prop){
         this._email=prop.toLowerCase()
    }
    get password(){
        return `${this._password}9769`
    }
    set password(prop){
        this._password=prop.toUpperCase()
    }
}

const Rohit = new User("ROHIT", "abc")
// console.log(Rohit.password);
console.log(Rohit.email);

