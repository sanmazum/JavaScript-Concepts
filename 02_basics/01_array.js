const myArr = [0,1,2,3,4,5, true, 'sandeepan']

const myHeros = ["Shaktiman" , "naagraj"]

const myArr2 = new Array (1,2,3,4)

 console.log(myArr[0]);

 // Array Methods

 myArr.push(6) // pushing the value 6 in myArr
 console.log(myArr);  // Output- [ 0, 1, 2, 3, 4, 5, true, 'sandeepan', 6 ]  

 myArr.pop() // remove the last value from the array
 console.log(myArr) // Output -> [ 0, 1, 2, 3, 4, 5, true, 'sandeepan' ]


myArr.unshift(9) // insert 9 at the start of array
console.log(myArr) // [ 9, 0, 1, 2, 3, 4, 5, true, 'sandeepan' ]

myArr.shift() 
console.log(myArr)   // [ 0, 1, 2, 3, 4, 5, true, 'sandeepan' ] '9' was removed which we added with unshift, works like pop only, but from front. and no arguements are given in shift.


let checkInclude = myArr.includes(9)
console.log(checkInclude) // false -> includes gives boolean value.

let checkIndexOf1 = myArr.indexOf(9)
console.log(checkIndexOf1) // o/p -> -1 if the value isn't present in array and if present, gives the index.

let checkIndexOf2 = myArr.indexOf('sandeepan')
console.log(checkIndexOf2)  // o/p -> 'sandeepan' present in the 7th index of array

const newArr = myArr.join()
console.log(myArr)   // o/p-> [ 0, 1, 2, 3, 4, 5, true, 'sandeepan' ]
console.log(newArr) // o/p--> 0,1,2,3,4,5,true,sandeepan
console.log(typeof newArr) //  string  -> join() converts the array into string as well. 


// MOST IMPORTANT INTERVIEW QUESTION -> splice and slice method difference

/*
The correct answer is: In Slice method Original array is not manipulated
 where as in Splice method the original array is manipulated.

 Also point to remember in slice last index isn't considered
 where in splice the last index is considered.

 Check the below example to understand better. VERYYYY IMPORTANT PLEASE REVISE IT AS MUCH AS YOU CAN!!!!!!!

*/

console.log('A' , myArr)   // A [ 0, 1, 2, 3, 4, 5, true, 'sandeepan' ]

const n1 = myArr. slice(1,3)  // means, include 1st index,2nd index and ignore 3rd

console.log(n1)  // o/p-> [ 1, 2 ]
console.log("B" , myArr)  // we are printing now original Array and named it as B. o/p-> B [ 0, 1, 2, 3, 4, 5, true, 'sandeepan' ]


const n2 = myArr.splice(1,3)
console.log(n2) // O/p-> [ 1, 2, 3 ] // last range is considered in case of Splice method.
console.log('C', myArr ) // O/P-> C [ 0, 4, 5, true, 'sandeepan' ] -> There is a change in the original array.