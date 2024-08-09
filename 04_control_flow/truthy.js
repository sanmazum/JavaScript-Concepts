const userEmail1 = "san@ai.com"
const userEmail2 = ""

if (userEmail1) {
    console.log("Got user Email");     // first block executes. O/p-> Got user Email (truthy value)
    
}else{
    console.log("Don't have user email");
    
}


if (userEmail2) {
    console.log("Got user Email");     
    
}else{
    console.log("Don't have user email"); // // second block executes. O/p-> Don't have user email (falsy value)  
}


/* Falsy values :- Following listed things are falsy values in JS. Anything else
except these are truthy values

1. False,
2. 0
3. -0
4. BigInt 0n,
5. ""
6. null
7. undefined
8. NaN

// Truthy values :- 

1. "0" -> zero inside string is truthy value
2. "false" -> false inside string is a truthy value -> Asked in many interviews
3. " " -> space inside string is also a truthy value
4. []
5. {}
6. function(){}

*/

// checking array - The way is by using length property

if (userEmail1.length === 0) {
    console.log("Array is empty");  
}

// checking object -> this part : Object.keys(emptyObj) returns an array and we are just using length property on array.

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); // o/p-> Object is empty
    
}


/* Nullish Coalescing operator (??) : null and undefined based -> This operator basically does is
it basically does the safety check when there comes any null value.
*/

let val1 ;
val1 = 5 ?? 10 
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 1000 ?? 10


console.log(val1); // o/p-> 5 
console.log(val2); // o/p-> 10
console.log(val3); // o/p-> 15
console.log(val4); // o/p-> 1000 -> after null whatever first value it gets, that value is the assigned


/*        Ternary Operator :---->   condition ? true : false     */

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");   // o/p-> more than 80





