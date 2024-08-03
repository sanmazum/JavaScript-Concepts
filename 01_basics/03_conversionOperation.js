let score = "33abc" 

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // converts in number provided the original value as "score = 33"
console.log(valueInNumber); // prints NaN(Not a number)


/* 
"33" => 33
"33abc" => NaN
true => 1 ; false => 0
*/


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);    // prints 'true'


// 1 => In Booleaan converts into true
// "" => false
// "sandeepan" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

