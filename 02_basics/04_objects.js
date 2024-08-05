// singleton objects -> when we create with Object Constructor

const tinderUser = new Object()  

tinderUser.id = "123abc"
tinderUser.name = "Sandeepan"
tinderUser.isLoggedIn = false

console.log(tinderUser);    // prints-> { id: '123abc', name: 'Sandeepan', isLoggedIn: false }

const regularUser = {
    email: "some@google.com",
    fullName : {
        userfullname: {
            firstname: "sandeepan",
            lastname : "mazumdar"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname); // o/p-> sandeepan

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = Object.assign( {} , obj1, obj2)
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  

/** point to remember is assign(target, source)
 * 
 * but in case of Obj4, we are sending a optional parameter as {}  which means it's working as targt
 * and other obj1 and obj2 are acting as source.
 * 
 * This is recommended and is guaranted that a new object is created where we are copying all data from obj1 & obj2
 * 
 *
 */

const obj5 = {...obj1, ...obj2}  
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
/**
 * We will use assign() very less, but same thing and the latest and simple thing that
 * we will do is, using spread operator which is same in case of array
 * 
 * In Obj5 -> We are using spread operatior and checking the output.
 */



/** From Database we usually get the data in the form of Array of objects. */

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
    {
        id: 4,
        email: "k@gmail.com"
    },
    {
        id: 5,
        email: "l@gmail.com"
    },
    {
        id: 6,
        email: "m@gmail.com"
    },

]

console.log(users[1].email)  // O/p-> i@gmail.com. accessing the first value of array of objects, here we are accessing the first index


console.log(tinderUser); // { id: '123abc', name: 'Sandeepan', isLoggedIn: false }

console.log(Object.keys(tinderUser)) // o/p-> [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // o/p -> [ '123abc', 'Sandeepan', false ]

/* 
Notice that we looped on the keys of object named "tinderUser" and got an array of the "tinderUser's" keys
 printed .

This is very important. Just remember if you want to loop on the keys/values and want an array of those keys/values the syntax is :-

Object.keys(name of the object)

*/ 


console.log(Object.entries(tinderUser))
/*
 In entries method of JS We get the array of  array of respective key values.Entries are very less used
 but in interviews anything can be asked. So prepare for the worst.😒
 
 o/p-> [  [ 'id', '123abc' ], [ 'name', 'Sandeepan' ], [ 'isLoggedIn', false ] ]
 
*/

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // o/p-> true

/*
 hasOwnProperty() is used to ask whether that property of object exists or not. It always returns
 boolean value. 

 Since, in tinderUser object isLoggedIn property exists, so we will get true.
*/








