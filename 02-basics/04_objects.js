// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = true

// console.log(tinderUser);
const regularUser = {
    email: "r245@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Rohit",
            lastname:"Raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1 ,obj2}//problamatic

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}//mostly used for adding two objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//give key and value

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//use to detemine keys and value in given objects


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = (company) => {//related to react

// }

// navbar(company = "Rohit")

//  {
//     "name": "Rohit",
//     "course": "btech",
//     "rollno": "158"
//  }

[
    {},
    {},
    {}

]

