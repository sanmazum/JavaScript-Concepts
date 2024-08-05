function sayMyName () {
    console.log("R");
    console.log("O");
    console.log("N");
    console.log("Y");
}

sayMyName()    // exceution of function
sayMyName  // reference of function

/* When you write the function definition and you take any inputs in that those
are called Function Parameters

Here in addTwoNumbers -> number1 and number 2 are the parameters of the function.

*/

function addTwoNumbers(number1, number2) {
    console.log( number1 + number2 );
}

addTwoNumbers(3, 4)  // o/p-> 7. Notice that , 3 and 4 are the arguements of the function name addTwoNumbers

const result = addTwoNumbers(3,4)
console.log("Result :" , result ); // o/p -> Result : undefined

/*
 Notice that you are trying to hold the output of addTwoNum in variable - result. 
 But when you run the code, you get that Result has stored undefined. 

 Why? - Because addTwoNum() is just printing the addition and not returning the result. 
 That's why undefined is printed.
*/

function addThreeNumbers(number1, number2, number3) {
   const result2 =  number1 + number2 + number3 
   return result2
   console.log(" Print me if you can? ") // This will never print as there is a rule in function that after return statement, code is undetectable.
}

const result2 = addThreeNumbers(5,10,10)
console.log("Result of addition of Three Numbers:" , result2);  // Result of addition of Three Numbers: 25
/*
Now you can get the value stored in the variable result 2 as the
 function addThreeNumbers is now returning the value as result2
*/



 /*
 If you are thinking that only returning from a variable will give the result, 
 it's not, you can directly return and get the function result stored in the variable. */ 

 function addFourNumbers(number1, number2, number3, number4) {
    return number1 + number2 + number3 + number4
 }

 const res3 = addFourNumbers(10,10,20,20)
 console.log("Result of four no. addition :", res3); // o/p-> Result of four no. addition : 60



 function loginUserMessage(username){
    return `${username} just logged in`
 }

 console.log(loginUserMessage("Sandeepan")) // o/p-> Sandeepan just logged in

 // if you don't pass any arguement to the loginUserName function, the output is undefined

 console.log(loginUserMessage())  // o/p-> undefined just logged in, that's why we need validation.


// Consider the below example of usecase of validation :-

 function loginUserMessage2(username){
    //another way of putting validation :-
    // if(!username){
    //     console.log("provide a username");
    //     return 
    // }
    if(username === undefined){
        console.log("provide a username");
        return     /* This return will execute when no username is provided and terminate the code there only
         and will print the o/p-> provide a username
        */ 
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage2()) // o/p-> undefined
 

 /* One more thing, we can by default also assign a username to the function.

 For understanding it better, consider the function loginUserMessage3 in the below.
 
 */

 function loginUserMessage3(username = "Sam"){
    //another way of putting validation :-
    // if(!username){
    //     console.log("provide a username");
    //     return 
    // }
    if(username === undefined){
        console.log("provide a username");
        return     /* This return will execute when no username is provided and terminate the code there only
         and will print the o/p-> provide a username
        */ 
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage3()) // o/p-> Sam just logged in ( because the if username will never be undefined as Sam is by default parameter)

 console.log(loginUserMessage3("Virat kohli")) // o/p-> Virat kohli just logged in ( The parameters are easily overriden.)