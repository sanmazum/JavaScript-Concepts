const score = 400

console.log(score)

const balance = new Number(100)    // guarenteed number
console.log(balance)  // prints-> [Number: 100]

console.log(balance.toString())  // print-> 100 and if we check typeOf, we get string
console.log(balance.toFixed(2)) // specifies number in the arguement, prints -> 100.00

const num1 = 23.896
const num2 = 123.896
const num3 = 1123.896
const num4 = 123.896



console.table([ num1.toPrecision(3),  num2.toPrecision(3),  num3.toPrecision(3),  num4.toPrecision(4) ])


/* 
 num1.toPrecision(3) -> 23.9 
 num2.toPrecision(3) -> 124 (focus on 3 values, because focus is on '123')
 num3.toPrecision(3) -> 1.12e+3
 num4.toPrecision(4) -> 123.9

 Console print -> 

 ┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ '23.9'    │
│ 1       │ '124'     │
│ 2       │ '1.12e+3' │
│ 3       │ '123.9'   │
└─────────┴───────────┘

*/


const hundreds = 1000000  // bit difficult to read. Fikar not, we have a below method in JS to look easy.

console.log((hundreds.toLocaleString())); // prints-> 1,000,000 helps in readabilty. By default comes with US standard

console.log((hundreds.toLocaleString('en-IN'))) // prints -> 10,00,000 , now it has changed from default to Indian Standard.



//-------------------------- MATHS ---------------------------------------------------------------------

console.log(Math);

console.log(Math.abs(-4));  // abs method make it positive for negative values

console.log(Math.round(4.6)); // (Prints-> 5)normal round off on the basis of regular maths (>4.5 - top value and < 4.5 - bottom value)
console.log(Math.ceil(4.2)); // (prints-> 5 ) control which value to choose while round off ( top or bottom). So Ceil takes Top value 
console.log(Math.floor(4.2)) // (Prints-> 4) takes lower value.

console.log(Math.min(4,3,6,8)) // prints ->3
console.log(Math.max(4,3,6,8)) // prints -> 8

console.log(Math.random())  // always value is between 0 and 1. 

console.log(Math.random()*10) // any random value multiplied by 10

console.log((Math.random()*10 ) + 1) // minimum value 1 will come, zero will not come


const min = 10
const max = 20

Math.random() * (max - min + 1)     // so that zero value doesnt come

// now i want atlease 10 value between the range so i will write it as like this

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
