// control flow - If statement

if(true){
  // code executes inside this scope.
}

// ===  -> also checks the type along with the value ; == normal check of value ; <= , >= , < , > 

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power : ${power}`);   // User power : fly
}

// console.log(`User power : ${power}`);   // ReferenceError: power is not defined - power variable is out of scope of if condition.

// shorthand notation

const balance = 1000

if (balance > 500) console.log("my balance is 1000") , console.log("test2"); // NOT RECOMMENDED - BAD PRACTICE
 /*
 Output-> my balance is 1000
        test2
 The code is executed, but this code is has readabilty issues. Hence not recommended.
 */




//Nested statements

if (balance < 500) {
    console.log("Less than 500");
    
}else if(balance < 750){
    console.log("Less than 750");

}else if(balance < 900){
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}


const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy course");   // o/p-> allow to buy course
}

/* && -> checks both left and right condition. Even if one statement is false, code will NOT EXECUTE!!! */


if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in"); // User logged in  
}

/* || -> Or operator. If anyone of the statement is true, code will be executed. */
