/*
Reduce method -> takes two parameters (accumulator and Current value) and takes a initial values.

The initial valuew goes into accumulator only once
after that in accumulator, the return value goes which comes from very first operation.

*/

const myNums = [1, 2, 3];

const total = myNums.reduce(function (acc, currval) {
  console.log(`accumulator : ${acc} and currentvalue : ${currval}`);

  /* 
    o/p-> accumulator : 0 and currentvalue : 1
            accumulator : 1 and currentvalue : 2
        accumulator : 3 and currentvalue : 3  
 */

  return acc + currval;
}, 0);

console.log(total); // o/p-> 6

// ---------------------------------------------------------------

let initialvalue = 0; 
const mytotal = myNums.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue
}, initialvalue)

console.log(mytotal); // o/p-> 6



const shoppingCart = [
    {
        itemName: "Namaste JS",
        price : 2999,
    },
    {
        itemName: "Python course",
        price : 199,
    },
    {
        itemName: "Android course",
        price : 3999,
    },
    {
        itemName: "Java Master class",
        price : 10999,
    },
]

// Now we want to add total price of all courses in shopping cart


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay); // o/p->  18196


