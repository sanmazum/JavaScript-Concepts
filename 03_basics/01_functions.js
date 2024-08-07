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


 /*
 Shoppingcart situation - When you don't know how many parameter will come , we use Rest Operator.

...num1 -> these 3 dots are called rest operator, when they are passed in the function parameters
 */ 

 function calculateCartPrice(...num1){
   return num1
 }

 console.log(calculateCartPrice(10,20,30));  // o/p-> [ 10, 20, 30 ]

/*
Important for interview, we are passing val1,val2, and ...num1

so the o/p-> [ 30, 40 ] why? because val1-> 10, val2->20 and num1 = takes the restof the values [30,40]

*/
 
 function calculateCartPrice2(val1, val2, ...num1) {
   return num1
 }

 console.log(calculateCartPrice2(10,20,30,40));  // o/p-> [ 30, 40 ]

 // passing object to a function 
 const user = {
   username : "sandeepan",
   price : 199
 }

 function handleObject(anyObject) {
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `); // o/p-> Username is sandeepan and price is 199 
 }

//  handleObject(user) // o/p-> Username is sandeepan and price is 199 

 // another way of passing object to function.

 handleObject({
   username: "sam",
   price:399
 })

 // now if you pass directly object to the function-> the console output would be Username is sam and price is 399 


 /*
 Just like Objects, we can pass Array as well.
 I am here wanting to get the 2nd value present in my 'mynewArray'.
 Notice that, in the function parameter, we have passed 'getArray'. You can pass any name. Just Make sure that
 you are using that same name when you are returning the value inside the function. 
 and then you call outside with the desired array from where you want the value. Here it is , I am passing it 'myNewArray'

 Easy? 😍

 */
 const myNewArray = [200,400,600,800]

 function returnSecondValue(getArray){
   return getArray[1]
 }

 console.log(returnSecondValue(myNewArray)); // o/p-> 400
 
 // You can directly also pass the array as arguements just like objects, and here is the exammple.

 console.log(returnSecondValue([100,200,300,600])); // o/p-> 200



   
 





 