const user ={
    _email: 'rohit@gmail.com',
    _password: "abc",
//{_} it defines a private property for email and password.
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);