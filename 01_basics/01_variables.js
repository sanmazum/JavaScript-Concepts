const accountId = 14453
let accountEmail = "sandeepan@google.com"
var accountPassword = "12345"

accountCity = 'Kolkata'  

let accountState;  // if you don't assign any value to variable, JS assigns it as undefined. Check after printing in the console. 😍

// accountId = 2  // not allowed to change 'const' keyword

/* 
Prefer not to use var - Because of issue in block scope and functional scope.
*/

accountEmail = "adhad@yahoo.com"
accountPassword = "999999"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountEmail,accountId, accountCity, accountPassword,accountState])
