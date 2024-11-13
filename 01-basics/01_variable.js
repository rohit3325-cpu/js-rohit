const accountId = 144553
let accountEmail = "r26346@gmail.com"
var accountPassword = "34526"
accountCity = "Biahr"
let accountState;
// accountId = 2 //not allowed
accountEmail = "wrw@gh.com"
accountPassword = "24525"
accountCity = "hddn"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
