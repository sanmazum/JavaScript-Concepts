// console.log(2>1) 
// console.log(2>=1) 
// console.log(2<1) 
// console.log(2==1) 
// console.log(2 != 1) 


console.log("2" > 1 )   // prints => true

console.log(null > 0 );  // false
console.log(null == 0 ); // false
console.log(null >= 0 ); // true 

/* 
The reason is that an equality check == and comparision > < >= <= works differently
Comparisions convert null to a number, treating it as 0.
That's why (3) null >=0 is true and  null > 0 is false

**/

console.log(undefined == 0);  // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  //false


// strict check ( === )

console.log("2" === 2)  // false ( also checks the datatype along with the number)




