// var c= 300



//  {   } ->  The place between curly brace is called "Scope"
// whatever is written under the if statement block -> is called the block scope.


if (true) {
    let a = 10
    const b = 20
    var  c = 30
}


console.log(a); // a is not defined
console.log(b); // b is not defined
console.log(c); // 30 

/**
 * 
 * Consider the below example to best understand the scopes. Block scope and Global Scope.
 * 
 */

let d = 5000 

if (true) {
    let d = 10
    const e = 20
    console.log("Inner,  which is block scope :", d);  //o/p->  Inner value of 'd',  which is block scope. : 10 
}

console.log(d) // o/p-> 5000 , This is a global scope value of d.
