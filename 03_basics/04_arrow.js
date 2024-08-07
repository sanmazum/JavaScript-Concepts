/**
 * this -> keyword refers to the current context.
 */

const user = {
    username : "Sandy",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome the website`);
        console.log(this)  /* o/p->  {
                      username: 'Sandy',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
                }
                Rony, welcome the website
                {
                username: 'Rony',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
                } */
    }
}

user.welcomeMessage() // till here, this context was valid for Sandy and o/p--> Sandy, welcome the website

user.username = "Rony" // we are changing the context

user.welcomeMessage() // after changing the context to "Rony".  o/p-> Rony, welcome the website

console.log(this) // o/p-> {}. point to note, in node it is empty object, where as in Browser, it is actually Window object. 




function coder(){
    let usr = "sandeepan"
    // console.log(this.usr)  // o/p-> undefined. In functions, 'this' doesn't work. In object only this context is working. REMEMBER!!!!!
}

coder()



// Arrow functions -> Came under ES6

const chai = () => {
    let usr1 = "sandeepan"
    console.log(this.usr1) // undefined
} 

chai()


// More about arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(10,2)); // 12



// Implicit return in arrow function -> without writing return keyword.
const subTwo = (num1, num2) =>   num1 - num2
console.log(subTwo(10,2)); // 8


// Another way of implicit return.
const mulTwo = (num1, num2) =>   (num1 * num2)
console.log(mulTwo(10,2)); // 20



// returning objects
const objectReturn = () => ({username: "Sandeepan"})
console.log(objectReturn()); // o/p-> { username: 'Sandeepan' }
