const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros) // O/p - [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]) // o/p-> [ 'superman', 'flash', 'batman' ]

// To access the value of 'flash' in the array we do { NOT RECOMMENDED APPROACH}

// console.log(marvel_heros[3][1]) // O/p-> flash


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
/*
O/p -> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
concat returns a new array.
*/

// another way of doing this same concating is with spread operator

const all_new_Heros = [...marvel_heros, ...dc_heros]  // spread operator, and we get distinct elements.
console.log(all_new_Heros) // O/p-> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array = anotherArray.flat(Infinity) // flat(depth) method takes depth as arguement to which you want a single array out of array of arrays. Hack is give "infinity" and JS will take care of everything
console.log(usable_another_array) // o/p- [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

/**
 Sometimes we select the data from web page we get in different form like list,string. But we want Array. So we can use
 */

// asking if the arguement is an array 

const ask= Array.isArray("Sandeepan")
console.log(ask) // o/p-> false. Saying "Sandeepan" isn't an array.

// converting strings into array using from() method
const convertString= Array.from("Sandeepan")
console.log(convertString) // o/p-> ['S', 'a', 'n','d', 'e', 'e', 'p', 'a', 'n']

// conbverting objects into array using from() method -- INTERESTING RESULT 🤯🚀

const convertObj = Array.from({ name: "Sandeepan"})
console.log(convertObj); // o/p-> []. Gives an empty array because it can't directly convert as it doesn't understand whether to make array of keys or values


// If you want to convert multiple set of elements ( like variables, arrays) into one array, use "of()" method

let score1 = 100
let score2 = 200
let score3 = 300

const total_array = Array.of(score1, score2, score3)
console.log(total_array) // o/p-> [ 100, 200, 300 ]
    
  
