// Primitive Type - These are call by value

/*
 String , Number, Boolean, null, undefined, Symbol, BigInt
*/ 

// JS -> is a dynamically typed language.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false -> as we are using Symbol datatype where we have given same value, but the returned value is not same

const bigNumber = 35676372783789323624862462843n   // adding small 'n' makes it a bigInt

// Non-Primitive or Reference Type - These are the one where in the memory reference can be allocated

/*
Array , Objects , Functions
*/ 

const heros = ["shaktiman" , "Naagraj" , "doga"] 

let object = {
    name : "sandeepan",
    age : 26,
}

const myFunction = function(){
    console("Variable way of declaring function")
}


// https://262.ecma-international.org/5.1/#sec-11.4.3 - For studying the type of Datatype - Imp for interview


// ++++++++++++++++++++++++++++++Memory----------------------------------

// Two Types of Memory are there
/* Stack memory (used for Primitive ) -> variable will get a copy of original variable when it is in Stack memory
   Heap Memory ( used for Non-primitive) -> variable will get a reference of original value when it is in Heap memory

*/

let myName = "sandeepan"

let anotherName = myName

anotherName = "Messi"

console.log(anotherName); // Messi  
console.log(myName);  //sandeepan

let user1 = {
    email : "sandeep@google.com",
    upi : "user1@ybl",
}

let user2 = user1

user2.email = "ron@netflix.com"

console.log(user1.email) // ron@netflix.com
console.log(user2.email) // ron@netflix.com -- because we know objects are stored in heap memory and both user1 and user 2 gets the same reference



