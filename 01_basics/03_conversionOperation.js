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
console.log(stringNumber); // prints -> 33
console.log(typeof stringNumber)  // prints -> string

// ********************** Operations ********************************** 

let value = 3 
let negValue = -value
console.log(negValue) // prints -> -3

let str1 = "Hello"
let str2 = " sandeepan"

let str3 = str1 + str2

console.log(str3)  // Prints -> Hello sandeepan


// But Problem occurs here ->

console.log("1" + 2);  // Prints -> 12 😒
console.log("1" + 2 + 2); // Prints -> 122 🤔 (string taken and the numbers weren't added, just got attached one by one. strange behaviour)
console.log( 1+ 2 + "1"); // Prints -> 32 🤯 ( first added and then string got attached)  -> All these are governed by ECMAScript guidelines.

console.log( +true) // prints -> 1


let num1, num2 , num3

num1 = num2 = num3 = 2+2 

let gameCounter = 100
gameCounter++  
console.log(gameCounter); // Prints -> 101 
