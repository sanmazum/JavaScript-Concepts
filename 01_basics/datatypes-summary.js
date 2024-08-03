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

