//date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

// let myCreateDate = new Date(2025,1,1)
// let myCreateDate = new Date(2025,1,1,9,3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-10-2024")
console.log(myCreateDate.toLocaleString());
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})

