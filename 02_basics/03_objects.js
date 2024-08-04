

// Object Literals

const mySym2 =  Symbol("key2")

const JSUser = {
    name:"Sandeepan",
    "full name" : "Sandeepan Mazumdar",
    [mySym2] : "key2",
    age: 18,
    location:  "Jaipur",
    email:"sandeepan@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday" ]
}

// way of decleration :- 
console.log(JSUser.email)  // o/p-> sandeepan@google.com  - dot method
console.log(JSUser["email"])  // o/p-> sandeepan@google.com - bracket method and it's mandatory to write key in string like ("email" as here)

console.log(JSUser["full name"]) // o/p-> Sandeepan Mazumdar -> "full name" you Can't access with dot notation.

// Access

// declaring a Symbol dataType -

const mySym = Symbol("key1")

// Question is :- Take a Symbol and add in a key of object and print it? --> INTERVIEW QUESTION

// so we add it as like this with [ ] notation like this -> you can't use it simply like mySym : "myKey1" as when you will check the typeOf Symbol, you will get a string.

const JSUser2 = {
    name:"Krish",
    "full name" : "Krish Mazumdar",
    [mySym] : "key1",
    age: 18,
    location:  "Jaipur",
    email:"krish@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday" ]
}
 console.log(typeof JSUser2[mySym]) 

 // manipulating Object data 
 JSUser.email = "sandeepan@chatgpt.com"

 // want that no values inside object gets manipulated - we can use freeze() method. Goes like Object.freeze(#name of Objct)

 Object.freeze(JSUser)

 // Now changing the email and data will not propagate
  JSUser.email = "sandeepan@microsoft.com"
  console.log(JSUser) /** o/p-> {
    name: 'Sandeepan',
    'full name': 'Sandeepan Mazumdar',
    age: 18,
    location: 'Jaipur',
    email: 'sandeepan@chatgpt.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key2)]: 'key2'
  }
  you can see   "sandeepan@microsoft.com" didn't propagate in the object as it is freezed.
  */   

  // adding function in Object JSUser2

  JSUser2.greeting = function(){
    console.log("Hello JS user 2");
  }

  console.log(JSUser2.greeting); // o/p-> [Function (anonymous)] - means we have just got function reference, but not executed
  console.log(JSUser2.greeting()); // o/p -> Hello JS user 2


// now in the object JSUser2 I want to reference to the name -> so we use "this" keyword here
  JSUser2.greeting2 = function(){
    console.log(`Hello JS user 2, ${this.name}`);
  }

  console.log(JSUser2.greeting2()) // o/p-> Hello JS user 2, Krish
  console.log(JSUser2.greeting2) // o/p-> [Function (anonymous)]
  


